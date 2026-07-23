import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FiChevronDown, FiDownload } from 'react-icons/fi';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import GradientOverlay from './GradientOverlay';
import Marquee from './Marquee';

const marqueeRows = [
  {
    id: 'row-1',
    items: ['AI Agents', 'Automation', 'Full Stack AI', 'RAG', 'Workflows', 'Intelligent Systems'],
    speed: 34,
    direction: 'left',
    opacity: 0.1,
    fontSize: 'clamp(6rem, 14vw, 13.5rem)',
    spacing: '0.32em',
    blur: 0,
    parallax: 10,
    className: 'top-[7%] md:top-[6%]',
  },
  {
    id: 'row-2',
    items: ['Build Faster', 'Agentic AI', 'APIs', 'LLM', 'Vector Search', 'AI Development'],
    speed: 38,
    direction: 'right',
    opacity: 0.08,
    fontSize: 'clamp(5rem, 11vw, 10rem)',
    spacing: '0.28em',
    blur: 1,
    rotation: -2,
    parallax: 14,
    className: 'top-[23%] hidden sm:block',
  },
  {
    id: 'row-3',
    items: ['Voice Interfaces', 'Production AI', 'Agent Workflows', 'Evaluation', 'Tooling', 'Orchestration'],
    speed: 30,
    direction: 'left',
    opacity: 0.12,
    fontSize: 'clamp(4.75rem, 10vw, 9rem)',
    spacing: '0.24em',
    blur: 0,
    rotation: 1,
    parallax: 12,
    className: 'top-[40%]',
  },
  {
    id: 'row-4',
    items: ['Prompt Systems', 'LLMOps', 'Realtime UX', 'Knowledge Bases', 'Fine-Tuned Flows', 'Launch Ready'],
    speed: 42,
    direction: 'right',
    opacity: 0.07,
    fontSize: 'clamp(4.25rem, 8vw, 7.5rem)',
    spacing: '0.26em',
    blur: 1.5,
    rotation: -1,
    parallax: 9,
    className: 'top-[56%] hidden md:block',
  },
  {
    id: 'row-5',
    items: ['Systems Thinking', 'Shipping Fast', 'High Signal', 'Automation First', 'AI Products', 'Scalable Delivery'],
    speed: 36,
    direction: 'left',
    opacity: 0.08,
    fontSize: 'clamp(4rem, 7vw, 6.5rem)',
    spacing: '0.22em',
    blur: 2,
    rotation: 2,
    parallax: 8,
    className: 'top-[71%] hidden lg:block',
  },
];

const socialLinks = [
  { icon: FaGithub, href: 'https://github.com/RajNakti', label: 'GitHub' },
  { icon: FaEnvelope, href: 'mailto:naktiraj77@gmail.com', label: 'Email' },
  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/raj-nakti-154b94245?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', label: 'LinkedIn' },
];

const highlightCards = [
  ['Agents & automation', 'Production systems for internal tooling, workflows, and user-facing AI products.'],
  ['Full-stack delivery', 'From APIs and evals to polished product surfaces and fast iteration loops.'],
  ['Built for scale', 'Clean architecture, measurable outcomes, and reliable launch-ready execution.'],
];

const titles = [
  'AI Developer',
  'Gen AI Software Engineer',
  'LLM & Agent Builder',
  'Full-Stack AI Engineer',
];

