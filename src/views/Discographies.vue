<template>
    <section class="l-discographies">
        <section class="l-discographies__artists" v-if="selectedArtist">
            <div class="l-discographies__artist" :class="{'l-discographies__artist--selected': artist == selectedArtist}"
                v-for="artist in artists" :key="artist.id" @click="setSelectedArtist(artist)">

                <Arrow class="l-discographies__arrow" orientation="right" size="small" color="dark" v-if="artist === selectedArtist"></Arrow>
                <div>{{artist}}</div>
            </div>
        </section>
        <section class="l-discographies__selected-album">
            <div class="l-discographies__selected-album__main">
                <img class="l-discographies__selected-album__cover" :class="{'l-discographies__selected-album__cover--border-left': discography.length < 3}"
                    :src="require(`../assets/img/covers/${selectedAlbum.id}${selectedAlbum.cover}`)" alt="">
                <div class="l-discographies__selected-album__infos">
                    <header class="l-discographies__selected-album__header">
                        <div class="l-discographies__selected-album__title">{{ selectedAlbum.title }}</div>
                        <div>
                            <span>{{ selectedAlbum.year }} - {{ selectedAlbum.country }}</span>
                        </div>
                        <div v-if="selectedAlbum.designers.length > 0">
                            Cover by
                            <template v-for="(designer, index) in selectedAlbum.designers">
                                {{designer}}<span v-if="index < selectedAlbum.designers.length - 1" :key="designer">, </span>
                            </template>
                        </div>
                    </header>
                    <footer class="l-discographies__selected-album__footer">
                        <div class="l-discographies__selected-album__criterium" v-for="criterium in selectedAlbum.criteria" :key="criterium">{{ criterium | criterium }}</div>
                    </footer>
                </div>
            </div>
            <div class="l-discographies__selected-track">
                <div class="album-data__label">Selected track</div>
                <div class="album-data__selected-track">{{ selectedAlbum.selectedTrackTitle }}</div>
                <a v-if="selectedAlbum.selectedTrackYtId" :href="youtubePath" target="_blank">
                    <img class="l-discographies__logo" :src="require(`../assets/img/logos/yt_logo_gold.png`)" alt="">
                </a>
            </div>
            <section class="l-discographies__discography" :class="{'l-discographies__discography--borderless': discography.length < 3}">
                <img class="l-discographies__album"
                    v-for="album in discography" :key="album.id" :src="require(`../assets/img/covers/${album.id}${album.cover}`)" alt="" @click="selectAlbum(album)">
            </section>
        </section>
    </section>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'
import Arrow from '../components/Arrow.vue'

export default {
    components: {
        Arrow,
    },
    data() {
        return {
            selectedArtist: null,
        }
    },
    computed: {
        ...mapState(['artists', 'albums', 'selectedAlbum']),
        ...mapGetters(['youtubePath']),
        discography() {
            return this.albums.filter((album) => album.artist === this.selectedAlbum.artist)
        },
    },
    created() {
        if (!this.selectedAlbum) {
            this.randomizeAlbum()
        }
        this.selectedArtist = this.selectedAlbum.artist
    },
    methods: {
        ...mapActions(['selectAlbum', 'randomizeAlbum']),
        setSelectedArtist(artist) {
            this.selectedArtist = artist
            // By default, select the debut album of the artist
            for (let i = 0; i < this.albums.length; i++) {
                const album = this.albums[i]
                if (album.artist === artist) {
                    this.selectAlbum(album)
                    break
                }
            }

            // // Handle iframe
            // if (!this.selectedAlbum.spotifyId && this.selectedAlbum.deezerId) {
            //     this.setSelectedPlayer('deezer');
            // } else if (!this.selectedAlbum.deezerId && this.selectedAlbum.spotifyId) {
            //     this.setSelectedPlayer('spotify');
            // }
        },
    }
}
</script>

<style lang="scss">
@import '../style/gatherer';

.l-discographies {
    $cover-width: 150px;
    display: flex;

    & &__artists {
        $width: 250px;
        position: sticky;
        width: $width;
        min-width: $width;
        height: calc(100vh - #{$header-height});
        overflow-y: scroll;
        scrollbar-width: none;
        // border-right: solid 2px $primary;
        padding: 20px 30px;
        box-sizing: border-box;
        font-size: $fs-09;
    }

    & &__artist {
        cursor: pointer;

        &--selected {
            display: flex;
            align-items: center;
            font-size: $fs-14;
        }
    }

    & &__discography {
        $album-per-column: 2;
        display: flex;
        flex-wrap: wrap;
        max-height: $cover-width * $album-per-column + 20px;
        overflow-y: scroll;
        scrollbar-width: none;
        box-sizing: border-box;
    }

    & &__album {
        cursor: pointer;
        width: $cover-width;
        height: $cover-width;

        // &:last-of-type {
        //     border-bottom: solid 2px $primary;
        // }
    }

    & &__selected-album {
        $albums-per-row: 5;
        display: flex;
        flex-direction: column;
        flex: 1;
        height: max-content;
        margin: 0 auto;
        margin-top: 40px;
        box-shadow: 0px 3px 29px -3px $black;
        max-width: $cover-width * $albums-per-row;
        border-radius: 3px;
        overflow: hidden; // TODO material card effet on full // media query stuck to the left

        &__main {
            display: flex;
            width: 100%;
            height: 300px;
        }

        &__cover {
            height: 300px;
            border-right: solid 2px $primary;
            border-bottom: solid 2px $primary;
        }

        &__infos {
            display: flex;
            flex-direction: column;
            width: 100%;
        }

        &__header {
            width: 100%;
            box-sizing: border-box;
            padding: 20px;
            // height: max-content;
            height: $cover-width;
            background: $secondary-dark;
            border-bottom: solid 1px $primary;
        }

        &__footer {
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            width: 100%;
            height: 50%;
            box-sizing: border-box;
            padding: 20px;
            font-size: $fs-10;
        }

        &__title {
            font-size: $fs-24;
            line-height: 1.3;
        }

        &__criterium {
            padding-right: 10px;
        }
    }

    & &__selected-track {
        padding: 20px;
    }

    & &__logo {
        width: 80px;
    }
}

@media (max-width: 1280px) {
    .l-discographies {
        $cover-width: 100px;

        & &__discography {
            display: flex;
            flex-direction: column;
            overflow-y: scroll;
            scrollbar-width: none;
            width: $cover-width;
            height: max-content;
            max-height: calc(100vh - #{$header-height});
            box-sizing: border-box;
            border-right: solid 2px $primary;

            &--borderless {
                border: 0;
            }
        }

        & &__album {
            width: $cover-width;
            height: $cover-width;
        }

        & &__selected-album {
            height: max-content;
            margin: 0;
            box-shadow: none;
            max-width: none;

            &__cover {
                height: 300px;
                border-right: solid 2px $primary;
                border-bottom: solid 2px $primary;

                &--border-left {
                    border-left: solid 2px $primary;
                }
            }
        }
    }
}
</style>
