<template>
    <section class="l-gems">
        <div class="l-gems__item" v-for="album in gems" :key="album.id">
            <Cover class="l-gems__cover" :album="album" @click.native="selectAlbumAndView(album)"></Cover>
            
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
import Cover from '../components/Cover.vue'

export default {
    components: {
        Cover,
    },
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

<style lang="scss" scoped>
@import '../style/gatherer';

.l-gems {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 60px 60px 60px;

    & &__item {
        display: flex;
        border-bottom: solid 1px;
        padding: 100px 0;
        width: 100%;
        max-width: 1200px;
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
