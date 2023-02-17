<template>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18px" height="18px" class="icon">
        <path :d="path" />
    </svg>
</template>

<script>
import icons from "../assets/scripts/icons"

export default {
    props: {
        name: {
            type: String,
            default: "about",
        },
        orientation: {
            type: String,
            default: "top",
            validator(value) {
                return ["top", "right", "bottom", "left"].includes(value)
            },
        },
    },
    computed: {
        path() {
            return icons[this.name]
        },
    },
}
</script>

<style lang="scss">
@import '../style/gatherer';

.icon {
    display: inline-flex;
    align-items: center;

    fill: currentColor;
    height: 1em;
    width: 1em;
    min-height: 1em;
    min-width: 1em;
    font-size: inherit;

    &.bottom {
        transform: rotate(180deg);
    }

    &.right {
        transform: rotate(90deg);
    }

    &.left {
        transform: rotate(-90deg);
    }
}
</style>
