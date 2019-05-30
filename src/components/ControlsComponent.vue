<template>
    <h2>
        <span>
            <button :disabled='isStarted && !isPaused' @click="start">
                <i class="glyphicon glyphicon-play"></i>
            </button>
            <button :disabled='!isStarted || isPaused' @click="pause">
                <i class="glyphicon glyphicon-pause"></i>
            </button>
            <button :disabled='!isStarted' @click="stop">
                <i class="glyphicon glyphicon-stop"></i>
            </button>
        </span>
    </h2>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'
    export default {
        name: "controls-component",
        computed: mapGetters(['isStarted', 'isPaused', 'isStopped']),
        methods: mapActions(['start', 'stop', 'pause'])
    }
</script>

<style scoped>
    button:disabled i {
        color: gray;
    }
</style>