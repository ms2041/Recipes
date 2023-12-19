/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        'sf-pro-light': ['sf-pro-display_light'],
        'sf-pro-regular': ['sf-pro-display_regular'],
        'merriweather-light': ['merriweather_light'],
      }
    },
  },
  plugins: [],
}

