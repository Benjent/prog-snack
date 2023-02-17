<template>
    <div class="range">
        <output>{{ value.min }}</output>
        <div class="range__slider">
            <input id="inputMin" ref="inputMin" class="range__input range__input--min" type="range" :value="value.min" :min="min" :max="max" step="1" @input="onMinInput" @mouseup="notifyRelease">
            <input id="inputMax" ref="inputMax" class="range__input range__input--max"  type="range" :value="value.max" :min="min" :max="max" step="1" @input="onMaxInput" @mouseup="notifyRelease">
        </div>
        <output>{{ value.max }}</output>
    </div>
</template>

<script>
// https://medium.com/@predragdavidovic10/native-dual-range-slider-html-css-javascript-91e778134816
export default {
    name: "Range",
    props: {
        min: {
            type: Number,
            default: 0,
        },
        max: {
            type: Number,
            default: 10,
        },
        value: {
            type: Object,
            default: () => ({
                min: 0,
                max: 10,
            }),
        },
    },
    methods: {
        onMinInput(event) {
            const min = Number.parseInt(event.target.value, 10)
            if (min >= this.value.max) {
                const safeMin = this.value.max - 1
                this.value.min = safeMin
                this.$refs.inputMin.value = safeMin
            } else {
                this.value.min = min
            }
            this.notifyParent()
        },
        onMaxInput(event) {
            const max = Number.parseInt(event.target.value, 10)
            if (max <= this.value.min) {
                const safeMax = this.value.min + 1
                this.value.max = safeMax
                this.$refs.inputMax.value = safeMax
            } else {
                this.value.max = max
            }
            this.notifyParent()
        },
        notifyParent() {
            this.$emit("input", this.value)
        },
        notifyRelease() {
            this.$emit("release", true)
        },
    },
}
</script>

<style lang="scss">
@import '../style/gatherer';

.range {
    cursor: pointer;
    position: relative;
    height: var(--tick-size);
    display: flex;

    & &__slider {
        position: relative;
        margin: 0 var(--label-gap);
        width: 100%;
    }

    & &__input {
        pointer-events: none;
        appearance: none;
        width: 100%;
        position: absolute;
        background: $primary;
        top: calc((var(--tick-size) + var(--input-border-width)) / 2);

        &--min {
            z-index: 1;
            height: 0;
        }

        &--max {
            height: 1px;
            position: absolute;
            top: 50%; // This prevent the 1px shift
        }

        &::-webkit-slider-thumb, &::-moz-range-thumb {
            cursor: pointer;
            -webkit-appearance: none;
            appearance: none;
            pointer-events: all;
            height: var(--tick-size);
            width: var(--tick-size);
            min-width: var(--tick-size);
            background: $black;
            border: solid var(--input-border-width) $primary;
            border-radius: 50%;
            position: relative;
        }

        &::-moz-range-thumb:hover, &::-moz-range-thumb:hover {
            background: linear-gradient(141deg, $secondary 10%, $ternary 90%);
        }
    }

    & &__label {
        cursor: pointer;
    }
}
</style>
