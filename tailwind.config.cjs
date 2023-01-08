module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}', './node_modules/tw-elements/dist/js/**/*.js'],
   darkMode: 'class', // or 'media' or 'class'
   theme: {
     extend: {
      
     },
   },
   variants: {
      animation: ["motion-safe"],
      extend: {
        animation: {
          fadeIn: "fadeIn 2s ease-in forwards"
        },
        keyframes: {
          fadeIn: {
            "0%": { opacity: 0 },
            "100%": { opacity: 1 }
          }
        }
      },
   },
   plugins: [
    require('flowbite/plugin'),
    require('tw-elements/dist/plugin')
  ],
  content: [
    "./node_modules/flowbite/**/*.js"
  ],
 }