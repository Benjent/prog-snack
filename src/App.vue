<template>
    <fade-transition appear>
        <div id="app" class="app">
                <TheNavBar></TheNavBar>
                <section class="app__body">
                    <router-view class="app__page"/>
                </section>
                <TheNavBar v-if="$mq === 'M'" footer></TheNavBar>
        </div>
    </fade-transition>
</template>

<script>
import TheNavBar from "./components/TheNavBar.vue"

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
        padding-top: var(--header-height);
    }

    &__page {
        -webkit-overflow-scrolling: touch;
        overflow: auto;
    }
}

@media (max-width: $mobile) {
    .app {
        &__body {
            padding-bottom: var(--header-height);
        }
    }
}
</style>
