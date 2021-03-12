<template>
    <section class="designers">
        <section class="designers__section" v-for="designer in designersWithEnoughWorks" :key="designer.name">

            <h2 class="title title--2 designers__name">{{ designer.name }}</h2>
            
            <div class="designers__border-wrapper">
                <div class="designers__albums">
                    <div class="designers__albums__item" v-for="album in designer.works" :key="album.id" @click="selectAlbumAndView(album)">
                        <Cover :album="album" thumbnail></Cover>
                    </div>
                </div>
            </div>
        </section>
    </section>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import Arrow from '../components/Arrow.vue'
import Cover from '../components/Cover.vue'

export default {
    components: {
        Arrow,
        Cover,
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
@import '../style/modules/title';

.designers {
    display: flex;
    flex-direction: column;
    align-items: center;

    & &__section {
        max-width: 1200px;
        text-align: center;
        margin: 60px;
    }

    & &__name {
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
        & &__section {
            margin: 20px;
        }

        & &__albums__item {
            height: 120px;
            width: 120px;
        }

        & &__border-wrapper {
            padding: 0 20px;
        }
    }
}
</style>
