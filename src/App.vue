<template>
    <fade-transition appear>
        <div id="app" class="app">
            <TheNavBar />
            <section class="app__body">
                <router-view class="app__page" />
            </section>
            <TheNavBar v-if="$mq === 'M'" footer />
        </div>
    </fade-transition>
</template>

<script>
import { mapActions } from "vuex"
import { TheNavBar } from "./components"

export default {
    components: {
        TheNavBar,
    },
    created() {
        this.loadDatabase()
    },
    methods: {
        ...mapActions(["loadDatabase"]),
    },
}
</script>

<style lang="scss">
@import "./style/gatherer";
@import "./style/mixins/page";
@import "./style/modules/link";

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
