<template>
    <div class="histogramHorizontal">
        <caption class="title title--caption">{{ caption }}</caption>
        <div class="histogramHorizontal__datavis">
            <div class="histogramHorizontal__entry" v-for="(item, label) in datasource" :key="label">
                <div class="histogramHorizontal__label">{{ item.label }}</div>
                <div class="histogramHorizontal__row">
                    <div class="gauge gauge--horizontal" :style="{ width: item.ratioPercent }">{{ item.data }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HistogramHorizontal',
    props: {
        caption: String,
        datasource: [Array, Object],
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
        padding-right: 10px;
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
        box-sizing: border-box;
    }
}
</style>
