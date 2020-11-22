<template>
    <div class="l-cover" v-if="album">
        <img class="l-cover__image" :src="require(`../assets/img/covers/${album.id}${album.cover}`)" :alt="album.title">
    </div>
</template>

<script>
export default {
    name: 'Cover',
    props: {
        album: {
            type: Object,
        },
    },
}
</script>


<style lang="scss" scoped>
@import '../style/gatherer';

.l-cover {
    display: ruby; // Fix squeeze due to parent's flex display. Why? You tell me
    & &__image {
        height: 100%;
        width: 100%;
        min-width: 100%;
        min-height: 100%;
        max-width: 300px;
        max-height: 300px;
    }
}
</style>
