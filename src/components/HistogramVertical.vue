<template>
    <div class="l-histogram-vertical">
        <caption class="l-histogram-vertical__caption">{{ caption }}</caption>
        <div class="l-histogram-vertical__datavis">
            <div class="l-histogram-vertical__entry" v-for="(item, label) in datasource" :key="label">
                <div class="l-histogram-vertical__column">
                    <div class="gauge gauge--vertical" :style="{ height: item.ratioPercent }">{{ item.data }}</div>
                </div>
                <div class="l-histogram-vertical__label">{{ label }}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HistogramVertical',
    props: {
        caption: String,
        datasource: [Array, Object],
    },
}
</script>


<style lang="scss">
@import '../style/gatherer';
@import '../style/modules/gauge';

.l-histogram-vertical {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    & &__caption {
        padding-bottom: 50px;
    }

    & &__datavis {
        display: flex;
        align-items: flex-end;
        height: 400px;
        margin-bottom: 50px; // Transformed (rotated) labels does not weigh in the CSS flow
        // overflow-x: auto; // TODO...

    }
    & &__entry {
        height: 100%;
    }

    & &__column {
        padding: 5px;
        height: 100%;
        display: flex;
        align-items: flex-end;
        box-sizing: border-box;
    }

    &__label {
        transform: rotate(30deg);
        transform-origin: top right;
        writing-mode: sideways-lr;
        position: relative;
        margin-top: 20px;
    }
}
</style>
