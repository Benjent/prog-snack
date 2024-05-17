<template>
    <fade-transition appear>
        <main class="discographies">
            <slide-y-up-transition appear :duration="500">
                <aside class="discographies__sidebar" v-if="selectedArtist">
                    <button
                        class="discographies__artist"
                        :class="{ 'discographies__artist--selected': artist === selectedArtist }"
                        v-for="artist in artists"
                        :key="artist.id"
                        @click="setSelectedArtist(artist)"
                    >
                        <span>{{ artist }}</span>
                    </button>
                </aside>
            </slide-y-up-transition>

            <section class="discographies__main">
                <section class="discographies__selectedAlbum">
                    <div>
                        <Heading :level="2" color="secondary">
                            {{ selectedAlbum.artist }}
                            <br />
                            discography
                        </Heading>
                        <div class="card card--secondary">
                            <section class="discographies__discography">
                                <Cover
                                    class="discographies__album"
                                    v-for="album in discography"
                                    :key="album.id"
                                    :album="album"
                                    rounded
                                    fade
                                    @click.native="selectAlbum(album)"
                                />
                            </section>
                        </div>
                    </div>
                    <AlbumDetails :album="selectedAlbum" />

                    <div v-if="$mq !== 'M' && (spotifyPath || deezerPath)">
                        <section class="discographies__players">
                            <iframe
                                v-if="spotifyPath"
                                class="discographies__players__item"
                                :src="spotifyPath"
                                title="Spotify widget"
                                frameborder="0"
                                allowtransparency="true"
                                allow="encrypted-media"
                            />
                            <iframe
                                v-if="deezerPath"
                                class="discographies__players__item"
                                :src="`${deezerPath}?tracklist=${$mq === 'M' ? false : true}`"
                                title="Deezer widget"
                                frameborder="0"
                                allowtransparency="true"
                                allow="encrypted-media; clipboard-write"
                            />
                        </section>
                    </div>
                </section>
            </section>
        </main>
    </fade-transition>
</template>

<script>
import { mapActions, mapState } from "vuex"
import { AlbumDetails, Cover, Heading } from "../components"
import { flags } from "../db/regions"
import { getDeezerUrl, getSpotifyUrl } from "../utils/url"

export default {
    components: {
        AlbumDetails,
        Cover,
        Heading,
    },
    data() {
        return {
            flags,
            selectedArtist: null,
        }
    },
    computed: {
        ...mapState(["artists", "albums", "selectedAlbum"]),
        discography() {
            return this.albums.filter((album) => album.artist === this.selectedAlbum.artist)
        },
        deezerPath() {
            return getDeezerUrl(this.selectedAlbum.deezerId)
        },
        spotifyPath() {
            return getSpotifyUrl(this.selectedAlbum.spotifyId)
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
@import "../style/gatherer";
@import "../style/mixins/golden";
@import "../style/mixins/page";
@import "../style/modules/card";
@import "../style/modules/text";
@import "../style/modules/title";

.discographies {
    $album-per-column: 2;
    $albums-per-row: 5;
    $card-padding: 20px;
    $cover-gap: 20px;
    $cover-width: 150px;
    $page-padding: 40px;

    display: flex;

    & &__sidebar {
        @include page;
        // @include shadow;
        position: sticky;
        z-index: 1;
        width: var(--aside-width);
        min-width: var(--aside-min-width);
        overflow-y: scroll;
        scrollbar-width: none;
        padding: 20px 30px;
        font-size: 0.9rem;
    }

    & &__artist {
        cursor: pointer;
        display: block;
        padding: 0.2rem;

        &:hover {
            color: $secondary;
        }

        &--selected {
            color: $secondary;
            font-family: $heading-font;
            border-left: solid 2px $secondary;
            padding-left: 0.4rem;
            font-size: 1.2rem;
            margin: 0.6rem 0;
        }
    }

    & &__main {
        @include page;
        width: 100%;
        overflow-y: scroll;
    }

    & &__selectedAlbum {
        display: flex;
        flex-direction: column;
        gap: 40px;
        margin: auto;
        padding: $page-padding;
        max-width: (($cover-width + $cover-gap) * $albums-per-row) + ($card-padding * 2) + ($page-padding * 2);

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
            font-size: 2.4rem;
            line-height: 1.3;
        }
    }

    & &__players {
        display: flex;
        flex-direction: column;
        gap: 20px;
        border-radius: var(--panel-radius);
        // border: solid 3px $primary;
        overflow: hidden;
        min-height: 180px;

        &__item {
            width: 100%;
        }
    }

    & &__track {
        text-align: center;
        padding: 20px 0;
    }

    & &__logo {
        width: 80px;
    }

    & &__discography {
        display: flex;
        flex-wrap: wrap;
        gap: $cover-gap;
        max-height: $cover-width * $album-per-column + $cover-gap * 2;
        overflow-y: scroll;
        scrollbar-width: none;
        mask-image: linear-gradient(rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 93%, transparent 100%);
    }

    & &__album {
        cursor: pointer;
        width: calc((100% - (($albums-per-row - 1) * $cover-gap)) / $albums-per-row);
    }
}

@media (max-width: $mobile) {
    .discographies {
        $cover-width: 100px;

        & &__sidebar {
            padding: 15px;
        }

        & &__selectedAlbum {
            margin: auto;
            padding: 20px;
            max-width: none;
            box-shadow: none;
            gap: 40px;

            &__main {
                display: flex;
                flex-direction: column;

                .title {
                    text-align: center;
                }
            }

            &__cover {
                width: 100%;
                max-width: 120px;
                margin: auto;
                margin-bottom: 10px;
            }

            &__designers {
                margin: auto;
            }

            &__criteria {
                margin: auto;
                margin-top: 20px;
            }

            &__gem {
                text-align: center;
            }
        }

        & &__discography {
            justify-content: center;
        }

        & &__album {
            height: max-content;
            width: calc(100% / 6);
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
