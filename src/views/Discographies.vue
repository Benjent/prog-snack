<template>
    <fade-transition appear>
        <section class="discographies">
            <slide-y-up-transition appear :duration="500">
                <aside class="discographies__artists" v-if="selectedArtist">
                    <div class="discographies__artist" :class="{'title': artist == selectedArtist, 'title--3': artist == selectedArtist}"
                        v-for="artist in artists" :key="artist.id" @click="setSelectedArtist(artist)">

                        <Icon v-if="artist === selectedArtist" name="library_music"/>
                        <span>{{artist}}</span>
                    </div>
                </aside>
            </slide-y-up-transition>

            <section class="discographies__selectedAlbum" v-if="$mq === 'M'">
                <Cover class="discographies__selectedAlbum__cover" :album="selectedAlbum" :size="120" bordered fade />
                <h2 class="title title--2 text--name">{{selectedAlbum.title}}</h2>
                <h3 class="title title--3">({{selectedAlbum.year}})</h3>
                <div v-if="selectedAlbum.designers.length > 0">
                    <Icon name="palette" />
                    <span>Cover by</span>
                    <template v-for="(designer, index) in selectedAlbum.designers">
                        {{designer}}<span v-if="index < selectedAlbum.designers.length - 1" :key="designer">, </span>
                    </template>
                </div>
                <div class="discographies__selectedAlbum__criterium" v-for="(criterium) in selectedAlbum.criteria" :key="criterium">{{ criterium | criterium }}</div>
                <div class="discographies__selectedAlbum__gem" v-if="selectedAlbum.isAGem">This album is a must-hear</div>
                <AlbumStarter class="discographies__track" :album="selectedAlbum" />

                <template v-if="discography.length > 1">
                    <h3 class="title title--3">From the same artist</h3>
                    <div class="card">
                        <section class="discographies__discography">
                            <Cover class="discographies__album" v-for="album in discography" :key="album.id" :album="album" fade @click.native="selectAlbum(album)" />
                        </section>
                    </div>
                </template>
            </section>

            <section class="discographies__selectedAlbum" v-else>
                <div class="card card--marginless discographies__selectedAlbum__main">
                    <Cover class="discographies__selectedAlbum__cover" :album="selectedAlbum" bordered fade />
                    <div class="discographies__selectedAlbum__infos">
                        <header class="discographies__selectedAlbum__header">
                            <div class="discographies__selectedAlbum__title text--name text--quaternary">{{ selectedAlbum.title }}</div>
                            <div>
                                <span>{{ selectedAlbum.year }} - {{ selectedAlbum.country | region }}</span>
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
                            <div class="discographies__selectedAlbum__gem" v-if="selectedAlbum.isAGem">This album is a must-hear</div>
                        </footer>
                    </div>
                </div>
                <AlbumStarter class="discographies__track" :album="selectedAlbum" />

                <section v-if="spotifyPath || deezerPath" class="discographies__logos">
                    <img v-if="spotifyPath" class="discographies__logos__item" :src="require('../assets/img/logos/spotify_logo_gold.png')">
                    <img v-if="deezerPath" class="discographies__logos__item" :src="require('../assets/img/logos/deezer_logo_gold.png')">
                </section>
                <section v-if="spotifyPath || deezerPath" class="card discographies__players">
                    <iframe
                        v-if="spotifyPath"
                        class="discographies__players__item"
                        :class="{ 'discographies__players__item--one-missing': spotifyPath && !deezerPath }"
                        :src="spotifyPath"
                        frameborder="0" allowtransparency="true"
                        allow="encrypted-media"></iframe>
                    <iframe
                        v-if="deezerPath"
                        class="discographies__players__item"
                        :class="{ 'discographies__players__item--one-missing': deezerPath && !spotifyPath }"
                        :src="`${deezerPath}?tracklist=${$mq === 'M' ? false : true}`"
                        frameborder="0"
                        allowtransparency="true"
                        allow="encrypted-media; clipboard-write"></iframe>
                </section>

                <template v-if="discography.length > 1">
                    <h3 class="title title--3">From the same artist</h3>
                    <div class="card">
                        <section class="discographies__discography">
                            <Cover class="discographies__album" v-for="album in discography" :key="album.id" :album="album" fade @click.native="selectAlbum(album)" />
                        </section>
                    </div>
                </template>
            </section>
        </section>
    </fade-transition>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex"
import { AlbumStarter, Cover, Icon } from "../components"

export default {
    components: {
        AlbumStarter,
        Cover,
        Icon,
    },
    data() {
        return {
            selectedArtist: null,
        }
    },
    computed: {
        ...mapState(["artists", "albums", "selectedAlbum"]),
        ...mapGetters(["youtubePath", "deezerPath", "spotifyPath"]),
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
        ...mapActions(["selectAlbum", "randomizeAlbum"]),
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
        },
    },
}
</script>

<style lang="scss" scoped>
@import '../style/gatherer';
@import '../style/mixins/golden';
@import '../style/mixins/page';
@import '../style/modules/card';
@import '../style/modules/title';

.discographies {
    $cover-width: 150px;
    display: flex;
    padding-left: var(--aside-width);

    & &__artists {
        @include page;

        position: fixed; // Fixed instead of sticky, so that scrolling the main section keeps the aside position
        left: 0;
        width: var(--aside-width);
        min-width: var(--aside-min-width);
        overflow-y: scroll;
        scrollbar-width: none;
        padding: 20px 30px;
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
        mask-image: linear-gradient(
            rgba(0, 0, 0, 1) 0%,
            rgba(0, 0, 0, 1) 93%,
            transparent 100%
        );
    }

    &__logos {
        display: flex;
        justify-content: space-between;

        &__item {
            max-height: 30px;
        }
    }

    & &__players {
        display: flex;
        gap: 20px;
        border-radius: var(--panel-radius);
        // border: solid 3px $primary;
        overflow: hidden;
        margin-bottom: 60px;
        min-height: 180px;

        &__item {
            width: 100%;

            &----one-missing {
                width: 100%;
            }
        }
    }

    & &__album {
        cursor: pointer;
        width: calc(100% / 5);
    }

    & &__selectedAlbum {
        $albums-per-row: 5;

        @include page;

        height: max-content;
        margin: 40px auto;
        max-width: $cover-width * $albums-per-row;
        overflow-y: scroll;
        scrollbar-width: none;

        &__main {
            display: flex;
            width: 100%;
        }

        &__cover {
            width: calc(100% / 3);
        }

        &__infos {
            display: flex;
            flex-direction: column;
            width: calc(100% / 3) * 2;
        }

        &__header {
            width: 100%;
            padding: 0 0 20px 20px;
            border-bottom: solid 2px $primary;
        }

        &__footer {
            display: flex;
            flex-wrap: wrap;
            width: 100%;
            padding: 20px 0 0 20px;
            font-size: var(--default-font-size);
        }

        &__gem {
            @include golden;
            font-style: italic;
            font-weight: bold;
            width: 100%;
        }

        &__title {
            font-size: $fs-24;
            line-height: 1.3;
        }

        // &__criterium {
        //     padding-right: 10px;
        // }

        &__criterium-separator {
            display: inline-block;
            padding: 0 10px;
        }
    }

    & &__track {
        text-align: center;
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
                width: auto;
                margin: auto;
            }
        }

        & &__discography {
            justify-content: center;
        }

        & &__borderWrapper {
            width: 100%;
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
