/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Paths to your files
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4a90e2',
        secondary: '#ff6f61',
      },
    },
  },
  plugins: [],
}
