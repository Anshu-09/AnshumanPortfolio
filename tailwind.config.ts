import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0d0d14",
        surface: "#16161f",
        border: "#2a2a40",
        accent: "#a5b4fc",
        "accent-dim": "#818cf8",
        muted: "#9090b8",
        subtle: "#2a2a3e",
        fg: "#f4f4fc",
        "fg-muted": "#c0c0e0",
      },
      fontFamily: {
        sans: ["var(--font-space-grotesk)", "sans-serif"],
        mono: ["var(--font-space-mono)", "monospace"],
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(129,140,248,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(129,140,248,0.03) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "60px 60px",
      },
    },
  },
  plugins: [],
};

export default config;
