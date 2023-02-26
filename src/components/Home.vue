<template>
  <div class="background bg-gray-200 dark:bg-gray-800 duration-1000 overflow-hidden">
    <div>
      <navigationSpan />
    </div>
    <div class="min-h-screen">
      <div>
        <homeMainComponent />
      </div>
      <div>
        <pageLanguagesComponent />
      </div>
    </div>
    <div>
      <footerSpan />
    </div>
  </div>
</template>

<script>
import navigationSpan from "../components/span-components/navigationSpan.vue";
import footerSpan from "../components/span-components/footerSpan.vue";
import homeMainComponent from "./main-component-childs/homeMainComponent.vue";
import pageLanguagesComponent from "./main-component-childs/pageLanguagesComponent.vue";

export default {
  data() {},
  components: {
    navigationSpan,
    homeMainComponent,
    pageLanguagesComponent,
    footerSpan,
  },
};
</script>
