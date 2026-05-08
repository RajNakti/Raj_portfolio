import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiTrendingUp } from 'react-icons/fi';

const experiences = [
  {
    company: 'Logicloop Ventures Ltd',
    role: 'Gen AI Software Engineer',
    duration: 'Oct 2025 - Present',
    summary:
      'Building production AI systems with open-source models, agentic workflows, retrieval pipelines, and cloud-native deployment patterns.',
    highlights: [
      'Built Python automation flows and AI agents using open-source LLMs.',
      'Improved API performance, reliability, and overall system stability.',
      'Developed scalable AI solutions using RAG, agentic AI, and cloud tooling.',
      'Contributed to internal open-source AI work involving prompt templates, MCP tools, and agent workflows.',
      'Fine-tuned models on private datasets using LoRA and Unsloth while reducing data loss during adaptation.'
    ],
    gradient: 'from-cyan-500 to-blue-600'
  },
  {
    company: 'Akrix.ai (Freelancing)',
    role: 'Software Developer',
    duration: 'Jan 2023 - Oct 2025',
    summary:
      'Delivered software products for multiple businesses with a mix of web, mobile, and AI-enabled automation capabilities.',
    highlights: [
      'Worked with companies including TT Infotech and Akrix on production solutions.',
      'Built full-stack web and mobile apps with AI integrations, chatbots, and intelligent automation.',
      'Designed scalable ERP, CRM, and service platforms with AI-driven analytics.',
      'Integrated third-party APIs, payment systems, and decision-support features for real-world use cases.'
    ],
    gradient: 'from-emerald-500 to-teal-600'
  },
  {
    company: 'IDBI Intech Ltd',
    role: 'Machine Learning Engineer Intern',
    duration: "Dec 2022 - Jul 2023",
    summary:
      'Focused on the machine learning lifecycle, from dataset preparation and preprocessing to model design and experimentation.',
    highlights: [
      'Developed machine learning algorithms for practical business problems.',
      'Collaborated with cross-functional teams to gather requirements and shape model design.',
      'Built data preprocessing pipelines for cleaning and transforming large datasets.',
      'Improved training and testing workflows to support better model quality.'
    ],
    gradient: 'from-fuchsia-500 to-rose-600'
  }
];

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-8xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Work <span className="gradient-text">Experience</span>
            </h2>
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A compact view of the roles where I built AI products, automation systems, and scalable software.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-6 top-0 h-full w-px bg-gradient-to-b from-cyan-400 via-blue-500 to-fuchsia-500 md:left-1/2 md:-translate-x-1/2"></div>

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
                <div className="absolute left-6 top-10 z-10 h-4 w-4 -translate-x-1/2 rounded-full border-4 border-white bg-blue-500 shadow-lg dark:border-gray-800 md:left-1/2"></div>
                <div
                  className={`absolute left-6 top-12 h-px w-8 bg-gradient-to-r ${experience.gradient} md:w-10 ${
                    index % 2 === 0 ? 'md:left-[calc(50%-2.5rem)]' : 'md:left-1/2'
                  }`}
                ></div>
                <div
                  className={`hidden md:flex absolute top-7 items-center gap-2 text-sm font-medium text-gray-500 dark:text-gray-400 ${
                    index % 2 === 0 ? 'left-[calc(50%+1.5rem)]' : 'right-[calc(50%+1.5rem)]'
                  }`}
                >
                  <FiCalendar size={14} />
                  <span>{experience.duration}</span>
                </div>

                <div className="overflow-hidden rounded-3xl border border-gray-200 bg-gray-50/90 p-5 shadow-[0_18px_60px_-30px_rgba(37,99,235,0.35)] backdrop-blur-sm dark:border-gray-700 dark:bg-gray-900/70 md:p-6">
                  <div className={`mb-4 h-1 w-20 rounded-full bg-gradient-to-r ${experience.gradient}`}></div>

                  <div className="flex flex-col gap-4">
                    <div className="max-w-2xl">
                      <div className="flex items-start gap-4 mb-3">
                        <div className={`mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-r ${experience.gradient} text-white shadow-md`}>
                          <FiBriefcase size={15} />
                        </div>
                        <div>
                          <div className="md:hidden inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-medium text-gray-500 shadow-sm dark:bg-gray-800 dark:text-gray-400 mb-2">
                            <FiCalendar size={12} />
                            <span>{experience.duration}</span>
                          </div>
                          <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                            {experience.role}
                          </h3>
                          <p className="text-base font-semibold text-blue-600 dark:text-blue-400">
                            {experience.company}
                          </p>
                        </div>
                      </div>

                      <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                        {experience.summary}
                      </p>
                    </div>

                    <div className="flex items-center">
                      {/* <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-xs md:text-sm text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">
                        <FiTrendingUp size={16} />
                        <span>AI Product Delivery</span>
                      </div> */}
                    </div>
                  </div>

                  <ul className="mt-4 space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    {experience.highlights.slice(0, 3).map((highlight) => (
                      <li key={highlight} className="flex items-start gap-3">
                        <span className={`mt-1.5 h-2 w-2 shrink-0 rounded-full bg-gradient-to-r ${experience.gradient}`}></span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
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
