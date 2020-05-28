<template>
    <section class="l-stats">
        <section class="l-stats__numbers">
            <span>{{ artists.length }} artists</span>
            <span>{{ albums.length }} albums</span>
            <span>{{ gemsNb }} must-hear albums</span>
            <span>{{ subgenres.length }} subgenres</span>
        </section>
        <hr>
        <histogram-vertical class="l-stats__chart" caption="Number of albums per year" :datasource="albumsPerYearWithRatio"></histogram-vertical>
        <hr>
        <histogram-horizontal class="l-stats__chart" caption="Number of albums per region" :datasource="albumsPerCountryWithRatio"></histogram-horizontal>
        <hr>
        <histogram-horizontal class="l-stats__chart" caption="Artists with most gems" :datasource="artistsWithGemsWithRatio"></histogram-horizontal>
        <hr>
        <histogram-horizontal class="l-stats__chart" caption="Greatest criteria occurences" :datasource="criteriaOccurencesWithRatio"></histogram-horizontal>
    </section>
</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex'
import { criteria } from '../db/criteria.js';
import HistogramHorizontal from '../components/HistogramHorizontal.vue'
import HistogramVertical from '../components/HistogramVertical.vue'

export default {
    components: {
        HistogramHorizontal,
        HistogramVertical,
    },
    computed: {
        ...mapState(['albums', 'artists', 'regions', 'albumsPerYear', 'albumsPerCountry', 'criteriaOccurences', 'mostUsedCriteriaPerYear', 'subgenres']),
        ...mapGetters(['gemsNb', 'artistsWithMostGems']),
        albumsPerYearWithRatio() {
            const obj = this.albumsPerYear
            const arr = Object.keys(obj).map((key) => obj[key])
            const min = 0
            const max = Math.max.apply(null, arr)
        
            const albumsPerYearWithRatio = {}
            for(const year in this.albumsPerYear) {
                const nbOfAlbums = this.albumsPerYear[year]
                const ratio = (nbOfAlbums - min) / (max - min) // TODO utils
                albumsPerYearWithRatio[year] = {
                    data: nbOfAlbums, 
                    ratio: ratio,
                    ratioPercent: (ratio * 100).toString() + '%',
                }
            }
            return albumsPerYearWithRatio
        },
        albumsPerCountryWithRatio() {
    
            const obj = this.albumsPerCountry;
            const arr = Object.keys( obj ).map(function ( key ) { return obj[key]; });
            const max = Math.max.apply( null, arr );
            const min = 0;
        
            const albumsPerCountryWithRatio = []
        
            for(const country in this.albumsPerCountry) {
        
                const nbOfAlbums = this.albumsPerCountry[country];
                const ratio = (nbOfAlbums - min) / (max - min);
        
                albumsPerCountryWithRatio.push({
                    label: country,
                    data: nbOfAlbums, 
                    ratio: ratio,
                    ratioPercent: (ratio * 100).toString() + '%',
                });
            };
    
            // Sort in DESC
            albumsPerCountryWithRatio.sort(function(a, b){
                const countryA = a.data
                const countryB = b.data;
        
                if (countryA > countryB) {
                return -1;
                }
                if (countryA < countryB) {
                return 1;
                }
                return 0 // Default return value (no sorting)
            })
    
          return albumsPerCountryWithRatio;
        },
        criteriaOccurencesWithRatio() {
    
            const obj = this.criteriaOccurences;
            const arr = Object.keys( obj ).map(function ( key ) { return obj[key]; });
            const max = Math.max.apply( null, arr );
            const min = 0;
        
            const criteriaOccurencesWithRatio = [];

            for(const criterium in this.criteriaOccurences) {

                const nbOfOccurences = this.criteriaOccurences[criterium];
                const ratio = (nbOfOccurences - min) / (max - min);
        
                criteriaOccurencesWithRatio.push({
                    label: this.$options.filters.criterium(criterium),
                    data: nbOfOccurences, 
                    ratio: ratio,
                    ratioPercent: (ratio * 100).toString() + '%',
                });
            };

            // Sort in DESC
            criteriaOccurencesWithRatio.sort(function(a, b){
                const criteriumA = a.data
                const criteriumB = b.data;
        
                if (criteriumA > criteriumB) {
                return -1;
                }
                if (criteriumA < criteriumB) {
                return 1;
                }
                return 0 // Default return value (no sorting)
            })
    
          return criteriaOccurencesWithRatio;
        },
		artistsWithGemsWithRatio() {
			const min = 2
			const artistsWithSeveralGems = Object.entries(this.artistsWithMostGems).filter(item => item[1] >= min)
			artistsWithSeveralGems.sort((a, b) => b[1] - a[1])
			const max = artistsWithSeveralGems[0][1] // Since it is sorted DESC
			

			const artistsWithGemsWithRatio = []
			artistsWithSeveralGems.forEach(artist => {
				const nbOfGems = artist[1];
                const ratio = (nbOfGems - min) / (max - min);

                artistsWithGemsWithRatio.push({
                    label: artist[0],
                    data: nbOfGems, 
                    ratio: ratio,
                    ratioPercent: (ratio * 100).toString() + '%',
                })
			})

			return artistsWithGemsWithRatio
		},
    }
}
</script>

<style lang="scss">
@import '../style/gatherer';

.l-stats {
    padding: 60px 160px;

    & &__numbers {
        display: flex;
        justify-content: space-evenly;
        margin: 20px 0 50px 0;
    }

    & &__chart {
    }
}
</style>
