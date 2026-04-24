import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        savdo: {
          DEFAULT: 'rgb(57, 173, 168)',
          50: '#effaf9',
          100: '#d6f2f0',
          200: '#b0e4e0',
          300: '#7fcec8',
          400: '#4fb5ae',
          500: 'rgb(57, 173, 168)',
          600: '#2d8a86',
          700: '#256f6c',
          800: '#205958',
          900: '#1d4a49',
          950: '#0d2a2a',
        },
        forest: {
          50: '#effaf0',
          100: '#d8f1db',
          200: '#b5e2bb',
          300: '#86cc90',
          400: '#52b061',
          500: '#2f9442',
          600: '#1f7632',
          700: '#1a5c29',
          800: '#154826',
          900: '#0f3824',
          950: '#082018',
        },
        lime: {
          50: '#f6fde5',
          100: '#ecfbc9',
          200: '#dcf79a',
          300: '#c8f262',
          400: '#b8ec3b',
          500: '#9fd51f',
          600: '#7bab15',
          700: '#5c8215',
          800: '#4a6718',
          900: '#3e581a',
          950: '#213208',
        },
        cream: {
          50: '#fdfdf3',
          100: '#f3f5df',
          200: '#e9eec5',
          300: '#dbe3a1',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 40px -10px rgba(57, 173, 168, 0.25)',
        card: '0 4px 24px -6px rgba(15, 23, 42, 0.08)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
