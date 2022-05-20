<template>
    <fade-transition appear>
        <section class="album">
            <button class="album__button button" @click="randomizeAlbum">Surprise me</button>
            <section class="album__body">
                <div class="album__info">
                    <h2 class="title title--2">{{ selectedAlbum.artist }}</h2>
                    <h1 class="title title--1 text--album-title">{{ selectedAlbum.title }}</h1>
                    <div class="album__year">{{ selectedAlbum.year }} - {{ selectedAlbum.country }}</div>
                </div>

                <Cover class="album__cover" :album="selectedAlbum" :size="$mq === 'M' ? 120 : null" bordered clickable @click.native="goToDiscographies"></Cover>

                <div class="album__criteria">
                    <div class="album-gem" v-if="selectedAlbum.isAGem">This album is a must-hear</div>
                    <div class="album-criterium" v-for="criterium in selectedAlbum.criteria" :key="criterium">{{ criterium | criterium }}</div>
                </div>
            </section>

            <AlbumStarter class="album__track" :album="selectedAlbum"></AlbumStarter>
            <router-link class="album__button button" to="discographies">More infos</router-link>

            <Timeline v-if="$mq !== 'M'"></Timeline>
        </section>
    </fade-transition>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex"
import AlbumStarter from "../components/AlbumStarter.vue"
import Cover from "../components/Cover.vue"
import Timeline from "../components/Timeline.vue"

export default {
    name: "Album",
    components: {
        AlbumStarter,
        Cover,
        Timeline,
    },
    computed: {
        ...mapState(["selectedAlbum"]),
        ...mapGetters(["youtubePath"]),
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
