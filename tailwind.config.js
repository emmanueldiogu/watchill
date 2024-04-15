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
        'glow': '0px 0px 20px 4px rgba(255, 255, 255, 0.80)',
        'glow-2': '0px 0px 20px rgba(239, 217, 18, 0.80)',
        'custom': '0px 10px 25px 1px #270011',
        'input': '0px 4px 4px 0px rgba(9, 9, 9, 0.30) inset'
      },
      fontSize: {
        'clamp-h1': 'clamp(2.25rem, 1.6612359550561797rem + 2.397003745318352vw, 4.25rem)',
        'clamp-h2': 'clamp(1.5rem, 1.3528089887640449rem + 0.599250936329588vw, 2rem)',
        'clamp-h3': 'clamp(1.25rem, 1.1764044943820224rem + 0.299625468164794vw, 1.5rem)',
        'clamp-h4': 'clamp(1rem, 0.9632022471910112rem + 0.149812734082397vw, 1.125rem)',
        'clamp-menu': 'clamp(1.125rem, 1.0882022471910113rem + 0.149812734082397vw, 1.25rem)',
      },
      lineHeight: {
        '100': '100%'
      }
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('tailwind-scrollbar-hide')
  ],
}
