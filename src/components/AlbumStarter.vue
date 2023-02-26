<template>
    <div class="albumStarter">
        <span>Start with the song</span>
        <span class="text text--italic"> {{ album.selectedTrackTitle }}</span>
        <template v-if="album.selectedTrackYtId">
            <span> on </span>
            <a :href="youtubePath" target="_blank">
                <Icon name="play_circle" />
                YouTube
                <!-- <img class="albumStarter__logo" :src="require(`../assets/img/logos/yt_logo_gold.png`)" alt=""> -->
            </a>
        </template>
    </div>
</template>

<script>
import Icon from "./Icon.vue"
import { getYouTubeUrl } from "../utils/url"

export default {
    name: "AlbumStarter",
    components: {
        Icon,
    },
    props: {
        album: {
            type: Object,
        },
    },
    computed: {
        youtubePath() {
            return getYouTubeUrl(this.album.selectedTrackYtId)
        },
    },
}
</script>

<style lang="scss" scoped>
@import '../style/gatherer';
@import '../style/modules/text';

.albumStarter {
    & &__logo {
        height: 1em;
    }
}
</style>
