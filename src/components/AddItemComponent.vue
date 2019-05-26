<template>
    <div class="input-group">
        <input v-on:keyup.enter="addItem" v-model="newItem"
               placeholder="add shopping list item" type="text"
               class="form-control">
        <span class="input-group-btn">
            <button v-on:click="addItem" class="btn btn-default" type="button">Add!</button>
        </span>
    </div>
</template>

<script>
    export default {
        name: "add-item-component",
        data: function () {
            return {
                newItem: ''
            }
        },
        methods: {
            addItem () {
                var text;
                text = this.newItem.trim();
                if (text) {
                    this.$emit('add', this.newItem);
                    this.newItem = ''
                }
            }
        }
    }
</script>

<style scoped>

</style>