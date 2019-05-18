<template>
    <div>
        <hello-world :user="user"></hello-world>
        <ImputName v-model="user"></ImputName>
    </div>
</template>

<script>
    import HelloWorld from "./HelloWorld";
    import ImputName from "./ImputName";
    export default {
        name: "Greetings",
        components: {
            ImputName,
            HelloWorld
        },
        data: function () {
            return {
                user: 'hero'
            }
        }
    }
</script>

<style scoped>

</style>