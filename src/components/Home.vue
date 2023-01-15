
<template>
  <div>
    <navigationSpan/>
  </div>
  <div>
    <homeMainComponent/>
  </div>
  <div>
    <footerSpan/>
  </div>
</template>

<script>
import navigationSpan from '../components/span-components/navigationSpan.vue'
import footerSpan from '../components/span-components/footerSpan.vue'
import homeMainComponent from './main-component-childs/homeMainComponent.vue'

export default{
  data() {
    
  },  
  components:{
    navigationSpan,
    homeMainComponent,
    footerSpan
  }
}
</script>
<script setup>


</script>



