<template>
    <div class="well">
        <img v-bind:src="catimgsrc" />
    </div>
</template>

<script>
    export default {
        name: "kittens-component",
        data () {
            return {
                catimgsrc: "http://thecatapi.com/api/images/get?size=med"
            }
        }
    }
</script>

<style scoped>

</style>