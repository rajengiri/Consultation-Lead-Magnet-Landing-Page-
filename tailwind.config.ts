import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "var(--primary)",
          hover: "var(--primary-hover)",
          soft: "var(--primary-soft)",
        },
        accent: "var(--accent)",
        success: "var(--success)",
        ink: "var(--ink)",
        body: "var(--body)",
        line: "var(--line)",
        danger: "var(--danger)",
        whatsapp: "var(--whatsapp)",
      },
      boxShadow: {
        soft: "0 16px 44px rgba(15, 23, 42, 0.08)",
        card: "0 8px 28px rgba(15, 23, 42, 0.06)",
      },
      animation: {
        "fade-up": "fadeUp 650ms ease-out both",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(12px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
