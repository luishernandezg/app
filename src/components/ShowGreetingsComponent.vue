<template>
    <h1>{{ getMessage }}</h1>
</template>

<script>
    import { mapGetters } from 'vuex'
    export default {
        name: "show-greetings-component",
        computed: mapGetters(['getMessage'])
    }
</script>

<style scoped>

</style>