/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        doctorPortal: {
          primary: '#19D3AE',
          secondary: '#0FCFEC',
          accent: '#3a4256',
          neutral: '#3A4256',
          'neutral-content': '#ffffff',
          'base-100': '#ffffff',
          'base-200': '#f9fafb',
          'base-300': '#d1d5db',
          'base-content': '#1f2937',
          info: '#2094f3',
          success: '#009485',
          warning: '#ff9900',
          error: '#ff5724',
        }
      }
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}