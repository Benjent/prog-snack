import regions from '../regions'
import { criteria } from '../criteria'

const albums = [
    {
        id: 'dada_jyo',
        title: 'Jyo',
        artist: 'Dada',
        year: 1978,
        country: regions.JAPAN,
        cover: '.jpg',
        criteria: [criteria.LENGTHY_TRACKS, criteria.C_ELECTRO, criteria.AMBIENT, criteria.SOFT, criteria.C_PSYCHE, criteria.EXPERIMENTAL],
        selectedTrackTitle: 'Yuuen • Inraku • Gaki',
        selectedTrackYtId: '5_CCgmvMULY',
        spotifyId: null,
        deezerId: null,
        designers: [],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'dan_ar_braz_douar_nevez',
        title: 'Douar Nevez',
        artist: 'Dan Ar Braz',
        year: 1977,
        country: regions.FRANCE,
        cover: '.jpg',
        criteria: [criteria.INSTRUMENTAL, criteria.CONCEPT, criteria.CELTIC, criteria.C_FOLK, criteria.UNCOMMON_INSTRUMENTS],
        selectedTrackTitle: 'Naissance De Dahud',
        selectedTrackYtId: 'uInAkh9DUBM',
        spotifyId: '1nWUYNamrAYzbAExTA9uim',
        deezerId: '87067192',
        designers: ['Patrick Marziale'],
        similarAlbums: [],
        isAGem: true,
        description: `TODO description`,
    },
    {
        id: 'dan_ar_braz_allez_dire_a_la_ville',
        title: 'Allez Dire À La Ville',
        artist: 'Dan Ar Braz',
        year: 1978,
        country: regions.FRANCE,
        cover: '.jpg',
        criteria: [criteria.FRENCH, criteria.SOFT_SEVENTIES, criteria.CELTIC, criteria.C_FOLK, criteria.UNCOMMON_INSTRUMENTS, criteria.ODD_RHYTHM],
        selectedTrackTitle: 'Les Oiseaux Et Les Électrons De Brennilis',
        selectedTrackYtId: 'WEQab-2sqVY',
        spotifyId: '7iwYjVY2AAdIOu4I0sc9aW',
        deezerId: '93173062',
        designers: ['Jacques Benoît'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'dan_ar_braz_the_earths_lament',
        title: `The Earth's Lament`,
        artist: 'Dan Ar Braz',
        year: 1979,
        country: regions.FRANCE,
        cover: '.jpg',
        criteria: [criteria.SOFT_SEVENTIES, criteria.CELTIC, criteria.C_FOLK, criteria.UNCOMMON_INSTRUMENTS, criteria.ODD_RHYTHM],
        selectedTrackTitle: 'To Rory',
        selectedTrackYtId: 'A8C2iGdtSrA',
        spotifyId: '1zOmTEG3ZwTZylAV1TOg4b',
        deezerId: '95282412',
        designers: ['Jacques Benoît', `Studio De L'air`],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'daniel_balavoine_de_vous_a_elle_en_passant_par_moi',
        title: 'De Vous À Elle En Passant Par Moi',
        artist: 'Daniel Balavoine',
        year: 1975,
        country: regions.FRANCE,
        cover: '.jpg',
        criteria: [criteria.FRENCH, criteria.ART_POP, criteria.BAROQUE],
        selectedTrackTitle: 'Évelyne Et Moi',
        selectedTrackYtId: 'QOkfLj_SGk0',
        spotifyId: '7r0d5MKpnf2EW2SfWpsYQF',
        deezerId: '12330290',
        designers: [],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'daniel_balavoine_les_aventures_de_simon_et_gunther',
        title: 'Les Aventures De Simon Et Gunther',
        artist: 'Daniel Balavoine',
        year: 1977,
        country: regions.FRANCE,
        cover: '.jpg',
        criteria: [criteria.FRENCH, criteria.ART_POP, criteria.C_ELECTRO, criteria.SOFT_SEVENTIES, criteria.CONCEPT, criteria.FANFARE, criteria.FEMALE, criteria.PIANO],
        selectedTrackTitle: 'La Réponse',
        selectedTrackYtId: 'NcPzaBlaqBk',
        spotifyId: '5vk2lBsLw7mUlVAMmVLisN',
        deezerId: '12330294',
        designers: ['Patrice Larue'],
        similarAlbums: ['queen_sheer_heart_attack'],
        isAGem: true,
		description: `TODO description`, // Un peu queen en cheap, ça fait penser à Bowie, un peu fanfare, piano based
    },
    {
        id: 'daniel_haas_and_yves_hasselmann_couleurs_du_temps',
        title: 'Couleurs Du Temps',
        artist: 'Daniel Haas & Yves Hasselmann',
        year: 1978,
        country: regions.FRANCE,
        cover: '.jpg',
        criteria: [criteria.INSTRUMENTAL, criteria.SOFT_SEVENTIES, criteria.INSTRUMENTAL, criteria.JAM, criteria.C_ELECTRO, criteria.C_FOLK],
        selectedTrackTitle: 'Quatre Heures',
        selectedTrackYtId: null,
        spotifyId: null,
        deezerId: null,
        designers: ['Henri Ledermann'],
        similarAlbums: ['fuhrs_and_frohling_ammerland'],
        isAGem: false,
    },
    {
        id: 'david_bowie_space_oddity',
        title: 'Space Oddity',
        artist: 'David Bowie',
        year: 1969,
        country: regions.ENGLAND,
        cover: '.jpg',
        criteria: [criteria.C_FOLK, criteria.ART_POP],
        selectedTrackTitle: 'Space Oddity',
        selectedTrackYtId: 'iYYRH4apXDo',
        spotifyId: '1ay9Z4R5ZYI2TY7WiDhNYQ',
        deezerId: '11204784',
        designers: ['Vernon Dewhurst'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'david_bowie_the_man_who_sold_the_world',
        title: 'The Man Who Sold The World',
        artist: 'David Bowie',
        year: 1970,
        country: regions.ENGLAND,
        cover: '.jpg',
        criteria: [criteria.C_FOLK, criteria.ART_POP],
        selectedTrackTitle: 'The Width Of A Circle',
        selectedTrackYtId: 's2L4hL2IvUk',
        spotifyId: '4h9rWFWhgCSSrvIEQ0YhYG',
        deezerId: '11205180',
        designers: ['Marcus Keef'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'david_bowie_hunky_dory',
        title: 'Hunky Dory',
        artist: 'David Bowie',
        year: 1971,
        country: regions.ENGLAND,
        cover: '.jpg',
        criteria: [criteria.ODD_RHYTHM, criteria.C_FOLK, criteria.ART_POP],
        selectedTrackTitle: 'Life On Mars?',
        selectedTrackYtId: 'v--IqqusnNQ',
        spotifyId: '6fQElzBNTiEMGdIeY0hy5l',
        deezerId: '11205658',
        designers: ['George Underwood', 'Terry Pastor'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'david_bowie_the_rise_and_fall_of_ziggy_stardust_and_the_spiders_from_mars',
        title: 'The Rise And Fall Of Ziggy Stardust And The Spiders From Mars',
        artist: 'David Bowie',
        year: 1972,
        country: regions.ENGLAND,
        cover: '.jpg',
        criteria: [criteria.CONCEPT, criteria.C_FOLK, criteria.ROCK_OPERA, criteria.ART_POP],
        selectedTrackTitle: 'Starman',
        selectedTrackYtId: 'EYQTGF1hXVI',
        spotifyId: '48D1hRORqJq52qsnUYZX56',
        deezerId: '11205422',
        designers: ['Terry Pastor'],
        similarAlbums: [],
        isAGem: false,
    },
    // TODO aladin sane
    // rock, c_psyche, greasy seventies
    // track is Lady Grinning Soul
    {
        id: 'david_cross_memos_from_purgatory',
        title: 'Memos From Purgatory ',
        artist: 'David Cross',
        year: 1989,
        country: regions.ENGLAND,
        cover: '.jpg',
        criteria: [criteria.NEO_EIGHTIES, criteria.INSTRUMENTAL, criteria.C_ELECTRO, criteria.C_JAZZ, criteria.UNCOMMON_INSTRUMENTS],
        selectedTrackTitle: 'The First Policeman',
        selectedTrackYtId: null,
        spotifyId: null,
        deezerId: null,
        designers: [],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'deep_purple_shades_of_deep_purple',
        title: 'Shades Of Deep Purple',
        artist: 'Deep Purple',
        year: 1968,
        country: regions.ENGLAND,
        cover: '.jpg',
        criteria: [criteria.JAM, criteria.C_PSYCHE, criteria.C_ELECTRO, criteria.CRISPY_SIXTIES],
        selectedTrackTitle: 'Hush',
        selectedTrackYtId: 'W1PNvopXjbg',
        spotifyId: '3VV3uHT9dEGPbgQJQRMAEy',
        deezerId: '300221',
        designers: ['Les Weisbrich'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'deep_purple_the_book_of_taliesyn',
        title: 'The Book Of Taliesyn',
        artist: 'Deep Purple',
        year: 1968,
        country: regions.ENGLAND,
        cover: '.jpg',
        criteria: [criteria.JAM, criteria.C_PSYCHE, criteria.C_ELECTRO, criteria.CRISPY_SIXTIES],
        selectedTrackTitle: 'Listen, Learn, Read On',
        selectedTrackYtId: 'uYZaXo4jOu0',
        spotifyId: '4pFFGEuoEmxtOTbp22tva9',
        deezerId: '326086',
        designers: ['John Vernon Lord'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'deep_purple_deep_purple',
        title: 'Deep Purple',
        artist: 'Deep Purple',
        year: 1969,
        country: regions.ENGLAND,
        cover: '.jpg',
        criteria: [criteria.JAM, criteria.C_PSYCHE, criteria.C_ELECTRO, criteria.CRISPY_SIXTIES],
        selectedTrackTitle: 'April',
        selectedTrackYtId: '2eRTQnSzoUI',
        spotifyId: '4vjBkjJeJByK2swq4DnuPc',
        deezerId: null,
        designers: ['Hieronymus Bosch'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'deep_purple_in_rock',
        title: 'In Rock',
        artist: 'Deep Purple',
        year: 1970,
        country: regions.ENGLAND,
        cover: '.jpg',
        criteria: [criteria.JAM, criteria.ROCK, criteria.HEAVY, criteria.GREASY_SEVENTIES],
        selectedTrackTitle: 'Child In Time',
        selectedTrackYtId: 'PfAWReBmxEs',
        spotifyId: '3llL1qaL2RvtyQAthAuRFS',
        deezerId: '308821',
        designers: ['Nesbit, Phipps & Froome', 'Edwards Coletta Productions'],
        similarAlbums: ['uriah_heep_very_eavy_very_umble'],
        isAGem: false,
    },
    {
        id: 'deep_purple_fireball',
        title: 'Fireball',
        artist: 'Deep Purple',
        year: 1971,
        country: regions.ENGLAND,
        cover: '.jpg',
        criteria: [criteria.JAM, criteria.ROCK, criteria.HEAVY],
        selectedTrackTitle: 'Fools',
        selectedTrackYtId: 'Se8srYEdi2I',
        spotifyId: '3oitf8NRK5tSDhCRVcOewu',
        deezerId: '302174',
        designers: [],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'deep_purple_machine_head',
        title: 'Machine Head',
        artist: 'Deep Purple',
        year: 1972,
        country: regions.ENGLAND,
        cover: '.jpg',
        criteria: [criteria.ODD_RHYTHM, criteria.JAM, criteria.ROCK, criteria.HEAVY],
        selectedTrackTitle: 'Lazy',
        selectedTrackYtId: 'STFWapwyqMo',
        spotifyId: '32NQ56VZDTXSH3SMv4XSGN',
        deezerId: '302224',
        designers: ['Roger Glover', 'John Coletta'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'deep_purple_who_do_we_think_we_are',
        title: 'Who Do We Think We Are',
        artist: 'Deep Purple',
        year: 1973,
        country: regions.ENGLAND,
        cover: '.jpg',
        criteria: [criteria.ROCK, criteria.HEAVY, criteria.JAZZY_GROOVY, criteria.JAM],
        selectedTrackTitle: 'Rat Bat Blue',
        selectedTrackYtId: '6poRsrl_574',
        spotifyId: '1RQWFGjiaPfoxuOt2YaVqA',
        deezerId: '326085',
        designers: ['Roger Glover', 'John Coletta'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'deep_purple_burn',
        title: 'Burn',
        artist: 'Deep Purple',
        year: 1974,
        country: regions.ENGLAND,
        cover: '.jpg',
        criteria: [criteria.ROCK, criteria.HEAVY, criteria.JAZZY_GROOVY, criteria.JAM],
        selectedTrackTitle: 'A 200',
        selectedTrackYtId: 'pdNbBL4PnU4',
        spotifyId: '3wR7UC2ij2dx0TbtiMP4J9',
        deezerId: '300356',
        designers: ['Nesbit, Phipps & Froome'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'deep_purple_stormbringer',
        title: 'Stormbringer',
        artist: 'Deep Purple',
        year: 1974,
        country: regions.ENGLAND,
        cover: '.jpg',
        criteria: [criteria.ROCK, criteria.HEAVY, criteria.JAZZY_GROOVY, criteria.JAM],
        selectedTrackTitle: 'Stormbringer',
        selectedTrackYtId: '4C2K889u_90',
        spotifyId: '5v7E58jgi8CGlLlVtuxwVg',
        deezerId: '302642',
        designers: ['Joe Garnett'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'deep_purple_come_taste_the_band',
        title: 'Who Do We Think We Are',
        artist: 'Deep Purple',
        year: 1975,
        country: regions.ENGLAND,
        cover: '.jpg',
        criteria: [criteria.ROCK, criteria.HEAVY, criteria.JAZZY_GROOVY, criteria.JAM],
        selectedTrackTitle: `This Time Around / Owed To 'G'`,
        selectedTrackYtId: 'WLt0x7vgcac',
        spotifyId: '6cShl77TjfWE5uC2Qv7ryb',
        deezerId: '364613',
        designers: ['Castle, Chappell & Partners Limited', 'Peter Williams'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'delired_cameleon_family_delired_cameleon_family',
        title: 'Delired Cameleon Family',
        artist: 'Delired Cameleon Family',
        year: 1975,
        country: regions.FRANCE,
        cover: '.jpg',
        criteria: [criteria.C_PSYCHE, criteria.ORIENTAL, criteria.C_ELECTRO, criteria.UNCOMMON_INSTRUMENTS, criteria.INSTRUMENTAL, criteria.FRENCH, criteria.JAZZY_GROOVY, criteria.SPACY, criteria.FEMALE],
        selectedTrackTitle: 'Le Bœuf',
        selectedTrackYtId: 'rogJ03cSDIk',
        spotifyId: '1gqEFwNPsA63LgXVh5xRxI',
        deezerId: '1359284',
        designers: ['Jean-Claude Michel'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'delirium_dolce_acqua',
        title: 'Dolce Acqua',
        artist: 'Delirium',
        year: 1971,
        country: regions.ITALY,
        cover: '.jpg',
        criteria: [criteria.ITALIAN, criteria.TRANSITION, criteria.C_FOLK, criteria.C_JAZZ, criteria.HUMBLE, criteria.CONCEPT],
        selectedTrackTitle: 'Sequenza I & II: Ipocrisia-Verità',
        selectedTrackYtId: 'R-cDHhWRnLg',
        spotifyId: '2BqI2sjI4asmt5DZDBponl',
        deezerId: '84120',
        designers: ['Gigi'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'delirium_lo_scemo_e_il_villaggio',
        title: 'Lo Scemo E Il Villaggio',
        artist: 'Delirium',
        year: 1972,
        country: regions.ITALY,
        cover: '.jpg',
        criteria: [criteria.ITALIAN, criteria.TRANSITION, criteria.C_FOLK, criteria.C_JAZZ, criteria.HUMBLE, criteria.UNCOMMON_INSTRUMENTS, criteria.SOFT, criteria.JAZZY_GROOVY],
        selectedTrackTitle: 'Gioia, Disordine, Risentimento',
        selectedTrackYtId: 'TmgyMtYGT8E',
        spotifyId: '1SQuIS0FpXuFoNvtLaWSgL',
        deezerId: '84695',
        designers: ['Alberto Longoni'],
        similarAlbums: [],
        isAGem: true,
        description: `TODO description`,
    },
    {
        id: 'delirium_viaggio_negli_arcipelaghi_del_tempo',
        title: 'Viaggio Negli Arcipelaghi Del Tempo',
        artist: 'Delirium',
        year: 1974,
        country: regions.ITALY,
        cover: '.jpg',
        criteria: [criteria.ITALIAN, criteria.ODD_RHYTHM, criteria.ORCHESTRAL_PARTS, criteria.ORCHESTRAL_PARTS, criteria.JAM, criteria.C_FOLK],
        selectedTrackTitle: null,
        selectedTrackYtId: null,
        spotifyId: null,
        deezerId: null,
        designers: [],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'didier_bonin_larbre_verre',
        title: `L'arbre Verre`,
        artist: 'Didier Bonin',
        year: 1979,
        country: regions.FRANCE,
        cover: '.jpg',
        criteria: [criteria.SYMPHONIC, criteria.C_FOLK, criteria.C_ELECTRO, criteria.LENGTHY_TRACKS, criteria.SOFT, criteria.AMBIENT, criteria.INSTRUMENTAL],
        selectedTrackTitle: `L'arbre Verre (Part I)`,
        selectedTrackYtId: 'KJqwcDU4ebA',
        spotifyId: null,
        deezerId: null,
        designers: ['Patrick Grillot'],
        similarAlbums: [],
        isAGem: true,
        description: `An instrumental album with two long tracks entirely made with acoustic guitars, clean electric guitars, percussions and mellow synthesizers. Didier Bonin alone plays with light acoustic melodies, tender sounds and slow tempos throughout most of the album, while some parts speed up the tempo with groovier - but still mellow - rhythms.`
    },
    {
        id: 'dire_straits_love_over_gold',
        title: 'Love Over Gold',
        artist: 'Dire Straits',
        year: 1982,
        country: regions.ENGLAND,
        cover: '.jpg',
        criteria: [criteria.SYMPHONIC, criteria.LENGTHY_TRACKS, criteria.SOFT, criteria.ROCK, criteria.JAM, criteria.SOFT_SEVENTIES],
        selectedTrackTitle: 'Telegraph Road',
        selectedTrackYtId: '_4E_924b9SU',
        spotifyId: '3Iz3o8owPasr8PKUSZPqD5',
        deezerId: '239317',
        designers: ['Michae Rowe'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'dixie_dregs_the_great_spectacular',
        title: 'The Great Spectacular',
        artist: 'Dixie Dregs',
        year: 1976,
        country: regions.USA,
        cover: '.jpg',
        criteria: [criteria.JAM, criteria.JAZZY_GROOVY, criteria.C_FOLK, criteria.C_JAZZ, criteria.INSTRUMENTAL],
        selectedTrackTitle: 'T.O. Witcher',
        selectedTrackYtId: '2f5WYEtPaSk',
        spotifyId: null,
        deezerId: null,
        designers: [],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'dixie_dregs_free_fall',
        title: 'Free Fall',
        artist: 'Dixie Dregs',
        year: 1977,
        country: regions.USA,
        cover: '.jpg',
        criteria: [criteria.JAM, criteria.JAZZY_GROOVY, criteria.C_FOLK, criteria.C_JAZZ, criteria.INSTRUMENTAL],
        selectedTrackTitle: 'Cruise Control',
        selectedTrackYtId: 'fD9j0VfX7QU',
        spotifyId: '6WtQ7NpP9nZV7cBybTiL4c',
        deezerId: null,
        designers: ['John Kehe'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'dixie_dregs_what_if',
        title: 'What If',
        artist: 'Dixie Dregs',
        year: 1978,
        country: regions.USA,
        cover: '.jpg',
        criteria: [criteria.JAM, criteria.JAZZY_GROOVY, criteria.C_FOLK, criteria.C_JAZZ, criteria.INSTRUMENTAL],
        selectedTrackTitle: 'Odyssey',
        selectedTrackYtId: 'QGxKUXxxu4o',
        spotifyId: '0atxEFs8IDbVyULoh7ZSO5',
        deezerId: null,
        designers: ['Earl Klasky'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'dixie_dregs_night_of_the_living_dregs',
        title: 'Night Of The Living Dregs',
        artist: 'Dixie Dregs',
        year: 1979,
        country: regions.USA,
        cover: '.jpg',
        criteria: [criteria.JAM, criteria.JAZZY_GROOVY, criteria.C_FOLK, criteria.C_JAZZ, criteria.INSTRUMENTAL],
        selectedTrackTitle: 'Long Slow Distance',
        selectedTrackYtId: 'Z00EnPmQ6Gs',
        spotifyId: '0W7QN7tY0I4g1FqnqD85S5',
        deezerId: null,
        designers: ['John Kehe', 'Janie Geiser'],
        similarAlbums: ['aurora_aurora'],
        isAGem: false,
    },
    {
        id: 'dixie_dregs_dregs_of_the_earth',
        title: 'Dregs Of The Earth',
        artist: 'Dixie Dregs',
        year: 1980,
        country: regions.USA,
        cover: '.jpg',
        criteria: [criteria.JAM, criteria.JAZZY_GROOVY, criteria.C_FOLK, criteria.C_JAZZ, criteria.INSTRUMENTAL, criteria.ODD_RHYTHM],
        selectedTrackTitle: 'Hereafter',
        selectedTrackYtId: 'AGm4URovuyA',
        spotifyId: '4hAbKjSBpLISpz4Ikt1cj2',
        deezerId: '730021',
        designers: ['Heather Harris', 'Terry Taylor'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'dixie_dregs_unsung_heroes',
        title: 'Unsung Heroes',
        artist: 'Dixie Dregs',
        year: 1981,
        country: regions.USA,
        cover: '.jpg',
        criteria: [criteria.JAM, criteria.JAZZY_GROOVY, criteria.C_FOLK, criteria.C_JAZZ, criteria.INSTRUMENTAL, criteria.ODD_RHYTHM],
        selectedTrackTitle: 'Divivded We Stand',
        selectedTrackYtId: 'R0xTQdHZxQg',
        spotifyId: '6QpuasuxcyZRJyilH9NNts',
        deezerId: null,
        designers: ['James Flournoy Holmes', 'Wonder Graphics'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'dixie_dregs_industry_standards',
        title: 'Industry Standards',
        artist: 'Dixie Dregs',
        year: 1982,
        country: regions.USA,
        cover: '.jpg',
        criteria: [criteria.JAM, criteria.JAZZY_GROOVY, criteria.ROCK, criteria.C_FOLK, criteria.C_JAZZ, criteria.INSTRUMENTAL],
        selectedTrackTitle: 'Vitamin Q',
        selectedTrackYtId: 'ya6rxcp2mFE',
        spotifyId: '46tkcegUrEPfU1Nl0ElZDC',
        deezerId: null,
        designers: ['Daved Levitan'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'dog_soldier_dog_soldier',
        title: `Dog Soldier`,
        artist: 'Dog Soldier',
        year: 1975,
        country: regions.USA,
        cover: '.jpg',
        criteria: [criteria.ROCK, criteria.JAM, criteria.SOFT],
        selectedTrackTitle: 'Long & Lonely Night',
        selectedTrackYtId: 'lTuaE8BrqdM',
        spotifyId: '3eucO0Chn6Rc3HyNtrICCy',
        deezerId: null,
        designers: ['Rick Breach', 'Keef Hartley'],
        similarAlbums: ['paice_ashton_and_lord_malice_in_wonderland'],
        isAGem: false,
    },
    {
        id: 'dominique_guiot_lunivers_de_la_mer',
        title: `L'univers De La Mer`,
        artist: 'Dominique Guiot',
        year: 1978,
        country: regions.FRANCE,
        cover: '.jpg',
        criteria: [criteria.CONCEPT, criteria.INSTRUMENTAL, criteria.SOFT, criteria.C_FOLK, criteria.PATCHWORK, criteria.ELECTRO],
        selectedTrackTitle: 'Les Deux Poissons',
        selectedTrackYtId: 'gOwuBTGwrco',
        spotifyId: null,
        deezerId: '84676702',
        designers: ['Jacques Wyrss'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'dominique_guiot_la_dame_a_la_licorne',
        title: 'La Dame À La Licorne',
        artist: 'Dominique Guiot',
        year: 1983,
        country: regions.FRANCE,
        cover: '.jpg',
        criteria: [criteria.CONCEPT, criteria.INSTRUMENTAL, criteria.SOFT, criteria.UNCOMMON_INSTRUMENTS, criteria.MEDIEVAL, criteria.PATCHWORK, criteria.FOLK],
        selectedTrackTitle: 'La Dame À La Licorne',
        selectedTrackYtId: 'O5s_o1Pc6bA',
        spotifyId: null,
        deezerId: null,
        designers: [],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'the_doors_the_doors',
        title: 'The Doors',
        artist: 'The Doors',
        year: 1967,
        country: regions.USA,
        cover: '.jpg',
        criteria: [criteria.C_JAZZ, criteria.JAZZY_GROOVY, criteria.ART_POP],
        selectedTrackTitle: 'The End',
        selectedTrackYtId: 'JSUIQgEVDM4',
        spotifyId: '1jWmEhn3ggaL6isoyLfwBn',
        deezerId: '340878',
        designers: ['William S. Harvey', 'Guy Webster'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'the_doors_strange_days',
        title: 'Strange Days',
        artist: 'The Doors',
        year: 1967,
        country: regions.USA,
        cover: '.jpg',
        criteria: [criteria.C_PSYCHE, criteria.C_JAZZ, criteria.JAZZY_GROOVY, criteria.ART_POP],
        selectedTrackTitle: `When The Music's Over`,
        selectedTrackYtId: 'YkKRU1ajKFA',
        spotifyId: '6v5IVMmY1IvWtbfnQoiFSf',
        deezerId: '340880',
        designers: ['William S. Harvey', 'Joel Brodsky'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'the_doors_waiting_for_the_sun',
        title: 'Waiting For The Sun',
        artist: 'The Doors',
        year: 1968,
        country: regions.USA,
        cover: '.jpg',
        criteria: [criteria.C_JAZZ, criteria.JAZZY_GROOVY, criteria.ART_POP],
        selectedTrackTitle: 'Yes, The River Knows',
        selectedTrackYtId: 'v6boHOX8r60',
        spotifyId: '0qZTwrunzX3LG45PvRghmh',
        deezerId: '381016',
        designers: ['William S. Harvey', 'Paul Farrara'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'the_doors_the_soft_parade',
        title: 'The Soft Parade',
        artist: 'The Doors',
        year: 1969,
        country: regions.USA,
        cover: '.jpg',
        criteria: [criteria.C_JAZZ, criteria.JAZZY_GROOVY, criteria.ART_POP],
        selectedTrackTitle: 'The Soft Parade',
        selectedTrackYtId: '8p-AUo1w45w',
        spotifyId: '75bLu4Ung5QbMdJYxx7wTI',
        deezerId: '340879',
        designers: ['William S. Harvey'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'dr_dopo_jam_entree',
        title: 'Entrée',
        artist: 'Dr. Dopo Jam',
        year: 1973,
        country: regions.DENMARK,
        cover: '.jpg',
        criteria: [criteria.ODD_RHYTHM, criteria.JAM, criteria.LENGTHY_TRACKS, criteria.UNCOMMON_INSTRUMENTS, criteria.C_PSYCHE, criteria.C_JAZZ, criteria.FUNNY, criteria.JAZZY_GROOVY],
        selectedTrackTitle: 'Opening',
        selectedTrackYtId: 'ymeBpnDr4Lw',
        spotifyId: null,
        deezerId: null,
        designers: [],
        similarAlbums: ['coma_financial_tycoon'],
        isAGem: true,
        description: `TODO description`,
    },
    {
        id: 'dr_dopo_jam_fat_dogs_and_danishmen',
        title: 'Fat Dogs & Danishmen',
        artist: 'Dr. Dopo Jam',
        year: 1974,
        country: regions.DENMARK,
        cover: '.jpg',
        criteria: [criteria.ODD_RHYTHM, criteria.JAM, criteria.UNCOMMON_INSTRUMENTS, criteria.C_PSYCHE, criteria.C_JAZZ, criteria.FUNNY, criteria.JAZZY_GROOVY],
        selectedTrackTitle: 'Nova Bossa Nova',
        selectedTrackYtId: 'wkViMhydlkc',
        spotifyId: null,
        deezerId: null,
        designers: [],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'dragonfly_dragonfly',
        title: 'Dragonfly',
        artist: 'Dragonfly',
        year: 1981,
        country: regions.SWITZERLAND,
        cover: '.jpg',
        criteria: [criteria.ODD_RHYTHM, criteria.SYMPHONIC, criteria.C_ELECTRO, criteria.NEO_EIGHTIES, criteria.JAM, criteria.LENGTHY_TRACKS, criteria.GLITTER],
        selectedTrackTitle: 'Dragonfly',
        selectedTrackYtId: '4iOTX-g3khQ',
        spotifyId: null,
        deezerId: '466860',
        designers: ['Georg Kozak'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'dream_theater_when_dream_and_day_unite',
        title: 'When Dream And Day Unite',
        artist: 'Dream Theater',
        year: 1988,
        country: regions.USA,
        cover: '.jpg',
        criteria: [criteria.HEAVY, criteria.ODD_RHYTHM, criteria.TECHNICAL, criteria.NEO_EIGHTIES],
        selectedTrackTitle: 'The Ytse Jam',
        selectedTrackYtId: 'T5OmzUEm504',
        spotifyId: null,
        deezerId: '126238',
        designers: [],
        similarAlbums: ['queensryche_operation_mindcrime'],
        isAGem: false,
    },
    {
        id: 'dun_eros',
        title: 'Eros',
        artist: 'Dün',
        year: 1981,
        country: regions.FRANCE,
        cover: '.jpg',
        criteria: [criteria.INSTRUMENTAL, criteria.SYMPHONIC, criteria.SOPHISTICATED, criteria.C_JAZZ, criteria.UNCOMMON_INSTRUMENTS, criteria.ODD_RHYTHM, criteria.C_PSYCHE],
        selectedTrackTitle: `L'épice`,
        selectedTrackYtId: 'JBuV6kNVryQ',
        spotifyId: '1hN5JK7ET6vw4gQR5fnmj7',
        deezerId: '59636732',
        designers: ['Images Inées'],
        similarAlbums: [],
        isAGem: true,
        description: `A Zeuhl record that plays head games music. While beeing technical and sofisticated, it could easily be the soundtrack of a deranged cartoon, due to Alain Termolles's percussions and Pascal Vandenbulcke's flute.`,
    },
]

export default albums