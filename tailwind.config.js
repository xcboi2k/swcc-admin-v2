/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    screens: {
      xxs: '375px',
      sm: '425px',
      '2sm': '768px',
      md: '1200px',
      lg: '1500px',
      '2xl': '1920px',
    },
    colors: {
      white: '#FFFFFF',
      primary: '#f1d00a',
      secondary1: '#243447',
      secondary2: '#141d26',
    },
    container: {
      center: true,
      padding: '2rem',
      screens: {
        xxs: '375px',
        xs: '425px',
        md: '1366px',
        lg: '1440px',
        '2xl': '1920px',
      },
    },
    extend: {
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}

