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
        border: solid 2px $primary;
        background: $secondary;
    }

    &::after {
        content: '';
        display: block;
        position: relative;
        top: 14px;
        right: 30px;
        width: 10px;
        height: 10px;
        border: solid 2px $primary;
        border-left: none;
        border-top: none;
        transform: rotate(45deg);
    }
}
</style>
