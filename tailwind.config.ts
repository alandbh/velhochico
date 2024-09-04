import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        '3xl': '2160px',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "green-3" : "#6FCF97",
        "green-2" : "#27AE60",
        "dark-blue": "#0D4B9E",
        "darker-blue": "#1f3d74",
        "header-bg": "#14274AB3",
        "darkest-blue": "#14274A",
        "gray-6": "#f2f2f2"
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
      fontSize: {
        "intro": "1.2rem"
      },
      lineHeight: {
        "intro": "1.5"
      },
      height: {
        "97":"25rem",
        "65": "17rem",
        "81":"21.375rem",
        "98":"42.75rem"
      },
      width: {
        "81":"21.375rem"
      },
      padding: {
        "22":"5.5rem"
      }
    },
  },
  plugins: [],
};
export default config;
