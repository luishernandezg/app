<template>
    <input :value='msg' @keyup='changeMsg'>
</template>

<script>
    export default {
        name: "change-greetings-component",
        computed: {
            msg() {
                return this.$store.state.msg
            }
        },
        methods: {
            changeMsg(ev) {
                this.$store.commit('changeMessage', ev.target.value)
            }
        }
    }
</script>

<style scoped>

</style>