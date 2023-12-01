/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        navbar: ['Oleo Script Swash Caps', 'cursive'],
      },
      keyframes: {
        fromTop: {
          '0%': { 
            opacity: 0,
            transform: 'translateY(100%)' 
          },
          '50%': { 
            opacity: 0,
            transform: 'translate(50)' 
          },
          '100%': { 
            opacity: 1,
            transform: 'translateY(0)' 
          },
        },
      },
      animation: {
        'animateFromTop': 'fromTop 2s',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
