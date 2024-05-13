<template>
    <TopBar></TopBar>
    <div style="height: 10px;"></div>
    <CenterPanel/>
</template>

<script setup lang="ts">
import CenterPanel from './components/CenterPanel/index.vue'
import TopBar from './components/TopBar.vue';

</script>

<style scoped>
.logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
}

.logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
