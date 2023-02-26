<template>
    <label class="check" :for="id">
        <input :id="id" class="check__input" :class="{ 'check__input--checked': value }" type="checkbox" :checked="value" @click="notifyParent">
        {{ label }}
    </label>
</template>

<script>
import { tick } from "@/mixins"

export default {
    name: "Check",
    mixins: [tick],
    props: {
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

<style lang="scss" scoped>
@import '~@/style/gatherer';

.check {
    cursor: pointer;
    display: flex;
    align-items: center;
    position: relative;

    &:hover {
        .check__input:not(.check__input--checked) {
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

        &--round {
            border-radius: 50%;
        }

        &--checked {
            background: $primary;
        }
    }
}
</style>
