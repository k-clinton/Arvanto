import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#07be8a",
        dark: "#0B0F17",
        skyblue: "#0284c7",
        lightskyblue: "#0369a1",
      },
      maxWidth: {
        "8xl": "90rem",
        "45p": "45%",
        "3/4": "75%",
      },
      fontSize: {
        "52": ["3.25rem", { lineHeight: "1.2" }],
        "40": ["2.5rem", { lineHeight: "1.2" }],
        "xm": ["1.125rem", { lineHeight: "1.5" }],
      },
      screens: {
        xs: "450px",
        mobile: "550px",
      },
      boxShadow: {
        "3xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      },
      keyframes: {
        slide: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        slide: "slide 25s linear infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [],
};

export default config;
