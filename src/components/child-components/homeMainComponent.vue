
<template>
    <main class="dark:bg-gray-800 transition-colors h-screen duration-1000">
        <div class="relative flex justify-around items-center flex-wrap px-6 lg:px-8">
          <div class="mx-12 max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40">
              <div v-motion-pop v-motion-pop-visible>
                <h6 style="font-family: 'Sevillana', cursive;" class="dark:text-gray-400 text-xl italic tracking-tight sm:text-start sm:text-xl mb-3">~ {{this.$store.state.user.currentLang['home_text_hello']}}</h6>
                <h1 class="dark:text-white/90 text-4xl font-bold tracking-tight sm:text-start sm:text-6xl">Sefa Burak Dereli</h1>
                <p style="font-family: 'Quicksand', sans-serif;" class="dark:text-gray-400 mt-6 text-lg leading-8 text-gray-600 sm:text-start">JR. Front-End Developer</p>
                <div class="mt-8 flex gap-x-4 sm:justify-start">
                  <button data-popover-target="popover-bottom" data-popover-placement="bottom" type="button" class="inline-block rounded-lg bg-blue-700/80 px-4 py-1.5 text-base font-semibold leading-7 hover:text-white text-white/80 shadow-sm ring-1 ring-indigo-600 hover:bg-blue-800 hover:ring-indigo-700">
                    {{this.$store.state.user.currentLang['home_button_cv']}}
                    <span class="text-indigo-200" aria-hidden="true">&rarr;</span>
                  </button>
                  <div data-popover id="popover-bottom" role="tooltip" class="absolute z-10 invisible inline-block w-64 text-sm font-light text-gray-500 transition-opacity duration-300 bg-white border border-gray-400 rounded-lg shadow-sm opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800">
                      <div class="px-3 py-2 bg-gray-100 border-b border-gray-400 rounded-t-lg dark:border-gray-600 dark:bg-gray-700">
                          <h3 class="font-semibold text-gray-900 dark:text-white">CV</h3>
                      </div>
                      <div class="px-3 py-2">
                        <img src="../../assets/cv.jpg" alt="">
                      </div>
                      <div data-popper-arrow></div>
                  </div>

                  <router-link to="/about" href="#" class="text-center hover:bg-gray-900 hover:text-white bg-gray-800 text-white/80 dark:hover:bg-gray-300 dark:bg-white/90 dark:text-gray-700 inline-block rounded-lg px-4 py-1.5 text-base font-semibold leading-7 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                    {{this.$store.state.user.currentLang['home_button_about']}}
                    <span class="text-gray-400 dark:text-gray-700" aria-hidden="true">&rarr;</span>
                  </router-link>
                </div>
              </div>
              <!-- <div class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-42rem)]">
                <svg class="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+24rem)] sm:h-[42.375rem]" viewBox="0 0 1155 678" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)" fill-opacity=".5" d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z" />
                  <defs>
                    <linearGradient id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc" x1="1155.49" x2="-78.208" y1=".177" y2="474.645" gradientUnits="userSpaceOnUse">
                      <stop stop-color="rgb(255 255 255)"></stop>
                      <stop offset="1" stop-color="rgb(88 80 236)"></stop>
                    </linearGradient>
                  </defs>
                </svg>
              </div> -->
          </div>
            <div v-motion
            :initial="{ scale: 0, x: 1000 }"
            :enter="{ x: 0, scale: 1,transition: {
              type: 'spring',
              damping: 25,
              mass: 5,
            },}"
            :delay="200" 
            class="mx-12 max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40">
            <div class="w-80 transition-colors duration-1000 md:w-96 h-80 border-2 rounded-2xl dark:border-gray-700/20 dark:bg-gray-800/75 bg-slate-100 drop-shadow-2xl py-16 px-4">
                <div class="font-mono"><span class="text-gray-500">1</span>&nbsp;&nbsp;<span class="text-purple-800 dark:text-purple-600">export default</span><span class="text-orange-400">{</span></div>
                <div class="font-mono"><span class="text-gray-500">2</span>&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-blue-600">data</span><span class="text-purple-800 dark:text-purple-600 tracking-widest"> () {</span></div>
                <div class="font-mono"><span class="text-gray-500">3</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-red-500">name</span><span class="text-blue-600">:</span> <span class="text-green-800 dark:text-green-500">'Sefa Burak'</span><span class="dark:text-white"> ,</span></div>
                <div class="font-mono"><span class="text-gray-500">4</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-red-500">age</span><span class="text-blue-600">:</span> <span class="text-purple-800 dark:text-purple-600">new</span> <span class="text-yellow-500">(</span><span class="text-blue-600">Date</span><span class="text-purple-800 dark:text-purple-600 tracking-widest">()</span><span class="dark:text-white">.</span><span class="text-blue-600">getFullYear</span><span class="text-purple-800 dark:text-purple-600 tracking-widest">()</span></div>
                <div class="font-mono"><span class="text-gray-500">5</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-800 dark:text-purple-600">-</span> <span class="text-orange-600">2005</span><span class="text-yellow-500">)</span><span class="dark:text-white">,</span></div>
                <div class="font-mono"><span class="text-gray-500">6</span>&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-800 dark:text-purple-600">}</span><span class="dark:text-white"> ,</span></div>
                <div class="font-mono"><span class="text-gray-500">7</span>&nbsp;&nbsp;<span class="text-orange-400">}</span></div>
            </div>
          </div>
        </div>
      </main>
      <div class="h-screen w-full bg-yellow-300">
        <div 
        class="h-52 w-52 bg-red-500">

        </div>
      </div>
</template>

<style>

@import url('https://fonts.googleapis.com/css2?family=Teko:wght@500&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Sevillana&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Quicksand&display=swap');
* {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
</style>