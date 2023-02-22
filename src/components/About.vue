<template>
    <navigationSpan/>
    <div class="flex items-center justify-center">
        <h1 class="font-bold text-2xl">
            THE UNDER CONSTRUCTİON
        </h1>
    </div>
</template>

<script setup>

</script>
<script>
import navigationSpan from '../components/span-components/navigationSpan.vue'
export default{
    components:{
        navigationSpan
    },
    methods: {
        goBack() {
        this.$router.back()
        }
    },
    data() {
        return {
            name: 'Sefa Burak',
            currentYear: (new Date().getFullYear() - 2005)
        }
    }
}
</script>