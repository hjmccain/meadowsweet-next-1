/** @type {import('tailwindcss').Config} */
module.exports = {
  // important: true,
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Erika', 'serif'],
        display: ['Lovegrove', 'serif'],
      },
      colors: {
        "light-white": "#fefefe",
        "not-white": "#faf6f6",
        green: "#bdae38",
        // green: "#ddd06a",
        peach: "#fab787",
        "pink-light": "#f3e7e7",
        "pink-bright": "#fb6eb4",
        "pink-hover": "#E163A2"      }
    },
  },
  plugins: [],
}
