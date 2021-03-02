<template>
    <section class="stats">
        <section class="stats__section stats__numbers">
            <NumberUnit :number="artists.length" unit="artists"/>
            <NumberUnit :number="albums.length" unit="albums"/>
            <NumberUnit :number="gemsNb" unit="gems"/>
            <NumberUnit :number="subgenres.length" unit="subgenres"/>
        </section>

        <histogram-horizontal v-if="$mq === 'M'" class="stats__section" caption="Number of albums per year" :datasource="albumsPerYearWithRatioMobile"></histogram-horizontal>
        <histogram-vertical v-else class="stats__section stats__section--wide" caption="Number of albums per year" :datasource="albumsPerYearWithRatio"></histogram-vertical>

        <histogram-horizontal class="stats__section" caption="Number of albums per region" :datasource="albumsPerCountryWithRatio"></histogram-horizontal>

        <histogram-horizontal class="stats__section" caption="Artists with most gems" :datasource="artistsWithGemsWithRatio"></histogram-horizontal>

        <histogram-horizontal class="stats__section" caption="Artists with most albums" :datasource="artistsWithAlbumsWithRatio"></histogram-horizontal>

        <histogram-horizontal class="stats__section" caption="Greatest criteria occurences" :datasource="criteriaOccurencesWithRatio"></histogram-horizontal>
    </section>
</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex'
import { criteria } from '../db/criteria.js';
import HistogramHorizontal from '../components/HistogramHorizontal.vue'
import HistogramVertical from '../components/HistogramVertical.vue'
import NumberUnit from '../components/NumberUnit.vue'

export default {
    components: {
        HistogramHorizontal,
        HistogramVertical,
        NumberUnit,
    },
    computed: {
        ...mapState(['albums', 'artists', 'regions', 'albumsPerYear', 'albumsPerCountry', 'criteriaOccurences', 'mostUsedCriteriaPerYear', 'subgenres']),
        ...mapGetters(['gemsNb', 'artistsWithMostGems', 'artistsWithMostAlbums', 'isMobile']),
        albumsPerYearWithRatio() {
            const obj = this.albumsPerYear
            const arr = Object.keys(obj).map((key) => obj[key])
            const min = 0
            const max = Math.max.apply(null, arr)
        
            const albumsPerYearWithRatio = {}
            for(const year in this.albumsPerYear) {
                const nbOfAlbums = this.albumsPerYear[year]
                const ratio = (nbOfAlbums - min) / (max - min) // TODO utils + so many things to centralize in this page
                albumsPerYearWithRatio[year] = {
                    label: year,
                    data: nbOfAlbums, 
                    ratio: ratio,
                    ratioPercent: (ratio * 100).toString() + '%',
                }
            }
            return albumsPerYearWithRatio
        },
        albumsPerYearWithRatioMobile() {
            const arr = Object.keys(this.albumsPerYearWithRatio).map((key) => this.albumsPerYearWithRatio[key])
            return arr
        },
        albumsPerCountryWithRatio() {
    
            const obj = this.albumsPerCountry
            const arr = Object.keys(obj).map((key) => obj[key])
            const max = Math.max.apply(null, arr)
            const min = 0
        
            const albumsPerCountryWithRatio = []
        
            for(const country in this.albumsPerCountry) {
        
                const nbOfAlbums = this.albumsPerCountry[country]
                const ratio = (nbOfAlbums - min) / (max - min)
        
                albumsPerCountryWithRatio.push({
                    label: country,
                    data: nbOfAlbums, 
                    ratio: ratio,
                    ratioPercent: (ratio * 100).toString() + '%',
                })
            }
    
            // Sort in DESC
            albumsPerCountryWithRatio.sort((a, b) => {
                const countryA = a.data
                const countryB = b.data
        
                if (countryA > countryB) {
                    return -1
                }
                if (countryA < countryB) {
                    return 1
                }
                return 0 // Default return value (no sorting)
            })
    
          return albumsPerCountryWithRatio
        },
        criteriaOccurencesWithRatio() {
    
            const obj = this.criteriaOccurences;
            const arr = Object.keys(obj).map((key) => obj[key])
            const max = Math.max.apply(null, arr)
            const min = 0
        
            const criteriaOccurencesWithRatio = []

            for (const criterium in this.criteriaOccurences) {

                const nbOfOccurences = this.criteriaOccurences[criterium]
                const ratio = (nbOfOccurences - min) / (max - min)
        
                criteriaOccurencesWithRatio.push({
                    label: this.$options.filters.criterium(criterium),
                    data: nbOfOccurences, 
                    ratio: ratio,
                    ratioPercent: (ratio * 100).toString() + '%',
                })
            }

            // Sort in DESC
            criteriaOccurencesWithRatio.sort((a, b) => {
                const criteriumA = a.data
                const criteriumB = b.data
        
                if (criteriumA > criteriumB) {
                    return -1
                }
                if (criteriumA < criteriumB) {
                    return 1
                }
                return 0 // Default return value (no sorting)
            })
    
          return criteriaOccurencesWithRatio
        },
		artistsWithGemsWithRatio() {
			const min = 2
			const artistsWithSeveralGems = Object.entries(this.artistsWithMostGems).filter((item) => item[1] >= min)
			artistsWithSeveralGems.sort((a, b) => b[1] - a[1])
			const max = artistsWithSeveralGems[0][1] // Since it is sorted DESC
			

			const artistsWithGemsWithRatio = []
			artistsWithSeveralGems.forEach((artist) => {
				const nbOfGems = artist[1]
                const ratio = (nbOfGems - min) / (max - min)

                artistsWithGemsWithRatio.push({
                    label: artist[0],
                    data: nbOfGems, 
                    ratio: ratio,
                    ratioPercent: (ratio * 100).toString() + '%',
                })
			})

			return artistsWithGemsWithRatio
		},
		artistsWithAlbumsWithRatio() {
			const min = 8
			const artistsWithSeveralAlbums = Object.entries(this.artistsWithMostAlbums).filter((item) => item[1] >= min)
			artistsWithSeveralAlbums.sort((a, b) => b[1] - a[1])
			const max = artistsWithSeveralAlbums[0][1] // Since it is sorted DESC

			const artistsWithAlbumsWithRatio = []
			artistsWithSeveralAlbums.forEach(artist => {
				const nbOfAlbums = artist[1]
                const ratio = (nbOfAlbums - min) / (max - min)

                artistsWithAlbumsWithRatio.push({
                    label: artist[0],
                    data: nbOfAlbums, 
                    ratio: ratio,
                    ratioPercent: (ratio * 100).toString() + '%',
                })
			})

			return artistsWithAlbumsWithRatio
		},
    }
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
