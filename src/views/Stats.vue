<template>
    <fade-transition appear>
        <section class="stats">
            <zoom-center-transition appear>
                <section class="stats__section stats__numbers">
                    <NumberUnit :number="artists.length" unit="artists"/>
                    <NumberUnit :number="albums.length" unit="albums"/>
                    <NumberUnit :number="gemsNb" unit="gems"/>
                    <NumberUnit :number="subgenres.length" unit="subgenres"/>
                </section>
            </zoom-center-transition>

            <HistogramHorizontal v-if="$mq === 'M'" class="stats__section" caption="Number of albums per year" :datasource="albumsPerYearWithRatioMobile"></HistogramHorizontal>
            <HistogramVertical v-else class="stats__section stats__section--wide" caption="Number of albums per year" :datasource="albumsPerYearWithRatio"></HistogramVertical>

            <HistogramHorizontal class="stats__section" caption="Number of albums per region" :datasource="albumsPerCountryWithRatio"></HistogramHorizontal>

            <HistogramHorizontal class="stats__section" caption="Artists with most gems" :datasource="artistsWithGemsWithRatio"></HistogramHorizontal>

            <HistogramHorizontal class="stats__section" caption="Artists with most albums" :datasource="artistsWithAlbumsWithRatio"></HistogramHorizontal>

            <HistogramHorizontal class="stats__section" caption="Greatest criteria occurences" :datasource="criteriaOccurencesWithRatio"></HistogramHorizontal>
        </section>
    </fade-transition>
</template>

<script>
import { mapState, mapGetters } from "vuex"
import { categories, criteriaCategory } from "../db/criteria"
import { flags } from "../db/regions"
import { sort } from "../utils/array-utils"
import { HistogramHorizontal, HistogramVertical, NumberUnit } from "../components"

export default {
    components: {
        HistogramHorizontal,
        HistogramVertical,
        NumberUnit,
    },
    computed: {
        ...mapState(["albums", "artists", "regions", "albumsPerYear", "albumsPerCountry", "criteriaOccurences", "mostUsedCriteriaPerYear", "subgenres"]),
        ...mapGetters(["gemsNb", "artistsWithMostGems", "artistsWithMostAlbums", "isMobile"]),
        albumsPerYearWithRatio() {
            return this.buildBarChartDataObject(this.albumsPerYear)
        },
        albumsPerYearWithRatioMobile() {
            return Object.keys(this.albumsPerYearWithRatio).map((key) => this.albumsPerYearWithRatio[key])
        },
        albumsPerCountryWithRatio() {
            const data = this.buildBarChartDataObject(this.albumsPerCountry)
            const albumsPerCountryWithRatio = Object.values(data).map((d) => {
                d.label = `${flags[d.label]} ${this.$options.filters.region(d.label)}`
                return d
            })

            sort(albumsPerCountryWithRatio, "data", "DESC")
            return albumsPerCountryWithRatio
        },
        criteriaOccurencesWithRatio() {
            const min = 100
            const data = this.buildBarChartDataObject(this.criteriaOccurences)
            const criteriaOccurencesWithRatio = Object.values(data).filter((item) => item.data >= min && !criteriaCategory[categories.LANGUAGE].includes(item.label)).map((d) => {
                d.label = this.$options.filters.criterium(d.label)
                return d
            })

            sort(criteriaOccurencesWithRatio, "data", "DESC")
            return criteriaOccurencesWithRatio
        },
        artistsWithGemsWithRatio() {
            const min = 2
            const artistsWithEnoughGems = Object.entries(this.artistsWithMostGems).filter((item) => item[1] >= min)
            return this.buildBarChartDataArray(artistsWithEnoughGems, min)
        },
        artistsWithAlbumsWithRatio() {
            const min = 10
            const artistsWithSeveralAlbums = Object.entries(this.artistsWithMostAlbums).filter((item) => item[1] >= min)
            return this.buildBarChartDataArray(artistsWithSeveralAlbums, min)
        },
    },
    methods: {
        buildBarChartDataArray(array, min = 0) {
            array.sort((a, b) => b[1] - a[1]) // Sort by DESC
            const max = array[0][1] // Since it is sorted DESC

            const data = []
            array.forEach((value) => {
                const ratio = (value[1] - min) / (max - min)
                data.push({
                    label: value[0],
                    data: value[1],
                    ratio,
                    ratioPercent: `${(ratio * 100).toString()}%`,
                })
            })

            return data
        },
        buildBarChartDataObject(object, min = 0) {
            const max = Math.max(...Object.values(object))

            const data = {}
            Object.entries(object).forEach(([key, value]) => {
                const ratio = (value - min) / (max - min)
                data[key] = {
                    label: key,
                    data: value,
                    ratio,
                    ratioPercent: `${(ratio * 100).toString()}%`,
                }
            })

            return data
        },
    },
}
</script>

<style lang="scss" scoped>
@import '../style/gatherer';

.stats {
    padding: 0 20px;

    & &__numbers {
        display: flex;
        justify-content: space-evenly;
        margin-top: 60px;
    }

    & &__section {
        margin: 0 auto;
        margin-bottom: 60px;
        max-width: 860px;

        &:first-child {
            margin-top: 60px;
        }

        &--wide {
            max-width: none;
        }
    }
}

@media (max-width: $mobile) {
    .stats {
        padding: 20px;

        & &__numbers {
            display: flex;
            flex-wrap: wrap;
        }

        & &__number {
            padding: 10px;
        }

        & &__section {
            &:first-child {
                margin-top: 20px;
            }
        }
    }
}
</style>
