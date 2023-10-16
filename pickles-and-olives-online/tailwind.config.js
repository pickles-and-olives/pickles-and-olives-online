/** @type {import('tailwindcss').Config} */
export default {
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#FCBF49',
          secondary: '#6A8EAE',
          accent: '#CC7774',
          neutral: '#333333',
          'base-100': '#FFF2F1',
          info: '#7FA97A',
          success: '#166534',
          warning: '#fbbf24',
          error: '#dc2626',
        },
      },
    ],
  },
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        themePink: '#CC7774',
        themeBlue: '#6A8EAE',
        themeGreen: '#7FA97A',
        themeYellow: '#FCBF49',
        themeLight: '#FFF2F1',
        themeDark: '#333333',
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
};
