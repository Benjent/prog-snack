<template>
    <div class="l-album-thumb" v-if="album">
        <div class="l-album-thumb__infos">
            <div class="l-album-thumb__artist">{{ album.artist }}</div>
            <div class="l-album-thumb__title">{{ album.title }}</div>
            <div class="l-album-thumb__year">{{ album.year }}</div>
            <div class="l-album-thumb__gem" v-if="album.isAGem">This is a must-hear</div>
        </div>
        <Cover :album="album"></Cover>
    </div>
</template>

<script>
import Cover from './Cover.vue'

export default {
    name: 'AlbumThumb',
    components: {
        Cover,
    },
    props: {
        album: {
            type: Object,
        },
    },
}
</script>


<style lang="scss" scoped>
@import '../style/gatherer';

.l-album-thumb {
    cursor: pointer;
    position: relative;
    max-width: 300px;
    max-height: 300px;
    overflow: hidden;

    &:hover {
        .l-album-thumb__infos {
            opacity: 1;
        }
    }

    & &__infos {
        position: absolute;
        // top: 50%;
        // left: 50%;
        // transform: translate(-50%, -50%);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 97%;
        text-align: center;
        background: rgba(0, 0, 0, 0.7);
        opacity: 0;
        transition: opacity 0.2s;
        padding: 5px;
        box-sizing: border-box;
    }

    & &__gem {
        font-style: italic;
        font-weight: bold;
        border-top: solid 1px;
        border-bottom: solid 1px;
    }

    & &__cover {
        width: 100%;
    }
}

@media (max-width: $mobile) {
    .l-album-thumb {
        font-size: 0.8em;
    }
}
</style>
