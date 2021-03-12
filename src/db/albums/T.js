import regions from '../regions'
import { criteria } from '../criteria'

const albums = [
    {
        id: 'tai_phong_tai_phong',
        title: 'Taï Phong',
        artist: 'Taï Phong',
        year: 1975,
        country: regions.FRANCE,
        cover: '.jpg',
        criteria: [criteria.GLITTER, criteria.SYMPHONIC],
        selectedTrackTitle: 'Fields Of Gold',
        selectedTrackYtId: null,
        spotifyId: '3Z8DubxAWENlQd3pxJOKZE',
        deezerId: '8910221',
        designers: ['Lang'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'tai_phong_windows',
        title: 'Windows',
        artist: 'Taï Phong',
        year: 1976,
        country: regions.FRANCE,
        cover: '.jpg',
        criteria: [criteria.GLITTER, criteria.SYMPHONIC, criteria.JAZZY_GROOVY],
        selectedTrackTitle: `When It's The Season`,
        selectedTrackYtId: 'aT1ngm-ADkY',
        spotifyId: '3pN57NmhgB98rHwk8b0VJr',
        deezerId: '8910217',
        designers: ['Lang'],
        similarAlbums: [],
        isAGem: true,
        description: `TODO description`,
    },
    {
        id: 'tai_phong_last_flight',
        title: 'Last Flight',
        artist: 'Taï Phong',
        year: 1979,
        country: regions.FRANCE,
        cover: '.jpg',
        criteria: [criteria.GLITTER, criteria.SYMPHONIC, criteria.JAZZY_GROOVY, criteria.JAM, criteria.C_JAZZ, criteria.SOFT_SEVENTIES, criteria.ART_POP],
        selectedTrackTitle: 'Last Flight',
        selectedTrackYtId: 'LoGhi9weBO8',
        spotifyId: '5GsJLsUq8x3DklXymqiDub',
        deezerId: '8910241',
        designers: [],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'tangerine_dream_phaedra',
        title: 'Phaedra',
        artist: 'Tangerine Dream',
        year: 1974,
        country: regions.GERMANY,
        cover: '.jpg',
        criteria: [criteria.INSTRUMENTAL, criteria.LENGTHY_TRACKS, criteria.SOFT, criteria.AMBIENT, criteria.C_PSYCHE, criteria.ELECTRO],
        selectedTrackTitle: `Sequent 'C'`,
        selectedTrackYtId: 'Jb_hDcNr5KQ',
        spotifyId: '7KRXWeJYBkyUmwOFTayiQk',
        deezerId: '301955',
        designers: ['Edgar Froese'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'tangerine_dream_rubycon',
        title: 'Rubycon',
        artist: 'Tangerine Dream',
        year: 1975,
        country: regions.GERMANY,
        cover: '.jpg',
        criteria: [criteria.INSTRUMENTAL, criteria.LENGTHY_TRACKS, criteria.SOFT, criteria.AMBIENT, criteria.C_PSYCHE, criteria.ELECTRO],
        selectedTrackTitle: 'Rubycon (Part I)',
        selectedTrackYtId: '4xl6zlD_hlE',
        spotifyId: '61BhEQyumLEqrRVREfQabB',
        deezerId: '301956',
        designers: ['Monique Froese'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'tangerine_dream_ricochet',
        title: 'Ricochet',
        artist: 'Tangerine Dream',
        year: 1975,
        country: regions.GERMANY,
        cover: '.jpg',
        criteria: [criteria.INSTRUMENTAL, criteria.LENGTHY_TRACKS, criteria.SOFT, criteria.LIVE, criteria.AMBIENT, criteria.C_PSYCHE, criteria.ELECTRO],
        selectedTrackTitle: 'Ricochet (Part II)',
        selectedTrackYtId: 'XCsJOaPDJUE',
        spotifyId: '6iPUDn0rAVYuojEyEU0VJP',
        deezerId: '301957',
        designers: ['Monique Froese'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'tangerine_dream_stratosfear',
        title: 'Stratosfear',
        artist: 'Tangerine Dream',
        year: 1976,
        country: regions.GERMANY,
        cover: '.jpg',
        criteria: [criteria.INSTRUMENTAL, criteria.SOFT, criteria.AMBIENT, criteria.C_PSYCHE, criteria.ELECTRO],
        selectedTrackTitle: 'Stratosfear',
        selectedTrackYtId: '2w8VsvJ40sM',
        spotifyId: '3gwpouV58Wxl0kd5OIT8m7',
        deezerId: '301958',
        designers: ['Brian Cooke', 'Trevor Key'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'tea_and_symphony_an_asylum_for_the_musically_insane',
        title: 'An Asylum For The Musically Insane',
        artist: 'Tea And Symphony',
        year: 1969,
        country: regions.ENGLAND,
        cover: '.jpg',
        criteria: [criteria.C_PSYCHE, criteria.FUNNY, criteria.FOLK, criteria.CRISPY_SIXTIES],
        selectedTrackTitle: 'Sometime',
        selectedTrackYtId: '91xllZBR8ps',
        spotifyId: '5QNTy5elpS2oC2mrVmfNo1',
        deezerId: null,
        designers: ['Peter Thaine'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'tea_and_symphony_jo_sago',
        title: 'Jo Sago',
        artist: 'Tea And Symphony',
        year: 1970,
        country: regions.ENGLAND,
        cover: '.jpg',
        criteria: [criteria.STORYLINE, criteria.UNCOMMON_INSTRUMENTS, criteria.JAZZY_GROOVY, criteria.ROCK_OPERA, criteria.FOLK],
        selectedTrackTitle: 'Yourself',
        selectedTrackYtId: 'YlyCN0xb37g',
        spotifyId: null,
        deezerId: null,
        designers: [],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'terpandre_terpandre',
        title: 'Terpandre',
        artist: 'Terpandre',
        year: 1981,
        country: regions.FRANCE,
        cover: '.jpg',
        criteria: [criteria.INSTRUMENTAL, criteria.UNCOMMON_INSTRUMENTS, criteria.C_JAZZ, criteria.ODD_RHYTHM, criteria.SOFT_SEVENTIES, criteria.SOFT],
        selectedTrackTitle: 'Carrousel',
        selectedTrackYtId: 'BHGGHyd1amY',
        spotifyId: '2iy60Te5aOKNYi1DESFaHR',
        deezerId: '46213',
        designers: ['Bernard Monerri'],
        similarAlbums: ['aurora_aurora'],
        isAGem: false,
    },
    {
        id: 'thalassa_suffer_and_misery',
        title: 'Suffer And Misery',
        artist: 'Thalassa',
        year: 1982,
        country: regions.FRANCE,
        cover: '.jpg',
        criteria: [criteria.ODD_RHYTHM, criteria.GLITTER, criteria.SOFT, criteria.C_ELECTRO, criteria.NEO_EIGHTIES],
        selectedTrackTitle: 'Far From Me',
        selectedTrackYtId: 'o6IZVtde0Es',
        spotifyId: null,
        deezerId: null,
        designers: [],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'thin_lizzy_thin_lizzy',
        title: 'Thin Lizzy',
        artist: 'Thin Lizzy',
        year: 1971,
        country: regions.IRELAND,
        cover: '.jpg',
        criteria: [criteria.FOLK],
        selectedTrackTitle: 'Eire',
        selectedTrackYtId: 'DBLFJo5j0F4',
        spotifyId: '7w9rDEQYLJRWcRUctOFbPy',
        deezerId: '262661',
        designers: [],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'thin_lizzy_shades_of_blue_orphanage',
        title: 'Shades Of Blue Orphanage',
        artist: 'Thin Lizzy',
        year: 1972,
        country: regions.IRELAND,
        cover: '.jpg',
        criteria: [criteria.FOLK, criteria.ODD_RHYTHM, criteria.SOFT],
        selectedTrackTitle: 'Shades Of Blue Orphanage',
        selectedTrackYtId: 'RLOjJZO6Nro',
        spotifyId: '6jXNB46aXlL2oWY03GtFHy',
        deezerId: '245501',
        designers: [],
        similarAlbums: [],
        isAGem: false,
    },
    // TODO  Tim Berne & Bill Frisell - ...Theorically
    // trac is M. OU Ground Floor
    // psyché, experimental, c_jazz
    {
        id: 'titus_groan_titus_groan',
        title: 'Titus Groan',
        artist: 'Titus Groan',
        year: 1970,
        country: regions.ENGLAND,
        cover: '.jpg',
        criteria: [criteria.ROCK],
        selectedTrackTitle: `It Wasn't For You`,
        selectedTrackYtId: '7QC1hQyn8-0',
        spotifyId: '0mlj4Hjj145o9dJIc3dm1w',
        deezerId: '8875809',
        designers: ['Sue Baws'],
        similarAlbums: ['fuzzy_duck_fuzzy_duck'],
        isAGem: false,
    },
    {
        id: 'tontos_expanding_head_band_zero_time',
        title: 'Zero Time',
        artist: `Tonto's Expanding Head Band`,
        year: 1971,
        country: regions.USA,
        cover: '.jpg',
        criteria: [criteria.ELECTRO, criteria.INSTRUMENTAL, criteria.C_PSYCHE],
        selectedTrackTitle: 'Timewhys',
        selectedTrackYtId: 'NqSrswia1-E',
        spotifyId: '1TIAU6CbjQCF6LJ7uTj7O6',
        deezerId: '7530433',
        designers: ['Carol Hertzer'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'tontos_expanding_head_band_its_about_time',
        title: `It's About Time`,
        artist: `Tonto's Expanding Head Band`,
        year: 1974,
        country: regions.USA,
        cover: '.jpg',
        criteria: [criteria.ELECTRO, criteria.INSTRUMENTAL, criteria.C_PSYCHE, criteria.SOFT, criteria.UNCOMMON_INSTRUMENTS, criteria.TRANSITION],
        selectedTrackTitle: 'The Boatman',
        selectedTrackYtId: 'R1Bv9UCqbD4',
        spotifyId: null,
        deezerId: null,
        designers: ['Joan Nielsen'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'tortilla_flat_fur_ein_3_4_stundchen',
        title: 'Für Ein 3/4 Stündchen',
        artist: 'Tortilla Flat',
        year: 1974,
        country: regions.GERMANY,
        cover: '.jpg',
        criteria: [criteria.INSTRUMENTAL, criteria.C_JAZZ, criteria.JAM, criteria.GERMAN, criteria.JAZZY_GROOVY],
        selectedTrackTitle: 'Rumpelstilzchen',
        selectedTrackYtId: '7FCB5Xqd-Y4',
        spotifyId: null,
        deezerId: null,
        designers: [],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'trapeze_trapeze',
        title: 'Trapeze',
        artist: 'Trapeze',
        year: 1970,
        country: regions.ENGLAND,
        cover: '.jpg',
        criteria: [criteria.SOFT, criteria.FOLK, criteria.FANTASY],
        selectedTrackTitle: `The Giant's Dead Hoorah!`,
        selectedTrackYtId: 'zqekc2zaw9A',
        spotifyId: null,
        deezerId: null,
        designers: [],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'trefle_reflet',
        title: 'Reflet',
        artist: 'Trèfle',
        year: 1978,
        country: regions.FRANCE,
        cover: '.jpg',
        criteria: [criteria.STORYLINE, criteria.FRENCH, criteria.ROCK_OPERA, criteria.TOUCHING_VOCALS],
        selectedTrackTitle: `L'appel Du Temps`,
        selectedTrackYtId: 'sGMIO4h7XMY',
        spotifyId: null,
        deezerId: null,
        designers: [],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'triumvirat_mediterranean_tales',
        title: 'Mediterranean Tales',
        artist: 'Triumvirat',
        year: 1972,
        country: regions.GERMANY,
        cover: '.jpg',
        criteria: [criteria.ODD_RHYTHM, criteria.LENGTHY_TRACKS, criteria.SYMPHONIC, criteria.C_ELECTRO, criteria.SPECTACULAR, criteria.PIANO],
        selectedTrackTitle: 'Across The Waters',
        selectedTrackYtId: 'msni0_j51IU',
        spotifyId: '2gu5catUel9XVrQT7FQhU8',
        deezerId: '305760',
        designers: [],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'triumvirat_illusions_on_a_double_dimple',
        title: 'Illusions On A Double Dimple',
        artist: 'Triumvirat',
        year: 1973,
        country: regions.GERMANY,
        cover: '.jpg',
        criteria: [criteria.ODD_RHYTHM, criteria.LENGTHY_TRACKS, criteria.SYMPHONIC, criteria.C_ELECTRO, criteria.SPECTACULAR, criteria.PIANO],
        selectedTrackTitle: 'Mister Ten Percent',
        selectedTrackYtId: '7VAA7M5nXx8',
        spotifyId: '1KDrZ0BG6DN9odiHb9sE25',
        deezerId: '305653',
        designers: ['Kochlowski'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'triumvirat_spartacus',
        title: 'Spartacus',
        artist: 'Triumvirat',
        year: 1975,
        country: regions.GERMANY,
        cover: '.jpg',
        criteria: [criteria.CONCEPT, criteria.ELECTRO, criteria.ART_POP, criteria.PIANO],
        selectedTrackTitle: 'The March To The Eternal City',
        selectedTrackYtId: 'TmTZpQYMzN8',
        spotifyId: '5CV4ZQy6NS9GcpMUAGZhYE',
        deezerId: '305759',
        designers: [],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'the_turtles_the_turtles_present_the_battle_of_the_band',
        title: 'The Turtles Present The Battle Of The Bands',
        artist: 'The Turtles',
        year: 1968,
        country: regions.USA,
        cover: '.jpg',
        criteria: [criteria.CONCEPT, criteria.FUNNY, criteria.ROCK, criteria.UNCOMMON_INSTRUMENTS],
        selectedTrackTitle: 'Food',
        selectedTrackYtId: '2UEE0cjQ8EY',
        spotifyId: '155OAoTAYR4Uu0LpSMvy5W',
        deezerId: '148674',
        designers: [],
        similarAlbums: [], // TODO similar to procol harum mid carrier genre Grand Hotel ?? + similar electric light orchestra
        isAGem: false,
    },
    {
        id: 'the_turtles_turtle_soup',
        title: 'Turtle Soup',
        artist: 'The Turtles',
        year: 1969,
        country: regions.USA,
        cover: '.jpg',
        criteria: [criteria.ROCK, criteria.C_PSYCHE],
        selectedTrackTitle: 'Somewhere Friday Night',
        selectedTrackYtId: '-UawZQJdGe4',
        spotifyId: '0kcb49VdiGSb7Qii0v0jIc',
        deezerId: '204993',
        designers: [],
        similarAlbums: [], // TODO close to early jefferson airplane
        isAGem: false,
    },
]

export default albums