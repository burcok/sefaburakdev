<script setup>

</script>
<script>
import Spinner from 'vue-spinner/src/PulseLoader.vue'
export default{
  mounted() {
    document.onreadystatechange = () => {
      if (document.readyState == "complete") {
        this.loading = false  
      }
    }
  },
  components: {
    Spinner
  },
}
</script>

<template>
  <div v-if="loading" style="display:flex;justify-content:center;margin-top:25rem;">
    <Spinner margin="30px" color="#455588"/>
  </div>
  <div v-else>
    <div class="theme-page">
      <RouterView/>
    </div>
  </div>
  
</template>

<style scoped>

</style>
