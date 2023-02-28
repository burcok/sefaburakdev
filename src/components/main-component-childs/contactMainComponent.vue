<template>
  <main class="flex justify-center items-center text-gray-600 body-font relative">
    <div
      class="container px-5 pt-5 pb-12 md:py-24 mx-auto flex sm:flex-nowrap flex-wrap-reverse"
    >
      <div
        v-motion-slide-left
        v-motion-slide-visible-left
        class="shadow-2xl lg:w-2/3 md:w-1/2 dark:bg-gray-800 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative"
      >
        <div class="hidden absolute inset-0 md:flex items-center justify-center">
          <Spinner id="spinner" margin="10px" color="#455588" />
        </div>
        <h1
          id="spinnermobile"
          class="font-bold tracking-wide text-xl md:hidden my-40 block absolute inset-0 text-center"
        >
          Loading...
        </h1>
        <!-- <iframe
          id="iframemap"
          class="absolute inset-0"
          width="100%"
          height="100%"
          :on-load="IframeLoading"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          src="https://maps.google.com/maps?width=100%25&amp;height=1000&amp;hl=en&amp;q=Antalya,Turkey+(My%20Home)&amp;t=k&amp;z=6&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe> -->
        <iframe
          src="https://widgets.scribblemaps.com/sm/?d=true&z=true&l=true&id=FxCL8xFWxq&s"
          allow="geolocation"
          frameborder="0"
          id="iframemap"
          class="absolute inset-0"
          width="100%"
          height="100%"
          :on-load="IframeLoading"
        ></iframe>
        <!-- <img
          class="absolute inset-0"
          :on-load="IframeLoading"
          id="iframemap"
          src="https://www.scribblemaps.com/api/maps/images/450/450/FxCL8xFWxq.png"
        /> -->
        <!-- <iframe width="100%" height="100%" class="absolute inset-0" frameborder="0" title="map" marginheight="0" marginwidth="0" scrolling="no" src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed" style="filter: grayscale(1) contrast(1.2) opacity(0.4);"></iframe> -->
        <div
          class="w-full duration-1000 opacity-0 lg:opacity-100 flex dark:bg-gray-800 bg-white relative flex-wrap py-6 rounded shadow-md"
        >
          <div class="lg:w-1/2 px-6">
            <h2
              class="duration-1000 title-font font-bold dark:text-white/80 tracking-widest text-xs"
            >
              SOCIAL
            </h2>
            <div class="my-2">
              <a
                class="duration-1000 hover:underline dark:text-white/50 hover:text-gray-900"
                href="#"
              >
                Discord
              </a>
            </div>
            <div>
              <a
                class="duration-1000 hover:underline dark:text-white/50 hover:text-gray-900"
                href="#"
              >
                Instagram
              </a>
            </div>
          </div>
          <div class="lg:w-1/2 px-6 mt-4 lg:mt-0">
            <h2
              class="duration-1000 title-font font-bold dark:text-white/80 text-gray-900 tracking-widest text-xs"
            >
              E-MAIL
            </h2>
            <div class="">
              <a
                href="mailTo:info@sefaburak.com"
                class="duration-1000 hover:underline cursor-pointer text-indigo-500 leading-relaxed"
                >info@sefaburak.com</a
              >
            </div>
            <div class="">
              <a
                href="mailTo:burakdereli03@gmail.com"
                class="duration-1000 hover:underline cursor-pointer text-indigo-500 leading-relaxed"
                >burakdereli03@gmail.com</a
              >
            </div>
          </div>
        </div>
      </div>
      <div
        class="shadow-2xl rounded-3xl lg:w-1/3 md:w-1/2 md:ml-auto w-full md:py-8 p-5 mb-12 md:mt-0"
        v-motion
        :initial="{ scale: 0, x: 1000 }"
        :enter="{
          x: 0,
          scale: 1,
          transition: {
            type: 'spring',
            damping: 40,
            mass: 5,
          },
        }"
        :delay="200"
      >
        <div class="flex flex-col">
          <form ref="form" @submit.prevent="sendEmail">
            <h2
              class="duration-1000 text-gray-900 dark:text-white/80 text-lg mb-1 font-medium title-font"
            >
              {{ $store.state.user.currentLang["contact_form_h2"] }}
            </h2>
            <p
              class="duration-1000 leading-relaxed mb-5 dark:text-white/60 text-gray-600"
            >
              {{ $store.state.user.currentLang["contact_form_p1"] }}
            </p>

            <label
              for="name"
              class="duration-1000 block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >{{ $store.state.user.currentLang["contact_form_label1"] }}</label
            >
            <div class="relative mb-4">
              <div
                class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
              >
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                name="from_name"
                class="duration-1000 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="John Doe"
              />
            </div>

            <label
              for="email"
              class="duration-1000 block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >{{ $store.state.user.currentLang["contact_form_label2"] }}</label
            >
            <div class="relative mb-4">
              <div
                class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
              >
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
                  ></path>
                  <path
                    d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                  ></path>
                </svg>
              </div>
              <input
                type="email"
                name="from_email"
                class="duration-1000 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="info@sefaburak.dev"
              />
            </div>
            <div class="relative mb-4">
              <label
                for="message"
                class="duration-1000 block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >{{ $store.state.user.currentLang["contact_form_label3"] }}</label
              >
              <textarea
                name="message"
                rows="4"
                class="duration-1000 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                :placeholder="$store.state.user.currentLang['contact_form_placeholder']"
              ></textarea>
            </div>

            <button
              type="submit"
              class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              {{ $store.state.user.currentLang["contact_button_submit"] }}
            </button>
            <p class="text-xs text-gray-500 my-5">
              {{ $store.state.user.currentLang["contact_form_p2"] }}
            </p>
          </form>
        </div>
      </div>
    </div>
  </main>
  <div
    v-motion-slide-left
    v-motion-slide-visible-left
    class="form-failed absolute hidden bottom-0 p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
    role="alert"
  >
    <svg
      aria-hidden="true"
      class="flex-shrink-0 inline w-5 h-5 mr-3"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
        clip-rule="evenodd"
      ></path>
    </svg>
    <span class="sr-only">Info</span>
    <div>
      <span class="font-medium">Danger alert!</span> Change a few things up and try
      submitting again.
    </div>
  </div>
  <div
    v-motion-slide-left
    v-motion-slide-visible-left
    class="form-succes absolute bottom-0 hidden p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"
    role="alert"
  >
    <svg
      aria-hidden="true"
      class="flex-shrink-0 inline w-5 h-5 mr-3"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
        clip-rule="evenodd"
      ></path>
    </svg>
    <span class="sr-only">Info</span>
    <div>
      <span class="font-medium">Success alert!</span> Change a few things up and try
      submitting again.
    </div>
  </div>
