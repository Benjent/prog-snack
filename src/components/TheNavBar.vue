<template>
    <header class="theNavBar" :class="{ 'theNavBar--footer': footer }">
        <router-link v-if="!footer" class="theNavBar__logo link" to="/">Would you like a snack</router-link>
        <nav v-if="footer || (!footer && $mq !== 'M')" class="theNavBar__nav">
            <router-link class="theNavBar__navItem link" v-for="item in nav" :key="item.path" :to="item.path">
                <div class="theNavBar__navText">{{ item.title }}</div>
                <!-- <Arrow class="theNavBar__arrow" orientation="bottom" v-if="$route.path === item.path" color="dark"></Arrow> -->
            </router-link>
        </nav>
        <SearchBar v-if="!footer"></SearchBar>
    </header>
</template>

<script>
import Arrow from './Arrow.vue'
import SearchBar from './SearchBar.vue'

export default {
    name: 'TheNavBar',
    components: {
        Arrow,
        SearchBar,
    },
    props: {
        footer: Boolean,
    },
    data() {
        return {
            isDisplayedNav: false,
            nav: [
                { path: '/albums', title: `Albums` },
                { path: '/discographies', title: `Discographies` },
                { path: '/gems', title: `Gems` },
                { path: '/subgenres', title: `Subgenres` },
                { path: '/designers', title: `Designers` },
                { path: '/stats', title: `Stats` },
                { path: '/about', title: `About` },
            ],
        }
    },
}
</script>


<style lang="scss" scoped>
@import '../style/gatherer';
@import '../style/mixins/shadow';
@import '../style/modules/link';

.theNavBar {
    @include shadow;
    display: flex;
    align-items: center;
    height: var(--header-height);
    box-sizing: border-box;
    background: $secondary-dark;
    position: fixed;
    width: 100%;
    z-index: 10;

    &--footer {
        bottom: 0;
    }

    .router-link-exact-active {
        pointer-events: none;
    }

    & &__logo {
        cursor: pointer;
        font-size: 30px;
        padding: 10px;
    }

    & &__nav {
        display: flex;
        align-items: center;
        justify-content: center;
        flex: 1;
    }

    & &__navItem {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        padding: 20px;
        height: 100%;
        white-space: nowrap;
        box-sizing: border-box;

        &.router-link-exact-active {
            border-bottom: solid 2px $primary;
        }

        &__navText {
            padding: 15px 0; // Align arrow on the bottom header line
        }
    }
}

@media (max-width: $mobile) {
    .theNavBar {
        $nbLinks: 7;
        justify-content: space-between;

        & &__navItem {
            width: 100% / $nbLinks;
            padding: 20px 6px;
        }
    }
}
</style>
