/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      mobile: "480px",
      tablet: "768px",
      desktop: "1280px",
    },

    container: {
      center: true,
      padding: {
        DEFAULT: "20px",
        tablet: "32px",
      },
    },

    colors: {
      accent: {
        DEFAULT: "#E34D80",
        dark: "#D03D6F",
        light: "#F0A7B8",
      },
      yellow: {
        DEFAULT: "#FBF9E9",
      },
      black: {
        DEFAULT: "#000000",
        charcoal: "#222222",
        midnight: "#010101",
      },
      white: {
        DEFAULT: "#FFFFFF",
      },
    },

    fontSize: {
      xs: "14px",
      base: "16px",
      sm: "18px",
      lg: "20px",
      xl: "24px",
      "2xl": "28px",
      "3xl": "32px",
      "4xl": "40px",
      "5xl": "52px",
    },
  },

  plugins: [],
};
