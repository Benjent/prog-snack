import Vue from 'vue'
import Vuex from 'vuex'
import { getRandomNumber } from '../utils/utils'
import regions from '../db/regions'
import subgenres from '../db/subgenres'
import { albums, artists, designers, albumsPerYear, albumsPerCountry, albumsSortedByYear, criteriaOccurences, mostUsedCriteriaPerYear } from '../db/dao'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        albums,
        artists,
        designers,
        regions,
        subgenres,
        albumsPerYear,
        albumsPerCountry,
        albumsSortedByYear,
        criteriaOccurences,
        mostUsedCriteriaPerYear,
        selectedAlbum: null,
    },
    getters: {
        albumById(state) {
            return (id) => {
                const album = state.albums.find((a) => a.id === id)
                if (!album) {
                    console.error('Unable to find album with id: ', id)
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
        artistsWithMostGems(state) {
            const artistsWithMostGems = {}
            state.albums.forEach((a) => {
                if (a.isAGem) {
                    artistsWithMostGems[a.artist] ? artistsWithMostGems[a.artist]++ : artistsWithMostGems[a.artist] = 1
                } 
            })
            return artistsWithMostGems       
        },
        youtubePath(state) {
            return `https://www.youtube.com/watch?v=${state.selectedAlbum.selectedTrackYtId}`
        },
    },
    mutations: {
        selectAlbum(state, payload) {
            state.selectedAlbum = payload
        },
    },
    actions: {
        randomizeAlbum(context) {
            const index = getRandomNumber(albums.length)
            const album = albums[index]
            context.commit('selectAlbum', album)
        },
        selectAlbum(context, payload) {
            context.commit('selectAlbum', payload)
        },
    },
    modules: {
    },
});
