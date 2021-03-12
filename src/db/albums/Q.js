import regions from '../regions'
import { criteria } from '../criteria'

const albums = [
    {
        id: 'quatermass_quatermass',
        title: 'Quatermass',
        artist: 'Quatermass',
        year: 1970,
        country: regions.ENGLAND,
        cover: '.jpg',
        criteria: [criteria.ROCK, criteria.HEAVY],
        selectedTrackTitle: 'Gemini',
        selectedTrackYtId: '8tU5T4kGI2E',
        spotifyId: '6uv56W9I7ahYTS5R7la9bT',
        deezerId: '13933792',
        designers: ['Hipgnosis'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'queen_queen',
        title: 'Queen',
        artist: 'Queen',
        year: 1973,
        country: regions.ENGLAND,
        cover: '.jpg',
        criteria: [criteria.HEAVY, criteria.ROCK, criteria.FANFARE, criteria.GREASY_SEVENTIES, criteria.PIANO],
        selectedTrackTitle: 'Doing All Right',
        selectedTrackYtId: 'AqP8xLF3TE4',
        spotifyId: '914405',
        deezerId: '1kkb8xlG9yssEVsWKiEtAB',
        designers: ['Douglas Puddifoot', 'Freddie Mercury', 'Brian May'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'queen_queen_ii',
        title: 'Queen II',
        artist: 'Queen',
        year: 1974,
        country: regions.ENGLAND,
        cover: '.jpg',
        criteria: [criteria.STORYLINE, criteria.TRANSITION, criteria.SYMPHONIC, criteria.BLENDS, criteria.ROCK_OPERA, criteria.FANFARE, criteria.GREASY_SEVENTIES],
        selectedTrackTitle: 'The March Of The Black Queen',
        selectedTrackYtId: 'SoBMhx_ap_g',
        spotifyId: '0NouBnbXRJKFWzm9LwCW0K',
        deezerId: '915165',
        designers: ['Mick Rock'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'queen_sheer_heart_attack',
        title: 'Sheer Heart Attack',
        artist: 'Queen',
        year: 1974,
        country: regions.ENGLAND,
        cover: '.jpg',
        criteria: [criteria.TRANSITION, criteria.BLENDS, criteria.ROCK_OPERA, criteria.FANFARE, criteria.GREASY_SEVENTIES],
        selectedTrackTitle: 'In The Lap Of The Gods... Revisited',
        selectedTrackYtId: 'ieXcPZC0MJk',
        spotifyId: '5SBHID8qGG3x52zgoh2ilz',
        deezerId: '915783',
        designers: ['Mick Rock'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'queen_a_night_at_the_opera',
        title: 'A Night At The Opera',
        artist: 'Queen',
        year: 1975,
        country: regions.ENGLAND,
        cover: '.jpg',
        criteria: [criteria.BLENDS, criteria.ROCK_OPERA, criteria.FANFARE, criteria.ART_POP, criteria.GREASY_SEVENTIES],
        selectedTrackTitle: 'Bohemian Rhapsody',
        selectedTrackYtId: 'fJ9rUzIMcZQ',
        spotifyId: '1GbtB4zTqAsyfZEsm1RZfx',
        deezerId: '915785',
        designers: ['David Costa'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'queen_a_day_at_the_races',
        title: 'A Day At The Races',
        artist: 'Queen',
        year: 1976,
        country: regions.ENGLAND,
        cover: '.jpg',
        criteria: [criteria.BLENDS, criteria.ROCK_OPERA, criteria.FANFARE, criteria.ART_POP, criteria.GREASY_SEVENTIES],
        selectedTrackTitle: 'Somebody To Love',
        selectedTrackYtId: 'kijpcUv-b8M',
        spotifyId: '3hfcNo7WWy1Z1ie0nJ8PRy',
        deezerId: '917232',
        designers: ['David Costa'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'queen_flash_gordon',
        title: 'Flash Gordon',
        artist: 'Queen',
        year: 1980,
        country: regions.ENGLAND,
        cover: '.jpg',
        criteria: [criteria.ELECTRO, criteria.SOUNDTRACK, criteria.SOUND_COLLAGES, criteria.TRANSITION, criteria.SCI_FI, criteria.PATCHWORK],
        selectedTrackTitle: 'In The Death Cell',
        selectedTrackYtId: 'nN59rvY_E0Q',
        spotifyId: '2SS9qutxzz0XZf4zmoQVdx',
        deezerId: '725240',
        designers: ['Cream'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'queen_innuendo',
        title: 'Innuendo',
        artist: 'Queen',
        year: 1991,
        country: regions.ENGLAND,
        cover: '.jpg',
        criteria: [criteria.ARENA, criteria.NEO_EIGHTIES, criteria.ART_POP, criteria.C_ELECTRO, criteria.TOUCHING_VOCALS],
        selectedTrackTitle: 'Innuendo',
        selectedTrackYtId: 'g2N0TkfrQhY',
        spotifyId: '5yAM3CcaXF6DPRJW3oL6Ya',
        deezerId: '725245',
        designers: ['Richard Gray', 'Grandville'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'queensryche_operation_mindcrime',
        title: 'Operation: Mindcrime',
        artist: 'Queensrÿche',
        year: 1988,
        country: regions.USA,
        cover: '.jpg',
        criteria: [criteria.ARENA, criteria.NEO_EIGHTIES, criteria.HEAVY, criteria.CONCEPT, criteria.TRANSITION, criteria.SOUND_COLLAGES, criteria.SCI_FI],
        selectedTrackTitle: 'Spreading The Disease',
        selectedTrackYtId: 'QkkARshZ2t8',
        spotifyId: '4eEQ3aNA8mptFIfbFdX79p',
        deezerId: '300907',
        designers: ['Reiner Design Consultants, Inc.'],
        similarAlbums: [],
        isAGem: false,
    },
    // TODO Queensrÿche - Empire - 1990 - criteria.ARENA, criteria.NEO_EIGHTIES, criteria.HEAVY, criterria.ODD_RHYTHM
    // track is Della Brown
    {
        id: 'quicksilver_messenger_service_happy_trails',
        title: 'Happy Trails',
        artist: 'Quicksilver Messenger Service',
        year: 1969,
        country: regions.USA,
        cover: '.jpg',
        criteria: [criteria.INSTRUMENTAL, criteria.JAM, criteria.LIVE, criteria.ROCK],
        selectedTrackTitle: 'When Do You Love',
        selectedTrackYtId: 'Rng54UMoxy8',
        spotifyId: '7d9IZA5hVMlRqkRszYt66r',
        deezerId: '301390',
        designers: ['George Hunter'],
        similarAlbums: [],
        isAGem: false,
    },
]

export default albums