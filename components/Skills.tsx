"use client";

import { motion } from "framer-motion";
import { portfolio } from "@/data/portfolio";

const categoryColors: Record<string, string> = {
  Languages: "#c084fc",
  Backend:   "#a5b4fc",
  Frontend:  "#34d399",
  Databases: "#fb923c",
  Tools:     "#94a3b8",
};

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-24 max-w-5xl mx-auto">
      <div className="flex items-baseline gap-3 mb-10">
        <span className="font-mono text-sm text-muted">03</span>
        <h2 className="text-2xl font-bold text-fg tracking-tight">stack</h2>
      </div>

      <div className="space-y-8">
        {(Object.entries(portfolio.skills) as [string, readonly string[]][]).map(([category, items], ci) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: ci * 0.06, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="h-2 w-2 rounded-full" style={{ background: categoryColors[category] }} />
              <p className="font-mono text-sm uppercase tracking-widest" style={{ color: categoryColors[category] }}>
                {category}
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {items.map((skill, ii) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ duration: 0.25, delay: ci * 0.04 + ii * 0.04 }}
                  className="inline-flex items-center rounded-lg border px-4 py-2 text-[14px] font-mono font-medium transition-all"
                  style={{
                    color: categoryColors[category],
                    borderColor: `${categoryColors[category]}30`,
                    background: `${categoryColors[category]}08`,
                  }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
