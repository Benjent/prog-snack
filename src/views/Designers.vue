<template>
    <section class="designers">
        <div class="designers__item" v-for="designer in designersWithEnoughWorks" :key="designer.name">

            <div class="designers__name">{{ designer.name }}</div>
            
            <div class="designers__border-wrapper">
                <Arrow size="medium" class="designers__arrow" orientation="bottom" color="dark"></Arrow>

                <div class="designers__albums">
                    <div class="designers__albums__item" v-for="album in designer.works" :key="album.id" @click="selectAlbumAndView(album)">
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
@import '../style/mixins/page';

.designers {
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

    & &__albums__item {
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

@media (max-width: $mobile) {
    .designers {
        padding: 20px 0;

        & &__item {
            padding: 0;
            padding-top: 20px;

            &:first-child {
                padding-top: 0;
            }
        }

        & &__albums__item {
            height: 120px;
            width: 120px;
        }
    }
}
</style>
