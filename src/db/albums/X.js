import regions from '../regions'
import { criteria } from '../criteria'

const albums = [
    {
        id: 'xhol_caravan_electrip',
        title: 'Electrip',
        artist: 'Xhol Caravan',
        year: 1969,
        country: regions.GERMANY,
        cover: '.jpg',
        criteria: [criteria.LENGTHY_TRACKS, criteria.C_PSYCHE, criteria.UNCOMMON_INSTRUMENTS, criteria.INSTRUMENTAL, criteria.EXPERIMENTAL, criteria.FANFARE],
        selectedTrackTitle: 'Electric Fun Fair',
        selectedTrackYtId: 'v-yZ6YlEYPI',
        spotifyId: '2Nd5glGiAlnf1rQoaPD1sy',
        deezerId: '956501',
        designers: [],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'xhol_caravan_hau_ruk',
        title: 'Hau-Ruk',
        artist: 'Xhol Caravan',
        year: 1971,
        country: regions.GERMANY,
        cover: '.jpg',
        criteria: [criteria.LENGTHY_TRACKS, criteria.C_PSYCHE, criteria.JAM, criteria.UNCOMMON_INSTRUMENTS, criteria.INSTRUMENTAL, criteria.EXPERIMENTAL],
        selectedTrackTitle: 'Breit',
        selectedTrackYtId: null,
        spotifyId: '6xd9dvLNRO91MJaUeyT9ak',
        deezerId: null,
        designers: ['Igor Ihloff'],
        similarAlbums: [],
        isAGem: false,
    },
]

export default albums