<template>
    <span class="icon material-symbols-rounded" aria-hidden="true" focusable="false">{{ name }}</span>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            // https://fonts.google.com/icons?icon.style=Rounded
            default: "about",
        },
    },
}
</script>

<style lang="scss">
@import '../style/gatherer';

.icon {
    // vertical-align: middle;
    // height: 1em;
    // width: 1em;
    // min-height: 1em;
    // min-width: 1em;
    font-size: inherit;
}
</style>
