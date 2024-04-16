/** @type {import('tailwindcss').Config} */

const baseFontSize = 10

module.exports = {
  content: ["home.hbs"],
  theme: {
    extend: {
      shadows: {
        'juicy': '0px 100px 80px 0px rgba(0, 0, 0, 0.03), 0px 41.778px 33.422px 0px rgba(0, 0, 0, 0.02), 0px 22.336px 17.869px 0px rgba(0, 0, 0, 0.02), 0px 12.522px 10.017px 0px rgba(0, 0, 0, 0.01), 0px 6.65px 5.32px 0px rgba(0, 0, 0, 0.01), 0px 2.767px 2.214px 0px rgba(0, 0, 0, 0.01)'
      }
    },
  },
  plugins: [],
}