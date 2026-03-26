/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        dark: {
          50:  '#050508',
          100: '#0e0d18',
          200: '#1e1c30',
          300: '#2e2c48',
          400: '#4a4870',
          500: '#706c90',
          600: '#a09cbc',
          700: '#c8c5de',
          800: '#e4e2f4',
          900: '#f0effe',
          950: '#fafaf9',
        },
        accent: {
          50:  '#e0feff',
          100: '#ccfcfe',
          200: '#99f5fd',
          300: '#56eaf8',
          400: '#18d9f0',
          500: '#00c2d8',
          600: '#009bb3',
          700: '#007a8f',
          800: '#005f70',
          900: '#004a58',
        },
      },
      fontFamily: {
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
        body:    ['Inter', 'system-ui', 'sans-serif'],
        mono:    ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'fade-in':      'fadeIn 0.5s ease-out forwards',
        'slide-up':     'slideUp 0.5s ease-out forwards',
        'slide-in-left':'slideInLeft 0.5s ease-out forwards',
        'glow':         'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%':   { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%':   { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        glow: {
          '0%':   { boxShadow: '0 0 20px rgba(0, 194, 216, 0.3)' },
          '100%': { boxShadow: '0 0 30px rgba(0, 194, 216, 0.6)' },
        },
      },
    },
  },
  plugins: [],
};