</template>

<script>
import Spinner from "vue-spinner/src/PulseLoader.vue";
import emailjs from "@emailjs/browser";

export default {
  components: {
    Spinner,
  },
  methods: {
    IframeLoading() {
      document.querySelector("#spinner").classList.add("hidden");
      document.querySelector("#spinnermobile").classList.add("hidden");
      document.querySelector("#iframemap").classList.remove("hidden");
    },
    sendEmail() {
      emailjs
        .sendForm(
          "service_wdmyrud",
          "template_6dtwlh4",
          this.$refs.form,
          "hyJWAgrzHWZBQlJAA"
        )
        .then(
          (result) => {
            document.querySelector(".form-succes").classList.remove("hidden");
            document.querySelector(".form-succes").classList.add("flex");
            setTimeout(() => {
              document.querySelector(".form-succes").classList.add("hidden");
              document.querySelector(".form-succes").classList.remove("flex");
            }, 5000);
            console.log(result);
          },
          (error) => {
            document.querySelector(".form-failed").classList.remove("hidden");
            document.querySelector(".form-failed").classList.add("flex");
            setTimeout(() => {
              document.querySelector(".form-failed").classList.add("hidden");
              document.querySelector(".form-failed").classList.remove("flex");
            }, 5000);
            console.log(error);
          }
        );
      this.$refs.form.reset();
    },
  },
};
</script>
