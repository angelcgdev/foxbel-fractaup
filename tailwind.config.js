/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      primary: 'rgb(var(--color-primary) / <alpha-value>)',
      'primary-variant': 'rgb(var(--color-primary-variant) / <alpha-value>)',
      secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
      softgray: 'rgb(var(--color-softgray) / <alpha-value>)',
      gray: 'rgb(var(--color-gray) / <alpha-value>)',
      white: 'rgb(var(--color-white) / <alpha-value>)',
      transparent: 'transparent',
      black: 'black'
    },
    extend: {      
      screens: {
        '3xl': '1600px',
      },
    },
  },
  plugins: [],
}

