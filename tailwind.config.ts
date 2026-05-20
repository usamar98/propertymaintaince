import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        north: "#063B2B",
        paper: "#FFFFFF",
      },
      boxShadow: {
        line: "0 18px 60px rgba(6, 59, 43, 0.14)",
        tight: "0 10px 30px rgba(6, 59, 43, 0.12)",
      },
      fontFamily: {
        sans: ["Arial", "Helvetica", "sans-serif"],
      },
      backgroundImage: {
        blueprint:
          "linear-gradient(rgba(6,59,43,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(6,59,43,0.07) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};

export default config;

