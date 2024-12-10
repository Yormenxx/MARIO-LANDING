/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'media',
  content: ["./*.{html,js}",  "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      backgroundImage:theme => ({
        'wave-pattern': 'url(../img/wave-white.png)'
      })
    },
  },
  plugins: [require('flowbite/plugin')],
}

