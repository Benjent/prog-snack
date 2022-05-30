<template>
    <div
        v-if="album"
        :id="coverId"
        class="cover"
        :class="{ 'cover--clickable': thumbnail || clickable, 'cover--bordered': bordered }"
        :style="{ 'border-width': borderWidth }"> <!-- :style="{ 'background-image': require(`../assets/img/covers/${album.id}${album.cover}`) }" -->
        <div class="cover__thumbnail" v-if="thumbnail">
            <div class="cover__artist">{{ album.artist }}</div>
            <div class="cover__title text--album-title">{{ album.title }}</div>
            <div class="cover__year">{{ album.year }}</div>
            <div class="cover__gem" v-if="album.isAGem">This is a must-hear</div>
        </div>
        <div class="cover__album" v-if="album" :style="{ height: size && size + 'px', width: size && size + 'px', 'max-height': size && size + 'px', 'max-width': size && size + 'px' }">
            <img class="cover__album__image" :src="getCover(album)" :alt="album.title">
        </div>
    </div>
</template>

<script>
export default {
    name: "Cover",
    props: {
        album: {
            type: Object,
        },
        size: {
            type: Number,
        },
        thumbnail: {
            type: Boolean,
            default: false,
        },
        clickable: {
            type: Boolean,
            default: false,
        },
        bordered: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        borderWidth() {
            if (this.size > 200) {
                return `${5}px`
            }
            if (this.size > 0) {
                return `${3}px`
            }
            return `${5}px`
        },
        coverId() {
            return `cover_${this.album.id}`
        },
    },
    mounted() {
        // Without timeout browser cannot trigger CSS transition
        window.setTimeout(() => {
            this.$el.style.opacity = 1
        }, 0)
    },
    methods: {
        getCover(album) {
            try {
                return require(`../assets/img/covers/${album.id}${album.cover}`) // eslint-disable-line global-require
            } catch (error) {
                // Most probably an error with a file extension (image format) not handled by webpack.
                console.error(`Unable to load cover of album with id: ${album.id}`)
                return null
            }
        },
    },
}
</script>

<style lang="scss" scoped>
@import '../style/gatherer';

.cover {
    display: inline-block;
    position: relative;
    max-width: 300px;
    max-height: 300px;
    overflow: hidden;
    opacity: 0;
    transition: opacity 0.5s;

    &:hover {
        .cover__thumbnail {
            opacity: 1;
        }
    }

    &--clickable {
        cursor: pointer;
    }

    &--bordered {
        border-style: solid;
        border-color: $primary;
    }

    & &__thumbnail {
        position: absolute;
        // top: 50%;
        // left: 50%;
        // transform: translate(-50%, -50%);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        text-align: center;
        background: rgba(0, 0, 0, 0.7);
        opacity: 0;
        transition: opacity 0.2s;
        padding: 5px;
        box-sizing: border-box;
    }

    & &__year {
        font-size: 0.8rem;
    }

    & &__gem {
        font-style: italic;
        font-weight: bold;
        border-top: solid 1px;
        border-bottom: solid 1px;
    }

    & &__album {
        // display: ruby;
        height: 100%;
        width: 100%;

        &__image {
            display: block;
            height: 100%;
            width: 100%;
            min-width: 100%;
            min-height: 100%;
            max-width: 300px;
            max-height: 300px;
        }
    }
}

@media (max-width: $mobile) {
    .cover {
        font-size: 0.8em;

        &--bordered {
            border-width: 3px;
        }
    }
}
</style>
