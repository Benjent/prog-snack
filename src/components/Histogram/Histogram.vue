<template>
    <div class="histogram" :class="{ [`histogram--${direction}`]: direction }">
        <caption class="histogram__caption title title--caption">{{ caption }}</caption>
        <div class="histogram__datavis">
            <div class="histogram__entry" v-for="(item, label) in datasource" :key="label">
                <div class="histogram__label" v-if="direction === 'horizontal'">{{ item.label }}</div>
                <div :class="{ 'histogram__row': direction === 'horizontal', 'histogram__column': direction === 'vertical' }">
                    <component :is="direction === 'vertical' ? 'slide-y-down-transition' : 'slide-x-left-transition'" appear :duration="500">
                        <div class="gauge" :class="{ [`gauge--${direction}`]: direction }" :data-size="item.ratioPercent">{{ item.data }}</div>
                    </component>
                </div>
                <div class="histogram__label" v-if="direction === 'vertical'">{{ item.label }}</div>
            </div>
        </div>
    </div>
</template>

<script>
import { applyBarTransition } from "@/utils/transition"

export default {
    name: "Histogram",
    props: {
        caption: {
            type: String,
        },
        datasource: {
            type: [Array, Object],
        },
        direction: {
            type: String,
            default: "horizontal",
            validator(value) {
                return ["horizontal", "vertical"].includes(value)
            },
        },
    },
    mounted() {
        applyBarTransition(this.direction === "vertical" ? "height" : "width", this.$el)
    },
    watch: {
        direction(newValue) {
            this.$nextTick(() => {
                applyBarTransition(newValue === "vertical" ? "height" : "width", this.$el)
            })
        },
    },
}
</script>

<style lang="scss" scoped>
@import '~@/style/gatherer';
@import '~@/style/modules/gauge';

.histogram {
    display: flex;
    flex-direction: column;

    &--horizontal {
        width: 100%;

        .histogram__datavis {
            flex-direction: column;
        }

        .histogram__entry {
            display: flex;
            align-items: baseline;
            width: 100%;
        }

        .histogram__label {
            width: 30%;
            text-align: right;
            padding-right: var(--label-gap);
            overflow: hidden;
            word-break: break-all;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
        .histogram__row {
            padding: 5px;
            width: 70%;
            display: flex;
            align-items: center;
        }
    }

    &--vertical {
        justify-content: space-evenly;
        align-items: center;

        .histogram__datavis {
            align-items: flex-end;
            height: 400px;
            padding: 0 6px 50px 6px; // Transformed (rotated) labels does not weigh in the CSS flow. Add padding to prevent truncated labels.
            overflow-x: auto;
            max-width: 100%; // Center datavis if space is enough
        }

        .histogram__entry {
            height: 100%;
        }

        .histogram__label {
            transform: rotate(30deg);
            transform-origin: top right;
            writing-mode: sideways-lr;
            position: relative;
            margin-top: 20px;
        }

        .histogram__column {
            padding: 5px;
            height: 100%;
            display: flex;
            align-items: flex-end;
        }
    }

    & &__datavis {
        margin-top: 50px;
        display: flex;
    }
}
</style>
