<template>
    <div class="accordion">
        <button
            class="accordion__title"
            :class="{ 'accordion__title--open': isOpen, 'accordion__title--drawer': drawered }"
            aria-label="Toggle panel"
            @click="isOpen = !isOpen"
        >
            <div>{{ title }}</div>
            <Icon class="accordion__arrow" :name="isOpen ? 'expand_less' : 'expand_more'" />
        </button>
        <div
            class="accordion__body"
            :class="{ 'accordion__body--open': isOpen, 'accordion__body--drawer': drawered }"
            v-if="isOpen"
        >
            <slot />
        </div>
    </div>
</template>

<script>
import Icon from "../Icon/Icon.vue"

export default {
    name: "Accordion",
    components: {
        Icon,
    },
    props: {
        title: {
            type: String,
            required: true,
        },
        drawered: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            isOpen: false,
        }
    },
}
</script>

<style lang="scss" scoped>
@import "@/style/gatherer";
@import "@/style/mixins/sunset";

.accordion {
    &__title {
        cursor: pointer;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 15px;
        border: solid 2px $primary;
        border-radius: var(--select-radius);
        width: 100%;

        &:hover {
            @include sunset;
        }

        &--open {
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
        }

        &--drawer {
            border: none;
            border-radius: 0;
            border-bottom: solid 2px $input-background-color;
        }
    }

    &__arrow {
        font-size: x-large;
    }

    &__body {
        background: $input-background-color;
        padding: 15px;
        border-radius: var(--select-radius);

        &--open {
            border-top-left-radius: 0;
            border-top-right-radius: 0;
        }

        &--drawer {
            border-radius: 0;
        }
    }
}
</style>
