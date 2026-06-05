import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCode, FiCalendar, FiChevronDown, FiChevronUp } from 'react-icons/fi';

const experiences = [
  {
    company: 'Logicloop Ventures Ltd',
    role: 'Gen AI Software Engineer',
    duration: 'Oct 2025 - Present',
    type: 'Full-time',
    status: 'Active',
    summary:
      'Building production AI systems with open-source models, agentic workflows, retrieval pipelines, and cloud-native deployment patterns.',
    highlights: [
      'Built Python automation flows and AI agents using open-source LLMs.',
      'Improved API performance, reliability, and overall system stability.',
      'Developed scalable AI solutions using RAG, agentic AI, and cloud tooling.',
      'Contributed to internal open-source AI work involving prompt templates, MCP tools, and agent workflows.',
      'Fine-tuned models on private datasets using LoRA and Unsloth while reducing data loss during adaptation.'
    ],
    tags: 'AI · Python · LLMs · RAG · Cloud',
    gradient: 'from-cyan-500 to-blue-600',
    accent: '#38bdf8',
  },
  {
    company: 'Akrix.ai (Freelancing)',
    role: 'Software Developer',
    duration: 'Jan 2023 - Oct 2025',
    type: 'Freelance',
    status: null,
    summary:
      'Delivered software products for multiple businesses with a mix of web, mobile, and AI-enabled automation capabilities.',
    highlights: [
      'Worked with companies including TT Infotech and Akrix on production solutions.',
      'Built full-stack web and mobile apps with AI integrations, chatbots, and intelligent automation.',
      'Designed scalable ERP, CRM, and service platforms with AI-driven analytics.',
      'Integrated third-party APIs, payment systems, and decision-support features for real-world use cases.'
    ],
    tags: 'Full-stack · Mobile · AI · ERP · APIs',
    gradient: 'from-emerald-500 to-teal-600',
    accent: '#34d399',
  },
  {
    company: 'IDBI Intech Ltd',
    role: 'Machine Learning Engineer Intern',
    duration: 'Dec 2022 - Jul 2023',
    type: 'Internship',
    status: null,
    summary:
      'Focused on the machine learning lifecycle, from dataset preparation and preprocessing to model design and experimentation.',
    highlights: [
      'Developed machine learning algorithms for practical business problems.',
      'Collaborated with cross-functional teams to gather requirements and shape model design.',
      'Built data preprocessing pipelines for cleaning and transforming large datasets.',
      'Improved training and testing workflows to support better model quality.'
    ],
    tags: 'Python · ML · Data pipelines · Model training',
    gradient: 'from-fuchsia-500 to-rose-600',
    accent: '#c084fc',
  }
];

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 dark:text-gray-300">
              Work <span className="gradient-text">Experience</span>
            </h2>
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A compact view of the roles where I built AI products, automation systems, and scalable software.
            </p>
          </motion.div>

          <div className="relative">
            {/* Centre timeline rail */}
            <div className="absolute left-6 top-0 h-full w-px bg-gradient-to-b from-cyan-400 via-blue-500 to-fuchsia-500 md:left-1/2 md:-translate-x-1/2" />

            {experiences.map((experience, index) => (
              <motion.article
                key={`${experience.company}-${experience.role}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
                className={`relative mb-10 pl-16 md:pl-0 ${
                  index % 2 === 0 ? 'md:pr-[calc(50%+2rem)]' : 'md:pl-[calc(50%+2rem)]'
                }`}
                style={{
                  opacity: activeIndex === null || activeIndex === index ? 1 : 0.35,
                  transition: 'opacity 220ms ease'
                }}
              >
                {/* Timeline dot */}
                <div
                  className="absolute left-6 top-10 z-10 h-4 w-4 -translate-x-1/2 rounded-full border-4 border-white bg-blue-500 shadow-lg dark:border-gray-800 md:left-1/2"
                  style={{ boxShadow: `0 0 10px ${experience.accent}66` }}
                />

                {/* Connector tick */}
                <div
                  className={`absolute left-6 top-12 h-px w-8 bg-gradient-to-r ${experience.gradient} md:w-10 ${
                    index % 2 === 0 ? 'md:left-[calc(50%-2.5rem)]' : 'md:left-1/2'
                  }`}
                />

                {/* Date label beside rail */}
                <div
                  className={`hidden md:flex absolute top-7 items-center gap-2 text-sm font-medium text-gray-500 dark:text-gray-400 ${
                    index % 2 === 0 ? 'left-[calc(50%+1.5rem)]' : 'right-[calc(50%+1.5rem)]'
                  }`}
                >
                  <FiCalendar size={14} />
                  <span>{experience.duration}</span>
                </div>

                {/* ── Card ── */}
                {/* <div className="overflow-hidden rounded-xl border border-gray-200/60 dark:border-gray-500/50 bg-white/80 dark:bg-gray-700/40 p-5 backdrop-blur-sm md:p-6 transition-all duration-300 hover:border-gray-300/80 dark:hover:border-gray-600/60 shadow-lg hover:shadow-xl"> */}
                <div className="relative overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-700/50 p-5 md:p-6 backdrop-blur-sm transition-all duration-300 hover:border-blue-300 dark:hover:border-gray-600 shadow-md hover:shadow-xl">

                  {/* Gradient accent bar */}
                  <div className={`mb-4 h-1 w-20 rounded-full bg-gradient-to-r ${experience.gradient}`} />

                  {/* Header: icon + title + badges */}
                  <div className="flex items-start gap-4 mb-3">
                    <div className={`mt-1 hidden md:flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-gradient-to-r ${experience.gradient} text-white shadow-md`}>
                      <FiCode size={15} />
                    </div>
                    <div className="flex-1 min-w-0">
                      {/* Mobile date */}
                      <div className="md:hidden inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-medium text-gray-500 shadow-sm dark:bg-gray-800 dark:text-gray-400 mb-2">
                        <FiCalendar size={12} />
                        <span>{experience.duration}</span>
                      </div>
                      {/* Mobile Expand Toggle - Pinned Top Right */}
                      <button
                        onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                        className="md:hidden absolute top-4 right-4 flex items-center justify-center p-2 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700 active:scale-95 z-10"
                        aria-label={activeIndex === index ? "Collapse" : "Expand"}
                      >
                        {activeIndex === index ? <FiChevronUp size={18} className="text-gray-700 dark:text-gray-300" /> : <FiChevronDown size={18} className="text-gray-700 dark:text-gray-300" />}
                      </button>
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                        {experience.role}
                      </h3>
                      <p className="text-base font-semibold text-blue-600 dark:text-blue-400 mb-2">
                        {experience.company}
                      </p>

                      {/* Type + Active badges */}
                      <div className="flex flex-wrap items-center gap-2">
                        {/* <span className="inline-flex items-center gap-1.5 rounded-full border border-gray-600 bg-gray-900/50 px-3 py-0.5 text-xs text-gray-400"> */}
                        <span className="hidden md:inline-flex items-center gap-1.5 rounded-full border border-gray-200 dark:border-gray-600 bg-gray-100 dark:bg-gray-900/50 px-3 py-0.5 text-xs text-gray-700 dark:text-gray-400">
                          <FiCalendar size={10} />
                          {experience.duration}
                        </span>
                        {/* <span className="rounded-full border border-gray-600 bg-gray-900/50 px-3 py-0.5 text-xs text-gray-400"> */}
                        <span className="rounded-full border border-gray-200 dark:border-gray-600 bg-gray-100 dark:bg-gray-900/50 px-3 py-0.5 text-xs text-gray-700 dark:text-gray-400">
                          {experience.type}
                        </span>
                        {/* {experience.status && (
                          <span
                            className="rounded-full px-3 py-0.5 text-xs font-medium"
                            style={{
                              background: `${experience.accent}18`,
                              color: experience.accent,
                              border: `1px solid ${experience.accent}33`
                            }} 
                          >
                            {experience.status}
                          </span>
                        )} */}
                      </div>
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                    {experience.summary}
                  </p>

                  {/* Highlights — reveal on hover */}
                  <AnimatePresence>
                    {activeIndex === index && (
                      <motion.ul
                        key="highlights"
                        initial={{ opacity: 0, height: 0, marginTop: 0 }}
                        animate={{ opacity: 1, height: 'auto', marginTop: 14 }}
                        exit={{ opacity: 0, height: 0, marginTop: 0 }}
                        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden space-y-2 text-sm text-gray-600 dark:text-gray-400"
                      >
                        {experience.highlights.map((highlight, hIdx) => (
                          <motion.li
                            key={highlight}
                            initial={{ opacity: 0, x: -6 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.2, delay: hIdx * 0.045 }}
                            className="flex items-start gap-3"
                          >
                            <span
                              className={`mt-1.5 h-2 w-2 shrink-0 rounded-full bg-gradient-to-r ${experience.gradient}`}
                            />
                            <span>{highlight}</span>
                          </motion.li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>

                  {/* Footer: tags + active badge */}
                  <div className="mt-4 border-t border-gray-700/40 pt-3 flex items-center justify-between">
                    <span className="text-[11px] text-gray-500">{experience.tags}</span>
                    <div className="flex items-center gap-2">
                      {experience.status && (
                        <span
                          className="rounded-full px-3 py-0.5 text-xs font-medium"
                          style={{
                            background: `${experience.accent}18`,
                            color: experience.accent,
                            border: `1px solid ${experience.accent}33`
                          }}
                        >
                          {experience.status}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;