/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        migo: {
          DEFAULT: '#1A7A4A',
          dark: '#145E38',
          light: '#E8F5EE',
          lighter: '#F0FAF4',
        },
        accent: '#FF6B35',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
