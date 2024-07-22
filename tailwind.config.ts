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
      colors: {
        "green-3" : "#6FCF97",
        "green-2" : "#27AE60",
        "dark-blue": "#0D4B9E",
        "header-bg": "#14274AB3",
        "darkest-blue": "#14274A"
      },
      borderRadius: {
        "4xl" : "2rem"
      },
      fontFamily: {
        "gideonRoman": ['var(--font-gideonRoman)'],
        "lora": ['var(--font-lora)'],
        "licorice": ['var(--font-licorice)'],
        "montserrat": ['var(--font-montserrat)']
      },
      height: {
        "97":"25rem"
      }
    },
  },
  plugins: [],
};
export default config;
