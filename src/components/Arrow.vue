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
    border: solid 2px $primary;
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
