<template>
    <div class="select">
        <button
            class="select__input"
            :class="{ 'select__input--open': isDisplayedOptions }"
            aria-label="Toggle options"
            @click="isDisplayedOptions = !isDisplayedOptions"
        >
            <div class="select__input__value">{{ displayedValue }}</div>
            <Icon :name="isDisplayedOptions ? 'expand_less' : 'expand_more'" />
        </button>
        <div class="options" v-if="isDisplayedOptions">
            <button class="options__item select__option" @click="notifyParent(null)">All</button>
            <button class="options__item select__option" v-if="custom" @click="notifyParent('Custom')">Custom</button>
            <button
                class="options__item select__option"
                v-for="option in options"
                :key="option"
                @click="notifyParent(option)"
            >
                {{ filter ? filter(option) : option }}
            </button>
        </div>
    </div>
</template>

<script>
import Icon from "../Icon/Icon.vue"

export default {
    name: "Select",
    components: {
        Icon,
    },
    props: {
        value: {
            type: [String, Number],
        },
        options: {
            type: [Array, Object],
        },
        custom: {
            type: Boolean,
            default: false,
        },
        filter: {
            type: Function,
        },
    },
    data() {
        return {
            isDisplayedOptions: false,
        }
    },
    computed: {
        displayedValue() {
            if (this.value) {
                return this.filter ? this.filter(this.value) : this.value
            }
            return "All"
        },
    },
    methods: {
        notifyParent(value) {
            this.isDisplayedOptions = false
            this.$emit("input", value)
        },
    },
}
</script>

<style lang="scss" scoped>
@import "@/style/gatherer";
@import "@/style/mixins/sunset";
@import "@/style/modules/options";

.select {
    display: flex;
    flex-direction: column;
    position: relative;

    & &__input {
        cursor: pointer;
        display: flex;
        justify-content: space-between;
        width: 100%;
        padding: var(--input-vertical-padding) var(--input-horizontal-padding);
        background: $input-background-color;
        border: solid var(--input-border-width) $primary;
        border-radius: var(--select-radius);

        &:hover {
            @include sunset;
        }

        &--open {
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
        }
    }

    .icon {
        font-size: x-large;
    }

    & &__option {
        padding: 6px 10px;
    }
}
</style>
