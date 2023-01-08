
<template>
  <div>
    <navigationSpan/>
  </div>
  <div>
    <homeMainComponent/>
  </div>
</template>

<script>
import navigationSpan from '../components/child-components/navigationSpan.vue'
import homeMainComponent from '../components/child-components/homeMainComponent.vue'

export default{
  data() {
    
  },  
  components:{
    navigationSpan,
    homeMainComponent
  }
}
</script>
<script setup>


</script>



