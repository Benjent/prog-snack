<template>
    <div
        v-if="album"
        :id="coverId"
        class="cover"
        :class="{
            'cover--clickable': thumbnail || clickable,
            'cover--bordered': bordered,
            'cover--rounded': rounded,
            'cover--fade': fade,
        }"
        :style="{ 'border-width': borderWidth }"
    >
        <div class="cover__thumbnail" v-if="thumbnail">
            <div class="cover__artist">{{ album.artist }}</div>
            <div class="cover__title text--name">{{ album.title }}</div>
            <div class="cover__year">{{ album.year }}</div>
            <div class="cover__gem" v-if="album.gem">This is a must-hear</div>
        </div>
        <div
            class="cover__album"
            v-if="album"
            :style="{
                height: size && size + 'px',
                width: size && size + 'px',
                'max-height': size && size + 'px',
                'max-width': size && size + 'px',
            }"
        >
            <img class="cover__album__image" :src="cover" :alt="album.title" loading="lazy" />
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
        rounded: {
            type: Boolean,
            default: false,
        },
        fade: {
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
        cover() {
            return this.album.covers[0].url
        },
        coverId() {
            // Used for DOM query selection
            return `cover_${this.album.human_id}`
        },
    },
    mounted() {
        if (this.fade) {
            // Without timeout browser cannot trigger CSS transition
            window.setTimeout(() => {
                this.$el.style.opacity = 1
            }, 0)
        }
    },
}
</script>

<style lang="scss" scoped>
@import "@/style/gatherer";
@import "@/style/mixins/fade-in";
@import "@/style/mixins/golden";

.cover {
    display: inline-block;
    position: relative;
    max-width: 300px;
    max-height: 300px;
    overflow: hidden;

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
        border-radius: var(--panel-radius);
    }

    &--rounded {
        border-radius: var(--panel-radius);
    }

    &--fade {
        @include fadeIn;
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
    }

    & &__year {
        font-size: 0.8rem;
    }

    & &__gem {
        @include golden;
        font-style: italic;
        font-weight: bold;
        font-size: 0.8rem;
    }

    & &__album {
        height: 100%;
        width: 100%;

        &__image {
            display: block;
            width: 100%;
            min-width: 100%;
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
