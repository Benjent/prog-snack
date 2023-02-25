<template>
    <div class="histogramHorizontal">
        <caption class="title title--caption">{{ caption }}</caption>
        <div class="histogramHorizontal__datavis">
            <div class="histogramHorizontal__entry" v-for="(item, label) in datasource" :key="label">
                <div class="histogramHorizontal__label">{{ item.label }}</div>
                <div class="histogramHorizontal__row">
                    <slide-x-left-transition appear :duration="500">
                        <div class="gauge gauge--horizontal" :data-width="item.ratioPercent">{{ item.data }}</div>
                    </slide-x-left-transition>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { histogram } from "../mixins"
import { applyBarTransition } from "../utils/transition"

export default {
    name: "HistogramHorizontal",
    mixins: [histogram],
    mounted() {
        applyBarTransition("width", this.$el)
    },
}
</script>

<style lang="scss">
@import '../style/gatherer';
@import '../style/modules/gauge';

.histogramHorizontal {
    display: flex;
    flex-direction: column;
    width: 100%;

    & &__datavis {
        margin-top: 50px;
        display: flex;
        flex-direction: column;

    }
    & &__entry {
        display: flex;
        align-items: baseline;
        width: 100%;
    }

    &__label {
        width: 30%;
        text-align: right;
        padding-right: var(--label-gap);
        overflow: hidden;
        word-break: break-all;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    & &__row {
        padding: 5px;
        width: 70%;
        display: flex;
        align-items: center;
    }
}
</style>
