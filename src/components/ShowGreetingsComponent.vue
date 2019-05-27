<template>
    <h1>{{ msg }}</h1>
</template>

<script>
    export default {
        name: "show-greetings-component",
        computed: {
            msg () {
                return this.$store.state.msg
            }
        }
    }
</script>

<style scoped>

</style>