const Hero = () => {
  const sectionRef = useRef(null);
  const [currentText, setCurrentText] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % titles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    if (!section || mediaQuery.matches) {
      return undefined;
    }

    const pointerState = {
      targetX: 0,
      targetY: 0,
      currentX: 0,
      currentY: 0,
    };

    let animationFrameId;

    const updatePointer = () => {
      pointerState.currentX += (pointerState.targetX - pointerState.currentX) * 0.08;
      pointerState.currentY += (pointerState.targetY - pointerState.currentY) * 0.08;

      section.style.setProperty('--pointer-x', `${pointerState.currentX.toFixed(2)}px`);
      section.style.setProperty('--pointer-y', `${pointerState.currentY.toFixed(2)}px`);

      animationFrameId = window.requestAnimationFrame(updatePointer);
    };

    const handlePointerMove = (event) => {
      const bounds = section.getBoundingClientRect();
      const normalizedX = (event.clientX - bounds.left) / bounds.width - 0.5;
      const normalizedY = (event.clientY - bounds.top) / bounds.height - 0.5;

      pointerState.targetX = normalizedX * 18;
      pointerState.targetY = normalizedY * 14;
    };

    const handlePointerLeave = () => {
      pointerState.targetX = 0;
      pointerState.targetY = 0;
    };

    animationFrameId = window.requestAnimationFrame(updatePointer);
    section.addEventListener('pointermove', handlePointerMove);
    section.addEventListener('pointerleave', handlePointerLeave);

    return () => {
      window.cancelAnimationFrame(animationFrameId);
      section.removeEventListener('pointermove', handlePointerMove);
      section.removeEventListener('pointerleave', handlePointerLeave);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section
      id="home"
      ref={sectionRef}
      className="hero-aurora relative flex min-h-screen items-center justify-center overflow-hidden bg-[#050816] px-4 pb-16 pt-24 text-white sm:px-6 sm:pb-20 sm:pt-28"
    >
      <GradientOverlay />
      <Marquee rows={marqueeRows} />

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-white/[0.02] blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mx-auto flex max-w-5xl flex-col items-center"
        >
          <motion.p
            variants={itemVariants}
            className="mb-5 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs font-medium uppercase tracking-[0.35em] text-white/70 shadow-[0_18px_45px_rgba(0,0,0,0.22)] backdrop-blur-xl sm:text-sm"
          >
            AI Engineer
            <span className="h-1.5 w-1.5 rounded-full bg-white/50" />
            Shipping intelligent products
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="mb-6 max-w-5xl text-5xl font-semibold leading-[0.9] tracking-[-0.05em] text-white sm:text-6xl md:text-7xl lg:text-[6.5rem]"
          >
            Building AI systems that feel effortless
          </motion.h1>

          <motion.div
            variants={itemVariants}
            className="mb-8 flex h-14 items-center justify-center sm:h-16 md:h-20"
          >
            <motion.h2
              key={currentText}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-[linear-gradient(180deg,rgba(255,255,255,0.98)_0%,rgba(194,206,224,0.82)_100%)] bg-clip-text text-2xl font-medium text-transparent sm:text-3xl md:text-4xl lg:text-5xl"
            >
              {titles[currentText]}
            </motion.h2>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="mb-12 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg md:text-xl"
          >
            I design and ship production-ready AI experiences with agents, RAG, voice, and full-stack systems.
            The focus is simple: faster delivery, better product quality, and interfaces that make complex automation feel natural.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mb-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: '0 28px 70px rgba(69, 125, 255, 0.28)',
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('projects')}
              className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white px-7 py-4 text-sm font-semibold text-slate-950 shadow-[0_24px_60px_rgba(255,255,255,0.18)] transition-all duration-300 sm:text-base"
            >
              View My Work
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </motion.button>

            <motion.a
              whileHover={{
                scale: 1.05,
                boxShadow: '0 26px 55px rgba(8, 15, 30, 0.45)',
              }}
              whileTap={{ scale: 0.95 }}
              href="/Raj-Nakti-Resume2.pdf"
              download
              className="inline-flex items-center gap-3 rounded-full border border-white/12 bg-white/[0.05] px-7 py-4 text-sm font-semibold text-white shadow-[0_18px_45px_rgba(0,0,0,0.22)] backdrop-blur-xl transition-all duration-300 sm:text-base"
            >
              <FiDownload size={20} />
              Download Resume
            </motion.a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mb-16 flex flex-wrap justify-center gap-4"
          >
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                whileHover={{
                  scale: 1.06,
                  y: -6,
                  boxShadow: '0 24px 50px rgba(0, 0, 0, 0.22)',
                }}
                whileTap={{ scale: 0.9 }}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-sm text-slate-200 shadow-[0_18px_42px_rgba(0,0,0,0.18)] backdrop-blur-xl transition-all duration-300"
                aria-label={label}
              >
                <Icon size={18} />
                <span>{label}</span>
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mx-auto grid w-full max-w-4xl gap-4 rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 text-left shadow-[0_30px_90px_rgba(0,0,0,0.35)] backdrop-blur-2xl sm:grid-cols-3 sm:p-6"
          >
            {highlightCards.map(([title, description]) => (
              <div key={title} className="rounded-[1.5rem] border border-white/8 bg-black/10 p-4">
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/45">{title}</p>
                <p className="text-sm leading-7 text-slate-300">{description}</p>
              </div>
            ))}
          </motion.div>

          <motion.button
            variants={itemVariants}
            onClick={() => scrollToSection('about')}
            className="mt-10 flex items-center gap-2 text-sm uppercase tracking-[0.28em] text-white/45 transition-colors hover:text-white/80"
          >
            Scroll
            <motion.span
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <FiChevronDown />
            </motion.span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
