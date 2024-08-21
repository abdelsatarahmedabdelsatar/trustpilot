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
        reviewNav: {
          from: {
            translateY: "-100px"
          },
          to: {
            translateY: "0px"
          }
        }

      },
      animation:{
        reviewNav: "reviewNav 0.5s linear forwards",
      }
    },

  },
  plugins: [],
};
export default config;
