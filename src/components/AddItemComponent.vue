<template>
    <div class="input-group">
        <input @keyup.enter="$emit('new-item','hola')" v-model="newItem"
               placeholder="add shopping list item" type="text"
               class="form-control">
        <span class="input-group-btn">
            <button @click="$emit('new-item',newItem)" class="btn btn-default" type="button">Add!</button>
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
        }
    }
</script>

<style scoped>

</style>