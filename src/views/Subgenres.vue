<template>
    <section class="l-subgenres">
        <div class="l-subgenres__subgenre" v-for="subgenre in subgenres" :key="subgenre.mostRepresentativeAlbum">
            <div class="l-subgenres__albums">
                <img class="l-subgenres__cover" v-for="id in subgenre.albums" :key="id" @click="selectAlbumAndView(id)"
                    :src="getPathToCover(id)" alt="" loading="lazy">
            </div>

            <img class="l-subgenres__cover l-subgenres__most-representative" @click="selectAlbumAndView(subgenre.mostRepresentativeAlbum)"
                :src="getPathToCover(subgenre.mostRepresentativeAlbum)" alt="" loading="lazy">

            <div class="l-subgenres__infos">
                <span class="l-subgenres__name">{{ subgenre.name }}</span>
                <p class="l-subgenres__criteria">
                    Characterized by the following: 
                    <span class="l-subgenres__criterium" v-for="(criterium, index) in subgenre.criteria" :key="criterium">
                        {{ criterium | criterium }}
                        <span v-if="index < subgenre.criteria.length - 1">-</span>
                    </span>
                </p>
                <blockquote class="l-subgenres__description">{{ subgenre.description }}</blockquote>
            </div>
        </div>
    </section>
</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex'

export default {
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

<style lang="scss">
@import '../style/gatherer';

.l-subgenres {
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

    & &__most-representative.l-subgenres__cover {
        height: 300px;
        border: solid 5px $primary;
        margin: 0 20px;
        display: block;
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
</style>
