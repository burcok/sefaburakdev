module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}', './node_modules/tw-elements/dist/js/**/*.js'],
   darkMode: 'class', // or 'media' or 'class'
   theme: {
     extend: {
      keyframes: {
        pulse: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        }
      },
      animation: {
        pulse: 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        
      }
     },
   },
   variants: {
      extend: {
  
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