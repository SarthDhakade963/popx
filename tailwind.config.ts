import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2563eb", // example custom color
        secondary: "#9333ea",
        accent: "#f59e0b",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      boxShadow: {
        soft: "0 4px 14px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};

export default config;
