"use client";

import { motion } from "framer-motion";
import { portfolio } from "@/data/portfolio";

const info = [
  { label: "Name", value: "Anshuman Giri" },
  { label: "Email", value: portfolio.email },
  { label: "Location", value: portfolio.location },
  { label: "Availability", value: portfolio.availability, highlight: true },
];

export default function About() {
  return (
    <section id="about" className="px-6 py-24 max-w-5xl mx-auto">
      <div className="flex items-baseline gap-3 mb-10">
        <span className="font-mono text-[11px] text-muted">01</span>
        <h2 className="text-2xl font-bold text-fg tracking-tight">about</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

        {/* Left — bio + CV */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="font-mono text-sm text-accent mb-4">// who i am</p>
          <p className="text-fg-muted text-base leading-[1.8] mb-6">
            {portfolio.about}
          </p>
          <a
            href={portfolio.cvUrl}
            download
            className="group inline-flex items-center gap-2 rounded-md border border-accent/40 bg-accent/8 px-5 py-3 text-[15px] font-mono text-accent transition-all hover:bg-accent hover:text-bg hover:border-accent active:scale-95"
          >
            <span>↓</span> Download CV
          </a>
        </motion.div>

        {/* Right — info cards */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-2 gap-3"
        >
          {info.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.07 }}
              className="rounded-xl border border-border bg-surface p-4"
            >
              <p className="font-mono text-xs text-muted uppercase tracking-widest mb-1.5">
                {item.label}
              </p>
              <div className="flex items-center gap-2">
                {item.highlight && (
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#34d399] opacity-60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-[#34d399]" />
                  </span>
                )}
                <p className={`text-[15px] font-medium truncate ${item.highlight ? "text-[#34d399]" : "text-fg"}`}>
                  {item.value}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
