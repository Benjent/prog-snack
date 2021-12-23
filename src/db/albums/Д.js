import regions from '../regions'
import { criteria } from '../criteria'

const albums = [
    { // TODO moyen prog
        id: 'pesnyary_pesnyary',
        title: 'Песняры',
        artist: 'Песняры',
        year: 1971,
        country: regions.RUSSIA,
        cover: '.jpg',
        criteria: [criteria.RUSSIAN, criteria.ROCK, criteria.C_FOLK],
        selectedTrackTitle: 'todo', // Рушники
        selectedTrackYtId: 'todo',
        spotifyId: null,
        deezerId: null,
        designers: [],
        similarAlbums: [],
        isAGem: false,
    },
    // TODO le deuxième : baroque, russian - 1972  // TODO moyen prog
    {
        id: 'pesnyary_pesnyary_iii',
        title: 'Песняры III',
        artist: 'Песняры',
        year: 1974,
        country: regions.RUSSIA,
        cover: '.jpg',
        criteria: [criteria.RUSSIAN, criteria.FANFARE],
        selectedTrackTitle: 'Крик Птицы',
        selectedTrackYtId: 'HIf0Rev1xRE',
        spotifyId: null,
        deezerId: null,
        designers: [],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'pesnyary_pesnyary_iv',
        title: 'Песняры IV',
        artist: 'Песняры',
        year: 1978,
        country: regions.RUSSIA,
        cover: '.jpg',
        criteria: [criteria.RUSSIAN, criteria.FANFARE, criteria.UNCOMMON_INSTRUMENTS, criteria.C_FOLK, criteria.BAROQUE, criteria.ODD_RHYTHM],
        selectedTrackTitle: 'Перепелочка',
        selectedTrackYtId: '9H2bgx4mBGw',
        spotifyId: null,
        deezerId: null,
        designers: [],
        similarAlbums: [],
        isAGem: false,
    },
    // TODO ФСБ BULGARIA - Нон Стоп - 1977
    // c_electro, bulgarian, odd, criteria.SYMPHONIC, instru, jazzygroovy
    // designers Евгени Донков
    // track is Интермецо
    // TODO ФСБ BULGARIA - ФСБ II - 1978
    // c_electro, odd, symphonic, instru?, c_jazz
    // track Утро
    // designers Николай Пекарев
    // gem true !!
]

export default albums
