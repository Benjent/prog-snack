<template>
    <section class="subgenres">
        <div class="subgenres__subgenre" v-for="subgenre in subgenres" :key="subgenre.mostRepresentativeAlbum">
            <div class="subgenres__albums">
                <Cover class="subgenres__cover" v-for="id in subgenre.albums" :key="id" :album="albumById(id)" @click.native="selectAlbumAndView(id)"></Cover>
            </div>

            <Cover v-if="$mq !== 'M'" class="subgenres__cover subgenres__most-representative" :album="albumById(subgenre.mostRepresentativeAlbum)"
                @click.native="selectAlbumAndView(subgenre.mostRepresentativeAlbum)"></Cover>

            <div class="subgenres__infos">
                <Cover v-if="$mq === 'M'" class="subgenres__cover subgenres__most-representative" :album="albumById(subgenre.mostRepresentativeAlbum)"
                    @click.native="selectAlbumAndView(subgenre.mostRepresentativeAlbum)"></Cover>
                <span class="subgenres__name">{{ subgenre.name }}</span>
                <p class="subgenres__criteria">
                    Characterized by the following: 
                    <span class="subgenres__criterium" v-for="(criterium, index) in subgenre.criteria" :key="criterium">
                        {{ criterium | criterium }}
                        <span v-if="index < subgenre.criteria.length - 1">-</span>
                    </span>
                </p>
                <blockquote class="subgenres__description">{{ subgenre.description }}</blockquote>
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

.subgenres {
    @include page;

    & &__subgenre {
        display: flex;
        border-top: solid 1px;
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
        height: 300px;
        border: solid 5px $primary;
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
        border: solid 3px $primary;
        margin: 0 20px 37px 20px;
    }

    & &__infos {
        display: flex;
        flex-direction: column;
        padding: 0 20px;
    }

    & &__name {
        font-size: $specialInfoFontSize;
    }

    & &__description {
        font-style: italic;
        font-size: $mainFontSizeSmall;
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
            padding-top: 100px;
            display: flex;
            flex-direction: column;
            border: none;

            &:first-child {
                padding-top: 0;
            }

            &:nth-child(even) {
                flex-direction: column;
            }
        }

        & &__most-representative.subgenres__cover {
            float: left;
            height: 100px;
            width: 100px;
            border-width: 3px;
            margin-bottom: 20px;
        }

        & &__albums {
            display: none;
        }

        & &__description {
            font-size: 1em;
        }
    }
}
</style>
