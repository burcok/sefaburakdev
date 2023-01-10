<template>
    <main class="duration-1000 dark:bg-gray-800 transition-colors text-gray-600 body-font relative">
        <div class="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap-reverse">
          <div class="lg:w-2/3 md:w-1/2 dark:bg-gray-800 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <div class="hidden absolute inset-0 md:flex items-center justify-center">
                <Spinner id="spinner" margin="10px" color="#455588"/>
            </div>
            <h1 id="spinnermobile" class="font-bold tracking-wide text-xl md:hidden my-40 block absolute inset-0 text-center">Loading...</h1>
            <iframe id="iframemap" class="absolute inset-0" width="100%" height="100%" @load="IframeLoading" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=1000&amp;hl=en&amp;q=Antalya,Turkey+(My%20Home)&amp;t=k&amp;z=6&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
            <!-- <iframe width="100%" height="100%" class="absolute inset-0" frameborder="0" title="map" marginheight="0" marginwidth="0" scrolling="no" src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed" style="filter: grayscale(1) contrast(1.2) opacity(0.4);"></iframe> -->
            <div class="transition-colors w-full duration-1000 opacity-0 lg:opacity-100 flex dark:bg-gray-800 bg-white relative flex-wrap py-6 rounded shadow-md ">
              <div class="lg:w-1/2 px-6">
                <h2 class="duration-700 title-font font-bold dark:text-white/80 text-gray-900 tracking-widest text-xs">SOCIAL</h2>
                <div class="my-2"><a class="hover:underline dark:text-white/50 hover:text-white/80" href="#">
                  Discord
                </a></div>
                <div><a class="hover:underline dark:text-white/50 hover:text-white/80" href="#">
                  Instagram
                </a></div>
              </div>
              <div class="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 class="duration-700 title-font font-bold dark:text-white/80  text-gray-900 tracking-widest text-xs">EMAIL</h2>
                <div class="">
                  <a class="text-indigo-500 leading-relaxed">info@sefaburak.com</a>
                </div>
                <div class="">
                  <a class="text-indigo-500 leading-relaxed">burakdereli03@gmail.com</a>
                </div>
              </div>
            </div>
          </div>
          <div class="transition-colors duration-1000 lg:w-1/3 md:w-1/2 dark:bg-gray-800 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <form @submit.prevent="submitForm">
              <h2 class="duration-700 text-gray-900 dark:text-white/80 text-lg mb-1 font-medium title-font">Feedback</h2>
            <p class="duration-700 leading-relaxed mb-5 dark:text-white/60 text-gray-600">Post-ironic portland shabby chic echo park, banjo fashion axe</p>
            <div class="relative mb-4">
              <label for="name" class="duration-700 leading-7 text-sm dark:text-white/60 text-gray-600">Name</label>
              <input type="text" id="name" v-model="name" name="name" class="w-full dark:bg-white/80 bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
            </div>
            <div class="relative mb-4">
              <label for="email" class="duration-700 leading-7 text-sm dark:text-white/60 text-gray-600">Email</label>
              <input type="email" id="email" v-model="email" name="email" class="w-full dark:bg-white/80 bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
            </div>
            <div class="relative mb-4">
              <label for="message" class="duration-700 leading-7 text-sm dark:text-white/60 text-gray-600">Message</label>
              <textarea id="message" v-model="message" name="message" class="w-full dark:bg-white/80 bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
            </div>
            <button type="submit" class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
            <p class="text-xs text-gray-500 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
            </form>
          </div>
        </div>
      </main>   
</template>

<script>

import Spinner from 'vue-spinner/src/PulseLoader.vue'

export default{
  data() {
    return {
      name: '',
      email: '',
      message: ''
    }
  },
    components:{
        Spinner,
    },
    methods: {
        IframeLoading(){
            document.querySelector("#spinner").classList.add("hidden");
            document.querySelector("#spinnermobile").classList.add("hidden");
            document.querySelector("#iframemap").classList.remove("hidden");
        },
      
        async submitForm() {
      try {
        let data = { name: this.name, email: this.email, message: this.message }
        let result = await this.sendEmail(data);
        if(result.status == 200){
          console.log("Mail sent successfully")
        }
      } catch (error) {
        console.error(error);
      }
    },
    async sendEmail(data) {
      let api_key = 'a6e71ef8bd1e1cf52f6103f1e86c5ef8-4c2b2223-f752ff91'
      let url = 'https://api.mailgun.net/v3/sefaburak.dev/messages';
      let from_email = data.email
      let to_email = 'burakdereli03@gmail.com'
      let subject = 'Form Submission'
      let body = data.name + " sent the following:" + "\n\n" + data.message

      let options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': 'Basic ' + btoa('api:' + api_key)
        },
        body: `from=${from_email}&to=${to_email}&subject=${subject}&text=${body}`
      }
      return await fetch(url, options)
    }
  },
}
</script>