<template>
    <div id="app" class="app">
        <TheNavBar></TheNavBar>
        <router-view  class="app__page"/>
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
    &__page {
        @include page;
    }
}
</style>
