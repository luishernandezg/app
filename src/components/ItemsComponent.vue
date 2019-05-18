<template>
    <ul>
        <item-component v-for="item in items" :item="item"></item-component>
    </ul>
</template>

<script>
    import ItemComponent from "./ItemComponent";
    export default {
        name: "items-component",
        components: {
            ItemComponent
        },
        props: ['items']
    }
</script>

<style scoped>

</style>