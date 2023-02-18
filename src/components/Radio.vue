<template>
    <div class="radio" @mousedown="notifyParent">
        <input class="radio__input" :class="{ 'radio__input--checked': value === own }" type="radio" :value="own">
        <label class="radio__label">{{ label }}</label>
    </div>
</template>

<script>
export default {
    name: "Radio",
    props: {
        label: {
            type: String,
        },
        value: {
            type: String,
        },
        own: {
            type: String,
        },
    },
    methods: {
        notifyParent() {
            const value = this.own !== this.value ? this.own : null
            this.$emit("input", value)
        },
    },
}
</script>

<style lang="scss">
@import '../style/gatherer';

.radio {
    cursor: pointer;
    display: flex;
    align-items: center;
    position: relative;

    &:hover {
        .radio__input:not(.radio__input--checked) {
            background: linear-gradient(141deg, $secondary 10%, $tertiary 90%);
        }
    }

    & &__input {
        cursor: pointer;
        position: relative;
        display: block;
        top: 0;
        left: 0;
        height: var(--tick-size);
        width: var(--tick-size);
        min-width: var(--tick-size);
        background: $black;
        border: solid var(--input-border-width) $primary;
        margin-right: var(--label-gap);
        border-radius: 50%;

        &--checked {
            background: $primary;
        }
    }

    & &__label {
        cursor: pointer;
    }
}
</style>
