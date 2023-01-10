
<template>
  <div>
    <navigationSpan/>
  </div>
  <div>
    <homeMainComponent/>
  </div>
</template>

<script>
import navigationSpan from '../components/span-components/navigationSpan.vue'
import homeMainComponent from './main-component-childs/homeMainComponent.vue'

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



