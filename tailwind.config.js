/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
    fontFamily: {
      "inter": ["Inter", "sans-serif"],
    }   
    },
    colors: {
      "black": "#191919",
      "dark-gray": "#292929",
      "white" : "#F1F6F9",
      "cream": "#F7E2E2",
      "green": "#B9EDDD",
      "blue": "#508dff"
    }
  },
  plugins: [],
}

