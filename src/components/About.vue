<template>
    <navigationSpan/>
    <div class="flex items-center justify-center">
        <h1 class="font-bold text-2xl">
            Hello
        </h1>
</div>
</template>

<script setup>

</script>
<script>
import navigationSpan from '../components/child-components/navigationSpan.vue'
export default{
    components:{
        navigationSpan
    },
    methods: {
        goBack() {
        this.$router.back()
        }
    }
}
</script>