/** @type {import('tailwindcss').Config} */

export default {
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Inter'", "sans-serif"]
      }
    }
  }
}

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: { extend: {} },
  plugins: [],
}

