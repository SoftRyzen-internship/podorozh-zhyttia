/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/sections/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      mobile: '480px',
      tablet: '768px',
      desktop: '1280px',
    },

    container: {
      center: true,
      padding: {
        DEFAULT: '20px',
        tablet: '32px',
      },
    },

    fontFamily: {
      comfortaa: ['Comfortaa', 'cursive'],
      roboto: ['Roboto', 'sans-serif'],
    },

    colors: {
      accent: {
        DEFAULT: '#E34D80',
        dark: '#D03D6F',
        light: '#F0A7B8',
      },
      yellow: {
        DEFAULT: '#FBF9E9',
      },
      black: {
        DEFAULT: '#000000',
        charcoal: '#222222',
        midnight: '#010101',
      },
      red: {
        DEFAULT: '#FF0B0B',
      },
      white: {
        DEFAULT: '#FFFFFF',
        light: '#FFFFFC',
      },
    },

    boxShadow: {
      payment: '0px 4px 18px rgba(0, 0, 0, 0.1)',
      DEFAULT:
        '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    },

    fontSize: {
      tiny: '12px',
      xs: '14px',
      base: '16px',
      sm: '18px',
      lg: '20px',
      xl: '24px',
      '2xl': '28px',
      '3xl': '32px',
      '4xl': '40px',
      '5xl': '52px',
    },
  },

  plugins: [],
};
