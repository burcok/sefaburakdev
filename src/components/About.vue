<template>
    <h1 class="font-bold text-2xl">
        Hello, {{ totalName }} {{ lang }}
    </h1>
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
export default{
    computed:{
        ...mapGetters([
            'totalName',
            'lang'
        ])
    }   
}
</script>