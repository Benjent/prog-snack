<template>
    <div class="albumStarter">
        <span class="albumStarter__sentence">Start with the song </span>
        <span class="albumStarter__trackTitle text text--italic">{{ album.selectedTrackTitle }}</span>
        <template v-if="album.selectedTrackYtId">
            <span> on </span>
            <a :href="youtubePath" target="_blank">
                <Icon name="play_circle" />
                YouTube
                <!-- <img class="albumStarter__logo" :src="require(`@/assets/img/logos/yt_logo_gold.png`)" alt=""> -->
            </a>
        </template>
    </div>
</template>

<script>
import { getYouTubeUrl } from "@/utils/url"
import Icon from "../Icon/Icon.vue"

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
@import '~@/style/gatherer';
@import '~@/style/modules/text';

.albumStarter {
    & &__logo {
        height: 1em;
    }
}
</style>
