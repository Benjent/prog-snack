<template>
    <fade-transition appear>
        <main class="album">
            <button class="album__button button" @click="randomizeAlbum" aria-label="Surprise me with a random album">Surprise me</button>
            <section class="album__body" :key="selectedAlbum.id">
                <slide-x-left-transition appear>
                    <div class="album__info">
                        <h2 class="title title--2">{{ selectedAlbum.artist }}</h2>
                        <h1 class="title title--1 text--name">{{ selectedAlbum.title }}</h1>
                        <div class="album__year">{{ selectedAlbum.year }} - {{ selectedAlbum.country | region }}</div>
                    </div>
                </slide-x-left-transition>

                <Cover class="album__cover" :album="selectedAlbum" :size="$mq === 'M' ? 120 : null" bordered clickable fade @click.native="goToDiscographies" />

                <slide-x-right-transition appear>
                    <div class="album__criteria">
                        <div class="album__gem" v-if="selectedAlbum.isAGem">This album is a must-hear</div>
                        <List :values="selectedAlbum.criteria" :filter="$options.filters.criterium" />
                    </div>
                </slide-x-right-transition>
            </section>

            <AlbumStarter class="album__track" :album="selectedAlbum" />
            <router-link class="album__button button" to="discographies">More infos</router-link>

            <Timeline v-if="$mq !== 'M'" />
        </main>
    </fade-transition>
</template>

<script>
import { mapActions, mapState } from "vuex"
import {
    AlbumStarter, Cover, List, Timeline,
} from "../components"

export default {
    name: "Album",
    components: {
        AlbumStarter,
        Cover,
        Timeline,
        List,
    },
    computed: {
        ...mapState(["selectedAlbum"]),
    },
    created() {
        if (!this.selectedAlbum) {
            this.randomizeAlbum()
        }
    },
    methods: {
        ...mapActions(["randomizeAlbum"]),
        goToDiscographies() {
            this.$router.push("/discographies")
        },
    },
}
</script>

<style lang="scss" scoped>
@import '../style/gatherer';
@import '../style/mixins/golden';
@import '../style/mixins/page';
@import '../style/modules/button';
@import '../style/modules/title';

.album {
    @include page;

    & &__button {
        margin: 0 auto;
        margin-top: 50px;
    }

    & &__body {
        display: flex;
        align-items: center;
        padding: 0 60px;
    }

    & &__info {
        text-align: right;
        width: 45%;
    }

    & &__title {
        font-style: italic;
        font-size: 38px;
    }

    & &__cover {
        margin: 0 30px;
        margin: 45px;
        margin-bottom: 25px;
    }

    & &__criteria {
        width: 45%;
    }

    & &__gem {
        @include golden;
        font-weight: bold;
        font-style: italic;
        display: inline-block;
    }

    & &__track {
        text-align: center;
        margin-top: 10px;
    }
}

@media (max-width: $mobile) {
    .album {
        & &__button {
            margin: 0 auto;

            &:first-of-type {
                margin-top: 20px;
            }

            &:last-child {
                margin-bottom: 20px;
            }
        }

        & &__body {
            padding: 0 16px;
            flex-direction: column;
        }

        & &__info, & &__criteria {
            width: auto;
            text-align: center;
        }

        & &__info {
            margin-top: 20px;
        }

        & &__track {
            margin-bottom: 20px;
        }

        & &__cover {
            margin: 20px;
        }
    }
}
</style>
