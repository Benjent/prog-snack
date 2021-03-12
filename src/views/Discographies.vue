<template>
    <section class="discographies">
        <section class="discographies__artists" v-if="selectedArtist">
            <div class="discographies__artist" :class="{'title': artist == selectedArtist, 'title--3': artist == selectedArtist}"
                v-for="artist in artists" :key="artist.id" @click="setSelectedArtist(artist)">

                <Icon v-if="artist === selectedArtist" name="library"/>
                <span> {{artist}}</span>
            </div>
        </section>

        <section class="discographies__selectedAlbum" v-if="$mq === 'M'">
            <Cover class="discographies__selectedAlbum__cover" :album="selectedAlbum" :size="120" bordered></Cover>
            <h2 class="title title--2">{{selectedAlbum.title}}</h2>
            <h3 class="title title--3">({{selectedAlbum.year}})</h3>
            <div v-if="selectedAlbum.designers.length > 0">
                <Icon name="palette" />
                <span> Cover by</span>
                <template v-for="(designer, index) in selectedAlbum.designers">
                    {{designer}}<span v-if="index < selectedAlbum.designers.length - 1" :key="designer">, </span>
                </template>
            </div>
            <div class="discographies__selectedAlbum__criterium" v-for="(criterium) in selectedAlbum.criteria" :key="criterium">{{ criterium | criterium }}</div>
            <AlbumStarter class="discographies__track" :album="selectedAlbum"></AlbumStarter>
            
            <template v-if="discography.length > 1">
                <h3 class="title title--3 discographies__discographyTitle">From the same artist</h3>
                <div class="discographies__borderWrapper">
                    <section class="discographies__discography">
                        <Cover class="discographies__album" v-for="album in discography" :key="album.id" :album="album" @click.native="selectAlbum(album)"></Cover>
                    </section>
                </div>
            </template>
        </section>

        <section class="discographies__selectedAlbum" v-else>
            <div class="discographies__selectedAlbum__main">
                <Cover class="discographies__selectedAlbum__cover" :album="selectedAlbum" bordered></Cover>
                <div class="discographies__selectedAlbum__infos">
                    <header class="discographies__selectedAlbum__header">
                        <div class="discographies__selectedAlbum__title">{{ selectedAlbum.title }}</div>
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
                    <footer class="discographies__selectedAlbum__footer">
                        <div class="discographies__selectedAlbum__criterium" v-for="(criterium, index) in selectedAlbum.criteria" :key="criterium">
                            <span>{{ criterium | criterium }}</span>
                            <span class="discographies__selectedAlbum__criterium-separator" v-if="index < selectedAlbum.criteria.length - 1">•</span>
                        </div>
                    </footer>
                </div>
            </div>
            <AlbumStarter class="discographies__track" :album="selectedAlbum"></AlbumStarter>

            <template v-if="discography.length > 1">
                <h3 class="title title--3 discographies__discographyTitle">From the same artist</h3>
                <div class="discographies__borderWrapper">
                    <section class="discographies__discography">
                        <Cover class="discographies__album" v-for="album in discography" :key="album.id" :album="album" @click.native="selectAlbum(album)"></Cover>
                    </section>
                </div>
            </template>
        </section>
    </section>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'
import AlbumStarter from '../components/AlbumStarter.vue'
import Arrow from '../components/Arrow.vue'
import Cover from '../components/Cover.vue'
import Icon from '../components/Icon.vue'

export default {
    components: {
        AlbumStarter,
        Arrow,
        Cover,
        Icon,
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
@import '../style/mixins/page';
@import '../style/modules/title';

.discographies {
    $cover-width: 150px;
    display: flex;

    & &__artists {
        @include page;

        position: sticky;
        width: var(--aside-width);
        min-width: var(--aside-min-width);
        overflow-y: scroll;
        scrollbar-width: none;
        padding: 20px 30px;
        box-sizing: border-box;
        font-size: $fs-09;
    }

    & &__artist {
        cursor: pointer;
    }

    & &__discographyTitle {
        padding-bottom: 10px;
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

    & &__borderWrapper {
        width: 100%;
        box-sizing: border-box;
        border-top: solid 2px;
    }

    & &__album {
        cursor: pointer;
        width: calc(100% / 5);
    }

    & &__selectedAlbum {
        $albums-per-row: 5;

        @include page;

        display: flex;
        flex-direction: column;
        flex: 1;
        height: max-content;
        margin: 0 auto;
        margin-top: 40px;
        max-width: $cover-width * $albums-per-row;
        overflow: hidden; // TODO material card effet on full // media query stuck to the left

        &__main {
            display: flex;
            width: 100%;
        }

        &__infos {
            display: flex;
            flex-direction: column;
            width: 100%;
        }

        &__header {
            width: 100%;
            box-sizing: border-box;
            padding: 0 0 20px 20px;
            border-bottom: solid 2px $primary;
        }

        &__footer {
            display: flex;
            flex-wrap: wrap;
            width: 100%;
            box-sizing: border-box;
            padding: 20px 0 0 20px;
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

    & &__track {
        padding: 20px 0 60px 0;
    }

    & &__logo {
        width: 80px;
    }
}

@media (max-width: $mobile) {
    .discographies {
        $cover-width: 100px;

        & &__artists {
            padding: 15px;
        }

        & &__album {
            height: max-content;
            width: calc(100% / 6);
        }

        & &__selectedAlbum {
            margin: auto;
            padding: 20px;
            max-width: none;
            box-shadow: none;
            text-align: center;

            &__cover {
                margin: auto;
            }
        }

        & &__discography {
            justify-content: center;
        }

        & &__borderWrapper {
            width: 100%;
            box-sizing: border-box;
            border-top: solid 2px;
            padding: 0 20px;
        }
    }
}

@media (max-width: 860px) {
    .discographies {
        & &__album {
            width: calc(100% / 5);
        }
    }
}

@media (max-width: 640px) {
    .discographies {
        & &__album {
            width: calc(100% / 3);
        }
    }
}

@media (max-width: 420px) {
    .discographies {
        & &__album {
            width: calc(100% / 2);
        }
    }
}
</style>
