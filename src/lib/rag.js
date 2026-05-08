import * as pdfjsLib from 'pdfjs-dist';
import pdfWorker from 'pdfjs-dist/build/pdf.worker.min.mjs?url';

pdfjsLib.GlobalWorkerOptions.workerSrc = pdfWorker;

const STOP_WORDS = new Set([
  'a', 'an', 'and', 'are', 'as', 'at', 'be', 'been', 'by', 'for', 'from', 'has', 'have',
  'he', 'her', 'his', 'i', 'in', 'is', 'it', 'its', 'me', 'of', 'on', 'or', 'our', 'she',
  'that', 'the', 'their', 'them', 'they', 'this', 'to', 'was', 'we', 'with', 'you', 'your'
]);

export function normalizeText(value) {
  return value.replace(/\s+/g, ' ').trim();
}

export function tokenize(value) {
  return normalizeText(value)
    .toLowerCase()
    .split(/[^a-z0-9+#./-]+/i)
    .filter((token) => token && !STOP_WORDS.has(token));
}

export function chunkText(text, source, chunkSize = 520, overlap = 90) {
  const normalized = normalizeText(text);
  if (!normalized) {
    return [];
  }

  const chunks = [];
  let cursor = 0;

  while (cursor < normalized.length) {
    const nextCursor = Math.min(cursor + chunkSize, normalized.length);
    const content = normalized.slice(cursor, nextCursor).trim();

    if (content) {
      chunks.push({
        id: `${source}-${chunks.length + 1}`,
        source,
        content,
        tokens: tokenize(content),
      });
    }

    if (nextCursor >= normalized.length) {
      break;
    }

    cursor = Math.max(nextCursor - overlap, cursor + 1);
  }

  return chunks;
}

export function buildCorpus(documents) {
  return documents.flatMap((document) => chunkText(document.text, document.source));
}

function scoreChunk(queryTokens, chunk) {
  const tokenSet = new Set(chunk.tokens);
  let score = 0;

  queryTokens.forEach((token) => {
    if (tokenSet.has(token)) {
      score += token.length > 5 ? 3 : 2;
    }

    if (chunk.content.toLowerCase().includes(token)) {
      score += 1;
    }
  });

  return score;
}

export function retrieveRelevantChunks(query, chunks, limit = 4) {
  const queryTokens = tokenize(query);
  if (!queryTokens.length) {
    return [];
  }

  return chunks
    .map((chunk) => ({ ...chunk, score: scoreChunk(queryTokens, chunk) }))
    .filter((chunk) => chunk.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);
}

async function extractTextFromPdf(file) {
  const buffer = await file.arrayBuffer();
  const pdf = await pdfjsLib.getDocument({ data: buffer }).promise;
  const pages = [];

  for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber += 1) {
    const page = await pdf.getPage(pageNumber);
    const content = await page.getTextContent();
    const text = content.items.map((item) => item.str).join(' ');
    pages.push(text);
  }

  return pages.join('\n');
}

export async function extractTextFromFile(file) {
  const lower = file.name.toLowerCase();

  if (lower.endsWith('.pdf')) {
    return extractTextFromPdf(file);
  }

  if (lower.endsWith('.json')) {
    const raw = await file.text();
    try {
      return JSON.stringify(JSON.parse(raw), null, 2);
    } catch {
      return raw;
    }
  }

  return file.text();
}

export function buildContextBlock(chunks) {
  return chunks
    .map((chunk, index) => `[Source ${index + 1}: ${chunk.source}]\n${chunk.content}`)
    .join('\n\n');
}
