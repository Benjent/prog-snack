<template>
    <div class="albumStarter">
        <span class="albumStarter__sentence">Start with the song </span>
        <span class="albumStarter__trackTitle text text--italic">{{ album.track_title }}</span>
        <template v-if="album.track_title">
            <span> on </span>
            <a :href="youtubePath" target="_blank">
                <Icon name="play_circle" />
                YouTube
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
            return getYouTubeUrl(this.album.track_title)
        },
    },
}
</script>

<style lang="scss" scoped>
@import "@/style/gatherer";
@import "@/style/modules/text";

.albumStarter {
    & &__logo {
        height: 1em;
    }
}
</style>
