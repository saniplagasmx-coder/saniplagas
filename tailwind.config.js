/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50:  '#e8f4ff',
          100: '#d1e9ff',
          200: '#a3d3ff',
          300: '#75bdff',
          400: '#4992F2',
          500: '#4AA2D9',
          600: '#2f7fc4',
          700: '#1d5c96',
          800: '#0e3968',
          900: '#041a3a',
        },
        green: {
          50:  '#e6fdf0',
          100: '#ccfce0',
          200: '#99f9c1',
          300: '#66f6a1',
          400: '#4ED957',
          500: '#49BF72',
          600: '#2ea04e',
          700: '#1d7a38',
          800: '#0d5422',
          900: '#042d0e',
        },
        dark: '#0D0D0D',
      },
      fontFamily: {
        display: ['Exo 2', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #4992F2 0%, #49BF72 50%, #4ED957 100%)',
        'brand-gradient-v': 'linear-gradient(180deg, #4992F2 0%, #49BF72 100%)',
        'hero-mesh': 'radial-gradient(at 20% 50%, rgba(73,146,242,0.15) 0px, transparent 50%), radial-gradient(at 80% 20%, rgba(78,217,87,0.1) 0px, transparent 50%), radial-gradient(at 50% 80%, rgba(74,162,217,0.12) 0px, transparent 50%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out infinite 2s',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'slide-up': 'slideUp 0.8s ease-out forwards',
        'fade-in': 'fadeIn 1s ease-out forwards',
        'gradient-x': 'gradientX 4s ease infinite',
        'spin-slow': 'spin 12s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        gradientX: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      boxShadow: {
        'glow-blue': '0 0 40px rgba(73,146,242,0.35)',
        'glow-green': '0 0 40px rgba(78,217,87,0.35)',
        'card': '0 4px 24px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.05)',
        'card-hover': '0 16px 48px rgba(73,146,242,0.2), 0 4px 12px rgba(0,0,0,0.1)',
      }
    },
  },
  plugins: [],
};
