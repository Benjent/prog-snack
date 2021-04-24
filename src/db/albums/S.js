import regions from '../regions'
import { criteria } from '../criteria'

const albums = [
    {
        id: 'santana_abraxas',
        title: 'Abraxas',
        artist: 'Santana',
        year: 1970,
        country: regions.USA,
        cover: '.jpg',
        criteria: [criteria.JAM, criteria.C_JAZZ, criteria.JAZZY_GROOVY, criteria.C_PSYCHE, criteria.UNCOMMON_INSTRUMENTS, criteria.SPANISH, criteria.LATINO],
        selectedTrackTitle: 'Singing Winds, Crying Beasts',
        selectedTrackYtId: 'Xskk5q1DL6A',
        spotifyId: '1CHUXwuge9A7L2KiA3vnR6',
        deezerId: '7740828',
        designers: ['Mati Klarwein'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'santana_santana_iii',
        title: 'Santana III',
        artist: 'Santana',
        year: 1971,
        country: regions.USA,
        cover: '.jpg',
        criteria: [criteria.JAM, criteria.C_JAZZ, criteria.JAZZY_GROOVY, criteria.LATINO, criteria.TRANSITION],
        selectedTrackTitle: 'Jungle Strut',
        selectedTrackYtId: 'piOEO_0Ffp0',
        spotifyId: '3iE6Jik24CBE0uv1lyyplI',
        deezerId: '1373307',
        designers: ['Heavy Water Light Show', 'Joan Chase', 'Mary Ann Mayer'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'santana_caravanserai',
        title: 'Caravanserai',
        artist: 'Santana',
        year: 1972,
        country: regions.USA,
        cover: '.jpg',
        criteria: [criteria.CONCEPT, criteria.ODD_RHYTHM, criteria.INSTRUMENTAL, criteria.JAM, criteria.TRANSITION, criteria.AMBIENT, criteria.C_PSYCHE, criteria.C_JAZZ, criteria.JAZZY_GROOVY, criteria.SPIRITUAL, criteria.UNCOMMON_INSTRUMENTS, criteria.LATINO],
        selectedTrackTitle: 'Waves Within',
        selectedTrackYtId: 'VGbSw8dHR3w',
        spotifyId: '0abfpuzzbTUNxasNmX04RU',
        deezerId: '1401719',
        designers: ['Joan Chase'],
        similarAlbums: [],
        isAGem: true,
        description: `TODO description`,
    },
    {
        id: 'santana_welcome',
        title: 'Welcome',
        artist: 'Santana',
        year: 1973,
        country: regions.USA,
        cover: '.jpg',
        criteria: [criteria.C_JAZZ, criteria.JAZZY_GROOVY, criteria.FEMALE, criteria.JAM, criteria.UNCOMMON_INSTRUMENTS, criteria.ODD_RHYTHM],
        selectedTrackTitle: 'Mother Africa',
        selectedTrackYtId: '1d-i_NacF9g',
        spotifyId: '0luB0sB15mLFitTOJqJJwT',
        deezerId: '7740338',
        designers: ['Randy Tuten'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'santana_borboletta',
        title: 'Borboletta',
        artist: 'Santana',
        year: 1974,
        country: regions.USA,
        cover: '.jpg',
        criteria: [criteria.JAM, criteria.TRANSITION, criteria.UNCOMMON_INSTRUMENTS, criteria.C_JAZZ, criteria.JAZZY_GROOVY, criteria.LATINO],
        selectedTrackTitle: 'Canto De Los Flores',
        selectedTrackYtId: 'vlWO_F2D2tw',
        spotifyId: '2SurTgYPtoCJSn7103Uuvk',
        deezerId: '111730',
        designers: ['Barry Imhoff', 'Carlos Santana'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'schicke_fuhrs_and_frohling_symphonic_pictures',
        title: 'Symphonic Pictures',
        artist: 'Schicke, Führs & Fröhling',
        year: 1976,
        country: regions.GERMANY,
        cover: '.jpg',
        criteria: [criteria.INSTRUMENTAL, criteria.LENGTHY_TRACKS, criteria.SYMPHONIC, criteria.C_PSYCHE, criteria.ELECTRO],
        selectedTrackTitle: 'Pictures',
        selectedTrackYtId: 'xvnRkJdbm6w',
        spotifyId: '1Moy8pZZekoPN0Kow0t7o0',
        deezerId: '7648349',
        designers: [],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'schicke_fuhrs_and_frohling_sunburst',
        title: 'Sunburst',
        artist: 'Schicke, Führs & Fröhling',
        year: 1977,
        country: regions.GERMANY,
        cover: '.jpg',
        criteria: [criteria.ODD_RHYTHM, criteria.C_ELECTRO],
        selectedTrackTitle: 'Troja',
        selectedTrackYtId: '1AfQ2w-fY40',
        spotifyId: '3oWKEuO0zzzfcZrKWI4Gqr',
        deezerId: '7576867',
        designers: [],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'scorpions_fly_to_the_rainbow',
        title: 'Fly To The Rainbow',
        artist: 'Scorpions',
        year: 1974,
        country: regions.GERMANY,
        cover: '.jpg',
        criteria: [criteria.HEAVY, criteria.ROCK, criteria.JAM],
        selectedTrackTitle: 'Fly To The Rainbow',
        selectedTrackYtId: 'dGDefpjTqFY',
        spotifyId: '4Iu5d1damGtHlq9kQmXpQQ',
        deezerId: '121494',
        designers: [`Wandrey's`],
        similarAlbums: ['wishbone_ash_argus'],
        isAGem: false,
    },
    {
        id: 'semiramis_dedicato_a_frazz',
        title: 'Dedicato A Frazz',
        artist: 'Semiramis',
        year: 1973,
        country: regions.ITALY,
        cover: '.jpg',
        criteria: [criteria.ODD_RHYTHM, criteria.TECHNICAL, criteria.SYMPHONIC, criteria.SPECTACULAR, criteria.ITALIAN],
        selectedTrackTitle: 'Luna Park',
        selectedTrackYtId: 'T2PVgfv0OR4',
        spotifyId: '0BWTfsFWL3TuBXZ2dBA7GV',
        deezerId: null,
        designers: ['Gordon Faggetter'],
        similarAlbums: [],
        isAGem: true,
        description: `TODO description`,
    },
    {
        id: 'serge_gainsbourg_histoire_de_melody_nelson',
        title: 'Histoire De Melody Nelson',
        artist: 'Serge Gainsbourg',
        year: 1971,
        country: regions.FRANCE,
        cover: '.jpg',
        criteria: [criteria.STORYLINE, criteria.CONCEPT, criteria.FRENCH, criteria.SOFT, criteria.ART_POP, criteria.ORCHESTRAL_PARTS, criteria.JAZZY_GROOVY],
        selectedTrackTitle: 'Melody',
        selectedTrackYtId: 'I3WeNexb2a8',
        spotifyId: '66Y8VrfvHnwJSk2ahGOr32',
        deezerId: '22233631',
        designers: [],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'serge_gainsbourg_lhomme_a_tete_de_chou',
        title: `L'homme À Tête De Chou`,
        artist: 'Serge Gainsbourg',
        year: 1976,
        country: regions.FRANCE,
        cover: '.jpg',
        criteria: [criteria.STORYLINE, criteria.FRENCH, criteria.SOFT, criteria.ART_POP, criteria.BLENDS],
        selectedTrackTitle: `L'homme À Tête De Chou`,
        selectedTrackYtId: 'BM8nWoPLmtA',
        spotifyId: '3gSi23G3zYYvIEBZwJTNEh',
        deezerId: '12494618',
        designers: [],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'serge_ramses_secret',
        title: 'Secret',
        artist: 'Serge Ramses',
        year: 1978,
        country: regions.FRANCE,
        cover: '.jpg',
        criteria: [criteria.INSTRUMENTAL, criteria.LENGTHY_TRACKS, criteria.SOFT, criteria.AMBIENT, criteria.ELECTRO],
        selectedTrackTitle: 'Secret',
        selectedTrackYtId: '3K0UOKOdDvE',
        spotifyId: null,
        deezerId: null,
        designers: ['Philippe Huart'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'shakti_natural_elements',
        title: 'Natural Elements',
        artist: 'Shakti',
        year: 1977,
        country: regions.INDIA,
        cover: '.jpg',
        criteria: [criteria.CONCEPT, criteria.ODD_RHYTHM, criteria.TECHNICAL, criteria.INSTRUMENTAL, criteria.JAM, criteria.ORIENTAL, criteria.UNCOMMON_INSTRUMENTS, criteria.C_JAZZ, criteria.C_FOLK, criteria.SPIRITUAL],
        selectedTrackTitle: 'Mind Ecology',
        selectedTrackYtId: 'd_DajSHROJA',
        spotifyId: '05RPG1hN35ucYL4BqEBZdn',
        deezerId: '241263',
        designers: ['Paula Scher', 'John Alcorn'],
        similarAlbums: [],
        isAGem: true,
        description: `TODO description`,
    },
    {
        id: 'the_shiver_walpurgis',
        title: 'Walpurgis',
        artist: 'The Shiver',
        year: 1969,
        country: regions.SWITZERLAND,
        cover: '.jpg',
        criteria: [criteria.CRISPY_SIXTIES, criteria.C_PSYCHE, criteria.BAROQUE],
        selectedTrackTitle: `Don't Let Me Be Misunderstood`,
        selectedTrackYtId: 'GeWSK4wy200',
        spotifyId: null,
        deezerId: null,
        designers: ['H.R. Giger'],
        similarAlbums: ['procol_harum_procol_harum'],
        isAGem: false,
    },
    {
        id: 'sir_lord_baltimore_kingdom_come',
        title: 'Kingdom Come',
        artist: 'Sir Lord Baltimore',
        year: 1970,
        country: regions.USA,
        cover: '.jpg',
        criteria: [criteria.JAM, criteria.ROCK, criteria.HEAVY, criteria.OCCULT, criteria.GREASY_SEVENTIES],
        selectedTrackTitle: 'Master Heartache',
        selectedTrackYtId: 'wQSz64rU9mM',
        spotifyId: '0VfnxBAij0kKr71OK47BBW',
        deezerId: null,
        designers: ['Doug Taylor'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'sloche_jun_oeil',
        title: `J'un Oeil`,
        artist: 'Sloche',
        year: 1975,
        country: regions.QUEBEC,
        cover: '.jpg',
        criteria: [criteria.ODD_RHYTHM, criteria.INSTRUMENTAL, criteria.JAM, criteria.SYMPHONIC, criteria.C_PSYCHE, criteria.FRENCH, criteria.JAZZY_GROOVY],
        selectedTrackTitle: `J'un Oeil`,
        selectedTrackYtId: 'Kng5yZJyMj0',
        spotifyId: null,
        deezerId: null,
        designers: ['Gaétan Desbiens'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'sloche_stadacone',
        title: 'Stadaconé',
        artist: 'Sloche',
        year: 1976,
        country: regions.QUEBEC,
        cover: '.jpg',
        criteria: [criteria.ODD_RHYTHM, criteria.INSTRUMENTAL, criteria.JAM, criteria.SYMPHONIC, criteria.C_PSYCHE, criteria.FRENCH, criteria.JAZZY_GROOVY],
        selectedTrackTitle: 'Stadaconé',
        selectedTrackYtId: 'GlkUhrk8MZg',
        spotifyId: null,
        deezerId: null,
        designers: ['Publiphoto'],
        similarAlbums: [],
        isAGem: true,
        description: `TODO description`,
    },
    {
        id: 'soft_machine_third',
        title: 'Third',
        artist: 'Soft Machine',
        year: 1970,
        country: regions.ENGLAND,
        cover: '.jpg',
        criteria: [criteria.EXPERIMENTAL, criteria.INSTRUMENTAL, criteria.LENGTHY_TRACKS, criteria.C_PSYCHE, criteria.C_ELECTRO, criteria.JAZZ],
        selectedTrackTitle: 'Slightly All The Time',
        selectedTrackYtId: '4RwLgA9U_3I',
        spotifyId: '111J9nxmdhyHSLNHeAL1jO',
        deezerId: null,
        designers: ['John Hays'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'spirit_spirit',
        title: 'Spirit',
        artist: 'Spirit',
        year: 1968,
        country: regions.USA,
        cover: '.jpg',
        criteria: [criteria.C_PSYCHE, criteria.C_FOLK, criteria.SOFT, criteria.C_JAZZ, criteria.UNCOMMON_INSTRUMENTS, criteria.BAROQUE],
        selectedTrackTitle: 'Taurus',
        selectedTrackYtId: 'xd8AVbwB_6E',
        spotifyId: '3TX6HT0emzfmlwsiMpE9CX',
        deezerId: '113484',
        designers: ['Corporate Head', 'Guy Webster'],
        similarAlbums: ['the_beatles_revolver'],
        isAGem: true,
        description: `TODO description`,
    },
    {
        id: 'spirit_the_family_that_plays_together',
        title: 'The Family That Plays Together',
        artist: 'Spirit',
        year: 1968,
        country: regions.USA,
        cover: '.jpg',
        criteria: [criteria.C_PSYCHE, criteria.C_FOLK, criteria.SOFT, criteria.TRANSITION, criteria.BAROQUE],
        selectedTrackTitle: 'It SHall Be',
        selectedTrackYtId: 'PlHnu3_Kgkc',
        spotifyId: '5zwKg5QUnSfQwkJqfl5cWs',
        deezerId: '112893',
        designers: ['Guy Webster'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'spirit_clear',
        title: 'Clear',
        artist: 'Spirit',
        year: 1969,
        country: regions.USA,
        cover: '.jpg',
        criteria: [criteria.C_PSYCHE, criteria.ROCK],
        selectedTrackTitle: 'Clear',
        selectedTrackYtId: 'qpN8xfRFc6k',
        spotifyId: '6u7hh9AVnf4X0HLaZVKo38',
        deezerId: '112732',
        designers: ['Guy Webster'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'spirit_twelves_dreams_of_dr_sardonicus',
        title: 'Twelves Dream Of Dr. Sardonicus',
        artist: 'Spirit',
        year: 1970,
        country: regions.USA,
        cover: '.jpg',
        criteria: [criteria.C_PSYCHE, criteria.ART_POP],
        selectedTrackTitle: 'Space Child',
        selectedTrackYtId: 'jpAx5VqzzUo',
        spotifyId: '0NWXyLhHhaeAmu4eovC8Ks',
        deezerId: '112731',
        designers: [],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'spirogyra_st_radigunds',
        title: 'St. Radigunds',
        artist: 'Spirogyra',
        year: 1971,
        country: regions.ENGLAND,
        cover: '.jpg',
        criteria: [criteria.C_PSYCHE, criteria.FOLK, criteria.FEMALE],
        selectedTrackTitle: 'The Duke Of Beaufoot',
        selectedTrackYtId: 'D1jNLR9tjXE',
        spotifyId: '5JhbxkXzy1o2RcX14CCwZP',
        deezerId: '671887',
        designers: ['Penny Graeme-Barber', 'Pete Rhodes'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'spirogyra_old_boot_wine',
        title: 'Old Boot Wine',
        artist: 'Spirogyra',
        year: 1972,
        country: regions.ENGLAND,
        cover: '.jpg',
        criteria: [criteria.C_PSYCHE, criteria.FOLK, criteria.FEMALE],
        selectedTrackTitle: 'A Canterbury Tale',
        selectedTrackYtId: 'o7Z5SIYACAU',
        spotifyId: '7dlDI9sU90DvAJKwaQYGRj',
        deezerId: '67021732',
        designers: ['Pete Rhodes'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'spirogyra_bells_boots_and_shambles',
        title: 'Bells, Boots And Shambles',
        artist: 'Spirogyra',
        year: 1973,
        country: regions.ENGLAND,
        cover: '.jpg',
        criteria: [criteria.LENGTHY_TRACKS, criteria.C_PSYCHE, criteria.FOLK, criteria.FEMALE],
        selectedTrackTitle: 'Old Boot Wine',
        selectedTrackYtId: '-Q0rh2uESWY',
        spotifyId: null,
        deezerId: null,
        designers: [],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'spring_spring',
        title: 'Spring',
        artist: 'Spring',
        year: 1971,
        country: regions.ENGLAND,
        cover: '.jpg',
        criteria: [criteria.GLITTER, criteria.ROCK, criteria.SOFT, criteria.C_FOLK, criteria.UNCOMMON_INSTRUMENTS, criteria.BAROQUE],
        selectedTrackTitle: 'Golden Fleece',
        selectedTrackYtId: 'BuP9_sMgu8I',
        spotifyId: '1GX1Mo7djCEq2ZAM2pokGR',
        deezerId: '77355512',
        designers: ['Marcus Keef'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'starcastle_starcastle',
        title: 'Starcastle',
        artist: 'Starcastle',
        year: 1976,
        country: regions.USA,
        cover: '.jpg',
        criteria: [criteria.ODD_RHYTHM, criteria.GLITTER, criteria.C_ELECTRO, criteria.SPECTACULAR, criteria.FANTASY],
        selectedTrackTitle: 'Elliptical Seasons',
        selectedTrackYtId: 'sSZepYc219Y',
        spotifyId: '1fxW4E9zQ5RIIc4k1aPZRy',
        deezerId: '115523',
        designers: ['Alex Ebel'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'starcastle_fountains_of_light',
        title: 'Fountains Of Light',
        artist: 'Starcastle',
        year: 1977,
        country: regions.USA,
        cover: '.jpg',
        criteria: [criteria.ODD_RHYTHM, criteria.GLITTER, criteria.C_ELECTRO, criteria.SPECTACULAR, criteria.FANTASY],
        selectedTrackTitle: 'Silver Winds',
        selectedTrackYtId: '0tmM4X3HnDk',
        spotifyId: '6ZtNHnRzacahYX1NeHxiU0',
        deezerId: '4575171',
        designers: ['Peter Lloyd'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'starcastle_citadel',
        title: 'Citadel',
        artist: 'Starcastle',
        year: 1977,
        country: regions.USA,
        cover: '.jpg',
        criteria: [criteria.ODD_RHYTHM, criteria.GLITTER, criteria.C_ELECTRO, criteria.SPECTACULAR, criteria.FANTASY],
        selectedTrackTitle: 'Wings Of White',
        selectedTrackYtId: 'Z8qyuL_wpXQ',
        spotifyId: '6r7XlOEXPFtVrJy4mTi0eP',
        deezerId: '897881',
        designers: ['Hildebrandt'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'steve_howe_beginnings',
        title: 'Beginnings',
        artist: 'Steve Howe',
        year: 1975,
        country: regions.ENGLAND,
        cover: '.jpg',
        criteria: [criteria.SOPHISTICATED, criteria.ODD_RHYTHM, criteria.UNCOMMON_INSTRUMENTS, criteria.BAROQUE, criteria.BLENDS, criteria.ORCHESTRAL_PARTS],
        selectedTrackTitle: 'The Nature Of The Sea',
        selectedTrackYtId: 'ZSb9s8E5rtU',
        spotifyId: '5iBOpddHTKZlap604IMKGY',
        deezerId: '1315730',
        designers: ['Roger Dean'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'steve_howe_the_steve_howe_album',
        title: 'The Steve Howe Album',
        artist: 'Steve Howe',
        year: 1979,
        country: regions.ENGLAND,
        cover: '.jpg',
        criteria: [criteria.ODD_RHYTHM, criteria.SOPHISTICATED, criteria.UNCOMMON_INSTRUMENTS, criteria.BLENDS, criteria.FEMALE],
        selectedTrackTitle: `All's A Chord`,
        selectedTrackYtId: 'Q3hMVdwJVRg',
        spotifyId: '6TI6gnnePvPEYRUMW6z6d5',
        deezerId: null,
        designers: ['Roger Dean'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'steve_howe_turbulence',
        title: 'Turbulence',
        artist: 'Steve Howe',
        year: 1991,
        country: regions.ENGLAND,
        cover: '.jpg',
        criteria: [criteria.NEO_EIGHTIES, criteria.INSTRUMENTAL, criteria.C_ELECTRO, criteria.ODD_RHYTHM],
        selectedTrackTitle: `The Inner Battle`,
        selectedTrackYtId: '7ZGpZkOQYl8',
        spotifyId: '2C2eSBa3plc2Xm4AmdKowj',
        deezerId: '93386522',
        designers: [],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'steve_howe_the_grand_scheme_of_things',
        title: 'The Grand Scheme Of Things',
        artist: 'Steve Howe',
        year: 1993,
        country: regions.ENGLAND,
        cover: '.jpg',
        criteria: [criteria.NEO_EIGHTIES, criteria.C_FOLK, criteria.ODD_RHYTHM],
        selectedTrackTitle: `Wayward Course`,
        selectedTrackYtId: '7Jm0P91dsME',
        spotifyId: '3s9Mhhq6813cvaLztBm11E',
        deezerId: '57912992',
        designers: ['Roger Dean'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'steve_vai_flexable',
        title: 'Flex-Able',
        artist: 'Steve Vai',
        year: 1984,
        country: regions.USA,
        cover: '.jpg',
        criteria: [criteria.FUNNY, criteria.ODD_RHYTHM, criteria.NEO_EIGHTIES, criteria.BLENDS, criteria.TECHNICAL, criteria.FEMALE, criteria.UNCOMMON_INSTRUMENTS, criteria.C_PSYCHE],
        selectedTrackTitle: 'Lovers Are Crazy',
        selectedTrackYtId: 'Hmx661gfQoY',
        spotifyId: '6XtKxID8KuVRBlszv7sy3D',
        deezerId: '112818',
        designers: ['Raul G. Gonzalez'],
        similarAlbums: ['frank_zappa_tinsel_town_rebellion'],
        isAGem: false,
    },
    {
        id: 'the_storm_the_storm',
        title: 'The Storm',
        artist: 'The Storm',
        year: 1974,
        country: regions.SPAIN,
        cover: '.jpg',
        criteria: [criteria.HEAVY, criteria.ROCK, criteria.JAM],
        selectedTrackTitle: 'Crazy Machine',
        selectedTrackYtId: '6tHgkW2m-9g',
        spotifyId: null,
        deezerId: '52939772',
        designers: [],
        similarAlbums: ['deep_purple_who_do_we_think_we_are', 'atomic_rooster_in_hearing_of_atomic_rooster'],
        isAGem: false,
    },
    {
        id: 'strawbs_strawbs',
        title: 'Strawbs',
        artist: 'Strawbs',
        year: 1969,
        country: regions.ENGLAND,
        cover: '.jpg',
        criteria: [criteria.FOLK, criteria.SOUND_COLLAGES, criteria.C_PSYCHE, criteria.UNCOMMON_INSTRUMENTS, criteria.SOFT, criteria.BAROQUE, criteria.ORIENTAL],
        selectedTrackTitle: 'That Which Once Was Mine',
        selectedTrackYtId: 'Q08ZvJVT9Ww',
        spotifyId: '0cr57UBz01CRby5CoWnnhA',
        deezerId: '109414',
        designers: ['Tom Wilkes'],
        similarAlbums: ['the_incredible_string_band_the_5000_spirits_or_the_layers_of_the_onion'],
        isAGem: false,
    },
    {
        id: 'strawbs_dragonfly',
        title: 'Dragonfly',
        artist: 'Strawbs',
        year: 1970,
        country: regions.ENGLAND,
        cover: '.jpg',
        criteria: [criteria.FOLK, criteria.C_PSYCHE, criteria.UNCOMMON_INSTRUMENTS, criteria.SOFT, criteria.BAROQUE, criteria.ORIENTAL],
        selectedTrackTitle: 'The Vision Of The Lady Of The Lake',
        selectedTrackYtId: 'EKjbVzGuCNU',
        spotifyId: '50c9VqWI2sLJtByN0hrzo3',
        deezerId: '6156024',
        designers: ['Roger Saunders'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'strawbs_just_a_collection_of_antiques_and_curios',
        title: 'Just A Collection Of Antiques And Curios',
        artist: 'Strawbs',
        year: 1970,
        country: regions.ENGLAND,
        cover: '.jpg',
        criteria: [criteria.LIVE, criteria.FOLK, criteria.UNCOMMON_INSTRUMENTS, criteria.SOFT, criteria.BAROQUE, criteria.ORIENTAL],
        selectedTrackTitle: 'The Antique Suite',
        selectedTrackYtId: 'C4WtzQw_LME',
        spotifyId: '4HlO9kW2BJ3M9aTqOkM7DF',
        deezerId: '123096',
        designers: ['Roger Saunders'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'strawbs_from_the_witchwood',
        title: 'From The Witchwood',
        artist: 'Strawbs',
        year: 1971,
        country: regions.ENGLAND,
        cover: '.jpg',
        criteria: [criteria.FOLK, criteria.C_PSYCHE, criteria.UNCOMMON_INSTRUMENTS, criteria.SOFT, criteria.BAROQUE],
        selectedTrackTitle: 'Flight',
        selectedTrackYtId: 'MeMDp9-jDQs',
        spotifyId: '2yqVIoYAgSnupSUuQVaYX0',
        deezerId: '230184',
        designers: ['Roger Saunders'],
        similarAlbums: [],
        isAGem: false,
    },
    // TODO
    // grave new world : folk, cpsyché, spectacular, uncommon instr
    // selected track : new world
    // designers William Blake, Paper Tiger
    // TODO
    // bursting at the seams : cfolk, uncommon
    // selected track : tears and pavan
    // designers : John McConnell
    // TODO
    // hero and heroine : soft, oddryth, c_folk, c_electro
    // selected track Autumn
    // designers
    // similar acqua fragile
    {
        id: 'stud_stud',
        title: 'Stud',
        artist: 'Stud',
        year: 1971,
        country: regions.NORTHERN_IRELAND,
        cover: '.jpg',
        criteria: [criteria.C_FOLK, criteria.JAM, criteria.INSTRUMENTAL, criteria.JAZZY_GROOVY],
        selectedTrackTitle: 'Horizon',
        selectedTrackYtId: 'cqCWn9FV-84',
        spotifyId: '6r7XlOEXPFtVrJy4mTi0eP',
        deezerId: null,
        designers: ['Anne Marie Anderson'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'stud_september',
        title: 'September',
        artist: 'Stud',
        year: 1972,
        country: regions.NORTHERN_IRELAND,
        cover: '.jpg',
        criteria: [criteria.FOLK, criteria.JAM, criteria.JAZZY_GROOVY, criteria.SOFT],
        selectedTrackTitle: 'Samurai',
        selectedTrackYtId: 'j72O14jFDGQ',
        spotifyId: null,
        deezerId: null,
        designers: [],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'sunhouse_sunhouse',
        title: 'Sunhouse',
        artist: 'Sunhouse',
        year: 1977,
        country: regions.BELGIUM,
        cover: '.jpg',
        criteria: [criteria.INSTRUMENTAL, criteria.JAM, criteria.SOFT, criteria.C_JAZZ, criteria.JAZZY_GROOVY],
        selectedTrackTitle: `Don't Skimp With Us`,
        selectedTrackYtId: '1ABQLe-KfEo',
        spotifyId: null,
        deezerId: null,
        designers: ['Anne-Catherine Gerbaud'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'supertramp_supertramp',
        title: 'Supertramp',
        artist: 'Supertramp',
        year: 1970,
        country: regions.ENGLAND,
        cover: '.jpg',
        criteria: [criteria.JAM, criteria.SOFT, criteria.ROCK, criteria.ART_POP],
        selectedTrackTitle: 'Words Unspoken',
        selectedTrackYtId: null,
        spotifyId: '3ma2d5Gk3oc9ffDTT3fOeF',
        deezerId: '245820',
        designers: ['Bob Hook'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'supertramp_indelibly_stamped',
        title: 'Indelibly Stamped',
        artist: 'Supertramp',
        year: 1971,
        country: regions.ENGLAND,
        cover: '.jpg',
        criteria: [criteria.ROCK, criteria.ART_POP, criteria.PIANO],
        selectedTrackTitle: 'Travelled',
        selectedTrackYtId: 'OzihNqVYElA',
        spotifyId: '1YTdN3xvwgVdkdKZq6jMH3',
        deezerId: '122946',
        designers: ['Keith Morris', 'Bob Hook'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'supertramp_crime_of_the_century',
        title: 'Crime Of The Century',
        artist: 'Supertramp',
        year: 1974,
        country: regions.ENGLAND,
        cover: '.jpg',
        criteria: [criteria.CONCEPT, criteria.SOFT, criteria.BLENDS, criteria.C_JAZZ, criteria.ROCK_OPERA, criteria.TOUCHING_VOCALS, criteria.ART_POP, criteria.SOFT_SEVENTIES, criteria.PIANO],
        selectedTrackTitle: 'Rudy',
        selectedTrackYtId: 'gxW3s_Qk1dk',
        spotifyId: '2wrHaulTgqqkVKx0k7Kq4r',
        deezerId: '9205657',
        designers: ['Paul Wakefield'],
        similarAlbums: [],
        isAGem: true,
        description: `Rick Davies and Roger Hodgson composed heavy-hearted songs to create one of the most subtle, most magnificient, most moving albums we could imagine, with intense vocals and lyrics as desperate as the cover. The album is a theater of unregular song structures and piano-driven melodies, where the other instruments complete parts here and there so that almost every song is a climax itself.`,
    },
    {
        id: 'supertramp_crisis_what_crisis',
        title: 'Crisis? What Crisis?',
        artist: 'Supertramp',
        year: 1975,
        country: regions.ENGLAND,
        cover: '.jpg',
        criteria: [criteria.SOFT, criteria.TOUCHING_VOCALS, criteria.ART_POP, criteria.SOFT_SEVENTIES, criteria.ORCHESTRAL_PARTS, criteria.PIANO],
        selectedTrackTitle: `Another Man's Woman`,
        selectedTrackYtId: 'MUPwN0MtY1Y',
        spotifyId: '5Fliz4RQcDktb93l1uYDka',
        deezerId: '224594',
        designers: ['Richard Davies', 'Dick Ward', 'Fabio Nicoli', 'Paul Wakefield'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'supertramp_even_in_the_quietest_moments',
        title: 'Even In The Quietest Moments',
        artist: 'Supertramp',
        year: 1977,
        country: regions.ENGLAND,
        cover: '.jpg',
        criteria: [criteria.SOFT, criteria.TOUCHING_VOCALS, criteria.ART_POP, criteria.SOFT_SEVENTIES, criteria.PIANO],
        selectedTrackTitle: 'Even In The Quietest Moments',
        selectedTrackYtId: '7CXcMPdVXp4',
        spotifyId: '4X87hQ57jTYQTcYTaJWK5w',
        deezerId: '103251',
        designers: ['Mike Doud'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'supertramp_breakfast_in_america',
        title: 'Breakfast In America',
        artist: 'Supertramp',
        year: 1979,
        country: regions.ENGLAND,
        cover: '.jpg',
        criteria: [criteria.SOFT, criteria.TOUCHING_VOCALS, criteria.ART_POP, criteria.SOFT_SEVENTIES, criteria.PIANO],
        selectedTrackTitle: 'Child Of Vision',
        selectedTrackYtId: 'HlqoYPR9G7w',
        spotifyId: '29B5sIbYPnSjJaD5CloPjf',
        deezerId: '653085',
        designers: ['Mike Doud', 'Mick Haggerty'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'supertramp_famous_last_words',
        title: '...Famous Last Words...',
        artist: 'Supertramp',
        year: 1982,
        country: regions.ENGLAND,
        cover: '.jpg',
        criteria: [criteria.SOFT, criteria.TOUCHING_VOCALS, criteria.ART_POP, criteria.SOFT_SEVENTIES, criteria.PIANO],
        selectedTrackTitle: 'Waiting So Long',
        selectedTrackYtId: null,
        spotifyId: '47QAK66loFDceMKTD4RJv1',
        deezerId: '72168592',
        designers: ['Mike Doud', 'Norman Moore'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'supertramp_brother_where_you_bound',
        title: 'Brother Where You Bound',
        artist: 'Supertramp',
        year: 1985,
        country: regions.ENGLAND,
        cover: '.jpg',
        criteria: [criteria.SOFT, criteria.TOUCHING_VOCALS, criteria.ART_POP, criteria.LENGTHY_TRACKS, criteria.TRANSITION, criteria.SOUND_COLLAGES],
        selectedTrackTitle: 'Brother Where You Bound',
        selectedTrackYtId: 'tWnepoNsi2I',
        spotifyId: '1KPGi1vxymWs9fInmwmc3d',
        deezerId: '72171382',
        designers: ['Norman Moore'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'surprise_assault_on_merryland',
        title: 'Assault On Merryland',
        artist: 'Surprise',
        year: 1977,
        country: regions.USA,
        cover: '.jpg',
        criteria: [criteria.STORYLINE, criteria.SYMPHONIC, criteria.C_ELECTRO, criteria.C_FOLK, criteria.FANTASY, criteria.GLITTER, criteria.HEAVY],
        selectedTrackTitle: 'The Acrobat Between The Stars',
        selectedTrackYtId: '9TBwXA_llX0',
        spotifyId: null,
        deezerId: null,
        designers: ['Phil Timper'],
        similarAlbums: [],
        isAGem: true,
        description: `TODO description`,
    },
    {
        id: 'the_surprise_package_free_up',
        title: 'Free Up',
        artist: 'The Surprise Package',
        year: 1968,
        country: regions.USA,
        cover: '.jpg',
        criteria: [criteria.LENGTHY_TRACKS, criteria.C_PSYCHE, criteria.JAM, criteria.CRISPY_SIXTIES],
        selectedTrackTitle: 'Free Up',
        selectedTrackYtId: 'ydSDjQlG5PI',
        spotifyId: '3s5YeRdnLltlcRAFuAe6rH',
        deezerId: '63044312',
        designers: [],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'sway_human_carnage',
        title: 'Human Carnage',
        artist: 'Sway',
        year: 1979,
        country: regions.BELGIUM,
        cover: '.jpg',
        criteria: [criteria.HUMBLE, criteria.TRANSITION, criteria.C_PSYCHE, criteria.FUNNY, criteria.C_FOLK],
        selectedTrackTitle: 'Why',
        selectedTrackYtId: 'veqv9LfOsj0',
        spotifyId: null,
        deezerId: null,
        designers: [],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'sweet_smoke_just_a_poke',
        title: 'Just A Poke',
        artist: 'Sweet Smoke',
        year: 1970,
        country: regions.USA,
        cover: '.jpg',
        criteria: [criteria.JAM, criteria.LENGTHY_TRACKS, criteria.SOFT, criteria.C_PSYCHE, criteria.C_JAZZ, criteria.JAZZY_GROOVY],
        selectedTrackTitle: 'Baby Night',
        selectedTrackYtId: 's6L8ZCAt3DA',
        spotifyId: null,
        deezerId: null,
        designers: ['Jan Fijnheer'],
        similarAlbums: [],
        isAGem: true,
        description: `Two big smooth tracks in the middle Jazz and Rock music, heavily influenced by psychedelism and groove, with hummed vocals. Both tracks are split into sections with rhythm variations and modality changes, but still perfectly flows from start to finish. The music is warm, rousing, captivating - when not completely mezmerizing.`
    },
    {
        id: 'sweet_smoke_darkness_to_light',
        title: 'Darkness To Light',
        artist: 'Sweet Smoke',
        year: 1973,
        country: regions.USA,
        cover: '.jpg',
        criteria: [criteria.LIVE, criteria.LENGTHY_TRACKS, criteria.ORIENTAL, criteria.SOUND_COLLAGES, criteria.C_PSYCHE, criteria.C_FOLK],
        selectedTrackTitle: null,
        selectedTrackYtId: null,
        spotifyId: null,
        deezerId: null,
        designers: ['Habo'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'sweet_smoke_live',
        title: 'Live',
        artist: 'Sweet Smoke',
        year: 1974,
        country: regions.USA,
        cover: '.jpg',
        criteria: [criteria.LENGTHY_TRACKS, criteria.SOFT, criteria.UNCOMMON_INSTRUMENTS, criteria.JAZZY_GROOVY, criteria.JAM],
        selectedTrackTitle: 'First Jam',
        selectedTrackYtId: 'tgPocHF2eMw',
        spotifyId: '4JhIdnuJ8nwNma8gUmRIGZ',
        deezerId: '310780',
        designers: ['Kochlowski'],
        similarAlbums: [],
        isAGem: true,
        description: `TODO description`,
    },
    {
        id: 'sweetwater_just_for_you',
        title: 'Just For You',
        artist: 'Sweetwater',
        year: 1970,
        country: regions.USA,
        cover: '.jpg',
        criteria: [criteria.SOFT, criteria.JAZZY_GROOVY, criteria.FOLK, criteria.FEMALE],
        selectedTrackTitle: 'Song Of Romeo',
        selectedTrackYtId: '_LXdlWNrItQ',
        spotifyId: '76AQ8HRZ2ANKMbH2Wpr5bb',
        deezerId: '82312',
        designers: ['Annette Del Zoppo'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'syd_barret_the_madcap_laughs',
        title: 'The Madcap Laughs',
        artist: 'Syd Barrett',
        year: 1970,
        country: regions.ENGLAND,
        cover: '.jpg',
        criteria: [criteria.C_PSYCHE, criteria.CRISPY_SIXTIES, criteria.C_FOLK],
        selectedTrackTitle: 'Long Gone',
        selectedTrackYtId: 'nwisdIr61e4',
        spotifyId: '69jyJl6Lyo80nQae0X312i',
        deezerId: '13082894',
        designers: ['Hipgnosis'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'syd_barret_barrett',
        title: 'Barrett',
        artist: 'Syd Barrett',
        year: 1970,
        country: regions.ENGLAND,
        cover: '.jpg',
        criteria: [criteria.C_PSYCHE, criteria.C_FOLK],
        selectedTrackTitle: 'Dominoes',
        selectedTrackYtId: '1tY1aNaIazA',
        spotifyId: '4NPymgNRX8nRAvHVW8yJra',
        deezerId: '7369648',
        designers: ['Syd Barrett'],
        similarAlbums: [],
        isAGem: false,
    },
]

export default albums