// Font family support for Tailwind CSS with @next/font plugin.
const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      "light": 300,
      "normal": 400,
      "medium": 500,
      "semibold": 600,
      "bold": 700
    },
    extend: {
      fontFamily: {
        primary: [`var(--font-primary)`, ...fontFamily.sans],
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'), // to use typography plugin like prose
  ],
}
