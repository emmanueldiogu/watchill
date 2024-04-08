/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main1': '#DB0660',
        'main2': '#EFD912',
      },
      flex: {
        'full': '0 0 100%'
      },
      boxShadow: {
        'glow': '0px 0px 30px rgba(255, 255, 255, 0.20)',
      }
    },
  },
  plugins: [],
}
