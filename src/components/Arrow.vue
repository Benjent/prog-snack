<template>
    <div class="arrow" :class="[size, orientation]"></div>
</template>

<script>
export default {
    props: {
        size: {
            type: String,
        },
        color: {
            type: String,
        },
        orientation: {
            type: String,
            default: "top",
            validator(value) {
                return ["top", "right", "bottom", "left"].includes(value)
            },
        },
    },
}
</script>

<style lang="scss">
@import '../style/gatherer';

.arrow {
    content: '';
    display: block;
    position: relative;
    width: 10px;
    height: 10px;
    border: solid var(--input-border-width) $primary;
    border-left: none;
    border-top: none;
    transform: rotate(225deg);

    &.bottom {
        transform: rotate(45deg);
    }

    &.right {
        transform: rotate(-45deg);
    }

    &.left {
        transform: rotate(135deg);
    }
}
</style>
