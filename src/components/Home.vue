
<template>
  <div class="overflow-hidden">
    <div>
      <navigationSpan/>
    </div>
    <div>
      <homeMainComponent/>
    </div>
    <div>
      <pageLanguagesComponent/>
    </div>
    <div>
      <footerSpan/>
    </div>
  </div>
</template> 

<script>
import navigationSpan from '../components/span-components/navigationSpan.vue'
import footerSpan from '../components/span-components/footerSpan.vue'
import homeMainComponent from './main-component-childs/homeMainComponent.vue'
import pageLanguagesComponent from './main-component-childs/pageLanguagesComponent.vue'

export default{
  data() {
    
  },  
  components:{
    navigationSpan,
    homeMainComponent,
    pageLanguagesComponent,
    footerSpan
  }
}
</script>
<script setup>


</script>



