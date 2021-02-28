<template>
    <section class="subgenres">
        <div class="subgenres__subgenre" v-for="subgenre in subgenres" :key="subgenre.mostRepresentativeAlbum">
            <div class="subgenres__albums">
                <Cover class="subgenres__cover" v-for="id in subgenre.albums" :key="id" :album="albumById(id)" bordered @click.native="selectAlbumAndView(id)"></Cover>
            </div>

            <Cover
                v-if="$mq !== 'M'"
                class="subgenres__cover subgenres__most-representative"
                :album="albumById(subgenre.mostRepresentativeAlbum)"
                :size="300"
                bordered
                @click.native="selectAlbumAndView(subgenre.mostRepresentativeAlbum)"></Cover>

            <div class="subgenres__infos">
                <Cover
                    v-if="$mq === 'M'"
                    class="subgenres__cover subgenres__most-representative"
                    :album="albumById(subgenre.mostRepresentativeAlbum)"
                    bordered
                    :size="100"
                    @click.native="selectAlbumAndView(subgenre.mostRepresentativeAlbum)"></Cover>
                <h1 class="title title--1 subgenres__name">{{ subgenre.name }}</h1>
                <p class="subgenres__criteria">
                    Characterized by the following: 
                    <span class="subgenres__criterium" v-for="(criterium, index) in subgenre.criteria" :key="criterium">
                        {{ criterium | criterium }}
                        <span v-if="index < subgenre.criteria.length - 1">-</span>
                    </span>
                </p>
                <blockquote class="text text--description subgenres__description">{{ subgenre.description }}</blockquote>
            </div>
        </div>
    </section>
</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex'
import Cover from '../components/Cover.vue'

export default {
    components: {
        Cover,
    },
    computed: {
        ...mapState(['subgenres']),
        ...mapGetters(['albumById']),
    },
    methods: {
        ...mapActions(['selectAlbum']),
        selectAlbumAndView(id) {
            const album = this.albumById(id)
            this.selectAlbum(album)
            this.$router.push('/discographies')
        },
        getPathToCover(id) {
            const album = this.albumById(id)
            return require(`../assets/img/covers/${album.id}${album.cover}`)
        },
    },
}
</script>

<style lang="scss" scoped>
@import '../style/gatherer';
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

            .subgenre-infos {
                align-items: end;
            }
            .subgenre-albums {
                justify-content: left;
            }
        }
    }

    & &__most-representative.subgenres__cover {
        margin: 0 20px;
    }

    & &__albums {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-end;
        align-content: baseline;
    }

    & &__cover {
        cursor: pointer;
        height: 130px;
        margin: 0 20px 37px 20px;
    }

    & &__infos {
        display: flex;
        flex-direction: column;
        padding: 0 20px;
    }

    & &__description {
        text-align: justify;
        margin: 0;
        max-width: 800px;
    }

    & &__criteria {
        display: block;
        font-size: $mainFontSizeSmall;

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
                margin-top: 60px;
            }

            &:nth-child(even) {
                .subgenres__most-representative.subgenres__cover {
                    margin-left: auto;
                }
            }
        }

        & &__cover {
            height: inherit;
        }

        & &__most-representative.subgenres__cover {
            height: 100px;
            width: 100px;
            margin: 0;
            margin-bottom: 20px;
        }

        & &__albums {
            display: none;
        }
    }
}
</style>
