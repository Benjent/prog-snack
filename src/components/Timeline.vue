<template>
    <div class="timeline">
        <div class="timeline__album" v-for="(album, index) in albumsSortedByYear" :key="album.id">
            <div class="timeline__year" v-if="index == 0 || album.year != albumsSortedByYear[index-1].year">{{ album.year }}</div>
            <Cover class="timeline__cover" :album="album" :size="$mq === 'M' ? 60 : null" clickable @click.native="selectAlbum(album)"></Cover>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from "vuex"
import { applyChainedFadeInEarlyOnly } from "../utils/transition-utils"
import Cover from "./Cover.vue"

export default {
    name: "Timeline",
    components: {
        Cover,
    },
    computed: {
        ...mapState(["albumsSortedByYear"]),
    },
    mounted() {
        applyChainedFadeInEarlyOnly(this.$el, ".timeline__album", 2000, 50)
    },
    methods: {
        ...mapActions(["selectAlbum"]),
    },
}
</script>

<style lang="scss">
@import '../style/gatherer';
@import '../style/mixins/fade-in';
@import '../style/mixins/shadow';

.timeline {
    display: flex;
    align-items: flex-start;

    width: 100vw;

    position: fixed;
    bottom: 0;

    overflow-x: scroll;
    overflow-y: hidden;

    & &__album {
        @include fadeIn;
        display: flex;
    }

    & &__year {
        $albumYearWidth: 75px;

        display: table;

        width: $albumYearWidth;
        z-index: 1;

        background: $secondary;
        color: $primary;

        margin-right: -$albumYearWidth;

        border: solid 2px $primary;
        border-radius: $borderRadius;
        border-bottom-left-radius: 0;
        padding: 2px 15px;

        font-size: 16px;
        text-align: center;
    }

    &__cover {
        width: 160px;
        height: 160px;
        background: $primary;
        margin-top: 20px;
        border-top: solid 2px $primary;
    }
}

@media (max-width: $mobile) {
    .timeline {
        bottom: var(--header-height);
    }
}
</style>
