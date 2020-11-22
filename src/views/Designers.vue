<template>
    <section class="l-designers">
        <div class="l-designers__item" v-for="designer in designersWithEnoughWorks" :key="designer.name">

            <div class="l-designers__name">{{ designer.name }}</div>
            
            <div class="l-designers__border-wrapper">
                <Arrow size="medium" class="l-designers__arrow" orientation="bottom" color="dark"></Arrow>

                <div class="l-designers__albums">
                    <div class="l-designers__albums-item" v-for="album in designer.works" :key="album.id" @click="selectAlbumAndView(album)">
                        <AlbumThumb :album="album"></AlbumThumb>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import Arrow from '../components/Arrow.vue'
import AlbumThumb from '../components/AlbumThumb.vue'

export default {
    components: {
        Arrow,
        AlbumThumb,
    },
    computed: {
        ...mapState(['designers']),
        designersWithEnoughWorks() {
            return Object.values(this.designers).filter((d) => {
                return d.works.length > 1
            })
        }
    },
    methods: {
        ...mapActions(['selectAlbum']),
        selectAlbumAndView(album) {
            this.selectAlbum(album)
            this.$router.push('/discographies')
        }
    },
}
</script>

<style lang="scss" scoped>
@import '../style/gatherer';

.l-designers {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 60px 20px;

    & &__item {
        max-width: 1200px;
        text-align: center;
        padding: 40px;

        &:first-child {
            padding-top: 0;
        }
    }

    & &__name {
        font-size: $fs-24;
        padding-bottom: 10px;
    }

    & &__albums {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    & &__albums-item {
        display: flex;
        flex-direction: column;
        position: relative;
        height: auto;
        font-size: 17px;
        width: 150px;
        height: 150px;
    }

    & &__border-wrapper {
        width: 100%;
        box-sizing: border-box;
        border-top: solid 2px;
        padding: 0 50px;
    }

    & &__arrow {
        position: relative;
        margin: 0 auto;
        margin-bottom: -20px;
        z-index: 1;
    }
}
</style>
