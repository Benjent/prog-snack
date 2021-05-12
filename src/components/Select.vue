<template>
    <div class="select">
        <select class="select__input" :value="value" @change="notifyParent">
            <option :value="null" selected>All</option>
            <option v-for="option in options" :key="option" :value="option">{{ option }}</option>
        </select>
    </div>
</template>

<script>
export default {
    name: 'Select',
    props: {
        value: String,
        options: [Array, Object],
    },
    methods: {
        notifyParent() {
            this.$emit('input', value)
        },
    },
}
</script>


<style lang="scss" scoped>
@import '../style/gatherer';

.select {
    display: flex;
    position: relative;

    & &__input {
        cursor: pointer;
        width: 100%;
        padding: 6px 10px;
        padding-right: 40px;
        background: $secondary;
        border: solid 0 $primary;
        border-radius: 5px;
        border-bottom-width: 1px;
    }

    &::after {
        $size: 10px;

        content: '';
        display: block;
        position: relative;
        top: calc($size + 2px);
        right: calc($size + 12px);
        width: $size;
        height: $size;
        border: solid 2px $primary;
        border-left: none;
        border-top: none;
        transform: rotate(45deg);
    }
}
</style>
