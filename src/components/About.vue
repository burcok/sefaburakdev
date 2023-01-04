<template>
    <navigationSpan/>
    <div class="flex items-center h-screen justify-center flex-col">
        <h1 class="font-bold text-2xl">
            Hello, {{ totalName }} {{ lang }}
        </h1>
        <button class="font-bold text-xl p-4 bg-slate-400 mt-5 rounded-full" @click="goBack">Geri Dön</button>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { mapGetters, useStore } from 'vuex';

const store = useStore()

const lang = computed(() => {
    return store.state.user.lang
})
</script>
<script>
import navigationSpan from '../components/child-components/navigationSpan.vue'
export default{
    components:{
        navigationSpan
    },
    computed:{
        ...mapGetters([
            'totalName',
            'lang'
        ])
    },
    methods: {
        goBack() {
        this.$router.back()
        }
    } 
}
</script>