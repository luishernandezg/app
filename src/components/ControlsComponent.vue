<template>
    <h2>
        <span>{{ 'Pomodoro' | uppercase | addspace }}</span>
        <button >
            <i class="glyphicon glyphicon-play"></i>
        </button>
        <button >
            <i class="glyphicon glyphicon-pause"></i>
        </button>
        <button >
            <i class="glyphicon glyphicon-stop"></i>
        </button>
    </h2>
</template>

<script>
    export default {
        name: "controls-component"
    }
</script>

<style scoped>

</style>