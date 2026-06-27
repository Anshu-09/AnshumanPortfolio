"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { portfolio } from "@/data/portfolio";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("sent");
  };

  return (
    <section id="contact" className="px-6 py-24 max-w-5xl mx-auto">
      <div className="flex items-baseline gap-3 mb-10">
        <span className="font-mono text-sm text-muted">06</span>
        <h2 className="text-2xl font-bold text-fg tracking-tight">contact</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* Left — info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-xl border border-border bg-surface p-6 flex flex-col justify-between"
        >
          <div>
            <p className="font-mono text-sm text-muted mb-3">// get in touch</p>
            <h3 className="text-[22px] font-semibold text-fg tracking-tight leading-snug mb-2">
              Internships, collabs,<br />good problems.
            </h3>
            <p className="text-fg-muted text-base leading-relaxed mb-8">
              Available for summer 2025 internships and freelance projects. Fast replies.
            </p>
          </div>

          <div className="space-y-3">
            {[
              { label: "Email", value: portfolio.email, href: `mailto:${portfolio.email}` },
              { label: "Location", value: portfolio.location, href: null },
              { label: "GitHub", value: "github.com/Anshu-09", href: portfolio.github },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-3">
                <span className="font-mono text-xs text-muted w-16 uppercase tracking-wider">{item.label}</span>
                {item.href ? (
                  <a href={item.href} target="_blank" rel="noopener noreferrer"
                    className="font-mono text-sm text-accent hover:text-fg transition-colors truncate">
                    {item.value}
                  </a>
                ) : (
                  <span className="font-mono text-sm text-fg-muted">{item.value}</span>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right — form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-xl border border-border bg-surface p-6"
        >
          {status === "sent" ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-8">
              <div className="text-3xl mb-3">✓</div>
              <p className="text-fg font-semibold text-[15px] mb-1">Message sent</p>
              <p className="text-fg-muted text-[13px]">I&apos;ll get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                {[
                  { name: "name", label: "Name", type: "text", placeholder: "Your name" },
                  { name: "email", label: "Email", type: "email", placeholder: "your@email.com" },
                ].map((field) => (
                  <div key={field.name}>
                    <label className="font-mono text-xs text-muted uppercase tracking-wider block mb-1.5">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      name={field.name}
                      placeholder={field.placeholder}
                      required
                      className="w-full rounded-lg border border-border bg-bg px-3 py-2.5 text-[15px] text-fg placeholder:text-muted font-mono focus:outline-none focus:border-accent/50 transition-colors"
                    />
                  </div>
                ))}
              </div>

              <div>
                <label className="font-mono text-xs text-muted uppercase tracking-wider block mb-1.5">Subject</label>
                <input
                  type="text"
                  name="subject"
                  placeholder="What's this about?"
                  required
                  className="w-full rounded-lg border border-border bg-bg px-3 py-2.5 text-[15px] text-fg placeholder:text-muted font-mono focus:outline-none focus:border-accent/50 transition-colors"
                />
              </div>

              <div>
                <label className="font-mono text-xs text-muted uppercase tracking-wider block mb-1.5">Message</label>
                <textarea
                  name="message"
                  placeholder="Your message..."
                  required
                  rows={4}
                  className="w-full rounded-lg border border-border bg-bg px-3 py-2.5 text-[15px] text-fg placeholder:text-muted font-mono focus:outline-none focus:border-accent/50 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full rounded-lg bg-accent px-4 py-3 text-[15px] font-mono font-medium text-bg transition-all hover:bg-white active:scale-95 disabled:opacity-60"
              >
                {status === "sending" ? "Sending..." : "Send Message →"}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
