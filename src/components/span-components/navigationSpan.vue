
<template>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />          
  <nav class="transition-colors duration-1000 bg-white border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-800">
      <div class="container flex flex-wrap items-center justify-around mx-auto">
      <a href="/" class="flex items-center">
          <span class="self-center text-xl font-sans font-bold whitespace-nowrap tracking-wider dark:text-white duration-1000">sefaburak.dev( )</span>
      </a>
      <div class="flex items-center md:order-2">
          <!-- Hidden -->
          <!-- Dropdown -->
          <div class="flex justify-center">
              <div class="relative">
                <button @click="menubarDarkLightModeClick" class="
                inline-flex items-center justify-center 
                p-2 text-sm text-gray-500 rounded cursor-pointer 
                hover:text-gray-900 dark:hover:text-white
                duration-500
                "
                type="button">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="dark-icon w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="light-icon w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                </svg>
                                  
                </button>
                <button
                  class="
                    dropdown-toggle
                    inline-flex items-center justify-center 
                    p-2 text-sm text-gray-500 rounded cursor-pointer 
                    hover:text-gray-900 hover:bg-gray-100 
                    dark:hover:bg-gray-800 dark:hover:text-white
                  "
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                <span class="material-symbols-outlined text-gray-700 dark:text-gray-400 dark:hover:text-white">translate</span>
                  
                </button>
                <ul
                  class="dark:bg-gray-900 
                  transition-colors duration-1000
                  dropdown-menu 
                  min-w-max 
                  absolute 
                  hidden 
                  bg-white 
                  text-base z-50 
                  float-left py-2 
                  list-none 
                  text-left 
                  rounded-lg shadow-lg mt-1 m-0 bg-clip-padding 
                  border-2 border-gray-200 dark:border-gray-800" 
                  aria-labelledby="dropdownMenuButton1">
                  <li>
                    <a @click="saveLang(0)" class="rounded-lg dropdown-item text-sm font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-700 dark:hover:bg-gray-300" href="#">
                      <div class="inline-flex items-center py-2 px-4 h-full w-full hover:text-gray-200 dark:text-gray-400 dark:hover:text-black font-semibold">
                        <svg aria-hidden="true" class="h-3.5 w-3.5 rounded-full mr-2" xmlns="http://www.w3.org/2000/svg" id="flag-icon-css-us" viewBox="0 0 512 512"><g fill-rule="evenodd"><g stroke-width="1pt"><path fill="#bd3d44" d="M0 0h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z" transform="scale(3.9385)"/><path fill="#fff" d="M0 10h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z" transform="scale(3.9385)"/></g><path fill="#192f5d" d="M0 0h98.8v70H0z" transform="scale(3.9385)"/><path fill="#fff" d="M8.2 3l1 2.8H12L9.7 7.5l.9 2.7-2.4-1.7L6 10.2l.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7L74 8.5l-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 7.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 24.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 21.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 38.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 35.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 52.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 49.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 66.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 63.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9z" transform="scale(3.9385)"/></g></svg>              
                        {{this.$store.state.user.currentLang['navbar_lang_en']}}
                        </div>
                    </a>
                  </li>
                  <li>
                    <a @click="saveLang(1)" class="rounded-lg dropdown-item text-sm font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-700 dark:hover:bg-gray-300" href="#">
                      <div class="inline-flex items-center py-2 px-4 h-full w-fullw-full hover:text-gray-200 dark:text-gray-400 dark:hover:text-black font-semibold">
                        <svg class="h-3.5 w-3.5 rounded-full mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" id="flag-icon-css-de" viewBox="0 0 512 512"><path fill="#ffce00" d="M0 341.3h512V512H0z"/><path d="M0 0h512v170.7H0z"/><path fill="#d00" d="M0 170.7h512v170.6H0z"/></svg>
                        {{this.$store.state.user.currentLang['navbar_lang_de']}}
                        </div>
                    </a>
                  </li>
                  <li>
                    <a @click="saveLang(2)" class="rounded-lg dropdown-item text-sm font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-700 dark:hover:bg-gray-300" href="#">
                      <div class="inline-flex items-center py-2 px-4 h-full w-full hover:text-gray-200 dark:text-gray-400 dark:hover:text-black font-semibold ">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 rounded-full mr-2" viewBox="0 -30000 90000 60000"><path fill="#e30a17" d="m0-30000h90000v60000H0z"/><path fill="#fff" d="m41750 0 13568-4408-8386 11541V-7133l8386 11541zm925 8021a15000 15000 0 1 1 0-16042 12000 12000 0 1 0 0 16042z"/></svg>
                        {{this.$store.state.user.currentLang['navbar_lang_tr']}}
                    </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          
            <button @click="menubarButtonClick"
              type="button" class="inline-flex items-center p-2 ml-1 text-sm 
              text-gray-500 rounded-lg md:hidden hover:bg-gray-100 
              focus:outline-none focus:ring-2 focus:ring-gray-200 
              dark:text-gray-400 dark:hover:bg-gray-700 
              dark:focus:ring-gray-600"
            >
              <svg class="w-6 h-6" fill="currentColor" aria-hidden="true" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
            </button>
      </div>
      <div class="menubar hidden items-center 
      justify-between w-full md:flex 
      md:w-auto md:order-1" >
      <ul class="nav transition-colors duration-1000 flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-800 dark:border-gray-700">
          <li>
          <router-link to="/" class="duration-700 cursor-pointer block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">{{this.$store.state.user.currentLang['navbar_a0']}}</router-link>
          </li>
          <li>
          <router-link to="/about" class="duration-700 cursor-pointer block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">{{this.$store.state.user.currentLang['navbar_a1']}}</router-link>
          </li>
          <li>
          <router-link to="/education" class="duration-700 cursor-pointer block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">{{this.$store.state.user.currentLang['navbar_a2']}}</router-link>
          </li>
          <li>
          <router-link to="/contact" class="duration-700 cursor-pointer block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">{{this.$store.state.user.currentLang['navbar_a3']}}</router-link>
          </li>
      </ul>
      </div>
      </div>
  </nav>
