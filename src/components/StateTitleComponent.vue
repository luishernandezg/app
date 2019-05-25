<template>
    <h3>
        {{ isworking ? workingtitle : restingtitle }}
    </h3>
</template>

<script>
    export default {
        name: "state-title-component",
        data () {
            return {
                workingtitle: 'Work!',
                restingtitle: 'Rest!'
            }
        },
        props: ['isworking']
    }
</script>

<style scoped>

</style>