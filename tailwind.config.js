/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/**/*.{tsx,js,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}

// npx tailwindcss -i ./public/styles/input.css -o ./public/styles/output.css --watch  