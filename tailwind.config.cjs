module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}', './node_modules/tw-elements/dist/js/**/*.js'],
   darkMode: 'class', // or 'media' or 'class'
   theme: {
     extend: {
      
     },
   },
   variants: {
     extend: {},
   },
   plugins: [
    require('flowbite/plugin'),
    require('tw-elements/dist/plugin')
  ],
  content: [
    "./node_modules/flowbite/**/*.js"
  ],
 }