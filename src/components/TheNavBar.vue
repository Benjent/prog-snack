<template>
    <header class="l-the-nav-bar">
        <router-link class="l-the-nav-bar__snack link" to="/">Would you like a snack</router-link>
        <nav class="l-the-nav-bar__nav">
            <router-link class="l-the-nav-bar__nav-item link" v-for="item in nav" :key="item.path" :to="item.path">
                <div class="l-the-nav-bar__nav-text">{{ item.title }}</div>
                <!-- <Arrow class="l-the-nav-bar__arrow" orientation="bottom" v-if="$route.path === item.path" color="dark"></Arrow> -->
            </router-link>
        </nav>
        <!-- <div v-else class="l-the-nav-bar__nav">
            <div class="l-the-nav-bar__burger" @click="isDisplayedNav = !isDisplayedNav">
                <div class="l-the-nav-bar__burger-row" v-for="n in 3" :key="n"></div>
            </div>
            <nav class="l-the-nav-bar__burger-nav" v-if="isDisplayedNav">
                <router-link class="l-the-nav-bar__nav-item link" v-for="item in nav" :key="item.path" :to="item.path" @click.native="isDisplayedNav = false">{{ item.title }}</router-link>
            </nav>
        </div> -->
        <SearchBar class="l-the-nav-bar__search-bar"></SearchBar>
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
    data() {
        return {
            isDisplayedNav: false,
            nav: [
                { path: '/attic', title: `The attic` },
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


<style lang="scss">
@import '../style/gatherer';
@import '../style/mixins/shadow';
@import '../style/modules/link';

.l-the-nav-bar {
    @include shadow;
    position: sticky;
    z-index: 10;
    top: 0;
    display: flex;
    align-items: center;
    height: $header-height;
    box-sizing: border-box;
    background: $secondary-dark;
    // border-bottom: solid 2px $primary;

    .router-link-exact-active {
        pointer-events: none;
    }

    & &__snack {
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

    & &__nav-item {
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

        &__nav-text {
            padding: 15px 0; // Align arrow on the bottom header line
        }
    }

    & &__arrow {
        position: absolute;
        bottom: -22px; // TODO use var
    }
}

@media (max-width: 1280px) {
    .l-the-nav-bar {
        & &__nav-item {
            padding: 10px;
        }

        & &__burger {
            cursor: pointer;
            padding: 10px;
            height: 40px;
            width: 34px;
        }

        & &__burger-row {
            height: 3px;
            border-radius: 10px;
            background: $primary;
            width: 100%;
            margin-top: 8px;
        }

        & &__burger-nav {
            position: absolute;
            top: 66px;
            background: $secondary;
            border: solid 2px $primary;
            border-bottom-left-radius: $borderRadius;
            border-bottom-right-radius: $borderRadius;
        }

        // & &__nav-item {
        //     padding: 20px 20px;
        //     white-space: nowrap;

        //     &:hover {
        //         background: $primary;
        //         color: $black;
        //     }

        //     &.router-link-active {
        //         background: $primary;
        //         color: $black;
        //         pointer-events: none;
        //     }
        // }
    }
}
</style>
