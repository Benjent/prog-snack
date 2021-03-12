import regions from '../regions'
import { criteria } from '../criteria'

const albums = [
    {
        id: 'zabu_my_coffins_ready',
        title: `My Coffin's Ready`,
        artist: 'Zabu',
        year: 1972,
        country: regions.FRANCE,
        cover: '.jpg',
        criteria: [criteria.ROCK, criteria.JAM],
        selectedTrackTitle: 'Silent Angel',
        selectedTrackYtId: '2Mc8kReoSGk',
        spotifyId: '0KN0lcNi5VlvApiP1tqQ5T',
        deezerId: '431519',
        designers: [],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'zanov_green_ray',
        title: 'Green Ray',
        artist: 'Zanov',
        year: 1977,
        country: regions.FRANCE,
        cover: '.jpg',
        criteria: [criteria.INSTRUMENTAL, criteria.LENGTHY_TRACKS, criteria.SOFT, criteria.AMBIENT, criteria.C_PSYCHE, criteria.ELECTRO],
        selectedTrackTitle: 'Green Ray',
        selectedTrackYtId: 'PgHTz5T9Hpk',
        spotifyId: null,
        deezerId: null,
        designers: [],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'zanov_moebius_256_301',
        title: 'Moebius 256 301',
        artist: 'Zanov',
        year: 1977,
        country: regions.FRANCE,
        cover: '.jpg',
        criteria: [criteria.INSTRUMENTAL, criteria.LENGTHY_TRACKS, criteria.SOFT, criteria.AMBIENT, criteria.C_PSYCHE, criteria.ELECTRO],
        selectedTrackTitle: 'Plénitude',
        selectedTrackYtId: 'QCs2wJBMTv4',
        spotifyId: null,
        deezerId: null,
        designers: [],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'zanov_in_course_of_time',
        title: 'In Course Of Time',
        artist: 'Zanov',
        year: 1982,
        country: regions.FRANCE,
        cover: '.jpg',
        criteria: [criteria.INSTRUMENTAL, criteria.LENGTHY_TRACKS, criteria.SOFT, criteria.AMBIENT, criteria.ELECTRO],
        selectedTrackTitle: 'Lost Message',
        selectedTrackYtId: 'sYzgqOIkVS8',
        spotifyId: null,
        deezerId: null,
        designers: [],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'zarathustra_ge_also_spielt',
        title: 'Also Spielt...',
        artist: 'Zarathustra',
        year: 1982,
        country: regions.GERMANY,
        cover: '.jpg',
        criteria: [criteria.HEAVY, criteria.ODD_RHYTHM, criteria.GREASY_SEVENTIES, criteria.JAM, criteria.JAZZY_GROOVY],
        selectedTrackTitle: 'Way To Your Heart',
        selectedTrackYtId: 'XLNN4rzST20',
        spotifyId: null,
        deezerId: '64755682',
        designers: [],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'zarathustra_ge2_zarathustra',
        title: 'Zarathustra',
        artist: 'Zarathustra (GE 2)',
        year: 1972,
        country: regions.GERMANY,
        cover: '.jpg',
        criteria: [criteria.JAM, criteria.HEAVY], // TODO
        selectedTrackTitle: 'Nightmare',
        selectedTrackYtId: 'Fw1Z79T4q2Y',
        spotifyId: null,
        deezerId: '163197642',
        designers: ['Jürgen Strömer'],
        similarAlbums: ['uriah_heep_very_eavy_very_umble', 'warhorse_warhorse'],
        isAGem: false,
    },
    {
        id: 'zior_the_first_monument',
        title: 'The First Monument',
        artist: 'Zior',
        year: 1971,
        country: regions.ENGLAND,
        cover: '.jpg',
        criteria: [criteria.ROCK, criteria.C_PSYCHE, criteria.CRISPY_SIXTIES, criteria.JAM],
        selectedTrackTitle: 'Give Me Life',
        selectedTrackYtId: 'bTkb4_F3ZW4',
        spotifyId: '4oRhmBF7VPVBLLCoH1Na4j',
        deezerId: '136089',
        designers: [],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'zior_zior',
        title: 'Zior',
        artist: 'Zior',
        year: 1971,
        country: regions.ENGLAND,
        cover: '.jpg',
        criteria: [criteria.ROCK, criteria.C_PSYCHE, criteria.CRISPY_SIXTIES, criteria.JAM],
        selectedTrackTitle: 'Oh Mariya',
        selectedTrackYtId: '7vub4kzLDsI',
        spotifyId: '06GRVyDUlTYl5NO2VQkrDD',
        deezerId: '8838151',
        designers: ['Marcus Keef'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'zior_every_inch_a_man',
        title: 'Every Inch A Man',
        artist: 'Zior',
        year: 1972,
        country: regions.ENGLAND,
        cover: '.jpg',
        criteria: [criteria.ROCK, criteria.C_PSYCHE, criteria.CRISPY_SIXTIES, criteria.HEAVY],
        selectedTrackTitle: 'Suspend Animation',
        selectedTrackYtId: '4OImFnrJa74',
        spotifyId: '1cLRussQPN6MfP7MvNoZa3',
        deezerId: '437476',
        designers: [],
        similarAlbums: ['sir_lord_baltimore_kingdom_come'],
        isAGem: false,
    },
    {
        id: 'zomby_woof_riding_on_a_tear',
        title: 'Riding On A Tear',
        artist: 'Zomby Woof',
        year: 1977,
        country: regions.GERMANY,
        cover: '.jpg',
        criteria: [criteria.SYMPHONIC, criteria.GLITTER, criteria.SPECTACULAR, criteria.TRANSITION, criteria.C_ELECTRO, criteria.JAZZY_GROOVY, criteria.SPACY],
        selectedTrackTitle: `Dora's Drive`,
        selectedTrackYtId: '3EX1EpVA3_I',
        spotifyId: null,
        deezerId: null,
        designers: [],
        similarAlbums: [],
        isAGem: true,
        description: `TODO description`,
    },
    {
        id: 'zoo_zoo',
        title: 'Zoo',
        artist: 'Zoo',
        year: 1973,
        country: regions.NETHERLANDS,
        cover: '.jpg',
        criteria: [criteria.JAM, criteria.ROCK, criteria.JAZZY_GROOVY],
        selectedTrackTitle: 'Cold Night',
        selectedTrackYtId: '2gI_mUCPHO0',
        spotifyId: null,
        deezerId: null,
        designers: [],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'zygoat_zygoat',
        title: 'Zygoat',
        artist: 'Zygoat',
        year: 1974,
        country: regions.USA,
        cover: '.jpg',
        criteria: [criteria.ELECTRO, criteria.INSTRUMENTAL, criteria.C_PSYCHE, criteria.AMBIENT, criteria.SYMPHONIC, criteria.TRANSITION],
        selectedTrackTitle: 'Zygoat',
        selectedTrackYtId: null,
        spotifyId: null,
        deezerId: null,
        designers: ['Laszlo Kubinyi'],
        similarAlbums: [], // TODO je sais qu'il y en a!
        isAGem: false, // TODO almost a gem
    },
    {
        id: 'zyma_thoughts',
        title: 'Thoughts',
        artist: 'Zyma',
        year: 1978,
        country: regions.GERMANY,
        cover: '.jpg',
        criteria: [criteria.ODD_RHYTHM, criteria.JAM, criteria.UNCOMMON_INSTRUMENTS, criteria.C_PSYCHE, criteria.C_JAZZ, criteria.JAZZY_GROOVY, criteria.FEMALE],
        selectedTrackTitle: 'Businessman',
        selectedTrackYtId: 'jnE_gq9_R84',
        spotifyId: '1Z5SH59MGZ2Snt9MhIhsTf',
        deezerId: '3537251',
        designers: ['Udo Kübler'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'zyma_brave_new_world',
        title: 'Brave New World',
        artist: 'Zyma',
        year: 1979,
        country: regions.GERMANY,
        cover: '.jpg',
        criteria: [criteria.SOFT, criteria.C_JAZZ, criteria.JAZZY_GROOVY, criteria.SOFT_SEVENTIES, criteria.FEMALE],
        selectedTrackTitle: 'Colours',
        selectedTrackYtId: 'OJbotZE5lV4',
        spotifyId: null,
        deezerId: null,
        designers: ['G. Pasteur'],
        similarAlbums: [],
        isAGem: false,
    },
]

export default albums