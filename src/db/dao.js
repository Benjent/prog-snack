import { sort } from "../utils/array"
import { getTable } from "../utils/baserow"

// Fetch all data for future SSG purpose
const generateDao = async () => {
    const [
        albumsResult,
        artistsResult,
        designersResult,
        subgenresResults,
        regionsResult,
        languagesResult,
    ] = await Promise.all([
        // Albums
        getTable({
            results: [],
            nextPage: "/api/database/rows/table/715/?user_field_names=true&criteria__join=label",
        }),
        // Artists
        getTable({
            results: [],
            nextPage:
                "/api/database/rows/table/720/?user_field_names=true&albums__join=human_id,year,gem,region,region_flag,covers",
        }),
        // Designers
        getTable({
            results: [],
            nextPage:
                "/api/database/rows/table/717/?user_field_names=true&albums__join=human_id,title,year,gem,region,region_flag,covers,artist",
        }),
        // Subgenres
        getTable({
            results: [],
            nextPage:
                "/api/database/rows/table/722/?user_field_names=true&albums__join=human_id,covers&most_representative_albums__join=human_id,covers",
        }),
        // Regions
        getTable({
            results: [],
            nextPage: "/api/database/rows/table/712/?user_field_names=true",
        }),
        // Languages
        getTable({
            results: [],
            nextPage: "/api/database/rows/table/713/?user_field_names=true",
        }),
    ])
    const { results: albums } = albumsResult
    const { results: artists } = artistsResult
    const { results: designers } = designersResult
    const { results: subgenres } = subgenresResults
    const { results: regions } = regionsResult
    const { results: languages } = languagesResult

    const albumsPerYear = {}
    const albumsPerCountry = {}
    const criteriaOccurences = {}
    const mostUsedCriteriaPerYear = {}

    albums.forEach((album) => {
        // Albums per year
        const { year } = album
        albumsPerYear[year] ? albumsPerYear[year]++ : (albumsPerYear[year] = 1)

        // Albums per country
        const { region } = album
        if (!region) {
            console.error(`Wrong region used in album with id: ${album.id}`)
        }
        albumsPerCountry[region] ? albumsPerCountry[region]++ : (albumsPerCountry[region] = 1)

        // Most used criteria
        album.criteria.forEach((criterium) => {
            if (criteriaOccurences[criterium.label]) {
                criteriaOccurences[criterium.label]++
            } else {
                if (criterium.label === undefined) {
                    console.error(`Wrong criterium used in album with id: ${album.human_id}`)
                }
                criteriaOccurences[criterium.label] = 1
            }

            // Per year
            if (!mostUsedCriteriaPerYear[year]) {
                mostUsedCriteriaPerYear[year] = []
                mostUsedCriteriaPerYear[year].push({
                    criterium: criterium.label,
                    occurences: 1,
                })
            } else {
                let isFirstOccurence = true
                for (let k = 0; k < mostUsedCriteriaPerYear[year].length; k++) {
                    if (mostUsedCriteriaPerYear[year][k].criterium === criterium.label) {
                        mostUsedCriteriaPerYear[year][k].occurences++
                        isFirstOccurence = false
                        break
                    }
                }
                if (isFirstOccurence) {
                    mostUsedCriteriaPerYear[year].push({
                        criterium: criterium.label,
                        occurences: 1,
                    })
                }
            }
        })
    })

    Object.values(mostUsedCriteriaPerYear).forEach((criteria) => {
        sort(criteria, "occurences", "DESC")
    })

    return {
        albums,
        albumsPerYear,
        albumsPerCountry,
        albumsSortedByYear: sort([...albums], "year"),
        artists,
        criteriaOccurences,
        designers,
        languages,
        mostUsedCriteriaPerYear,
        regions,
        subgenres,
    }
}

export { generateDao }
