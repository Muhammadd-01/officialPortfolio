/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gradientColorStops: {
        "primary-light": "#6a11cb",
        "secondary-light": "#2575fc",
        "primary-dark": "#ff00cc",
        "secondary-dark": "#3333ff",
      },
    },
  },
  plugins: [],
  darkMode: "class",
}

