import { useEffect, useMemo, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiArrowUpRight,
  FiFilePlus,
  FiLoader,
  FiMessageSquare,
  FiMinimize2,
  FiX,
} from 'react-icons/fi';
import { FaRobot } from 'react-icons/fa';
import { portfolioKnowledgeDocuments } from '../data/portfolioKnowledge';
import {
  buildContextBlock,
  buildCorpus,
  chunkText,
  extractTextFromFile,
  retrieveRelevantChunks,
} from '../lib/rag';

const baseGreeting = {
  role: 'assistant',
  content:
    "Hi, I'm Raj AI. Ask me about Raj's skills, experience, education, projects, or upload a PDF/file and I'll use that in the answer too.",
  sources: ['Portfolio Summary'],
};

const quickPrompts = [
  'Summarize Raj in 3 lines',
  'What AI stack does Raj use?',
  'Tell me about Raj’s experience',
  'Which projects are most relevant to AI agents?',
];

const groqApiUrl = 'https://api.groq.com/openai/v1/chat/completions';
const groqModel = import.meta.env.VITE_GROQ_MODEL || 'llama-3.1-8b-instant';
const groqApiKey = import.meta.env.VITE_GROQ_API_KEY;

async function fetchResumeDocument() {
  try {
    const response = await fetch('/resume.txt');
    if (!response.ok) {
      return null;
    }

    const text = await response.text();
    return { source: 'Resume', text };
  } catch {
    return null;
  }
}

function buildFallbackReply(question, chunks) {
  if (!chunks.length) {
    return `I couldn't find a strong match for "${question}" in Raj's portfolio knowledge yet. Try asking about skills, projects, education, or experience.`;
  }

  return `I found this from Raj's portfolio knowledge:\n\n${chunks
    .map((chunk) => `• ${chunk.content}`)
    .join('\n\n')}\n\nAdd a Groq API key to enable richer generated answers.`;
}

