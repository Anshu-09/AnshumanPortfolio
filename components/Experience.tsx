"use client";

import { motion } from "framer-motion";
import { portfolio } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-24 max-w-5xl mx-auto">
      <div className="flex items-baseline gap-3 mb-10">
        <span className="font-mono text-sm text-muted">05</span>
        <h2 className="text-2xl font-bold text-fg tracking-tight">experience</h2>
      </div>

      <div className="relative ml-4">
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{ originY: 0 }}
          className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-accent/50 via-border to-transparent"
        />

        <div className="space-y-4 pl-8">
          {portfolio.experience.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.25, delay: i * 0.12 + 0.15 }}
                className="absolute -left-[2.15rem] top-[1.1rem] h-2 w-2 rounded-full border-2 border-accent bg-bg"
              />

              <div className="rounded-xl border border-border bg-surface p-5 hover:border-accent/25 transition-colors">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-[17px] font-semibold text-fg leading-snug">{item.role}</h3>
                    <p className="font-mono text-sm text-accent mt-0.5">{item.company}</p>
                  </div>
                  <span className="font-mono text-xs text-muted bg-subtle px-2 py-1 rounded border border-border/60 whitespace-nowrap">
                    {item.period}
                  </span>
                </div>
                <ul className="space-y-1">
                  {item.points.map((point, j) => (
                    <li key={j} className="flex items-start gap-2 text-[15px] text-fg-muted leading-relaxed">
                      <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-accent/40" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
