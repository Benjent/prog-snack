<template>
    <fade-transition appear>
        <section class="subgenres">
            <div class="subgenres__subgenre" v-for="subgenre in subgenres" :key="subgenre.mostRepresentativeAlbum">
                <div class="subgenres__albums">
                    <Cover
                        class="subgenres__cover"
                        v-for="id in subgenre.albums" :key="id"
                        :album="albumById(id)"
                        bordered
                        :size="130"
                        @click.native="selectAlbumAndView(id)"></Cover>
                </div>

                <div class="subgenres__infosWithMostRepresentative">
                    <Cover
                        class="subgenres__cover subgenres__cover--mostRepresentative"
                        :album="albumById(subgenre.mostRepresentativeAlbum)"
                        bordered
                        :size="$mq === 'M' ? 100 : 200"
                        @click.native="selectAlbumAndView(subgenre.mostRepresentativeAlbum)"></Cover>

                    <div class="subgenres__infos">
                        <h2 class="title title--2 subgenres__name">{{ subgenre.name }}</h2>
                        <p>
                            <span>Characterized by the following: </span>
                            <span class="subgenres__criterium" v-for="(criterium, index) in subgenre.criteria" :key="criterium">
                                {{ criterium | criterium }}
                                <span v-if="index < subgenre.criteria.length - 1">-</span>
                            </span>
                        </p>
                        <blockquote class="text text--description subgenres__description" v-if="!subgenre.description.includes('TODO')">{{ subgenre.description }}</blockquote>
                    </div>
                </div>
            </div>
        </section>
    </fade-transition>
</template>

<script>
import { mapActions, mapState, mapGetters } from "vuex"
import { applyChainedFadeIn } from "../utils/transition-utils"
import { Cover } from "../components"

export default {
    components: {
        Cover,
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
        selectAlbumAndView(id) {
            const album = this.albumById(id)
            this.selectAlbum(album)
            this.$router.push("/discographies")
        },
    },
}
</script>

<style lang="scss" scoped>
@import '../style/gatherer';
@import '../style/mixins/fade-in';
@import '../style/mixins/page';
@import '../style/modules/text';
@import '../style/modules/title';

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
