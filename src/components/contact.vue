<template>
  <div class="background bg-gray-200 dark:bg-gray-800 duration-1000 overflow-hidden">
    <div>
      <navigationSpan />
    </div>
    <div class="min-h-screen">
      <contactMainComponent />
    </div>
    <div>
      <footerSpan />
    </div>
  </div>
</template>

<script>
import navigationSpan from "./span-components/navigationSpan.vue";
import footerSpan from "../components/span-components/footerSpan.vue";
import contactMainComponent from "./main-component-childs/contactMainComponent.vue";

export default {
  components: {
    navigationSpan,
    contactMainComponent,
    footerSpan,
  },
};
</script>
