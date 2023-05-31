/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Erika', 'serif'],
      },
      colors: {
        "not-white": "#faf6f6",
        green: "#ddd06a",
        peach: "#fab787",
        "pink-light": "#f3e7e7",
        "pink-bright": "#fb6eb4",
      }
    },
  },
  plugins: [],
}
