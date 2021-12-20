import regions from '../regions'
import { criteria } from '../criteria'

const albums = [
    {
        id: 'omega_plus_how_to_kiss_the_sky',
        title: `How To Kiss The Sky`,
        artist: 'Omega Plus',
        year: 1969,
        country: regions.FRANCE,
        cover: '.jpg',
        criteria: [criteria.LENGTHY_TRACKS, criteria.C_FOLK,  criteria.UNCOMMON_INSTRUMENTS, criteria.C_PSYCHE, criteria.SOUND_COLLAGES, criteria.FRENCH],
        selectedTrackTitle: 'Voyelles',
        selectedTrackYtId: 'sOeTHmEpy1Y',
        spotifyId: null,
        deezerId: null,
        designers: ['Allen Weinberg'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'oniris_lhomme_voilier',
        title: `L'homme-Voilier`,
        artist: 'Oniris',
        year: 1979,
        country: regions.FRANCE,
        cover: '.jpg',
        criteria: [criteria.FRENCH, criteria.LENGTHY_TRACKS, criteria.SYMPHONIC, criteria.C_PSYCHE, criteria.C_ELECTRO, criteria.CONCEPT, criteria.ROCK_OPERA],
        selectedTrackTitle: 'Schizologues',
        selectedTrackYtId: null,
        spotifyId: null,
        deezerId: null,
        designers: ['Alain Ranou'],
        similarAlbums: ['arachnoid_arachnoid'],
        isAGem: false,
    },
    // TODO Ophiucus - Ophiucus - FRANCE
    // french, c_psyche, folkbased, soft
    // track Univers
    // TODO Ophiucus - Salade Chinoise - FRANCE
    // french, c_psyche, folkbased, soft
    // track
    {
        id: 'orang_utan_orang_utan',
        title: 'Orang-Utan',
        artist: 'Orang-Utan',
        year: 1971,
        country: regions.ENGLAND,
        cover: '.jpg',
        criteria: [criteria.ROCK, criteria.GREASY_SEVENTIES, criteria.HEAVY, criteria.JAM],
        selectedTrackTitle: 'Magic Playground',
        selectedTrackYtId: 'qAWn1LgR10A',
        spotifyId: '5SarMMiACCzyMRyyQXMaRK',
        deezerId: null,
        designers: ['Brian Engel'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'orange_peel_orange_peel',
        title: 'Orange Peel',
        artist: 'Orange Peel',
        year: 1970,
        country: regions.GERMANY,
        cover: '.jpg',
        criteria: [criteria.SYMPHONIC, criteria.LENGTHY_TRACKS, criteria.JAM, criteria.UNCOMMON_INSTRUMENTS, criteria.HEAVY],
        selectedTrackTitle: 'We Still Try To Change',
        selectedTrackYtId: 'f6aiiSqnl3g',
        spotifyId: '2BenDzqCcllCc7OsaTCEwI',
        deezerId: '80077272',
        designers: ['Helmut Wenske'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'oratorium_oratorium',
        title: 'Oratorium',
        artist: 'Oratorium',
        year: 1972,
        country: regions.GERMANY,
        cover: '.jpg',
        criteria: [criteria.GERMAN, criteria.SPIRITUAL, criteria.HUMBLE],
        selectedTrackTitle: 'Du Bist Die Antwort',
        selectedTrackYtId: '3AAu3wnSNUY',
        spotifyId: '6XoQaGbSyVqvBGvEbkFAtU',
        deezerId: '15586338',
        designers: [],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'l_orchestre_sympathique_en_concert_a_la_grande_passe',
        title: 'En Concert À La Grande Passe',
        artist: `L'orchestre Sympathique`,
        year: 1979,
        country: regions.QUEBEC,
        cover: '.jpg',
        criteria: [criteria.LIVE, criteria.C_JAZZ, criteria.UNCOMMON_INSTRUMENTS, criteria.INSTRUMENTAL, criteria.C_PSYCHE, criteria.LENGTHY_TRACKS],
        selectedTrackTitle: 'Citronnade',
        selectedTrackYtId: 'LfJWAh-3ByQ',
        spotifyId: '38fC9n44WrOmIObr2BfZFT',
        deezerId: null,
        designers: [],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'le_orme_ad_gloriam',
        title: 'Ad Gloriam',
        artist: 'Le Orme',
        year: 1969,
        country: regions.ITALY,
        cover: '.jpg',
        criteria: [criteria.ITALIAN, criteria.ROCK, criteria.C_FOLK, criteria.BAROQUE, criteria.HUMBLE, criteria.CRISPY_SIXTIES],
        selectedTrackTitle: 'Non So Restare Solo',
        selectedTrackYtId: 'kkkA4cUKW5Y',
        spotifyId: '3sUdiFdMAtDwRU7j7CcXJD',
        deezerId: '138599',
        designers: ['Giancarlo Boschin', 'Luciano Tallarini'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'le_orme_collage',
        title: 'Collage',
        artist: 'Le Orme',
        year: 1971,
        country: regions.ITALY,
        cover: '.jpg',
        criteria: [criteria.ITALIAN, criteria.BAROQUE, criteria.SYMPHONIC],
        selectedTrackTitle: 'Sguardo Verso Il Cielo',
        selectedTrackYtId: 'MT2hvotzoDA',
        spotifyId: '6IQ7wLfNi5D9esSFJaDzHU',
        deezerId: '223484',
        designers: ['Mario Convertino'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'le_orme_uomo_di_pezza',
        title: 'Uomo Di Pezza',
        artist: 'Le Orme',
        year: 1972,
        country: regions.ITALY,
        cover: '.jpg',
        criteria: [criteria.ITALIAN, criteria.SYMPHONIC, criteria.CONCEPT, criteria.ODD_RHYTHM, criteria.HUMBLE],
        selectedTrackTitle: 'Figure Di Cartone',
        selectedTrackYtId: 'ZFWb77PG5mA',
        spotifyId: '6NiJ8vCXUZoeqUIyhUDNZX',
        deezerId: '248539',
        designers: ['Mario Convertino', 'Walter Mac Mazzieri'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'le_orme_felona_e_sorona',
        title: 'Felona E Sorona',
        artist: 'Le Orme',
        year: 1973,
        country: regions.ITALY,
        cover: '.jpg',
        criteria: [criteria.ITALIAN, criteria.SYMPHONIC, criteria.CONCEPT, criteria.HUMBLE, criteria.C_FOLK, criteria.ELECTRO],
        selectedTrackTitle: 'Attesa Inerte',
        selectedTrackYtId: '6vwjxRxDic0',
        spotifyId: '5B13S4DiDesawhG0eUTK9B',
        deezerId: '9038083',
        designers: ['Mario Convertino'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'le_orme_contrappunti',
        title: 'Contrappunti',
        artist: 'Le Orme',
        year: 1974,
        country: regions.ITALY,
        cover: '.jpg',
        criteria: [criteria.ITALIAN, criteria.SYMPHONIC, criteria.ELECTRO, criteria.ODD_RHYTHM, criteria.C_FOLK, criteria.C_PSYCHE, criteria.CONCEPT],
        selectedTrackTitle: 'Maggio',
        selectedTrackYtId: '545vO52c6L4',
        spotifyId: '5z7CzpuMKLitcaImOHLlse',
        deezerId: '223748',
        designers: ['Paolo Patelli'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'le_orme_smogmagica',
        title: 'Smogmagica',
        artist: 'Le Orme',
        year: 1975,
        country: regions.ITALY,
        cover: '.jpg',
        criteria: [criteria.ITALIAN, criteria.ROCK, criteria.SOFT],
        selectedTrackTitle: 'Los Angeles',
        selectedTrackYtId: 'qJbcammNuxk',
        spotifyId: '7vDdyzWZYngIZY2vV3yZ3A',
        deezerId: '245511',
        designers: ['Paul Whitehead'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'le_orme_verita_nascoste',
        title: 'Verità Nascoste',
        artist: 'Le Orme',
        year: 1976,
        country: regions.ITALY,
        cover: '.jpg',
        criteria: [criteria.ITALIAN, criteria.BAROQUE, criteria.C_ELECTRO],
        selectedTrackTitle: 'I Salmoni',
        selectedTrackYtId: 'tNJMjTrsJo4',
        spotifyId: '7fy1FcHHNysfY7wRSp2vIi',
        deezerId: '249206',
        designers: ['Mario Convertino'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'le_orme_storia_o_leggenda',
        title: 'Storia O Leggenda',
        artist: 'Le Orme',
        year: 1977,
        country: regions.ITALY,
        cover: '.jpg',
        criteria: [criteria.ITALIAN, criteria.ODD_RHYTHM, criteria.SYMPHONIC, criteria.C_ELECTRO],
        selectedTrackTitle: 'Il Musicista',
        selectedTrackYtId: 'RxRLGvy5100',
        spotifyId: '07u1l1ZqhTJP4Lla3IWTsg',
        deezerId: '246023',
        designers: ['Mario Convertino', 'Walter Mac Mazzieri'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'le_orme_florian',
        title: 'Florian',
        artist: 'Le Orme',
        year: 1979,
        country: regions.ITALY,
        cover: '.jpg',
        criteria: [criteria.ITALIAN, criteria.C_JAZZ, criteria.UNCOMMON_INSTRUMENTS, criteria.SYMPHONIC, criteria.SOPHISTICATED, criteria.BAROQUE, criteria.ODD_RHYTHM, criteria.C_FOLK],
        selectedTrackTitle: 'El Gran Senser',
        selectedTrackYtId: 'CJnQhh9mDKk',
        spotifyId: '6WcVcaQBtTXxZ1jhsTnLWy',
        deezerId: '228009',
        designers: ['Mario Convertino', 'Mirella Brugnerotto'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'le_orme_piccola_rapsodia_dellape',
        title: `Piccola Rapsodia Dell'ape`,
        artist: 'Le Orme',
        year: 1980,
        country: regions.ITALY,
        cover: '.jpg',
        criteria: [criteria.ITALIAN, criteria.SOFT, criteria.C_FOLK, criteria.BAROQUE],
        selectedTrackTitle: 'La Mia Sposa Bianca',
        selectedTrackYtId: 'CLjVS9qaBFU',
        spotifyId: '0Ovf12VCmKdUDMeFZujUSN',
        deezerId: null,
        designers: ['Mario Convertino'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'osanna_luomo',
        title: `L'uomo`,
        artist: 'Osanna',
        year: 1971,
        country: regions.ITALY,
        cover: '.jpg',
        criteria: [criteria.ITALIAN, criteria.C_PSYCHE, criteria.UNCOMMON_INSTRUMENTS, criteria.TRANSITION, criteria.C_FOLK],
        selectedTrackTitle: 'Introduzione',
        selectedTrackYtId: 'eJXDdB2OtN4',
        spotifyId: '16313KM4Xthj3frUq8ao1h',
        deezerId: '89946',
        designers: ['Lari'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'osanna_milano_calibro_9',
        title: `Milano Calibro 9`,
        artist: 'Osanna',
        year: 1972,
        country: regions.ITALY,
        cover: '.jpg',
        criteria: [criteria.INSTRUMENTAL, criteria.ORCHESTRAL_PARTS, criteria.BAROQUE, criteria.SYMPHONIC, criteria.C_ELECTRO, criteria.C_PSYCHE, criteria.PATCHWORK, criteria.UNCOMMON_INSTRUMENTS, criteria.ODD_RHYTHM],
        selectedTrackTitle: 'Variazione II',
        selectedTrackYtId: 'Bn2vqbHmhj0',
        spotifyId: null,
        deezerId: null,
        designers: ['Gian Carlo Greguoli'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'osanna_palepoli',
        title: `Palepoli`,
        artist: 'Osanna',
        year: 1973,
        country: regions.ITALY,
        cover: '.jpg',
        criteria: [criteria.SOUND_COLLAGES, criteria.LENGTHY_TRACKS, criteria.ITALIAN, criteria.C_PSYCHE, criteria.ODD_RHYTHM, criteria.SYMPHONIC],
        selectedTrackTitle: 'Animale Senza Respiro',
        selectedTrackYtId: '1fL_k0mAzfI',
        spotifyId: '2uD05USBtLChvv33269hoE',
        deezerId: '90325',
        designers: ['Carlo De Simone', 'Laura Mancini'],
        similarAlbums: [],
        isAGem: false, // TODO potentiellement une gem
    },
    {
        id: 'osanna_landscape_of_life',
        title: `Landscape Of Life`,
        artist: 'Osanna',
        year: 1974,
        country: regions.ITALY,
        cover: '.jpg',
        criteria: [criteria.ODD_RHYTHM, criteria.C_JAZZ, criteria.TOUCHING_VOCALS, criteria.ITALIAN],
        selectedTrackTitle: `Il Castello Dell'es`,
        selectedTrackYtId: null,
        spotifyId: '4FtB6FJedwo5kWNu4fDvvF',
        deezerId: null,
        designers: ['Massimo Guarino', 'Lino Vairetti'],
        similarAlbums: [], // TODO un yes un peu
        isAGem: false, // TODO potentiellement une gem aussi
    },
    {
        id: 'osanna_suddance',
        title: `Suddance`,
        artist: 'Osanna',
        year: 1978,
        country: regions.ITALY,
        cover: '.jpg',
        criteria: [criteria.JAZZY_GROOVY, criteria.SOFT, criteria.SOFT_SEVENTIES, criteria.C_JAZZ, criteria.ODD_RHYTHM, criteria.TOUCHING_VOCALS, criteria.C_ELECTRO],
        selectedTrackTitle: `'A Zingara`,
        selectedTrackYtId: 'Y-SfKI1RIJM',
        spotifyId: '5yJdLlQbb2iHKifGUG55I9',
        deezerId: '1124874',
        designers: ['Osanna', 'Guido Harari', 'CBS Studio'],
        similarAlbums: [], // TODO un yes avec le truc folkd oriental + electro
        isAGem: true,
        description: `TODO description`,
    },
    {
        id: 'ose_adonia',
        title: 'Adonia',
        artist: 'Ose',
        year: 1978,
        country: regions.FRANCE,
        cover: '.jpg',
        criteria: [criteria.ELECTRO, criteria.SCI_FI, criteria.SPACY, criteria.LENGTHY_TRACKS, criteria.INSTRUMENTAL],
        selectedTrackTitle: 'Approche Sur A',
        selectedTrackYtId: '4C5YRamG-iE',
        spotifyId: null,
        deezerId: null,
        designers: ['Hervé Picart', 'Billi', 'Anne Surgers'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'osibisa_osibisa',
        title: 'Osibisa',
        artist: 'Osibisa',
        year: 1974,
        country: regions.ENGLAND,
        cover: '.jpg',
        criteria: [criteria.IGBO, criteria.JAM, criteria.JAZZY_GROOVY, criteria.AFROBEAT, criteria.UNCOMMON_INSTRUMENTS, criteria.ODD_RHYTHM],
        selectedTrackTitle: 'Oranges',
        selectedTrackYtId: 'BW0IOchqzA8',
        spotifyId: '66usFt5rTKg9kF0NKTXDFr',
        deezerId: '1198670',
        designers: ['Roger Dean'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'osibisa_woyaya',
        title: 'Wɔyaya',
        artist: 'Osibisa',
        year: 1971,
        country: regions.ENGLAND,
        cover: '.jpg',
        criteria: [criteria.IGBO, criteria.JAM, criteria.JAZZY_GROOVY, criteria.AFROBEAT, criteria.UNCOMMON_INSTRUMENTS, criteria.ODD_RHYTHM],
        selectedTrackTitle: 'Y Sharp',
        selectedTrackYtId: 'N5-t8THAGx8',
        spotifyId: '72hcKrMgA7vVJLAOAKW8c2',
        deezerId: '1198671',
        designers: ['Roger Dean'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'osibisa_heads',
        title: 'Heads',
        artist: 'Osibisa',
        year: 1972,
        country: regions.ENGLAND,
        cover: '.jpg',
        criteria: [criteria.IGBO, criteria.JAM, criteria.JAZZY_GROOVY, criteria.AFROBEAT, criteria.UNCOMMON_INSTRUMENTS],
        selectedTrackTitle: 'Do You Know',
        selectedTrackYtId: 'FsRx-MFXXbM',
        spotifyId: '0W949V7PuHirsX6ZQ6J6Iq',
        deezerId: '6320096',
        designers: ['Mati Klarwein'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'osibisa_superfly_tnt',
        title: 'Superfly T.N.T.',
        artist: 'Osibisa',
        year: 1973,
        country: regions.ENGLAND,
        cover: '.jpg',
        criteria: [criteria.SOUNDTRACK, criteria.INSTRUMENTAL, criteria.JAM, criteria.JAZZY_GROOVY, criteria.AFROBEAT, criteria.UNCOMMON_INSTRUMENTS],
        selectedTrackTitle: 'T.N.T.',
        selectedTrackYtId: 'teZWiyih9aA',
        spotifyId: null,
        deezerId: null,
        designers: [],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'osibisa_happy_children',
        title: 'Happy Children',
        artist: 'Osibisa',
        year: 1973,
        country: regions.ENGLAND,
        cover: '.jpg',
        criteria: [criteria.IGBO, criteria.JAM, criteria.JAZZY_GROOVY, criteria.AFROBEAT, criteria.UNCOMMON_INSTRUMENTS],
        selectedTrackTitle: 'Kotoku',
        selectedTrackYtId: 'MSp3Qwu9gys',
        spotifyId: '7G3z1Pmg0DjDP2Qs0I30kV',
        deezerId: '897076',
        designers: ['Jeff Schrier'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'osibisa_osibirock',
        title: 'Osibirock',
        artist: 'Osibisa',
        year: 1974,
        country: regions.ENGLAND,
        cover: '.jpg',
        criteria: [criteria.IGBO, criteria.JAM, criteria.JAZZY_GROOVY, criteria.AFROBEAT, criteria.UNCOMMON_INSTRUMENTS],
        selectedTrackTitle: 'Komfo (High Priest)',
        selectedTrackYtId: 'fVmdyJihZI8',
        spotifyId: '5f4hIQln3D5VIjK1bdWYCS',
        deezerId: '897077',
        designers: ['Peter Gallen', 'Douanier Rousseau'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'osibisa_welcome_home',
        title: 'Welcome Home',
        artist: 'Osibisa',
        year: 1975,
        country: regions.ENGLAND,
        cover: '.jpg',
        criteria: [criteria.JAM, criteria.AFROBEAT, criteria.UNCOMMON_INSTRUMENTS],
        selectedTrackTitle: 'Chooboi (Heave Ho)',
        selectedTrackYtId: 'O8uVzL-N5aM',
        spotifyId: null,
        deezerId: null,
        designers: ['Teddy Osei'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'ozric_tentacles_pungent_effulgent',
        title: 'Pungent Effulgent',
        artist: 'Ozric Tentacles',
        year: 1989,
        country: regions.ENGLAND,
        cover: '.jpg',
        criteria: [criteria.INSTRUMENTAL, criteria.JAM, criteria.C_PSYCHE, criteria.C_JAZZ, criteria.JAZZY_GROOVY, criteria.ELECTRO, criteria.SPACY, criteria.NEO_EIGHTIES],
        selectedTrackTitle: 'Phalarn Dawn',
        selectedTrackYtId: 'UQCYvIbznkw',
        spotifyId: '0HycOOGYBfZ7yimWbmYQPO',
        deezerId: '14911379',
        designers: ['Blim'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'ozric_tentacles_erpland',
        title: 'Erpland',
        artist: 'Ozric Tentacles',
        year: 1990,
        country: regions.ENGLAND,
        cover: '.jpg',
        criteria: [criteria.INSTRUMENTAL, criteria.JAM, criteria.C_PSYCHE, criteria.C_JAZZ, criteria.JAZZY_GROOVY, criteria.ELECTRO, criteria.SPACY, criteria.NEO_EIGHTIES],
        selectedTrackTitle: 'Crackerblocks',
        selectedTrackYtId: 'ZjtfdisDhuo',
        spotifyId: '5YzktS5LIcW8YwDpZH06Gz',
        deezerId: '375340',
        designers: ['Blim'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'ozric_tentacles_strangeitude',
        title: 'Strangeitude',
        artist: 'Ozric Tentacles',
        year: 1991,
        country: regions.ENGLAND,
        cover: '.jpg',
        criteria: [criteria.INSTRUMENTAL, criteria.JAM, criteria.C_PSYCHE, criteria.C_JAZZ, criteria.JAZZY_GROOVY, criteria.ELECTRO, criteria.SPACY, criteria.NEO_EIGHTIES, criteria.ORIENTAL],
        selectedTrackTitle: 'Bizarre Bazaar',
        selectedTrackYtId: 'HSHEhHfq7Bc',
        spotifyId: '0LP1qX7nM4lpH5KAXnosm0',
        deezerId: '465409',
        designers: ['Blim'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'ozric_tentacles_jurassic_shift',
        title: 'Jurassic Shift',
        artist: 'Ozric Tentacles',
        year: 1993,
        country: regions.ENGLAND,
        cover: '.jpg',
        criteria: [criteria.INSTRUMENTAL, criteria.JAM, criteria.C_PSYCHE, criteria.C_JAZZ, criteria.JAZZY_GROOVY, criteria.ELECTRO, criteria.SPACY, criteria.NEO_EIGHTIES],
        selectedTrackTitle: 'Stretchy',
        selectedTrackYtId: 'csM8IIaXFYM',
        spotifyId: '1sBTE8pk2bYgcqI3C0xBnw',
        deezerId: '171258',
        designers: ['Blim'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'ozric_tentacles_arborescence',
        title: 'Arborescence',
        artist: 'Ozric Tentacles',
        year: 1994,
        country: regions.ENGLAND,
        cover: '.jpg',
        criteria: [criteria.INSTRUMENTAL, criteria.ODD_RHYTHM, criteria.JAM, criteria.C_PSYCHE, criteria.C_JAZZ, criteria.JAZZY_GROOVY, criteria.ELECTRO, criteria.SPACY, criteria.NEO_EIGHTIES],
        selectedTrackTitle: 'Myriapod',
        selectedTrackYtId: 'KlsFulvhBpg',
        spotifyId: '0eEIecJTw1JSbYp5XJZwPf',
        deezerId: '375901',
        designers: ['Blim'],
        similarAlbums: [],
        isAGem: false,
    },
]

export default albums