const PortfolioAgent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([baseGreeting]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [knowledgeChunks, setKnowledgeChunks] = useState(() => buildCorpus(portfolioKnowledgeDocuments));
  const [uploadedDocs, setUploadedDocs] = useState([]);
  const [uploadError, setUploadError] = useState('');
  const fileInputRef = useRef(null);
  const listRef = useRef(null);

  const combinedKnowledge = useMemo(
    () => [...knowledgeChunks, ...uploadedDocs.flatMap((doc) => doc.chunks)],
    [knowledgeChunks, uploadedDocs]
  );

  useEffect(() => {
    let mounted = true;

    fetchResumeDocument().then((resumeDoc) => {
      if (!mounted || !resumeDoc) {
        return;
      }

      setKnowledgeChunks((current) => [...current, ...chunkText(resumeDoc.text, resumeDoc.source)]);
    });

    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const submitQuestion = async (question) => {
    const trimmed = question.trim();
    if (!trimmed || isLoading) {
      return;
    }

    const userMessage = { role: 'user', content: trimmed };
    const relevantChunks = retrieveRelevantChunks(trimmed, combinedKnowledge, 4);

    setMessages((current) => [...current, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      if (!groqApiKey) {
        setMessages((current) => [
          ...current,
          {
            role: 'assistant',
            content: buildFallbackReply(trimmed, relevantChunks),
            sources: [...new Set(relevantChunks.map((chunk) => chunk.source))],
          },
        ]);
        return;
      }

      const context = buildContextBlock(relevantChunks);
      const response = await fetch(groqApiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${groqApiKey}`,
        },
        body: JSON.stringify({
          model: groqModel,
          temperature: 0.3,
          max_completion_tokens: 500,
          messages: [
            {
              role: 'system',
              content:
                "You are Raj AI, the website assistant for Raj Nakti's portfolio. Answer only using the provided context. If something is not in the context, say that clearly and suggest what the visitor can ask instead. Keep answers crisp, professional, and helpful.",
            },
            {
              role: 'user',
              content: `Question: ${trimmed}\n\nContext:\n${context || 'No matching context found.'}`,
            },
          ],
        }),
      });

      if (!response.ok) {
        throw new Error(`Groq request failed with status ${response.status}`);
      }

      const data = await response.json();
      const answer = data?.choices?.[0]?.message?.content?.trim();

      setMessages((current) => [
        ...current,
        {
          role: 'assistant',
          content: answer || buildFallbackReply(trimmed, relevantChunks),
          sources: [...new Set(relevantChunks.map((chunk) => chunk.source))],
        },
      ]);
    } catch (error) {
      setMessages((current) => [
        ...current,
        {
          role: 'assistant',
          content: buildFallbackReply(trimmed, relevantChunks),
          sources: [...new Set(relevantChunks.map((chunk) => chunk.source))],
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleUpload = async (event) => {
    const files = Array.from(event.target.files || []);
    if (!files.length) {
      return;
    }

    setUploadError('');

    try {
      const parsedDocs = await Promise.all(
        files.map(async (file) => {
          const text = await extractTextFromFile(file);
          return {
            name: file.name,
            chunks: chunkText(text, `Upload: ${file.name}`),
          };
        })
      );

      setUploadedDocs((current) => [...current, ...parsedDocs]);
      setMessages((current) => [
        ...current,
        {
          role: 'assistant',
          content: `Added ${parsedDocs.length} file${parsedDocs.length > 1 ? 's' : ''} to the knowledge base. I can now use them in answers.`,
          sources: parsedDocs.map((doc) => doc.name),
        },
      ]);
    } catch (error) {
      setUploadError('Could not read one of the uploaded files. Try PDF, TXT, MD, or JSON.');
    } finally {
      event.target.value = '';
    }
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.aside
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.22 }}
            className="fixed bottom-24 right-4 z-[60] w-[calc(100vw-2rem)] max-w-sm overflow-hidden rounded-3xl border border-slate-200 bg-white/95 shadow-2xl backdrop-blur-xl dark:border-slate-700 dark:bg-slate-900/95"
          >
            <div className="flex items-center justify-between border-b border-slate-200 px-4 py-4 dark:border-slate-700">
              <div>
                <p className="text-sm font-semibold text-slate-900 dark:text-white">Raj AI Agent</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  RAG over portfolio data {groqApiKey ? `+ ${groqModel}` : '+ local fallback'}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="rounded-full p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-white"
              >
                <FiMinimize2 size={16} />
              </button>
            </div>

            <div className="border-b border-slate-200 px-4 py-3 dark:border-slate-700">
              <div className="flex flex-wrap gap-2">
                {quickPrompts.map((prompt) => (
                  <button
                    key={prompt}
                    type="button"
                    onClick={() => submitQuestion(prompt)}
                    className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-xs font-medium text-blue-700 transition hover:border-blue-300 hover:bg-blue-100 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-300"
                  >
                    {prompt}
                  </button>
                ))}
              </div>

              <div className="mt-3 flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-700 transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
                >
                  <FiFilePlus size={14} />
                  Upload PDF or file
                </button>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".pdf,.txt,.md,.json"
                  multiple
                  onChange={handleUpload}
                  className="hidden"
                />
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  {uploadedDocs.length} uploaded
                </span>
              </div>

              {uploadError ? (
                <p className="mt-2 text-xs text-rose-500">{uploadError}</p>
              ) : null}
            </div>

            <div ref={listRef} className="max-h-[22rem] space-y-3 overflow-y-auto px-4 py-4">
              {messages.map((message, index) => (
                <div
                  key={`${message.role}-${index}`}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[88%] rounded-2xl px-4 py-3 text-sm leading-6 ${
                      message.role === 'user'
                        ? 'bg-gradient-to-r from-blue-600 to-violet-600 text-white'
                        : 'bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-100'
                    }`}
                  >
                    <p className="whitespace-pre-wrap">{message.content}</p>
                    {message.sources?.length ? (
                      <p className="mt-2 text-[11px] opacity-70">
                        Sources: {message.sources.join(', ')}
                      </p>
                    ) : null}
                  </div>
                </div>
              ))}

              {isLoading ? (
                <div className="flex justify-start">
                  <div className="inline-flex items-center gap-2 rounded-2xl bg-slate-100 px-4 py-3 text-sm text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                    <FiLoader className="animate-spin" size={14} />
                    Thinking with retrieved context...
                  </div>
                </div>
              ) : null}
            </div>

            <form
              onSubmit={(event) => {
                event.preventDefault();
                submitQuestion(input);
              }}
              className="border-t border-slate-200 px-4 py-4 dark:border-slate-700"
            >
              <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-3 py-2 dark:border-slate-700 dark:bg-slate-800">
                <FiMessageSquare className="text-slate-400" size={16} />
                <input
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  placeholder="Ask about Raj, skills, projects, resume..."
                  className="flex-1 bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400 dark:text-white"
                />
                <button
                  type="submit"
                  disabled={isLoading || !input.trim()}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-violet-600 text-white transition disabled:cursor-not-allowed disabled:opacity-60"
                >
                  <FiArrowUpRight size={18} />
                </button>
              </div>
            </form>
          </motion.aside>
        )}
      </AnimatePresence>

      <motion.button
        type="button"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.3 }}
        onClick={() => setIsOpen((current) => !current)}
        className="fixed bottom-5 right-4 z-[60] flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 via-violet-600 to-fuchsia-600 text-white shadow-[0_18px_50px_-12px_rgba(79,70,229,0.65)] ring-4 ring-blue-500/15 transition hover:scale-105"
        aria-label={isOpen ? 'Close Raj AI Agent' : 'Open Raj AI Agent'}
      >
        {isOpen ? <FiX size={26} /> : <FaRobot size={26} />}
      </motion.button>
    </>
  );
};

export default PortfolioAgent;
