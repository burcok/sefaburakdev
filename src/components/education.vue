<template>
    <navigationSpan/>
    <p class="text"></p>
</template>


<script>
import navigationSpan from '../components/span-components/navigationSpan.vue'
export default {
    data() {
        return {
            count:0,
            data: 'Merhaba benim adım Burak'
        }
    },
    methods: {
        myEventListener(event) {
            if (event.code == 'Backspace'){
                this.count = this.count - 1;
                document.querySelector('.text').innerHTML = this.cutData(this.data, this.count)
            }else if (event.code == 'Delete'){
                this.count = this.count - 1;
                document.querySelector('.text').innerHTML = this.cutData(this.data, this.count)
            }
            else {
                this.count = this.count + 1;
                document.querySelector('.text').innerHTML = this.cutData(this.data, this.count)
            }
        },
        cutData(data, count) {
            return data.slice(0, count);
        }
    },
    mounted() {
        addEventListener("keydown", this.myEventListener);
    },
    beforeUnmount() {
        removeEventListener("keydown", this.myEventListener);
    },
    //diğer sayfada keyboard çalışıyor
    components:{
        navigationSpan
    },
  }
</script>
