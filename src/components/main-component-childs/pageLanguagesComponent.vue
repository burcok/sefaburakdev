<template>
    <div v-motion-slide-bottom class="duration-1000 pb-20 px-10 md:px-32 bg-white dark:bg-gray-800">
        <div class="duration-1000 text-center pt-10 font-bold text-3xl dark:text-white/80 text-gray-800">{{$store.state.user.currentLang['home_languages_text1']}}</div>
        <div class="duration-1000 text-center pt-3 font-light text-xl text-gray-400">{{$store.state.user.currentLang['home_languages_text2']}}</div>
        <div class="mt-20 w-full bg-gray-200 rounded-full dark:bg-gray-700">
            <div class="flex h-4">
                <div class="bg-green-400 p-1 rounded-none rounded-tl-full rounded-bl-full" style="width: 94.6%"></div>
                <div class="bg-yellow-300 p-1" style="width: 3.4%"></div>
                <div class="bg-blue-600 p-1 rounded-none rounded-tr-full rounded-br-full" style="width: 2%"></div>
            </div>
        </div>
        <div class="flex">
            <span class="flex items-center text-sm font-medium text-gray-900 dark:text-white"><span class="flex w-2.5 h-2.5 bg-green-400 rounded-full mr-1.5 flex-shrink-0"></span>Vue</span>
            <span class="flex items-center text-sm font-medium mx-3 text-gray-900 dark:text-white"><span class="flex w-2.5 h-2.5 bg-yellow-300 rounded-full mr-1.5 flex-shrink-0"></span>Javascript</span>
            <span class="flex items-center text-sm font-medium text-gray-900 dark:text-white"><span class="flex w-2.5 h-2.5 bg-blue-600 rounded-full mr-1.5 flex-shrink-0"></span>Other</span>
        </div>
    </div>
    
</template>

<script>

</script>