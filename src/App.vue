<template>
    <div id="app" class="app">
        <TheNavBar></TheNavBar>
        <section class="app__body">
            <router-view class="app__page"/>
        </section>
        <TheNavBar v-if="$mq === 'M'" footer></TheNavBar>
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
@import './style/mixins/page';
@import './style/modules/link';

.app {
    &__body {
        padding: var(--header-height) 0;
    }
    &__page {
        -webkit-overflow-scrolling: touch;
        overflow: auto;
    }
}
</style>
