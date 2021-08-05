import albums from './albums'
import { criteriaOrder } from './criteria'
import { sortByOccurences, sortByYear } from '../utils/utils'

// For performance purpose - and because we don't use a db, generate data once instead of creating time-consuming getters
const artists = []
let designers = {}
let albumsSortedByYear = []
const albumsPerYear = {}
const albumsPerCountry = {}
const criteriaOccurences = {}
const mostUsedCriteriaPerYear = {}

function generateDao() {
    for (let i = 0; i < albums.length; i++) {

        // Albums
        albums[i].index = i
        const album = albums[i]
        album.criteria.sort((a, b) => criteriaOrder.indexOf(a) > criteriaOrder.indexOf(b))

        // Artists
        if (!artists.includes(album.artist)) {
            artists.push(album.artist)
        }

        // Designers
        album.designers.forEach((d) => {
            if (!designers[d]) {
                designers[d] = {
                    name: d,
                    works: []
                }
            }
            designers[d].works.push(album)
        })

        // Albums per year
        const year = album.year
        albumsPerYear[year] ? albumsPerYear[year]++ : albumsPerYear[year] = 1
        
        // Albums per country
        const country = album.country
        if (!country) {
            console.error(`Wrong country used in album with id: ${album.id}`)
        }
        albumsPerCountry[country] ? albumsPerCountry[country]++ : albumsPerCountry[country] = 1

        // Most used criteria
        for (let j = 0; j < album.criteria.length; j++) {
            const criterium = album.criteria[j];
            if (criteriaOccurences.hasOwnProperty(criterium)) {
                criteriaOccurences[criterium]++
            } else {
                if (criterium === undefined) {
                    console.error(`Wrong criterium used in album with id: ${album.id}`)
                }
                criteriaOccurences[criterium] = 1
            }

            // Per year
            const year = album.year;
            if (!mostUsedCriteriaPerYear.hasOwnProperty(year)) {
                mostUsedCriteriaPerYear[year] = []
                mostUsedCriteriaPerYear[year].push({
                    criterium: criterium,
                    occurences: 1,
                })
            } else {
                let isFirstOccurence = true;
                for (let k = 0; k < mostUsedCriteriaPerYear[year].length; k++) {
                    if(mostUsedCriteriaPerYear[year][k].criterium === criterium) {
                        mostUsedCriteriaPerYear[year][k].occurences++;
                        isFirstOccurence = false;
                        break;
                    }
                }
                if(isFirstOccurence) {
                    mostUsedCriteriaPerYear[year].push({
                        criterium: criterium,
                        occurences: 1,
                    });
                }
            }
        }
    }

    albumsSortedByYear = albums.slice(0);
    albumsSortedByYear.sort(sortByYear);

    for (let [year, obj] of Object.entries(mostUsedCriteriaPerYear)){
        obj.sort(sortByOccurences);
    }

    designers = Object.values(designers).sort(function(a, b) {
        return b.works.length - a.works.length;
    })
}

generateDao()

export {
    albums,
    artists,
    designers,
    albumsPerYear,
    albumsPerCountry,
    albumsSortedByYear,
    criteriaOccurences,
    mostUsedCriteriaPerYear,
}
