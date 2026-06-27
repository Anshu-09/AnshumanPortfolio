"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolio } from "@/data/portfolio";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};
const fade = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const GithubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const TwitterIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export default function Hero() {
  const taglines = portfolio.taglines as readonly string[];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % taglines.length), 2400);
    return () => clearInterval(id);
  }, [taglines.length]);

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-16 text-center">
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern bg-grid opacity-50" />
      <div className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 h-96 w-96 rounded-full bg-accent/6 blur-[120px]" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 flex flex-col items-center max-w-3xl"
      >
        {/* Prompt line */}
        <motion.div variants={fade} className="flex items-center gap-2 mb-8">
          <span className="font-mono text-accent text-base">~/</span>
          <span className="font-mono text-muted text-base">anshuman-giri</span>
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ repeat: Infinity, duration: 1.1 }}
            className="font-mono text-accent text-base"
          >_</motion.span>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={fade}
          className="text-[clamp(3rem,8vw,6rem)] font-bold leading-[1.0] tracking-[-0.03em] text-fg mb-4"
        >
          {portfolio.name}
        </motion.h1>

        {/* Role + rotating tagline */}
        <motion.div variants={fade} className="flex items-center justify-center gap-3 mb-6">
          <span className="text-xl font-medium text-fg-muted">{portfolio.role}</span>
          <span className="text-border text-xl">·</span>
          <div className="h-7 overflow-hidden relative w-36">
            <AnimatePresence mode="wait">
              <motion.span
                key={taglines[index]}
                initial={{ y: 28, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -28, opacity: 0 }}
                transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                className="absolute font-mono text-base text-accent left-0 right-0 text-center"
              >
                {taglines[index]}
              </motion.span>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Bio */}
        <motion.p
          variants={fade}
          className="text-fg-muted text-lg leading-[1.75] mb-10 max-w-xl"
        >
          {portfolio.bio}
        </motion.p>

        {/* Buttons */}
        <motion.div variants={fade} className="flex items-center justify-center gap-4 flex-wrap mb-10">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 text-[15px] font-mono font-medium text-bg transition-all hover:bg-white active:scale-95"
          >
            View My Work
            <span className="transition-transform group-hover:translate-x-0.5">→</span>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-md border border-border px-6 py-3 text-[15px] font-mono text-fg-muted transition-all hover:border-accent/50 hover:text-fg active:scale-95"
          >
            Contact Me
          </a>
        </motion.div>

        {/* Social icons */}
        <motion.div variants={fade} className="flex items-center justify-center gap-3">
          {[
            { href: portfolio.github, icon: <GithubIcon />, label: "GitHub" },
            { href: `https://${portfolio.linkedin}`, icon: <LinkedinIcon />, label: "LinkedIn" },
            { href: portfolio.twitter, icon: <TwitterIcon />, label: "Twitter" },
          ].map(({ href, icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex h-10 w-10 items-center justify-center rounded-md border border-border text-muted transition-all hover:border-accent/40 hover:text-accent hover:bg-subtle"
            >
              {icon}
            </a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          className="h-4 w-px bg-accent/50"
        />
        <span className="font-mono text-[11px] text-muted tracking-widest">scroll</span>
      </motion.div>
    </section>
  );
}
