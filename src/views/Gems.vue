<template>
    <fade-transition appear>
        <main class="gems">
            <div class="gems__item" v-for="album in gems" :key="album.id">
                <Cover
                    class="gems__cover"
                    :album="album"
                    :size="$mq === 'M' ? 120 : null"
                    rounded
                    @click.native="selectAlbumAndView(album)"
                />

                <div class="gems__album">
                    <button class="gems__title" @click="selectAlbumAndView(album)">
                        <Heading :level="3">{{ album.artist }}</Heading>
                        <Heading :level="2" class="text--name">{{ album.title }}</Heading>
                        <span>({{ album.year }})</span>
                    </button>
                    <blockquote
                        class="text text--description gems__description"
                        v-if="album.description && !album.description.includes('TODO')"
                    >
                        {{ album.description }}
                    </blockquote>
                </div>
            </div>
        </main>
    </fade-transition>
</template>

<script>
import { mapActions, mapState } from "vuex"
import { Cover, Heading } from "../components"

export default {
    components: {
        Cover,
        Heading,
    },
    computed: {
        ...mapState(["albumsSortedByYear"]),
        gems() {
            return this.albumsSortedByYear.filter((a) => a.isAGem)
        },
    },
    methods: {
        ...mapActions(["selectAlbum"]),
        selectAlbumAndView(album) {
            this.selectAlbum(album)
            this.$router.push("/discographies")
        },
    },
}
</script>

<style lang="scss" scoped>
@import "../style/gatherer";
@import "../style/mixins/halo";
@import "../style/mixins/page";
@import "../style/modules/text";

.gems {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 60px 60px 60px;

    & &__item {
        display: flex;
        padding: 80px 0;
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;

        &:first-of-type {
            padding-top: 60px;
        }

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

    & &__album {
        flex: 1;
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

        & &__item,
        & &__item:nth-child(even) {
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
