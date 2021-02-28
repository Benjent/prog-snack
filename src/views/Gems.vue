<template>
    <section class="gems">
        <div class="gems__item" v-for="album in gems" :key="album.id">
            <Cover class="gems__cover" :album="album" :size="$mq === 'M' ? 120 : null" bordered @click.native="selectAlbumAndView(album)"></Cover>
            
            <div class="gems__album">
                <div class="gems__title" @click="selectAlbumAndView(album)">
                    <h3 class="title title--3">{{album.artist}}</h3>
                    <h2 class="title title--2">{{album.title}}</h2>
                    <span>({{album.year}})</span>
                </div>
                <blockquote class="text text--description gems__description" v-if="album.description && album.description !== 'TODO description'">{{album.description}}</blockquote>
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
@import '../style/modules/text';

.gems {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 60px 60px 60px;

    & &__item {
        display: flex;
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
        margin: 0 30px;
    }

    & &__title {
        cursor: pointer;
    }

    & &__description {
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

        & &__description {
            margin-top: 20px;
            font-size: 1em;
        }
    }
}
</style>
