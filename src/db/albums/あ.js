import regions from '../regions'
import { criteria } from '../criteria'

const albums = [
    {
        id: 'sadistic_mika_band_sadistic_mika_band',
        title: 'サディスティック・ミカ・バンド',
        artist: 'サディスティック・ミカ・バンド',
        year: 1973,
        country: regions.JAPAN,
        cover: '.jpg',
        criteria: [criteria.JAPANESE, criteria.ROCK, criteria.GREASY_SEVENTIES, criteria.C_PSYCHE, criteria.FEMALE],
        selectedTrackTitle: '怪傑シルバー・チャイルド',
        selectedTrackYtId: '2ayvwydJxOk',
        spotifyId: null,
        deezerId: null,
        designers: ['Workshop Mu!!'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'sadistic_mika_band_black_ship',
        title: '黒船',
        artist: 'サディスティック・ミカ・バンド',
        year: 1974,
        country: regions.JAPAN,
        cover: '.jpg',
        criteria: [criteria.JAPANESE, criteria.ROCK, criteria.C_ELECTRO, criteria.ODD_RHYTHM],
        selectedTrackTitle: '四季頌歌',
        selectedTrackYtId: '_s8C9x1Ek2c',
        spotifyId: null,
        deezerId: null,
        designers: ['Kaoru Kato', 'Takeshi Matsuyama'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'sadistic_mika_band_hot_menu',
        title: 'Hot! Menu',
        artist: 'サディスティック・ミカ・バンド',
        year: 1975,
        country: regions.JAPAN,
        cover: '.jpg',
        criteria: [criteria.JAPANESE, criteria.JAZZY_GROOVY, criteria.ODD_RHYTHM, criteria.FEMALE],
        selectedTrackTitle: 'Wah-Kah! Chico',
        selectedTrackYtId: null,
        spotifyId: null,
        deezerId: null,
        designers: ['Masayoshi Sukita'],
        similarAlbums: [],
        isAGem: false,
    },
]

export default albums
