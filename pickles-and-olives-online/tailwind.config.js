/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        themePink: '#CC7774',
        themeBlue: '#6A8EAE',
        themeGreen: '#7FA97A',
        themeYellow: '#FCBF49',
        themeLight: '#FFF2F1',
        themeDark: '#333333',
      }
    },
  },
  plugins: [],
}

