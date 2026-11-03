/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Syne"', 'Arial', 'sans-serif'],
        serif: ['system-ui', '-apple-system', '"Segoe UI"', 'sans-serif'],
        sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
      },
      colors: {
        peach: {
          DEFAULT: '#f8d9b3',
          light: '#fdf7f0',
          subtle: '#faecd9',
          surface: '#fdf4e9',
          deep: '#ebc089',
        },
        woodland: {
          DEFAULT: '#4a4616',
          dark: '#35320e',
          muted: '#6f6a31',
          faint: '#969055',
        },
      },
    },
  },
  plugins: [],
}
