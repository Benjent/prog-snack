<template>
    <section class="gems">
        <div class="gems__item" v-for="album in gems" :key="album.id">
            <Cover class="gems__cover" :album="album" @click.native="selectAlbumAndView(album)"></Cover>
            
            <div class="gems__album">
                <span class="gems__title" @click="selectAlbumAndView(album)">
                    {{album.artist}} - {{album.title}} ({{album.year}})
                </span>
                <blockquote class="gems__description" v-if="album.description && album.description !== 'TODO description'">{{album.description}}</blockquote>
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
@import '../style/mixins/page';

.gems {
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

@media (max-width: $mobile) {
    .gems {
        padding: 20px;

        & &__item, & &__item:nth-child(even) {
            padding: 20px 0;
            flex-direction: column;
            align-items: center;
        }

        & &__album {
            text-align: center;
        }

        & &__cover {
            height: 120px;
            width: 120px;
            border-width: 3px;
        }

        & &__title {
            cursor: pointer;
            font-size: $fs-12;
        }

        & &__description {
            margin-top: 20px;
            font-size: 1em;
        }
    }
}
</style>
