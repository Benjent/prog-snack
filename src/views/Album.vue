<template>
    <section class="album">
        <button class="album__button button" @click="randomizeAlbum">Surprise me</button>
        <section class="album__body">
            <div class="album__info">
                <div class="album__artist">{{ selectedAlbum.artist }}</div>
                <div class="album__title">{{ selectedAlbum.title }}</div>
                <div class="album__year">{{ selectedAlbum.year }} - {{ selectedAlbum.country }}</div>
            </div>

            <Cover class="album__cover" :album="selectedAlbum" :size="$mq === 'M' ? 120 : null" @click.native="goToDiscographies"></Cover>

            <div class="album__criteria">
                <div class="album-gem" v-if="selectedAlbum.isAGem">This album is a must-hear</div>
                <div class="album-criterium" v-for="criterium in selectedAlbum.criteria" :key="criterium">{{ criterium | criterium }}</div>
            </div>
        </section>

        <div class="album__start">
            Start with the song
            <span class="album-selected-track">{{ selectedAlbum.selectedTrackTitle }}</span>
            <span v-if="selectedAlbum.selectedTrackYtId">
                on
                <a :href="youtubePath" target="_blank">
                    <img class="album__logo" :src="require(`../assets/img/logos/yt_logo_gold.png`)" alt="">
                </a>
            </span>
        </div>
        <router-link class="album__button button" to="discographies">More infos</router-link>

        <Timeline></Timeline>
    </section>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'
import Cover from '../components/Cover.vue'
import Timeline from '../components/Timeline.vue'

export default {
    name: 'Album',
    components: {
        Cover,
        Timeline,
    },
    computed: {
        ...mapState(['selectedAlbum']),
        ...mapGetters(['youtubePath']),
    },
    created() {
        if (!this.selectedAlbum) {
            this.randomizeAlbum()
        }
    },
    methods: {
        ...mapActions(['randomizeAlbum']),
        goToDiscographies() {
            this.$router.push('/discographies')
        },
    },
}
</script>

<style lang="scss" scoped>
@import '../style/gatherer';
@import '../style/modules/button';

.album {
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
        cursor: pointer;
        height: 300px;
        width: 300px;
        margin: 0 30px;
        max-width: 300px;
        border: solid 5px $primary;
        margin: 45px;
        margin-bottom: 25px;
    }

    & &__criteria {
        width: 45%;
    }

    & &__start {
        text-align: center;
    }

    & &__logo {
        width: 100px;
        margin-top: 10px;
    }
}

@media (max-width: $mobile) {
    .album {
        & &__body {
            flex-direction: column;
        }

        & &__info, & &__criteria {
            text-align: center;
        }

        & &__cover {
            border: solid 3px $primary;
        }
    }
}
</style>
