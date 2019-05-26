<template>
    <div>
        <h2>{{ title }}</h2>
        <add-item-component v-on:add="addItem"></add-item-component>
        <items-component v-bind:items="items"></items-component>
        <div class="footer">
            <hr />
            <change-title-component :title="title" v-on:changeTitle="onChangeTitle"></change-title-component>
        </div>
    </div>
</template>

<script>
    import AddItemComponent from "./AddItemComponent";
    import ItemsComponent from "./ItemsComponent";
    import ChangeTitleComponent from "./ChangeTitleComponent";

    export default {
        name: 'shopping-list-component',
        props: ['id','title', 'items'],
        components: {
            AddItemComponent,
            ItemsComponent,
            ChangeTitleComponent
        },
        methods: {
            addItem (text) {
                this.items.push({
                    text: text,
                    checked: false
                })
            },
            onChangeTitle (text) {
                this.$emit('changeTitle', this.id, text)
            }
        }
    }
</script>

<style scoped>
    .footer {
        font-size: 0.7em;
        margin-top: 20vh;
    }

</style>