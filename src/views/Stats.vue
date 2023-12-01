<template>
    <fade-transition appear>
        <main class="stats">
            <zoom-center-transition appear>
                <section class="stats__section stats__numbers">
                    <NumberUnit :number="artists.length" unit="artists" />
                    <NumberUnit :number="albums.length" unit="albums" />
                    <NumberUnit :number="gemsNb" unit="gems" />
                    <NumberUnit :number="subgenres.length" unit="subgenres" />
                </section>
            </zoom-center-transition>

            <Histogram
                v-if="$mq === 'M'"
                class="stats__section"
                caption="Number of albums per year"
                sort="NONE"
                :datasource="albumsPerYearWithRatio"
            />
            <Histogram
                v-else
                class="stats__section stats__section--wide"
                caption="Number of albums per year"
                direction="vertical"
                sort="NONE"
                :datasource="albumsPerYearWithRatio"
            />

            <Histogram
                class="stats__section"
                caption="Number of albums per region"
                :datasource="albumsPerCountryWithRatio"
            />

            <Histogram
                class="stats__section"
                caption="Artists with most gems"
                :threshold="2"
                :datasource="artistsWithGemsWithRatio"
            />

            <Histogram
                class="stats__section"
                caption="Artists with most albums"
                :threshold="10"
                :datasource="artistsWithAlbumsWithRatio"
            />

            <Histogram
                class="stats__section"
                caption="Greatest criteria occurences"
                :threshold="100"
                :datasource="criteriaOccurencesWithRatio"
            />
        </main>
    </fade-transition>
</template>

<script>
import { mapState, mapGetters } from "vuex"
import { categories, criteriaCategory } from "@/db/criteria"
import { flags } from "@/db/regions"
import { convertDatasource } from "@/utils/chart"
import { Histogram, NumberUnit } from "@/components"

export default {
    components: {
        Histogram,
        NumberUnit,
    },
    computed: {
        ...mapState([
            "albums",
            "artists",
            "regions",
            "albumsPerYear",
            "albumsPerCountry",
            "criteriaOccurences",
            "mostUsedCriteriaPerYear",
            "subgenres",
        ]),
        ...mapGetters(["gemsNb", "artistsWithMostGems", "artistsWithMostAlbums", "isMobile"]),
        albumsPerYearWithRatio() {
            return convertDatasource(this.albumsPerYear)
        },
        albumsPerCountryWithRatio() {
            return convertDatasource(
                this.albumsPerCountry,
                (label) => `${flags[label]} ${this.$options.filters.region(label)}`,
            )
        },
        artistsWithGemsWithRatio() {
            return convertDatasource(this.artistsWithMostGems)
        },
        artistsWithAlbumsWithRatio() {
            return convertDatasource(this.artistsWithMostAlbums)
        },
        criteriaOccurencesWithRatio() {
            const criteriaOccurences = JSON.parse(JSON.stringify(this.criteriaOccurences))
            criteriaCategory[categories.LANGUAGE].forEach((criterium) => {
                delete criteriaOccurences[criterium]
            })
            return convertDatasource(criteriaOccurences, (label) => this.$options.filters.criterium(label))
        },
    },
}
</script>

<style lang="scss" scoped>
@import "../style/gatherer";

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
