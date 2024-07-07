/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './docs/.vuepress/**/*.{vue,js,ts,jsx,tsx}',
    './docs/**/*.{md,html,vue}',
    './node_modules/vue3-carousel/dist/vue3-carousel.esm.js'  // Tambahkan jika diperlukan untuk carousel
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}