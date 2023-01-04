
<template>
  <div>
    <navigationSpan/>
      <h1 class="font-extrabold text-3xl mb-10">Hello</h1>
      <p>name: {{name}}</p>
      <input type="text" v-model="newName" class="border border-gray-500 p-2 mr-4 rounded-lg">
      <button @click="saveName" class="rounded-md p-2 text-white bg-blue-400">Gonder</button>
  </div>
</template>
<script>
import navigationSpan from '../components/child-components/navigationSpan.vue'
export default{
  components:{
    navigationSpan
  }
}
</script>
<script setup>
import { useStore } from 'vuex';
import { computed,ref } from 'vue';
import { useRouter } from 'vue-router';


const router = useRouter() 
const store = useStore()

const name = computed(() => {
    return store.state.user.name
})


const newName = ref('')
function saveName(){
    store.dispatch('saveName',newName.value)
    newName.value= ''
    saveLang()
    router.push('/about')
}
function saveLang(){
    store.dispatch('saveLang',1)
}


</script>



