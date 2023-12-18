/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        'SF-thin': ['SF-Pro-Display-Thin'],
        'cascadia': ['Cascadia-Mono'],
        'sf-pro-light': ['sf-pro-display_light'],
        'sf-pro-regular': ['sf-pro-display_regular'],
      }
    },
  },
  plugins: [],
}

