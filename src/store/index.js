import Vue from "vue"
import Vuex from "vuex"
import { getRandomNumber } from "@/utils/math"
import { sort } from "@/utils/array"
import { generateDao } from "@/db/dao"

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        isDaoLoading: true,
        albums: [],
        artists: [],
        designers: [],
        regions: [],
        languages: [],
        subgenres: [],
        criteria: [],
        criteriumCategories: [],
        albumsPerYear: {},
        albumsPerCountry: {},
        criteriaOccurences: {},
        mostUsedCriteriaPerYear: {},
        selectedAlbum: null,
    },
    getters: {
        albumById(state) {
            return (id) => {
                const album = state.albums.find((a) => a.human_id === id)
                if (!album) {
                    console.error(`Unable to find album with id: ${id}`)
                }
                return album
            }
        },
        albumsSortedByYear(state) {
            return sort([...state.albums], "year")
        },
        gemsNb(state) {
            let nb = 0
            state.albums.forEach((a) => {
                if (a.gem) {
                    nb++
                }
            })
            return nb
        },
        artistsWithMostAlbums(state) {
            const artistsWithMostAlbums = {}
            state.albums.forEach((a) => {
                artistsWithMostAlbums[a.artist]
                    ? artistsWithMostAlbums[a.artist]++
                    : (artistsWithMostAlbums[a.artist] = 1)
            })
            return artistsWithMostAlbums
        },
        artistsWithMostGems(state) {
            const artistsWithMostGems = {}
            state.albums.forEach((a) => {
                if (a.gem) {
                    artistsWithMostGems[a.artist]
                        ? artistsWithMostGems[a.artist]++
                        : (artistsWithMostGems[a.artist] = 1)
                }
            })
            return artistsWithMostGems
        },
    },
    mutations: {
        mutate(state, payload) {
            Object.assign(state, payload)
        },
    },
    actions: {
        async loadDatabase(context) {
            const dao = await generateDao()
            await context.commit("mutate", dao)
            context.commit("mutate", { isDaoLoading: false })
        },
        randomizeAlbum(context) {
            const { albums } = context.state
            const index = getRandomNumber(albums.length)
            context.commit("mutate", { selectedAlbum: albums[index] })
        },
        selectAlbum(context, payload) {
            context.commit("mutate", { selectedAlbum: payload })
        },
    },
    modules: {},
})
