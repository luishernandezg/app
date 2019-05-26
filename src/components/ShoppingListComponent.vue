<template>
    <div>
        <h2>{{ title }}</h2>
        <add-item-component></add-item-component>
        <items-component v-bind:items="items"></items-component>
        <div class="footer">
            <hr />
            <change-title-component></change-title-component>
        </div>
    </div>
</template>

<script>
    import AddItemComponent from "./AddItemComponent";
    import ItemsComponent from "./ItemsComponent";
    import ChangeTitleComponent from "./ChangeTitleComponent";

    export default {
        name: 'shopping-list-component',
        props: ['title', 'items'],
        components: {
            AddItemComponent,
            ItemsComponent,
            ChangeTitleComponent
        }
    }
</script>

<style scoped>
    .footer {
        font-size: 0.7em;
        margin-top: 20vh;
    }

</style>