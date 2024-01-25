import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        colorChange: {
          "0%": { backgroundColor: "rgba(128,128,128, 0.30)" },
          "100%": { backgroundColor: "rgba(255,255,255, 0.10)" },
        },
        loading: {
          "0%, 100%": { top: "-5px" },
          "50%": { top: "0px" },
        },
      },
      animation: {
        colorChange: "colorChange 1s linear infinite alternate",
        loading: "loading 1.5s ease-in-out infinite",
      },
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
