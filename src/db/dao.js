import albums from "./albums"
import { criteriaOrder } from "./criteria"
import { sort } from "../utils/array-utils"

// For performance purpose - and because we don't use a db, generate data once instead of creating time-consuming getters
const artists = []
let designers = {}
let albumsSortedByYear = []
const albumsPerYear = {}
const albumsPerCountry = {}
const criteriaOccurences = {}
const mostUsedCriteriaPerYear = {}

function generateDao() {
    albums.forEach((album) => {
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
                    works: [],
                }
            }
            designers[d].works.push(album)
        })

        // Albums per year
        const { year } = album
        albumsPerYear[year] ? albumsPerYear[year]++ : albumsPerYear[year] = 1

        // Albums per country
        const { country } = album
        if (!country) {
            console.error(`Wrong country used in album with id: ${album.id}`)
        }
        albumsPerCountry[country] ? albumsPerCountry[country]++ : albumsPerCountry[country] = 1

        // Most used criteria
        album.criteria.forEach((criterium) => {
            if (criteriaOccurences[criterium]) {
                criteriaOccurences[criterium]++
            } else {
                if (criterium === undefined) {
                    console.error(`Wrong criterium used in album with id: ${album.id}`)
                }
                criteriaOccurences[criterium] = 1
            }

            // Per year
            if (!mostUsedCriteriaPerYear[year]) {
                mostUsedCriteriaPerYear[year] = []
                mostUsedCriteriaPerYear[year].push({
                    criterium,
                    occurences: 1,
                })
            } else {
                let isFirstOccurence = true
                for (let k = 0; k < mostUsedCriteriaPerYear[year].length; k++) { // TODO refact
                    if (mostUsedCriteriaPerYear[year][k].criterium === criterium) {
                        mostUsedCriteriaPerYear[year][k].occurences++
                        isFirstOccurence = false
                        break
                    }
                }
                if (isFirstOccurence) {
                    mostUsedCriteriaPerYear[year].push({
                        criterium,
                        occurences: 1,
                    })
                }
            }
        })
    })

    albumsSortedByYear = [...albums]
    sort(albumsSortedByYear, "year", "DESC")

    Object.values(mostUsedCriteriaPerYear).forEach((criteria) => {
        sort(criteria, "occurences", "DESC")
    })

    designers = Object.values(designers).sort((a, b) => b.works.length - a.works.length)
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