</template>

<script>
import 'tw-elements';
import 'flowbite';

import { mapState, useStore } from 'vuex';
export default{
  data() {
      return {
          currentRoute: this.$router.currentRoute._value.path
      }
  },
  methods:{
    menubarButtonClick(){
      let parentElement = document.querySelector('.menubar');
      parentElement.classList.toggle('hidden')
    },
    menubarDarkLightModeClick(){
      let toggleDarkLight = document.querySelector('.theme-page').classList.toggle('dark');
      let light_icon = document.querySelector('.light-icon').classList.toggle('hidden');
      let dark_icon = document.querySelector('.dark-icon').classList.toggle('hidden');
    },
    getIndex(active){
      let parentElement = document.querySelectorAll('.nav');
      let childElement = parentElement.item(0);
      let lastChildElement = childElement.children.item(active);
      let finalElement = lastChildElement.children.item(0)
      finalElement.classList.remove("cursor-pointer", "block", "py-2", "pl-3", "pr-4", "text-gray-700", "rounded", "hover:bg-gray-100", "md:hover:bg-transparent", "md:hover:text-blue-700", "md:p-0", "dark:text-gray-400", "md:dark:hover:text-white", "dark:hover:bg-gray-700", "dark:hover:text-white", "md:dark:hover:bg-transparent", "dark:border-gray-700")
      finalElement.classList.add("block", "py-2", "pl-3", "pr-4", "text-white", "bg-blue-700", "rounded", "md:bg-transparent", "md:text-blue-700", "md:p-0", "dark:text-white");       
    },
    getCurrentPageIndex(pageText){
      if(pageText == "/"){
          return 0
      }
      if(pageText == "/about"){
          return 1
      }
      else if(pageText == "/education"){
          return 2
      }
      else if(pageText == "/contact"){
          return 3
      }
    }         
  },
  mounted(){
    this.getIndex(this.getCurrentPageIndex(this.currentRoute))
    if (document.querySelector('.theme-page').classList.contains('dark')){
      document.querySelector('.light-icon').classList.add('hidden');
    }else{
      document.querySelector('.dark-icon').classList.add('hidden');
    }
  },
  computed:{
    ...mapState([
        'lang',
        'theme'
    ])
  },
}
</script>
<script setup>
import { mapState, useStore } from 'vuex';

const store = useStore()


function saveLang(ind){
  if(ind==0){
    store.state.user.currentLang  = store.state.user.engLang
  }
  else if(ind==1){
    store.state.user.currentLang  = store.state.user.deLang
  }
  else if(ind==2){
    store.state.user.currentLang = store.state.user.trLang
  }
}   
//diğer sayfalara gönder
</script>
  
                

    