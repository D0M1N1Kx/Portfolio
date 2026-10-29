/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'clean-bounce': {
          '0%, 100%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-14px)',
          },
        },
        'bounce-small': {
          '0%, 100%': {
            transform: 'translateY(-10px)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '50%': {
            transform: 'translateY(0)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
          },
        },
      },
      animation: {
        'clean-bounce': 'clean-bounce 2.2s ease-in-out infinite',
        'bounce-small': 'bounce-small 1.2s infinite',
      },
    },
  },
  plugins: [],
}
