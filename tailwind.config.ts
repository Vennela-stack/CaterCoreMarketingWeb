import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Flashback Labs–style paper (light) scale.
        // The scale is intentionally INVERTED from convention so existing
        // class names (bg-ink-950 = canvas, text-ink-50 = primary text) keep
        // working without a 200-site rename. Higher number = lighter paper,
        // lower number = darker ink.
        ink: {
          950: "#F5F3EE",   // paper — primary canvas (reference spec)
          900: "#EFEDE6",
          850: "#E8E5DD",   // paper-sunk — secondary panel
          800: "#E8E7E0",
          750: "#DEDDD5",
          700: "#D8D5CE",   // hairline — borders
          600: "#9AA3AD",   // steel-light
          500: "#5A6470",   // steel — muted text
          400: "#4A5260",
          300: "#3A3F47",   // steel-deep — secondary text
          200: "#2A2F36",   // ink-soft
          100: "#14171B",
          50:  "#0B0D10",   // ink — primary text
        },
        // Hot-rod red accent matching Flashback Labs --color-hotrod.
        // Token name kept as `ember` to avoid a 74-site rename.
        ember: {
          50:  "#FDE6E8",
          100: "#F7C2C7",
          200: "#E66A70",
          300: "#D2353C",
          400: "#C1121F",
          500: "#8C0D13",
          600: "#6A0A0F",
          700: "#450608",
        },
        sage: {
          400: "#7a9e88",
          500: "#5a8270",
        },
        azure: {
          400: "#7da9e0",
          500: "#5b8bc7",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        display: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        mono: [
          "ui-monospace",
          "SFMono-Regular",
          "JetBrains Mono",
          "Menlo",
          "monospace",
        ],
      },
      letterSpacing: {
        tightest: "-0.04em",
        tighter: "-0.025em",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
      boxShadow: {
        "soft": "0 1px 1px rgba(11,13,16,0.04), 0 4px 12px rgba(11,13,16,0.08)",
        "lift": "0 30px 60px -20px rgba(11,13,16,0.25), 0 18px 30px -22px rgba(11,13,16,0.18)",
        "ring-ember": "0 0 0 1px rgba(179,17,26,0.25), 0 8px 24px -8px rgba(179,17,26,0.20)",
      },
      backgroundImage: {
        "grid-faint":
          "linear-gradient(rgba(11,13,16,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(11,13,16,0.04) 1px, transparent 1px)",
        "noise":
          "radial-gradient(rgba(11,13,16,0.025) 1px, transparent 1px)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "float-y": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.55" },
          "50%": { opacity: "0.85" },
        },
        "shimmer": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s cubic-bezier(0.22, 1, 0.36, 1) both",
        "fade-in": "fade-in 0.5s ease-out both",
        "float-y": "float-y 7s ease-in-out infinite",
        "pulse-glow": "pulse-glow 4.5s ease-in-out infinite",
        "shimmer": "shimmer 2.2s linear infinite",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
