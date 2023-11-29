<template>
    <slide-y-up-transition appear :duration="500">
        <header class="theNavBar" :class="{ 'theNavBar--footer': footer }">
            <router-link v-if="!footer" class="theNavBar__logo link" :to="{ name: 'home' }" :aria-current="$route.name === 'home' && 'page'">
                <img src="@/assets/img/logos/snack_font.png" alt="Prog Snack">
            </router-link>
            <nav v-if="footer || (!footer && $mq !== 'M')" class="theNavBar__nav">
                <router-link class="theNavBar__navItem link" v-for="item in nav" :key="item.name" :to="{ name: item.name }" :aria-current="$route.name === item.name && 'page'">
                    <Icon v-if="$mq === 'M'" :name="item.icon" class="theNavBar__navText"/>
                    <div v-else class="theNavBar__navText">{{ item.title }}</div>
                </router-link>
            </nav>
            <SearchBar v-if="!footer" />
        </header>
    </slide-y-up-transition>
</template>

<script>
import Icon from "./Icon/Icon.vue"
import SearchBar from "./SearchBar/SearchBar.vue"

export default {
    name: "TheNavBar",
    components: {
        Icon,
        SearchBar,
    },
    props: {
        footer: {
            type: Boolean,
        },
    },
    data() {
        return {
            isDisplayedNav: false,
            nav: [
                { name: "attic", title: `Albums`, icon: "gallery_thumbnail" },
                { name: "discographies", title: `Discographies`, icon: "queue_music" },
                { name: "gems", title: `Gems`, icon: "stars" },
                { name: "subgenres", title: `Subgenres`, icon: "category" },
                { name: "designers", title: `Designers`, icon: "palette" },
                { name: "stats", title: `Stats`, icon: "equalizer" },
                { name: "about", title: `About`, icon: "help" },
            ],
        }
    },
}
</script>

<style lang="scss" scoped>
@import '@/style/gatherer';
@import '@/style/mixins/shadow';
@import '@/style/modules/link';

.theNavBar {
    @include shadow;
    display: flex;
    align-items: center;
    height: var(--header-height);
    background: $secondary-dark;
    position: fixed;
    width: 100%;
    z-index: 10;

    // Image background
    // background-color: #ffffff; // cars.png background color
    // background-image: url('/src/assets/img/backgrounds/plane.png');
    // background-repeat: no-repeat;
    // background-size: 18%;
    // background-position-x: right;
    // background-position-y: 0%;
    // background-attachment: fixed;

    &--footer {
        bottom: 0;
    }

    .router-link-exact-active {
        pointer-events: none;
        user-select: none;
    }

    & &__logo {
        cursor: pointer;
        height: 100%;
        padding: 16px 10px;
        margin-left: 20px;

        img {
            height: 100%;
        }
    }

    & &__nav {
        // font-family: 'Corben', sans-serif;
        // font-weight: bold;
        display: flex;
        align-items: center;
        justify-content: center;
        flex: 1;
        height: 100%;
        padding: 0 40px;
    }

    & &__navItem {
        display: flex;
        flex-direction: column;
        align-items: center;
        // justify-content: space-between;
        justify-content: center;
        padding: 20px;
        height: 100%;
        white-space: nowrap;

        &.router-link-exact-active {
            border-bottom: solid 2px $primary;
        }

        &:hover {
            border-bottom: solid 2px $primary;
        }

        &__navText {
            padding: 15px 0;
        }
    }
}

@media (max-width: 1260px) {
    .theNavBar {
        & &__logo {
            margin-left: 10px;
            height: 90%;
        }

        & &__navItem {
            padding: 12px;
            // font-size: 12px;
        }
    }
}

@media (max-width: $mobile) {
    .theNavBar {
        $nbLinks: 7;
        justify-content: space-between;

        &--footer {
            .theNavBar__navItem {
                font-size: 14px;
            }
        }

        & &__logo {
            margin: 0;
            height: 100%;
        }

        & &__nav {
            padding: 0;
        }

        & &__navItem {
            width: calc(100% / $nbLinks);
            padding: 20px 6px;
        }
    }
}
</style>
