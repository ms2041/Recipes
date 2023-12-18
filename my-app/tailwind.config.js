/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        'SF-thin': ['SF-Pro-Display-Thin'],
        'cascadia': ['Cascadia-Mono'],
        'sf-pro': ['sf-pro-display_light'],
      }
    },
  },
  plugins: [],
}

