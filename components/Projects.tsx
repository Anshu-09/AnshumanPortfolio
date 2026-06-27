"use client";

import { useRef, MouseEvent } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { portfolio, type Project } from "@/data/portfolio";

function TiltCard({ project }: { project: Project }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [6, -6]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-6, 6]), { stiffness: 300, damping: 30 });

  const onMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.2 }}
      className="group relative flex flex-col justify-between rounded-xl border border-border bg-surface p-5 overflow-hidden h-full"
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(ellipse_at_top_left,rgba(165,180,252,0.06),transparent_60%)]" />

      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <span className="font-mono text-[13px] text-muted mb-2 block">{project.date}</span>
          <h3 className="text-xl font-semibold text-fg tracking-tight leading-snug">{project.name}</h3>
        </div>
        <a
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${project.name}`}
          className="mt-1 flex h-7 w-7 items-center justify-center rounded-md border border-border text-muted text-xs transition-all hover:border-accent/40 hover:text-accent"
        >
          ↗
        </a>
      </div>

      {/* Description */}
      <p className="text-fg-muted text-[15px] leading-[1.65] mb-5 flex-1">
        {project.description}
      </p>

      {/* Stack */}
      <div className="flex flex-wrap gap-1.5">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="font-mono text-[13px] px-2.5 py-1 rounded bg-subtle text-fg-muted border border-border/60"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

const sectionVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.09 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } },
};

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-24 max-w-5xl mx-auto">
      <div className="flex items-baseline gap-3 mb-10">
        <span className="font-mono text-sm text-muted">02</span>
        <h2 className="text-2xl font-bold text-fg tracking-tight">projects</h2>
        <span className="font-mono text-[11px] text-muted ml-auto">{portfolio.projects.length} total</span>
      </div>

      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-3"
      >
        {portfolio.projects.map((project) => (
          <motion.div key={project.id} variants={cardVariants} className="h-full">
            <TiltCard project={project} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
