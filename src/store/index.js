import Vue from "vue"
import Vuex from "vuex"
import { getRandomNumber } from "../utils/math"
import { regions } from "../db/regions"
import subgenres from "../db/subgenres"
import { generateDao } from "../db/dao"

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        albums: [],
        artists: [],
        designers: [],
        regions,
        subgenres,
        albumsPerYear: {},
        albumsPerCountry: {},
        albumsSortedByYear: [],
        criteriaOccurences: {},
        mostUsedCriteriaPerYear: {},
        selectedAlbum: null,
    },
    getters: {
        albumById(state) {
            return (id) => {
                const album = state.albums.find((a) => a.id === id)
                if (!album) {
                    console.error(`Unable to find album with id: ${id}`)
                }
                return album
            }
        },
        gemsNb(state) {
            let nb = 0
            state.albums.forEach((a) => {
                if (a.isAGem) {
                    nb++
                }
            })
            return nb
        },
        artistsWithMostAlbums(state) {
            const artistsWithMostAlbums = {}
            state.albums.forEach((a) => {
                artistsWithMostAlbums[a.artist] ? artistsWithMostAlbums[a.artist]++ : artistsWithMostAlbums[a.artist] = 1
            })
            return artistsWithMostAlbums
        },
        artistsWithMostGems(state) {
            const artistsWithMostGems = {}
            state.albums.forEach((a) => {
                if (a.isAGem) {
                    artistsWithMostGems[a.artist] ? artistsWithMostGems[a.artist]++ : artistsWithMostGems[a.artist] = 1
                }
            })
            return artistsWithMostGems
        },
    },
    mutations: {
        mutate(state, payload) {
            Object.assign(state, payload)
        },
        // TODO remove in favor of mutate
        selectAlbum(state, payload) {
            state.selectedAlbum = payload
        },
    },
    actions: {
        loadDatabase(context) {
            const dao = generateDao()
            context.commit("mutate", dao)
        },
        randomizeAlbum(context) {
            const { albums } = context.state
            const index = getRandomNumber(albums.length)
            const album = albums[index]
            context.commit("selectAlbum", album)
        },
        selectAlbum(context, payload) {
            context.commit("selectAlbum", payload)
        },
    },
    modules: {},
})
