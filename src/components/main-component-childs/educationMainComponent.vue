<template>
    <div class="w-3/4 mx-auto mt-[5%] flex flex-col">
        <div class="flex flex-col">
            <div v-motion
            :initial="{ opacity: 0, y: -1000 }"
            :enter="{
              y: 0,
              opacity: 1,
              transition: {
                type: 'spring',
                damping: 35,
                mass: 2,
              },
            }"
            :delay="400" ><h2 class="before:h-2 before:w-20 before:-mt-2 before:bg-blue-600 before:absolute duration-1000 text-3xl font-mono dark:text-white">{{ $store.state.user.currentLang["education_work_h2"] }}</h2></div>
            <div v-motion
            :initial="{ opacity: 0, x: -1000 }"
            :enter="{
              x: 0,
              opacity: 1,
              transition: {
                type: 'spring',
                damping: 30,
                mass: 2,
              },
            }"
            :delay="200" class="inline-flex flex-col justify-center">
                <div class="scale duration-1000 my-10 p-6 shadow-inner dark:shadow-xl bg-gray-300/50 dark:bg-gray-700/40 rounded-3xl">
                    <p class="duration-1000 text-xl font-mono dark:text-gray-300 text-gray-600">İsmet İnönü Mesleki ve Teknik Anadolu Lisesi</p>
                    <p class="font-mono dark:text-gray-400 text-gray-500">{{ $store.state.user.currentLang["education_work_p"] }}</p>
                    <p class="font-mono dark:text-gray-400 text-gray-500">2019 - 2023 Note: 90</p>
                </div>
            </div>
            <div v-motion
            :initial="{ opacity: 0, x: 1000 }"
            :enter="{
              x: 0,
              opacity: 1,
              transition: {
                type: 'spring',
                damping: 30,
                mass: 2,
              },
            }"
            :delay="400" class="inline-flex flex-col justify-center">
                <div class="rvsscale duration-1000 justify-center p-5 shadow-inner dark:shadow-xl bg-gray-300/60 dark:bg-gray-700/50 rounded-3xl">
                    <p class="duration-1000 text-xl font-mono dark:text-gray-300 text-gray-600">Ural Telekom</p>
                    <p class="font-mono dark:text-gray-400 text-gray-500">{{ $store.state.user.currentLang["education_work_p_2"] }}</p>
                    <p class="font-mono dark:text-gray-400 text-gray-500">12.09.2022 ~ 16.06.2023</p>
                </div>
            </div>
        </div>

        <div class="mt-28 flex flex-col">
            <div v-motion-slide-left v-motion-slide-visible-left ><h2 class="before:h-2 before:w-20 before:-mt-2 before:bg-red-600 before:absolute duration-1000 text-3xl font-mono dark:text-white">{{ $store.state.user.currentLang["education_skills_h2"] }}</h2></div>
            <div v-motion-slide-bottom v-motion-slide-visible-bottom class="flex flex-wrap justify-evenly">
                <div class="scale duration-1000 inline-flex flex-col items-center justify-center my-10 md:mx-10 mx-auto p-5 w-28 shadow-inner dark:shadow-xl bg-gray-300/60 dark:bg-gray-700/50 rounded-3xl">
                    <p class="duration-1000 text-lg font-mono dark:text-gray-300 text-gray-600">Git</p>
                    <img src="../../assets/icons/git-svgrepo-com.svg" height="40px" width="40px" alt="">    
                </div>
                <div class="rvsscale duration-1000 inline-flex flex-col items-center justify-center my-10 md:mx-10 mx-auto p-6 w-28 shadow-inner dark:shadow-xl bg-gray-300/50 dark:bg-gray-700/40 rounded-3xl">
                    <p class="duration-1000 text-lg font-mono dark:text-gray-300 text-gray-600">PHP</p>
                    <img src="../../assets/icons/php-svgrepo-com.svg" height="40px" width="40px" alt="">
                </div>
                <div class="scale duration-1000 inline-flex flex-col items-center justify-center my-10 md:mx-10 mx-auto p-5 w-28 shadow-inner dark:shadow-xl bg-gray-300/60 dark:bg-gray-700/50 rounded-3xl">
                    <p class="duration-1000 text-lg font-mono dark:text-gray-300 text-gray-600">WordPress</p>
                    <img src="../../assets/icons/wordpress-svgrepo-com.svg" height="40px" width="40px" alt="">    
                </div>
                <div class="rvsscale duration-1000 inline-flex flex-col items-center justify-center my-10 md:mx-10 mx-auto p-5 w-28 shadow-inner dark:shadow-xl bg-gray-300/50 dark:bg-gray-700/40 rounded-3xl">
                    <p class="duration-1000 text-lg font-mono dark:text-gray-300 text-gray-600">Typescript</p>
                    <img src="../../assets/icons/typescript-official-svgrepo-com.svg" height="40px" width="40px" alt="">
                </div>
                <div class="scale duration-1000 inline-flex flex-col items-center justify-center my-10 md:mx-10 mx-auto p-5 w-28 shadow-inner dark:shadow-xl bg-gray-300/60 dark:bg-gray-700/50 rounded-3xl">
                    <p class="duration-1000 text-lg font-mono dark:text-gray-300 text-gray-600">Javascript</p>
                    <img src="../../assets/icons/javascript-svgrepo-com.svg" height="40px" width="40px" alt="">    
                </div>
                <div class="rvsscale duration-1000 inline-flex flex-col items-center justify-center my-10 md:mx-10 mx-auto p-5 w-28 shadow-inner dark:shadow-xl bg-gray-300/60 dark:bg-gray-700/50 rounded-3xl">
                    <p class="duration-1000 text-lg font-mono dark:text-gray-300 text-gray-600">Vue</p>
                    <img src="../../assets/icons/vue-svgrepo-com.svg" height="40px" width="40px" alt="">    
                </div>
                <div class="scale duration-1000 inline-flex flex-col items-center justify-center my-10 md:mx-10 mx-auto p-5 w-28 shadow-inner dark:shadow-xl bg-gray-300/60 dark:bg-gray-700/50 rounded-3xl">
                    <p class="duration-1000 text-lg font-mono dark:text-gray-300 text-gray-600">Python</p>
                    <img src="../../assets/icons/python-svgrepo-com.svg" height="40px" width="40px" alt="">    
                </div>
                <div class="rvsscale duration-1000 inline-flex flex-col items-center justify-center my-10 md:mx-10 mx-auto p-5 w-28 shadow-inner dark:shadow-xl bg-gray-300/60 dark:bg-gray-700/50 rounded-3xl">
                    <p class="duration-1000 text-lg font-mono dark:text-gray-300 text-gray-600">Flask</p>
                    <img src="../../assets/icons/flask-svgrepo-com.svg" height="40px" width="40px" alt="">    
                </div>
                <div class="scale duration-1000 inline-flex flex-col items-center justify-center my-10 md:mx-10 mx-auto p-5 w-28 shadow-inner dark:shadow-xl bg-gray-300/60 dark:bg-gray-700/50 rounded-3xl">
                    <p class="duration-1000 text-lg font-mono dark:text-gray-300 text-gray-600">CSS3</p>
                    <img src="../../assets/icons/css-3-svgrepo-com.svg" height="40px" width="40px" alt="">    
                </div>
                <div class="rvsscale duration-1000 inline-flex flex-col items-center justify-center my-10 md:mx-10 mx-auto p-5 w-28 shadow-inner dark:shadow-xl bg-gray-300/60 dark:bg-gray-700/50 rounded-3xl">
                    <p class="duration-1000 text-lg font-mono dark:text-gray-300 text-gray-600"> Tailwind</p>
                    <img src="../../assets/icons/tailwind-svgrepo-com.svg" height="40px" width="40px" alt="">    
                </div>
            </div>
            <div class="mt-28 mb-28 md:mb-48 flex flex-col ">
                <div v-motion-slide-left v-motion-slide-visible-left ><h2 class="before:h-2 before:w-20 before:-mt-2 before:bg-green-600 before:absolute duration-1000 text-3xl font-mono dark:text-white">{{ $store.state.user.currentLang["education_languages_h2"] }}</h2></div>
                <div class="flex flex-wrap mt-8">
                    <div class="scale duration-1000 bg-gray-300/60 dark:bg-gray-700/50 rounded-xl flex flex-col justify-center text-center mx-4 md:mx-12 p-3 flex-wrap w-11/12 md:w-4/12">
                        <h3 class="duration-1000  text-xl font-semibold font-mono dark:text-gray-300 text-gray-600">{{ $store.state.user.currentLang["education_languages_h3"] }}</h3>
                        <p class="duration-1000 text-lg font-mono dark:text-gray-300 text-gray-600">{{ $store.state.user.currentLang["education_languages_p"] }}</p>
                    </div>
                    <div class="rvsscale duration-1000 bg-gray-300/60 dark:bg-gray-700/50 rounded-xl flex flex-col justify-center text-center mx-4 mt-6 md:mt-0 md:mx-0 p-3 flex-wrap w-11/12 md:w-4/12">
                        <h3 class="duration-1000 text-xl font-semibold font-mono dark:text-gray-300 text-gray-600">{{ $store.state.user.currentLang["education_languages_h3_2"] }}</h3>
                        <p class="duration-1000 text-lg font-mono dark:text-gray-300 text-gray-600">{{ $store.state.user.currentLang["education_languages_p_2"] }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>
<script></script>
<style scoped>
.scale:hover{
    transform: rotateZ(2deg) scale(1.05);
}
.rvsscale:hover{
    transform: rotateZ(-2deg) scale(1.05);
}
</style>