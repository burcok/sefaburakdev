<template>
    <navigationSpan/>
    <div id="box" class="inset-0 ri bg-red-500 h-36 w-36"></div>
</template>


<script>
import navigationSpan from '../components/span-components/navigationSpan.vue'
export default {
    data() {
        return {
            box: document.querySelector("#box")
        }
    },
    methods: {
        myEventListener(event) {
            if (event.code == 'ArrowDown'){
                console.log("aaaa")
            }else if (event.code == 'ArrowUp'){
                console.log("aaaAAA")
            }else if (event.code == 'ArrowLeft'){
                console.log("aaaAAA")
            }else if (event.code == 'ArrowRight'){
                console.log("aaaAAA")
            }
            else {
                console.log(event.code)
            }
        }
    },
    mounted() {
        console.log('1')
        addEventListener("keydown", this.myEventListener);
    },
    beforeUnmount() {
        console.log("2")
        removeEventListener("keydown", this.myEventListener);
    },
    //diğer sayfada keyboard çalışıyor
    components:{
        navigationSpan
    },
  }
</script>
