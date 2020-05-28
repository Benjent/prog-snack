<template>
    <div id="app" class="l-app">
        <TheNavBar></TheNavBar>
        <router-view/>
    </div>
</template>

<script>
import TheNavBar from './components/TheNavBar.vue'

export default {
    components: {
        TheNavBar,
    },
}
</script>

<style lang="scss">
@import './style/gatherer';
@import './style/modules/link';

.l-app {
    
}
</style>
