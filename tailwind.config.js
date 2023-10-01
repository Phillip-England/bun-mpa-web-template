/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/**/*.{tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
				"color1": "#2D3047",
				"color2": "#93B7BE",
				"color3": "#E0CA3C",
				"color4": "#A799B7",
				"color5": "#048A81",
	}
    },
  },
  plugins: [],
}

// npx tailwindcss -i ./public/styles/input.css -o ./public/styles/output.css --watch  