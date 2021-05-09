<template>
    <div class="histogramVertical">
        <caption class="title title--caption">{{ caption }}</caption>
        <div class="histogramVertical__datavis">
            <div class="histogramVertical__entry" v-for="(item, label) in datasource" :key="label">
                <div class="histogramVertical__column">
                    <div class="gauge gauge--vertical" :style="{ height: item.ratioPercent }">{{ item.data }}</div>
                </div>
                <div class="histogramVertical__label">{{ label }}</div>
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
@import '../style/modules/title';

.histogramVertical {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    & &__datavis {
        margin-top: 50px; 
        display: flex;
        align-items: flex-end;
        height: 400px;
        padding: 0 6px 50px 6px; // Transformed (rotated) labels does not weigh in the CSS flow. Add padding to prevent truncated labels.
        overflow-x: auto;
        max-width: 100%; // Center datavis if space is enough

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
