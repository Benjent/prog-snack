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
                <Cover class="l-discographies__selected-album__cover" :class="{'l-discographies__selected-album__cover--border-left': discography.length < 3}" :album="selectedAlbum"></Cover>
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
                        <div class="l-discographies__selected-album__criterium" v-for="(criterium, index) in selectedAlbum.criteria" :key="criterium">
                            <span>{{ criterium | criterium }}</span>
                            <span class="l-discographies__selected-album__criterium-separator" v-if="index < selectedAlbum.criteria.length - 1">•</span>
                        </div>
                    </footer>
                </div>
            </div>
            <div class="l-discographies__selected-track">
                <div class="l-discographies__selected-track__label">Selected track</div>
                <div class="l-discographies__selected-track__title">{{ selectedAlbum.selectedTrackTitle }}</div>
                <a v-if="selectedAlbum.selectedTrackYtId" :href="youtubePath" target="_blank" class="l-discographies__selected-track__logo">
                    <img class="l-discographies__logo" :src="require(`../assets/img/logos/yt_logo_gold.png`)" alt="">
                </a>
            </div>
            <section class="l-discographies__discography" :class="{'l-discographies__discography--borderless': discography.length < 3}">
                <Cover class="l-discographies__album" v-for="album in discography" :key="album.id" :album="album" @click.native="selectAlbum(album)"></Cover>
            </section>
        </section>
    </section>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'
import Cover from '../components/Cover.vue'
import Arrow from '../components/Arrow.vue'

export default {
    components: {
        Cover,
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

<style lang="scss" scoped>
@import '../style/gatherer';

.l-discographies {
    $cover-width: 150px;
    display: flex;

    & &__artists {
        $width: 250px;
        position: sticky;
        width: $width;
        min-width: $width;
        height: calc(100vh - var(--header-height));
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
            background: $secondary-dark;
            border-bottom: solid 1px $primary;
        }

        &__footer {
            display: flex;
            flex-wrap: wrap;
            width: 100%;
            box-sizing: border-box;
            padding: 20px;
            font-size: var(--default-font-size);
        }

        &__title {
            font-size: $fs-24;
            line-height: 1.3;
        }

        &__criterium {
            // padding-right: 10px;
        }

        &__criterium-separator {
            display: inline-block;
            padding: 0 10px;
        }
    }

    & &__selected-track {
        display: flex;
        padding: 20px;

        &__title {
            font-style: italic;
            margin-left: 10px;
        }

        &__logo {
            margin-left: 10px;
        }
    }

    & &__logo {
        width: 80px;
    }
}

@media (max-width: $mobile) {
    .l-discographies {
        $cover-width: 100px;

        & &__album {
            height: max-content;
            width: calc(100% / 8);
            margin-bottom: -5px; // TODO height is not square-friendly
        }

        & &__selected-album {
            margin: 0;
            max-width: none;

            &__cover {
                height: 220px;
            }
        }
    }
}

@media (max-width: 1080px) {
    .l-discographies {
        & &__album {
            width: calc(100% / 6);
        }
    }
}

@media (max-width: 860px) {
    .l-discographies {
        & &__album {
            width: calc(100% / 5);
        }
    }
}

@media (max-width: 640px) {
    .l-discographies {
        & &__album {
            width: calc(100% / 3);
        }
    }
}
</style>
