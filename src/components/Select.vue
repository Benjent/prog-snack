<template>
    <div class="select">
        <div class="select__input" @click="isDisplayedOptions = !isDisplayedOptions">
            <div>{{ displayedValue }}</div>
            <Icon :name="isDisplayedOptions ? 'expand_less' : 'expand_more'" />
        </div>
        <div class="select__options" v-if="isDisplayedOptions">
            <div class="select__option" @click="notifyParent(null)">All</div>
            <div class="select__option" v-if="custom" @click="notifyParent('Custom')">Custom</div>
            <div class="select__option" v-for="option in options" :key="option" @click="notifyParent(option)">{{ filter ? filter(option) : option }}</div>
        </div>
    </div>
</template>

<script>
import Icon from "./Icon.vue"

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
@import '../style/gatherer';
@import '../style/mixins/sunset';

.select {
    display: flex;
    flex-direction: column;
    position: relative;

    & &__input {
        cursor: pointer;
        display: flex;
        width: 100%;
        padding: 6px 10px;
        padding-right: 40px;
        background: $secondary;
        border: solid 0 $primary;
        border-radius: 5px;
        border-bottom-width: 1px;

        &:hover {
            @include sunset;
        }
    }

    & &__spacing {
        flex: 1;
    }

    .arrow {
        position: relative;
        right: -30px;
        top: 3px;
    }

    & &__options {
        height: 300px;
        overflow: auto;
        background: $secondary-dark;
    }

    & &__option {
        padding: 6px 10px;

        &:hover {
            background: $primary;
            color: $text-dark;
        }
    }
}
</style>
