<template>
    <input :value='getMessage' @keyup='changeMsg'>
</template>

<script>
    import { mapGetters } from 'vuex'
    export default {
        name: "change-greetings-component",
        computed: mapGetters(['getMessage']),
        methods: {
            changeMsg(ev) {
                this.$store.commit('changeMessage', ev.target.value)
            }
        }
    }
</script>

<style scoped>

</style>