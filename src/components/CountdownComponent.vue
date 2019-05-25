<template>
    <div class="well">
        <div class="pomodoro-timer">
            <span>{{ min | leftpad }}:{{ sec | leftpad }}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "countdown-component",
        data () {
            return {
                min: 3,
                sec: 30
            }
        }
    }
</script>

<style scoped>

</style>