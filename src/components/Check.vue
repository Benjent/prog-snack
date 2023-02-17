<template>
    <div class="check" @mousedown="notifyParent">
        <input class="check__input" :class="{ 'check__input--checked': value }" type="checkbox" :checked="value">
        <label class="check__label">{{ label }}</label>
    </div>
</template>

<script>
export default {
    name: "Check",
    props: {
        label: {
            type: String,
        },
        value: {
            type: Boolean,
            default: false,
        },
    },
    methods: {
        notifyParent() {
            this.$emit("input", !this.value)
        },
    },
}
</script>

<style lang="scss">
@import '../style/gatherer';

.check {
    cursor: pointer;
    display: flex;
    align-items: center;
    position: relative;

    &:hover {
        .check__input:not(.check__input--checked) {
            background: linear-gradient(141deg, $secondary 10%, $ternary 90%);
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
        border: solid 2px $primary;
        margin-right: 10px;

        &--round {
            border-radius: 50%;
        }

        &--checked {
            background: $primary;
        }
    }

    & &__label {
        cursor: pointer;
    }
}
</style>
