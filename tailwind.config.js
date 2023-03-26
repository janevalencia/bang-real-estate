// Font family support for Tailwind CSS with @next/font plugin.
const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      xs: "0.625rem", // 10px
      sm: "0.875rem", // 14px
      base: "1rem", // 16px
      lg: "1.125rem", // 18px
      xl: "3rem", // 48px
      "2xl": "5.625rem", // 90px
    },
    fontWeight: {
      "light": 300,
      "normal": 400,
      "bold": 700
    },
    extend: {
      colors: {
        "lugar-dark": "#1E3240",
        "lugar-white": "#FFFFFF",
        "lugar-gray": "#BDBDBD",
        "lugar-blue": "#AFD4E2"
      },
      fontFamily: {
        primary: [`var(--font-primary)`, ...fontFamily.sans], // Set fontFamily to Mulish for Tailwind.
      },
      boxShadow: {
        'lugar': '0 2px 18px rgba(0, 0, 0, 0.04)', // Shadow Box for Property Card.
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'), // To use typography plugin like prose.
  ],
}