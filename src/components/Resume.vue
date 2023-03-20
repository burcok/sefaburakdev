import router from '../router'; import router from '../router';

<template>
  <div class="w-screen h-screen bg-[#1E1C27] overflow-x-hidden">
    <iframe
      src="https://drive.google.com/file/d/1k03iWgVJuWkKzgUcWNMfrGaqSAPjUQqC/preview"
      width="100%"
      height="100%"
    ></iframe>
    <router-link
      to="/"
      class="duration-500 hover:scale-105 hover:bg-[#2d2a3a] shadow-2xl font-semibold text-white text-lg md:text-xl absolute bottom-2 md:bottom-10 right-4 md:right-16 rounded-3xl py-5 px-7 bg-[#2d2a3a] md:bg-[#1E1C27]"
    >
      {{ $store.state.user.currentLang["pageNotFound_button"] }}
    </router-link>
  </div>
</template>
<script></script>
