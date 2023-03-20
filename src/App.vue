<script setup>
import curDot from "cursor-dot";

const mediaQuery = window.matchMedia("(max-width: 768px)");
// Check if the media query is true
if (!mediaQuery.matches) {
  const cursor = curDot({
    // diameter in pixels
    diameter: 50,
    // border width
    borderWidth: 0.5,
    // border color
    borderColor: "#fff",
    // easing
    easing: 15,
    // background
    background: "transparent",
  });
}
</script>
<script>
import Spinner from "vue-spinner/src/PulseLoader.vue";
export default {
  data() {
    return {
      loading: true,
    };
  },
  mounted() {
    document.onreadystatechange = () => {
      if (document.readyState == "complete") {
        this.loading = false;
      }
    };
  },
  components: {
    Spinner,
  },
};
</script>

<template>
  <div v-if="loading" style="display: flex; justify-content: center; margin-top: 25rem">
    <Spinner margin="30px" color="#455588" />
  </div>
  <div v-else>
    <div class="theme-page scroll-smooth">
      <RouterView translate="no" />
    </div>
  </div>
</template>
<style scoped></style>
