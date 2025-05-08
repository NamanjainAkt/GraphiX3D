/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#000',
          dark: '#4f46e5',
        },
        secondary: {
          DEFAULT: '#27e0b3',
          dark: '#7c3aed',
        },
      },
    },
  },
  plugins: [],
}