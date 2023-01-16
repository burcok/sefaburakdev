<template>
    <navigationSpan/>
    <div class="text-center"></div>
    <div class="duration-1000 bg-white dark:bg-gray-800 w-full h-screen p-24">
        <p style="font-family: Courier;" class="text text-green-500 dark:text-green-400 text-xl"></p>
        <ul v-for="item in this.enterCount" :key="item">
            <li>
                <p style="font-family: Courier;" :class="'text'+item" class="text-green-500 dark:text-green-400 text-xl"></p>                
            </li>
            <li>
                <p style="font-family: Courier;" :class="'error'+item" class="hidden text-green-500 dark:text-green-400 text-xl">Invalid command! --help for commands.</p>
            </li>
        </ul>
    </div>
</template>


<script>
import navigationSpan from '../components/span-components/navigationSpan.vue';
export default {
    data() {
        return {
            count:20,
            enterCount:1,
            data: 'C:\\Users\\Vuengineer\\',
            tempKey: ''
            
        }
    },
    methods: {
        myEventListener(event) {
            if (event.code == 'Backspace' || event.code == 'Delete'){
                this.count -= 1;
                if (this.count < 20){
                    this.count = 20;
                    this.data = "C:\\Users\\Vuengineer\\";
                }
            }
            else if ((event.code).includes('Key') || ((event.code).includes('Comma')) || ((event.code).includes('Period')) || ((event.code).includes('Semicolon')) || ((event.code).includes('Quote')) || ((event.code).includes('BracketLeft')) || ((event.code).includes('BracketRight'))) {
                this.count += 1;
                this.data += event.key;
            }
            else if((event.code) == "Space"){
                if (this.tempKey == event.code){
                    
                }
                else{
                    this.count += 1;
                    this.data += " ";
                }
            }
            else if(event.shiftKey && event.keyCode == 55)
            {
                this.count += 1;
                this.data += "/";
            }
            else if((event.code) == "Enter")
            {
                
                document.querySelector('.text'+this.enterCount).innerHTML = this.cutData(this.data, this.count)
                this.enterCount += 1
                
                console.log(this.enterCount)
                this.analyseData(this.data)
            }
            
            this.tempKey = event.code
            document.querySelector('.text'+this.enterCount).innerHTML = this.cutData(this.data, this.count)+ '<span class="animate-pulse text-black">|</span>'
            // console.log(document.querySelector('.text'+this.enterCount).innerHTML)
        },
        analyseData(data){
            
            data = data.slice(20)
            if(data =="--help"){
                console.log('help')
            } else {
                console.log(document.querySelector('.text'+this.enterCount))
                document.querySelector('.error').classList.remove('hidden');
                    
            }
            this.data = "C:\\Users\\Vuengineer\\"
            
        },
        cutData(data, count) {
            return data.slice(0, count);
        }
    },
    mounted() {
        document.querySelector('.text'+this.enterCount).innerHTML ='C:\\Users\\Vuengineer\\'+ '<span class="animate-pulse text-black">|</span>'
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
