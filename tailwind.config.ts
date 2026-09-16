import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0f172a",
          secondary: "#334155",
          muted: "#64748b",
          light: "#94a3b8",
        },
        paper: {
          DEFAULT: "#ffffff",
          subtle: "#f8fafc",
          muted: "#f1f5f9",
        },
        muted: "#64748b",
        line: {
          DEFAULT: "#e2e8f0",
          subtle: "#f1f5f9",
          dark: "#cbd5e1",
        },
        accent: {
          DEFAULT: "#059669",
          hover: "#047857",
          light: "#ecfdf5",
          ring: "#a7f3d0",
          dark: "#064e3b",
        },
        brand: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          500: "#0284c7",
          600: "#0369a1",
          700: "#075985",
          800: "#0c4a6e",
          900: "#0f172a",
          950: "#090d16",
        },
        amber: {
          light: "#fef3c7",
          DEFAULT: "#d97706",
          dark: "#92400e",
        },
      },
      boxShadow: {
        soft: "0 2px 10px -2px rgba(15, 23, 42, 0.05), 0 1px 3px -1px rgba(15, 23, 42, 0.03)",
        card: "0 4px 20px -2px rgba(15, 23, 42, 0.06), 0 2px 6px -1px rgba(15, 23, 42, 0.03)",
        glow: "0 0 25px -5px rgba(5, 150, 105, 0.15)",
        floating: "0 12px 32px -4px rgba(15, 23, 42, 0.12), 0 4px 12px -2px rgba(15, 23, 42, 0.05)",
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
    },
  },
  plugins: [],
};

export default config;
