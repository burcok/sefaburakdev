
<template>
  <div>
    <navigationSpan/>
  </div>
  <div>
    <contactMainComponent/>
  </div>
</template>

<script>
import navigationSpan from './span-components/navigationSpan.vue'
import contactMainComponent from './main-component-childs/contactMainComponent.vue'

export default{
  data() {
    
  },  
  components:{
    navigationSpan,
    contactMainComponent
  }
}
</script>
<script setup>


</script>



