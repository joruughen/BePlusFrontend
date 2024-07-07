/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        c1: 'var(--color-c1)',
        c2: 'var(--color-c2)',
        c3: 'var(--color-c3)',
        c4: 'var(--color-c4)',
        c5: 'var(--color-c5)',
        'background': 'var(--color-background)',
      },
      fontFamily: {
        sans: ['Nunito', 'Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
      }
    },
  },
  plugins: [],
}