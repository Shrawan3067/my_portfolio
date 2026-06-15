/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--primary) / <alpha-value>)',
        'primary-dark': 'rgb(var(--primary-dark) / <alpha-value>)',
        secondary: 'rgb(var(--secondary) / <alpha-value>)',
        dark: 'rgb(var(--dark) / <alpha-value>)',
        'dark-light': 'rgb(var(--dark-light) / <alpha-value>)',
        light: 'rgb(var(--light) / <alpha-value>)',
        gray: 'rgb(var(--gray) / <alpha-value>)',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'blink': 'blink 0.7s infinite',
        'border-glow': 'borderGlow 2s linear infinite',
        'icon-pulse': 'iconPulse 1.5s ease infinite',
        'fade-in': 'fadeIn 1s ease forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
        borderGlow: {
          '0%': { opacity: 0.7 },
          '50%': { opacity: 1 },
          '100%': { opacity: 0.7 },
        },
        iconPulse: {
          '0%': { transform: 'scale(1.1) rotate(10deg)' },
          '50%': { transform: 'scale(1.3) rotate(10deg)' },
          '100%': { transform: 'scale(1.1) rotate(10deg)' },
        },
        fadeIn: {
          'from': { opacity: 0, transform: 'translateY(20px)' },
          'to': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}