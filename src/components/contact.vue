
<template>
  <div>
    <navigationSpan/>
  </div>
  <div>
    <contactMainComponent/>
  </div>
  <div>
    <footerSpan/>
  </div>
</template>

<script>
import navigationSpan from './span-components/navigationSpan.vue'
import footerSpan from '../components/span-components/footerSpan.vue'
import contactMainComponent from './main-component-childs/contactMainComponent.vue'

export default{
  data() {
    
  },  
  components:{
    navigationSpan,
    contactMainComponent,
    footerSpan
  }
}
</script>
<script setup>


</script>



