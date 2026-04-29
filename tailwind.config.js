/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        crimson: {
          DEFAULT: '#8B0000',
          light: '#C41E3A',
          dark: '#5C0011',
        },
        gold: {
          DEFAULT: '#D4AF37',
          light: '#F4E4BC',
          dark: '#AA8C2C',
        },
        cream: '#FDF8F0',
        ink: '#0A0A0A',
        charcoal: '#2A2A2A',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'pulse-gold': 'pulseGold 4s ease-in-out infinite',
        'bounce-slow': 'bounceSlow 2s infinite',
        'slide-in': 'slideIn 0.3s ease forwards',
        'toast-in': 'toastIn 0.4s ease forwards',
        'toast-out': 'toastOut 0.4s ease forwards',
      },
      keyframes: {
        pulseGold: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.5' },
          '50%': { transform: 'scale(1.1)', opacity: '0.8' },
        },
        bounceSlow: {
          '0%, 20%, 50%, 80%, 100%': { transform: 'translateX(-50%) translateY(0)' },
          '40%': { transform: 'translateX(-50%) translateY(-10px)' },
          '60%': { transform: 'translateX(-50%) translateY(-5px)' },
        },
        slideIn: {
          from: { opacity: '0', transform: 'translateX(20px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        toastIn: {
          from: { transform: 'translateX(-50%) translateY(100px)', opacity: '0' },
          to: { transform: 'translateX(-50%) translateY(0)', opacity: '1' },
        },
        toastOut: {
          from: { transform: 'translateX(-50%) translateY(0)', opacity: '1' },
          to: { transform: 'translateX(-50%) translateY(100px)', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}
