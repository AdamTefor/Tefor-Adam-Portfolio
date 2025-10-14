
/** @type {import('tailwindcss').Config} */
export default {
  content: [  "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"],
    darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#0ea5e9",
          dark: "#0b78a8"
        }
      },
      fontFamily: {
        sans: ["ui-sans-serif", "system-ui", "Inter", "Arial", "sans-serif"]
      }
    }
  },
  darkMode: "class",
  plugins: []
};
