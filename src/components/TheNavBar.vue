<template>
    <header class="theNavBar" :class="{ 'theNavBar--footer': footer }">
        <router-link v-if="!footer" class="theNavBar__logo link" to="/">
            <img src="../assets/img/logos/snack_font.png" alt="Prog Snack">
        </router-link>
        <nav v-if="footer || (!footer && $mq !== 'M')" class="theNavBar__nav">
            <router-link class="theNavBar__navItem link" v-for="item in nav" :key="item.path" :to="item.path">
                <Icon v-if="$mq === 'M'" :name="item.icon" class="theNavBar__navText"/>
                <div v-else class="theNavBar__navText">{{ item.title }}</div>
            </router-link>
        </nav>
        <SearchBar v-if="!footer"></SearchBar>
    </header>
</template>

<script>
import Icon from './Icon.vue'
import SearchBar from './SearchBar.vue'

export default {
    name: 'TheNavBar',
    components: {
        Icon,
        SearchBar,
    },
    props: {
        footer: Boolean,
    },
    data() {
        return {
            isDisplayedNav: false,
            nav: [
                { path: '/albums', title: `Albums`, icon: 'mosaic' },
                { path: '/discographies', title: `Discographies`, icon: 'list' },
                { path: '/gems', title: `Gems`, icon: 'star' },
                { path: '/subgenres', title: `Subgenres`, icon: 'subgenres' },
                { path: '/designers', title: `Designers`, icon: 'palette' },
                { path: '/stats', title: `Stats`, icon: 'equalizer' },
                { path: '/about', title: `About`, icon: 'help' },
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
        user-select: none;
    }

    & &__logo {
        cursor: pointer;
        font-size: 30px;
        margin: 10px;
        margin-left: 20px;
        height: 60%;

        img {
            height: 100%;
        }
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
            padding: 15px 0;
        }
    }
}

@media (max-width: $mobile) {
    .theNavBar {
        $nbLinks: 7;
        justify-content: space-between;

        & &__logo {
            cursor: pointer;
            top: 4px;
        }

        & &__navItem {
            width: 100% / $nbLinks;
            padding: 20px 6px;
        }
    }
}
</style>
