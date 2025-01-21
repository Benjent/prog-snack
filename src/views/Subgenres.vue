<template>
    <fade-transition appear>
        <main class="subgenres">
            <section
                class="subgenres__subgenre"
                v-for="subgenre in subgenres"
                :key="getMostRepresentativeAlbum(subgenre).human_id"
            >
                <div class="subgenres__albums">
                    <Cover
                        class="subgenres__cover"
                        v-for="album in subgenre.albums"
                        :key="album.human_id"
                        :album="album"
                        bordered
                        :size="130"
                        @click.native="selectAlbumAndView(album)"
                    />
                </div>

                <div class="subgenres__infosWithMostRepresentative">
                    <Cover
                        class="subgenres__cover subgenres__cover--mostRepresentative"
                        :album="getMostRepresentativeAlbum(subgenre)"
                        bordered
                        :size="$mq === 'M' ? 100 : 200"
                        @click.native="selectAlbumAndView(getMostRepresentativeAlbum(subgenre))"
                    />

                    <div class="subgenres__infos">
                        <Heading :level="2" class="subgenres__name text--name" color="secondary">{{
                            subgenre.name
                        }}</Heading>
                        <Typography color="tertiary">
                            <span>Characterized by the following: </span>
                            <List
                                class="subgenres__criterium"
                                :values="subgenre.criterium_labels.map((l) => l.value)"
                                type="flattened"
                                separator=" • "
                            />
                        </Typography>
                        <blockquote class="text text--description subgenres__description" v-if="subgenre.description">
                            {{ subgenre.description }}
                        </blockquote>
                    </div>
                </div>
            </section>
        </main>
    </fade-transition>
</template>

<script>
import { mapActions, mapState, mapGetters } from "vuex"
import { applyChainedFadeIn } from "@/utils/transition"
import { Cover, Heading, List, Typography } from "@/components"

export default {
    components: {
        Cover,
        Heading,
        List,
        Typography,
    },
    computed: {
        ...mapState(["subgenres"]),
        ...mapGetters(["albumById"]),
    },
    mounted() {
        this.$el.querySelectorAll(".subgenres__subgenre").forEach((s) => {
            applyChainedFadeIn(s, ".subgenres__cover")
        })
    },
    methods: {
        ...mapActions(["selectAlbum"]),
        getMostRepresentativeAlbum(subgenre) {
            return subgenre.most_representative_albums[0]
        },
        selectAlbumAndView(album) {
            this.selectAlbum(album)
            this.$router.push("/")
        },
    },
}
</script>

<style lang="scss" scoped>
@import "../style/gatherer";
@import "../style/mixins/fade-in";
@import "../style/mixins/page";
@import "../style/modules/text";
@import "../style/modules/title";

.subgenres {
    & &__subgenre {
        display: flex;
        border-top: solid 2px;
        padding: 100px;

        &:first-of-type {
            border: none;
        }

        &:nth-child(even) {
            flex-direction: row-reverse;
            text-align: right;

            .subgenres__infosWithMostRepresentative {
                flex-direction: row-reverse;
            }

            .subgenre-infos {
                align-items: end;
            }
            .subgenre-albums {
                justify-content: left;
            }
        }
    }

    & &__albums {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-end;
        align-content: baseline;
    }

    & &__cover {
        @include fadeIn;
        cursor: pointer;
        // height: 130px;
        margin: 0 20px 37px 20px;

        &--mostRepresentative {
            margin: 0 20px;
            height: max-content;
            width: max-content;
        }
    }

    & &__infosWithMostRepresentative {
        display: flex;
    }

    & &__infos {
        display: flex;
        flex-direction: column;
        flex: 1;
        gap: 1rem;
        padding: 0 20px;
    }

    & &__description {
        text-align: justify;
        margin: 0;
        max-width: 800px;
    }

    & &__criterium {
        font-style: italic;
    }
}

@media (max-width: $mobile) {
    .subgenres {
        padding: 20px;

        & &__subgenre {
            padding: 0;
            margin-bottom: 60px;
            display: flex;
            flex-direction: column;
            border: none;

            &:first-child {
                margin-top: 20px;
            }

            &:nth-child(even) {
                .subgenres__cover--mostRepresentative {
                    float: right;
                    margin-left: 20px;
                }
            }
        }

        & &__infosWithMostRepresentative {
            display: block;
        }

        & &__infos {
            display: block;
            padding: 0;
        }

        & &__cover {
            &--mostRepresentative {
                float: left;
                margin: 0;
                margin-right: 20px;
                margin-bottom: 20px;
            }
        }

        & &__albums {
            display: none;
        }
    }
}
</style>
