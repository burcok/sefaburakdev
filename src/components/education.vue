<template>
    <navigationSpan/>
</template>


<script>
import navigationSpan from '../components/span-components/navigationSpan.vue'
export default {
    data() {
      return {
        
      }
    },
    mounted() {
        addEventListener("keypress",function(event) {
        if (event.code == 'Escape'){
            console.log("backspace")}
        else{
            console.log(event.code)
            }
        })
    }, //diğer sayfada keyboard çalışıyor
    components:{
        navigationSpan
    },
  }
</script>