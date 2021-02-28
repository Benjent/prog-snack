<template>
    <div class="numberUnit">
        <span class="title title--3">{{ number }}</span>
        <span class="numberUnit__unit"> {{ unit }}</span>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
    name: 'AlbumStarter',
    props: {
        number: Number,
        unit: String,
    },
}
</script>

<style lang="scss" scoped>
@import '../style/gatherer';
@import '../style/modules/title';

.numberUnit {
    & &__unit {
        position: relative;
        top: -0.7em;
    }
}
</style>
