<template>
    <section class="l-gems">
        <div class="l-gems__item" v-for="album in gems" :key="album.id">
            
            <img class="l-gems__cover" @click="selectAlbumAndView(album)" :src="require(`../assets/img/covers/${album.id}${album.cover}`)" alt="">
            
            <div class="l-gems__album">
                <span class="l-gems__title" @click="selectAlbumAndView(album)">
                    {{album.artist}} - {{album.title}} ({{album.year}})
                </span>
                <blockquote class="l-gems__description" v-if="album.description && album.description !== 'TODO description'">{{album.description}}</blockquote>
                
            </div>
        </div>
    </section>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
    computed: {
        ...mapState(['albumsSortedByYear']),
        gems() {
            return this.albumsSortedByYear.filter((a) => {
                return a.isAGem
            })
        }
    },
    methods: {
        ...mapActions(['selectAlbum']),
        selectAlbumAndView(album) {
            this.selectAlbum(album)
            this.$router.push('/discographies')
        }
    }
}
</script>

<style lang="scss">
@import '../style/gatherer';

.l-gems {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 260px 60px 260px;

    & &__item {
        display: flex;
        border-bottom: solid 1px;
        padding: 100px 0;
        width: 100%;
        margin: 0 auto;

        &:last-of-type {
            border: none;
        }
        &:nth-child(even) {
            flex-direction: row-reverse;
            text-align: right;
        }
    }

    & &__cover {
        cursor: pointer;
        height: 300px;
        margin: 0 30px;
        width: 300px;
        max-width: 300px;
        border: solid 5px $primary;
    }

    & &__title {
        cursor: pointer;
        font-size: $fs-18;
    }

    & &__description {
        font-style: italic;
        font-size: $fs-14;
        margin-top: 50px;
    }
}
</style>
