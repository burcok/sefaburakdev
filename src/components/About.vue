<template>
  <div class="background bg-gray-200 dark:bg-gray-800 duration-1000 overflow-hidden">
    <div>
      <navigationSpan />
    </div>
    <div class="min-h-screen">
      <aboutMainComponent />
    </div>
    <div>
      <footerSpan />
    </div>
  </div>
</template>

<script setup></script>
<script>
import footerSpan from "../components/span-components/footerSpan.vue";
import aboutMainComponent from "../components/main-component-childs/aboutMainComponent.vue";
import navigationSpan from "../components/span-components/navigationSpan.vue";
export default {
  components: {
    navigationSpan,
    footerSpan,
    aboutMainComponent,
  },
};
</script>
