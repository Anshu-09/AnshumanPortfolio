"use client";

import { motion } from "framer-motion";
import { portfolio, type CPProfile } from "@/data/portfolio";

function CPCard({ profile, index }: { profile: CPProfile; index: number }) {
  return (
    <motion.a
      href={profile.href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.02, transition: { duration: 0.18 } }}
      className="group relative flex flex-col rounded-xl border border-border bg-surface p-5 overflow-hidden transition-colors"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `radial-gradient(ellipse at top left, ${profile.color}10, transparent 65%)` }}
      />
      <div
        className="pointer-events-none absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ boxShadow: `inset 0 0 0 1px ${profile.color}25` }}
      />

      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="font-mono text-sm font-semibold mb-1" style={{ color: profile.color }}>
            {profile.platform}
          </p>
          <p className="font-mono text-sm text-muted">{profile.handle}</p>
        </div>
        <span className="text-muted text-xs group-hover:text-fg transition-colors">↗</span>
      </div>

      {/* Rating */}
      {profile.rating && (
        <div className="mb-4">
          <span className="text-[32px] font-bold leading-none tracking-tight" style={{ color: profile.color }}>
            {profile.rating}
          </span>
          <span className="font-mono text-[10px] text-muted ml-1.5">rating</span>
        </div>
      )}

      {/* Stats */}
      <div className="grid grid-cols-2 gap-1.5 mt-auto">
        {profile.stats.map((stat) => (
          <div key={stat.label} className="rounded-lg bg-subtle border border-border/60 px-2.5 py-2">
            <p className="text-fg text-[15px] font-semibold font-mono">{stat.value}</p>
            <p className="text-muted text-xs font-mono mt-0.5">{stat.label}</p>
          </div>
        ))}
      </div>
    </motion.a>
  );
}

export default function Competitive() {
  return (
    <section id="competitive" className="px-6 py-24 max-w-5xl mx-auto">
      <div className="flex items-baseline gap-3 mb-10">
        <span className="font-mono text-sm text-muted">04</span>
        <h2 className="text-2xl font-bold text-fg tracking-tight">competitive programming</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {portfolio.competitive.map((profile, i) => (
          <CPCard key={profile.platform} profile={profile} index={i} />
        ))}
      </div>
    </section>
  );
}
