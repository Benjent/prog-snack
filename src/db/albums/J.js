import regions from '../regions'
import { criteria } from '../criteria'

const albums = [
    {
        id: 'jackal_awake',
        title: 'Awake',
        artist: 'Jackal',
        year: 1973,
        country: regions.CANADA,
        cover: '.jpg',
        criteria: [criteria.GREASY_SEVENTIES, criteria.JAM],
        selectedTrackTitle: 'Awake',
        selectedTrackYtId: '0aNE4Uq1sfE',
        spotifyId: '1umcdNFxWMRT3929YR3kdg',
        deezerId: '10145370',
        designers: ['Julius Ciss'],
        similarAlbums: [],
        isAGem: true,
        description: `TODO description`,
    },
    {
        id: 'jade_warrior_jade_warrior',
        title: 'Jade Warrior',
        artist: 'Jade Warrior',
        year: 1971,
        country: regions.ENGLAND,
        cover: '.jpg',
        criteria: [criteria.CONCEPT, criteria.SOFT, criteria.ORIENTAL, criteria.UNCOMMON_INSTRUMENTS, criteria.GREASY_SEVENTIES],
        selectedTrackTitle: 'Sundial Song',
        selectedTrackYtId: '0JqujXC4HgQ',
        spotifyId: '5rJ3MIbM4gBw3jI3oIPAVf',
        deezerId: '671911',
        designers: [],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'jade_warrior_released',
        title: 'Released',
        artist: 'Jade Warrior',
        year: 1971,
        country: regions.ENGLAND,
        cover: '.jpg',
        criteria: [criteria.CONCEPT, criteria.SOFT, criteria.ORIENTAL, criteria.UNCOMMON_INSTRUMENTS, criteria.C_JAZZ],
        selectedTrackTitle: 'Water Curtain Cave',
        selectedTrackYtId: 'eNV_7E2P_ok',
        spotifyId: '3HBlatCq9VNe4pqZa4cs3Q',
        deezerId: '978184',
        designers: ['Jon Field'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'jade_warrior_last_autumns_dream',
        title: `Last Autumn's Dream`,
        artist: 'Jade Warrior',
        year: 1972,
        country: regions.ENGLAND,
        cover: '.jpg',
        criteria: [criteria.CONCEPT, criteria.INSTRUMENTAL, criteria.SOFT, criteria.ORIENTAL, criteria.UNCOMMON_INSTRUMENTS],
        selectedTrackTitle: 'Morning Hymn',
        selectedTrackYtId: 'ArrIZD5Hklc',
        spotifyId: '2NQlOIbSk9fsCtKXTGPa9M',
        deezerId: '671910',
        designers: ['Kunio Hagio'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'jade_warrior_floating_world',
        title: 'Floating World',
        artist: 'Jade Warrior',
        year: 1974,
        country: regions.ENGLAND,
        cover: '.jpg',
        criteria: [criteria.CONCEPT, criteria.ODD_RHYTHM, criteria.INSTRUMENTAL, criteria.TRANSITION, criteria.SOFT, criteria.ORIENTAL, criteria.AMBIENT, criteria.UNCOMMON_INSTRUMENTS, criteria.C_JAZZ, criteria.SPIRITUAL],
        selectedTrackTitle: 'Mountain Of Fruit And Flowers',
        selectedTrackYtId: 'P02f9snizbE',
        spotifyId: null,
        deezerId: null,
        designers: ['Eckford / Stimpson'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'jade_warrior_waves',
        title: 'Waves',
        artist: 'Jade Warrior',
        year: 1975,
        country: regions.ENGLAND,
        cover: '.jpg',
        criteria: [criteria.CONCEPT, criteria.INSTRUMENTAL, criteria.LENGTHY_TRACKS, criteria.TRANSITION, criteria.SOFT, criteria.ORIENTAL, criteria.AMBIENT, criteria.UNCOMMON_INSTRUMENTS, criteria.C_JAZZ, criteria.SPIRITUAL],
        selectedTrackTitle: 'Waves (Part II)',
        selectedTrackYtId: 'uGYpyLxDzlk',
        spotifyId: null,
        deezerId: null,
        designers: ['Eckford / Stimpson'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'jade_warrior_kites',
        title: 'Kites',
        artist: 'Jade Warrior',
        year: 1976,
        country: regions.ENGLAND,
        cover: '.jpg',
        criteria: [criteria.CONCEPT, criteria.INSTRUMENTAL, criteria.TRANSITION, criteria.SOFT, criteria.ORIENTAL, criteria.AMBIENT, criteria.UNCOMMON_INSTRUMENTS, criteria.C_JAZZ, criteria.SPIRITUAL],
        selectedTrackTitle: 'Wind Song',
        selectedTrackYtId: 'y4m76cJXZmo',
        spotifyId: null,
        deezerId: null,
        designers: ['Eckford / Stimpson'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'jade_warrior_way_of_the_sun',
        title: 'Way Of The Sun',
        artist: 'Jade Warrior',
        year: 1978,
        country: regions.ENGLAND,
        cover: '.jpg',
        criteria: [criteria.CONCEPT, criteria.INSTRUMENTAL, criteria.TRANSITION, criteria.SOFT, criteria.ORIENTAL, criteria.AMBIENT, criteria.UNCOMMON_INSTRUMENTS, criteria.C_JAZZ, criteria.SPIRITUAL],
        selectedTrackTitle: 'Heaven Stone',
        selectedTrackYtId: 'e0-VIz5MINU',
        spotifyId: '38EaunYTn64p0RSCxb5Jbv',
        deezerId: '248760',
        designers: ['Eckford / Stimpson'],
        similarAlbums: [],
        isAGem: true,
        description: `TODO description`,
    },
    {
        id: 'jade_warrior_horizen',
        title: 'Horizen',
        artist: 'Jade Warrior',
        year: 1984,
        country: regions.ENGLAND,
        cover: '.jpg',
        criteria: [criteria.CONCEPT, criteria.INSTRUMENTAL, criteria.SOFT, criteria.ORIENTAL, criteria.AMBIENT, criteria.SPIRITUAL, criteria.C_ELECTRO, criteria.SYMPHONIC],
        selectedTrackTitle: 'Grey Lake, Red Mountain',
        selectedTrackYtId: 'cj4NILH-fO8',
        spotifyId: null,
        deezerId: null,
        designers: [],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'jade_warrior_at_peace',
        title: 'At Peace',
        artist: 'Jade Warrior',
        year: 1989,
        country: regions.ENGLAND,
        cover: '.jpg',
        criteria: [criteria.CONCEPT, criteria.INSTRUMENTAL, criteria.SOFT, criteria.ORIENTAL, criteria.AMBIENT, criteria.UNCOMMON_INSTRUMENTS, criteria.SPIRITUAL, criteria.ELECTRO, criteria.SOUND_COLLAGES],
        selectedTrackTitle: 'At Peace',
        selectedTrackYtId: 'On75rWUd3Xc',
        spotifyId: null,
        deezerId: null,
        designers: [],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'jan_akkerman_profiles',
        title: 'Profiles',
        artist: 'Jan Akkerman',
        year: 1972,
        country: regions.NETHERLANDS,
        cover: '.jpg',
        criteria: [criteria.JAM, criteria.C_PSYCHE, criteria.INSTRUMENTAL, criteria.LENGTHY_TRACKS, criteria.C_FOLK, criteria.MEDIEVAL],
        selectedTrackTitle: 'Fresh Air',
        selectedTrackYtId: 'MLBiFQAfmbA',
        spotifyId: '0SYbOsBPG28MWwh1ep68TG',
        deezerId: '11546176',
        designers: ['John Van Den Berg'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'jan_akkerman_tabernakel',
        title: 'Tabernakel',
        artist: 'Jan Akkerman',
        year: 1973,
        country: regions.NETHERLANDS,
        cover: '.jpg',
        criteria: [criteria.INSTRUMENTAL, criteria.LENGTHY_TRACKS, criteria.FOLK, criteria.MEDIEVAL, criteria.ORCHESTRAL_PARTS, criteria.FEMALE],
        selectedTrackTitle: 'Lammy',
        selectedTrackYtId: 'SDtx_OLE2cg',
        spotifyId: '3FWm5uU219iOXEGnc5ZXKq',
        deezerId: '87630',
        designers: ['Norman Seeff'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'jan_akkerman_it_could_happen_to_you',
        title: 'It Could Happen To You',
        artist: 'Jan Akkerman',
        year: 1982,
        country: regions.NETHERLANDS,
        cover: '.jpg',
        criteria: [criteria.INSTRUMENTAL, criteria.LENGTHY_TRACKS, criteria.JAZZY_GROOVY, criteria.JAM, criteria.NEO_EIGHTIES, criteria.ROCK],
        selectedTrackTitle: 'Funkology',
        selectedTrackYtId: 'PwP6YkdYbAc',
        spotifyId: '0XdW4dYs7VzJwPvCGBQpig',
        deezerId: '70063432',
        designers: ['Müller & von Frankenberg'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'jan_dukes_de_grey_sorcerers',
        title: 'Sorcerers',
        artist: 'Jan Dukes De Grey',
        year: 1970,
        country: regions.ENGLAND,
        cover: '.jpg',
        criteria: [criteria.FOLK, criteria.UNCOMMON_INSTRUMENTS, criteria.PATCHWORK, criteria.SOFT, criteria.C_PSYCHE],
        selectedTrackTitle: 'Wonder Child',
        selectedTrackYtId: 'w5zmObuk5pc',
        spotifyId: '39RUdNdTSeoiU8k65FohRh',
        deezerId: '225053322',
        designers: ['Dave Dragon'],
        similarAlbums: [], // todo similar early t. rex
        isAGem: false,
    },
    {
        id: 'jan_dukes_de_grey_mice_and_rats_in_the_loft',
        title: 'Mice And Rats In The Loft',
        artist: 'Jan Dukes De Grey',
        year: 1971,
        country: regions.ENGLAND,
        cover: '.jpg',
        criteria: [criteria.LENGTHY_TRACKS, criteria.SYMPHONIC, criteria.UNCOMMON_INSTRUMENTS, criteria.C_FOLK],
        selectedTrackTitle: 'Call Of The Wild',
        selectedTrackYtId: 'sxPHhaUtWV8',
        spotifyId: null,
        deezerId: null,
        designers: ['Caroline Browne'],
        similarAlbums: [],
        isAGem: true,
        description: `TODO Description`,
    },
    {
        id: 'janus_it_al_maestrale',
        title: 'Al Maestrale',
        artist: 'Janus (IT)',
        year: 1978,
        country: regions.ITALY,
        cover: '.jpg',
        criteria: [criteria.UNCOMMON_INSTRUMENTS, criteria.ITALIAN, criteria.CELTIC],
        selectedTrackTitle: 'An Dro',
        selectedTrackYtId: 'w31DVZZ1wUU',
        spotifyId: null,
        deezerId: null,
        designers: ['Jack Marchal'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'jane_together',
        title: 'Together',
        artist: 'Jane',
        year: 1972,
        country: regions.GERMANY,
        cover: '.jpg',
        criteria: [criteria.JAM, criteria.C_PSYCHE, criteria.HEAVY, criteria.LENGTHY_TRACKS, criteria.SPACY],
        selectedTrackTitle: 'Spain',
        selectedTrackYtId: 's1zzYu7N3Sk',
        spotifyId: '2oe2jZB9hqSaNaWFtM52Pw',
        deezerId: null,
        designers: ['Elke Merten'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'jane_here_we_are',
        title: 'Here We Are',
        artist: 'Jane',
        year: 1973,
        country: regions.GERMANY,
        cover: '.jpg',
        criteria: [criteria.JAM, criteria.C_PSYCHE, criteria.HEAVY, criteria.LENGTHY_TRACKS, criteria.ODD_RHYTHM, criteria.SPACY, criteria.FEMALE, criteria.TRANSITION],
        selectedTrackTitle: 'Out In The Rain',
        selectedTrackYtId: null,
        spotifyId: null,
        deezerId: null,
        designers: ['Arthur'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'jane_jane_iii',
        title: 'Jane III',
        artist: 'Jane',
        year: 1974,
        country: regions.GERMANY,
        cover: '.jpg',
        criteria: [criteria.JAM, criteria.C_PSYCHE, criteria.SPACY, criteria.HEAVY],
        selectedTrackTitle: `Comin' Again`,
        selectedTrackYtId: 'BByF2f1lkVs',
        spotifyId: null,
        deezerId: null,
        designers: ['Dierk Pape'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'jane_lady',
        title: 'Lady',
        artist: 'Jane',
        year: 1975,
        country: regions.GERMANY,
        cover: '.jpg',
        criteria: [criteria.JAM, criteria.C_PSYCHE, criteria.SPACY, criteria.HEAVY, criteria.ROCK],
        selectedTrackTitle: 'Way To Paradise',
        selectedTrackYtId: 'yP8gKcI3rtg',
        spotifyId: null,
        deezerId: null,
        designers: [],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'jane_fire_water_earth_and_air',
        title: 'Fire, Water, Earth & Air',
        artist: 'Jane',
        year: 1976,
        country: regions.GERMANY,
        cover: '.jpg',
        criteria: [criteria.JAM, criteria.SPACY, criteria.HEAVY, criteria.SYMPHONIC, criteria.LENGTHY_TRACKS, criteria.SOUND_COLLAGES, criteria.CONCEPT],
        selectedTrackTitle: 'Earth',
        selectedTrackYtId: 'PE3VkZ5BpeU',
        spotifyId: null,
        deezerId: null,
        designers: ['Dierk Pape'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'jane_between_heaven_and_hell',
        title: 'Between Heaven And Hell',
        artist: 'Jane',
        year: 1977,
        country: regions.GERMANY,
        cover: '.jpg',
        criteria: [criteria.LENGTHY_TRACKS, criteria.C_PSYCHE, criteria.SYMPHONIC, criteria.JAM],
        selectedTrackTitle: 'Between Heaven And Hell',
        selectedTrackYtId: 'lj02vB0YyHI',
        spotifyId: null,
        deezerId: null,
        designers: ['Peter Peter Team'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'jane_age_of_madness',
        title: 'Age Of Madness',
        artist: 'Jane',
        year: 1978,
        country: regions.GERMANY,
        cover: '.jpg',
        criteria: [criteria.C_ELECTRO],
        selectedTrackTitle: 'Memory Symphony',
        selectedTrackYtId: 'y21dYzw-uRk',
        spotifyId: null,
        deezerId: null,
        designers: ['Peter Peter Team'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'jane_sign_no_9',
        title: 'Sign No. 9',
        artist: 'Jane',
        year: 1979,
        country: regions.GERMANY,
        cover: '.jpg',
        criteria: [criteria.ROCK],
        selectedTrackTitle: 'Henry Goes Married',
        selectedTrackYtId: 'rnnVdUzAoqI',
        spotifyId: null,
        deezerId: null,
        designers: [],
        similarAlbums: [], // TODO similar barclay james harvest fin de carrière
        isAGem: false,
    },
    {
        id: 'jane_jane',
        title: 'Jane',
        artist: 'Jane',
        year: 1980,
        country: regions.GERMANY,
        cover: '.jpg',
        criteria: [criteria.C_ELECTRO, criteria.ROCK, criteria.SPACY],
        selectedTrackTitle: 'Stop The Clock',
        selectedTrackYtId: 'jjZL_KpTiYg',
        spotifyId: null,
        deezerId: null,
        designers: ['Peter Peter Team'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'jean_michel_jarre_oxygene',
        title: 'Oxygène',
        artist: 'Jean Michel Jarre',
        year: 1976,
        country: regions.FRANCE,
        cover: '.jpg',
        criteria: [criteria.CONCEPT, criteria.INSTRUMENTAL, criteria.SOFT, criteria.AMBIENT, criteria.ELECTRO],
        selectedTrackTitle: 'Oxygène (Part IV)',
        selectedTrackYtId: 'P_I2ch8_TXc',
        spotifyId: '3e7TxckusgnC1AYnAqbl2z',
        deezerId: '11101076',
        designers: ['Michel Granger'],
        similarAlbums: [],
        isAGem: true,
        description: `TODO description`,
    },
    {
        id: 'jean_michel_jarre_equinoxe',
        title: 'Équinoxe',
        artist: 'Jean Michel Jarre',
        year: 1978,
        country: regions.FRANCE,
        cover: '.jpg',
        criteria: [criteria.CONCEPT, criteria.INSTRUMENTAL, criteria.SOFT, criteria.AMBIENT, criteria.ELECTRO],
        selectedTrackTitle: 'Équinoxe (Part IV)',
        selectedTrackYtId: 'fpWNimba344',
        spotifyId: '41Dl68Kik63nV6zvn07NgY',
        deezerId: '11101078',
        designers: ['Michel Granger'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'jean_michel_jarre_les_chants_magnetiques',
        title: 'Les Chants Magnétiques',
        artist: 'Jean Michel Jarre',
        year: 1981,
        country: regions.FRANCE,
        cover: '.jpg',
        criteria: [criteria.CONCEPT, criteria.INSTRUMENTAL, criteria.SOFT, criteria.AMBIENT, criteria.ELECTRO, criteria.LENGTHY_TRACKS, criteria.SOUND_COLLAGES],
        selectedTrackTitle: 'Les Chants Magnétiques (Part III)',
        selectedTrackYtId: 'IpOnoBoGEmw',
        spotifyId: '7G4AN82pnj8i93f03cnm8D',
        deezerId: '11101072',
        designers: ['Rémy Magron'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'jean_michel_jarre_zoolook',
        title: 'Zoolook',
        artist: 'Jean Michel Jarre',
        year: 1984,
        country: regions.FRANCE,
        cover: '.jpg',
        criteria: [criteria.ELECTRO, criteria.INSTRUMENTAL, criteria.FEMALE, criteria.AMBIENT, criteria.NEO_EIGHTIES],
        selectedTrackTitle: 'Ethnicolor',
        selectedTrackYtId: 'rDLUVaqCP0A',
        spotifyId: '5AWvWkGvVtkZy9JfPYnLeS',
        deezerId: '11101086',
        designers: ['Imagine, London', 'Fiona Doulton', 'Kate Hepburn'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'jean_michel_jarre_rendez_vous',
        title: 'Rendez-Vous',
        artist: 'Jean Michel Jarre',
        year: 1986,
        country: regions.FRANCE,
        cover: '.jpg',
        criteria: [criteria.ELECTRO, criteria.INSTRUMENTAL, criteria.AMBIENT, criteria.NEO_EIGHTIES, criteria.TRANSITION, criteria.SYMPHONIC],
        selectedTrackTitle: 'Troisième Rendez-Vous',
        selectedTrackYtId: 'wwxlFtj85aA',
        spotifyId: '3YrKqMhEdhdvS3BrmKurFr',
        deezerId: '11101090',
        designers: ['Michel Granger'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'jefferson_airplane_surrealistic_pillow',
        title: 'Surrealistic Pillow',
        artist: 'Jefferson Airplane',
        year: 1967,
        country: regions.USA,
        cover: '.jpg',
        criteria: [criteria.ROCK, criteria.C_PSYCHE, criteria.C_FOLK, criteria.CRISPY_SIXTIES, criteria.SOFT, criteria.FEMALE],
        selectedTrackTitle: 'White Rabbit',
        selectedTrackYtId: 'WANNqr-vcx0',
        spotifyId: '2m8DWhADf8ui1MDNAmjX8I',
        deezerId: '77496',
        designers: ['Marty Balin'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'jefferson_airplane_after_bathing_at_baxters',
        title: `After Bathing At Baxter's`,
        artist: 'Jefferson Airplane',
        year: 1967,
        country: regions.USA,
        cover: '.jpg',
        criteria: [criteria.ROCK, criteria.C_PSYCHE, criteria.C_FOLK, criteria.CRISPY_SIXTIES, criteria.TRANSITION, criteria.ODD_RHYTHM, criteria.FEMALE],
        selectedTrackTitle: 'The Ballad Of You & Me & Pooneil',
        selectedTrackYtId: 'd1RgUO5E9fw',
        spotifyId: '4YYeywv0sLkLAGbJuKJIdi',
        deezerId: '78698',
        designers: ['Ron Cobb'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'jefferson_airplane_crown_of_creation',
        title: 'Crown Of Creation',
        artist: 'Jefferson Airplane',
        year: 1968,
        country: regions.USA,
        cover: '.jpg',
        criteria: [criteria.C_PSYCHE, criteria.FOLK, criteria.CRISPY_SIXTIES, criteria.FEMALE],
        selectedTrackTitle: 'Lather',
        selectedTrackYtId: 'e0-9WF4FF8QrQE',
        spotifyId: '2xVKQMP0eudZlSnJwVhhPu',
        deezerId: '78701',
        designers: ['Hiro', 'John Van Hamersveld'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'jefferson_airplane_volunteers',
        title: 'Volunteers',
        artist: 'Jefferson Airplane',
        year: 1969,
        country: regions.USA,
        cover: '.jpg',
        criteria: [criteria.ART_POP, criteria.CRISPY_SIXTIES, criteria.JAM, criteria.FEMALE],
        selectedTrackTitle: 'Hey Frederick',
        selectedTrackYtId: 'w25xghugIdg',
        spotifyId: '5SxBU3zQaLOq5eapsG3jFQ',
        deezerId: '76220',
        designers: ['Gut'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'jefferson_starship_dragon_fly',
        title: 'Dragon Fly',
        artist: 'Jefferson Starship',
        year: 1974,
        country: regions.USA,
        cover: '.jpg',
        criteria: [criteria.ROCK, criteria.FEMALE, criteria.TOUCHING_VOCALS],
        selectedTrackTitle: 'Hyperdrive',
        selectedTrackYtId: 'BodX7wP6jBE',
        spotifyId: '6EIs2aHTsYGXQWHXEAuIl1',
        deezerId: '81397872',
        designers: ['Peter Lloyd'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'jefferson_starship_red_octopus',
        title: 'Red Octopus',
        artist: 'Jefferson Starship',
        year: 1975,
        country: regions.USA,
        cover: '.jpg',
        criteria: [criteria.ROCK, criteria.FEMALE, criteria.TOUCHING_VOCALS, criteria.JAM],
        selectedTrackTitle: 'Sandalphon',
        selectedTrackYtId: 'm-n64L_uTXs',
        spotifyId: '5i7zeNrDbhxe5J2yfZgAPh',
        deezerId: '81397902',
        designers: ['Gribbitt!'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'jet_fede_speranza_carita',
        title: 'Fede Speranza Carità',
        artist: 'J.E.T.',
        year: 1972,
        country: regions.ITALY,
        cover: '.jpg',
        criteria: [criteria.LENGTHY_TRACKS, criteria.ODD_RHYTHM, criteria.ITALIAN, criteria.SYMPHONIC],
        selectedTrackTitle: 'Il Prete E Il Peccatore',
        selectedTrackYtId: 'fS-IdkUREPk',
        spotifyId: null,
        deezerId: null,
        designers: ['Umberto Lega'],
        similarAlbums: [],
        isAGem: false, // TODO almost ?
    },
    {
        id: 'jethro_tull_stand_up',
        title: 'Stand Up',
        artist: 'Jethro Tull',
        year: 1969,
        country: regions.ENGLAND,
        cover: '.jpg',
        criteria: [criteria.JAM, criteria.FOLK, criteria.GREASY_SEVENTIES],
        selectedTrackTitle: 'Bourée',
        selectedTrackYtId: 'N2RNe2jwHE0',
        spotifyId: '5c0NFeQON726s0zzipHA1d',
        deezerId: '299907',
        designers: ['Jimmy Grashow', 'John Williams', 'Terry Ellis'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'jethro_tull_benefit',
        title: 'Benefit',
        artist: 'Jethro Tull',
        year: 1970,
        country: regions.ENGLAND,
        cover: '.jpg',
        criteria: [criteria.JAM, criteria.FOLK],
        selectedTrackTitle: 'For Michael Collins, Jeffrey and Me',
        selectedTrackYtId: 'b2GTNhmPbtg',
        spotifyId: '1meW8yyx76RPZebO32VwrB',
        deezerId: '299908',
        designers: ['Ruan O\'Lochlainn'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'jethro_tull_aqualung',
        title: 'Aqualung',
        artist: 'Jethro Tull',
        year: 1971,
        country: regions.ENGLAND,
        cover: '.jpg',
        criteria: [criteria.ODD_RHYTHM, criteria.JAM, criteria.FOLK],
        selectedTrackTitle: 'Aqualung',
        selectedTrackYtId: 'B0jMPI_pUec',
        spotifyId: '0NGM3Ftwjw0dLNpAowmz3x',
        deezerId: '300262',
        designers: ['CCS', 'Burton Silverman'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'jethro_tull_thick_as_a_brick',
        title: 'Thick As A Brick',
        artist: 'Jethro Tull',
        year: 1972,
        country: regions.ENGLAND,
        cover: '.jpg',
        criteria: [criteria.CONCEPT, criteria.ODD_RHYTHM, criteria.LENGTHY_TRACKS, criteria.ROCK_OPERA, criteria.FOLK],
        selectedTrackTitle: 'Thick As A Brick (Part I)',
        selectedTrackYtId: 'l21p4Id40cU',
        spotifyId: '1ZxChDw03SUFGUz0RC8A8M',
        deezerId: '300263',
        designers: ['Chrysalis', 'Roy Eldridge'],
        similarAlbums: [],
        isAGem: true,
        description: `TODO description`,
    },
    {
        id: 'jethro_tull_a_passion_play',
        title: 'A Passion Play',
        artist: 'Jethro Tull',
        year: 1973,
        country: regions.ENGLAND,
        cover: '.jpg',
        criteria: [criteria.CONCEPT, criteria.ODD_RHYTHM, criteria.LENGTHY_TRACKS, criteria.ROCK_OPERA, criteria.FOLK],
        selectedTrackTitle: 'A Passion Play (Part I)',
        selectedTrackYtId: 'gB_Ago8wDb8',
        spotifyId: '1mY1n8xO6Na0pDvqyBhG07',
        deezerId: '10632386',
        designers: ['CCS'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'jethro_tull_minstrel_in_the_gallery',
        title: 'Minstrel In The Gallery',
        artist: 'Jethro Tull',
        year: 1975,
        country: regions.ENGLAND,
        cover: '.jpg',
        criteria: [criteria.ODD_RHYTHM, criteria.LENGTHY_TRACKS, criteria.FOLK],
        selectedTrackTitle: 'Baker St. Muse',
        selectedTrackYtId: 'B-7yVIJ7wE4',
        spotifyId: '35eKQzddf5pcCQN6laEHEc',
        deezerId: '299808',
        designers: ['Joe Garnett', 'Ron Kriss'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'jethro_tull_songs_from_the_wood',
        title: 'Songs From The Wood',
        artist: 'Jethro Tull',
        year: 1977,
        country: regions.ENGLAND,
        cover: '.jpg',
        criteria: [criteria.ODD_RHYTHM, criteria.FOLK],
        selectedTrackTitle: 'Velvet Green',
        selectedTrackYtId: 'JG77YHX5yYE',
        spotifyId: '3hqr2lQ7zQdnyguyuID177',
        deezerId: '299409',
        designers: ['Jay L. Lee'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'jim_steinman_bad_for_good',
        title: 'Bad For Good',
        artist: 'Jim Steinman',
        year: 1981,
        country: regions.USA,
        cover: '.jpg',
        criteria: [criteria.ROCK, criteria.FEMALE, criteria.HEAVY, criteria.ROCK_OPERA, criteria.SPECTACULAR, criteria.ORCHESTRAL_PARTS],
        selectedTrackTitle: 'Bad For Good',
        selectedTrackYtId: 'NQ85WU-Z1oQ',
        spotifyId: '1IzqC9ywIOb5bjnLW4Ly3I',
        deezerId: '1399902',
        designers: ['Richard Corben'],
        similarAlbums: ['meat_loaf_bat_out_of_hell'],
        isAGem: false,
    },
    {
        id: 'the_jimi_hendrix_experience_are_you_experienced',
        title: 'Are You Experienced',
        artist: 'The Jimi Hendrix Experience',
        year: 1967,
        country: regions.ENGLAND,
        cover: '.jpg',
        criteria: [criteria.JAM, criteria.C_PSYCHE, criteria.ROCK, criteria.JAZZY_GROOVY, criteria.CRISPY_SIXTIES],
        selectedTrackTitle: 'Third Stone From The Sun',
        selectedTrackYtId: null,
        spotifyId: '7rSZXXHHvIhF4yUFdaOCy9',
        deezerId: '455130',
        designers: ['Karl Ferris'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'the_jimi_hendrix_experience_axis_bold_as_love',
        title: 'Axis: Bold As Love',
        artist: 'The Jimi Hendrix Experience',
        year: 1967,
        country: regions.ENGLAND,
        cover: '.jpg',
        criteria: [criteria.JAM, criteria.C_PSYCHE, criteria.ROCK, criteria.JAZZY_GROOVY, criteria.CRISPY_SIXTIES],
        selectedTrackTitle: 'Little Wing',
        selectedTrackYtId: null,
        spotifyId: '3uFZf8rykoHo7XMIQVYW6r',
        deezerId: '454044',
        designers: ['David King', 'Roger Law', 'Karl Ferris'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'the_jimi_hendrix_experience_electric_ladyland',
        title: 'Electric Ladyland',
        artist: 'The Jimi Hendrix Experience',
        year: 1968,
        country: regions.ENGLAND,
        cover: '.jpg',
        criteria: [criteria.JAM, criteria.LENGTHY_TRACKS, criteria.C_PSYCHE, criteria.ROCK, criteria.JAZZY_GROOVY, criteria.CRISPY_SIXTIES],
        selectedTrackTitle: 'Burning Of The Midnight Lamp',
        selectedTrackYtId: 'j60OzzR7mMk',
        spotifyId: '5z090LQztiqh13wYspQvKQ',
        deezerId: '454043',
        designers: ['Karl Ferris'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'john_g_perry_sunset_wading',
        title: 'Sunset Wading',
        artist: 'John G. Perry',
        year: 1976,
        country: regions.USA,
        cover: '.jpg',
        criteria: [criteria.SOFT, criteria.UNCOMMON_INSTRUMENTS, criteria.TRANSITION, criteria.INSTRUMENTAL, criteria.BLENDS],
        selectedTrackTitle: 'As Clouds Gather',
        selectedTrackYtId: 'IfcTrwBywgA',
        spotifyId: '3qDpIay3LaJhWhxiodv0Em',
        deezerId: null,
        designers: ['Rupert Hine'],
        similarAlbums: [],
        isAGem: true,
        description: `TODO Description`,
    },
    {
        id: 'johnny_hallyday_hamlet',
        title: 'Hamlet',
        artist: 'Johnny Hallyday',
        year: 1976,
        country: regions.FRANCE,
        cover: '.jpg',
        criteria: [criteria.ROCK_OPERA, criteria.FANFARE, criteria.ORCHESTRAL_PARTS, criteria.TRANSITION, criteria.STORYLINE, criteria.C_ELECTRO, criteria.FEMALE],
        selectedTrackTitle: 'Le Vieux Roi Est Mort',
        selectedTrackYtId: 'sX70vouoGFk',
        spotifyId: '6a4BjDdsICg3sFUoaAGC8t',
        deezerId: null,
        designers: ['Marina Clément', 'Gilles Paquet'],
        similarAlbums: ['andrew_lloyd_webber_and_tim_rice_jesus_christ_superstar'],
        isAGem: false,
    },
    {
        id: 'jon_anderson_olias_of_sunhillow',
        title: 'Olias Of Sunhillow',
        artist: 'Jon Anderson',
        year: 1976,
        country: regions.ENGLAND,
        cover: '.jpg',
        criteria: [criteria.CONCEPT, criteria.UNCOMMON_INSTRUMENTS, criteria.TRANSITION, criteria.SOFT, criteria.C_ELECTRO],
        selectedTrackTitle: 'Meeting (Garden Of Geda) / Sound Out The Galleon',
        selectedTrackYtId: 'Jv0NUZVdIVQ',
        spotifyId: '7sJYqyDt4C7FFneBuotOZb',
        deezerId: '9573618',
        designers: ['David Fairbrother Roe', 'Hipgnosis', 'Richard Manning', 'Jeff Cummings'],
        similarAlbums: [],
        isAGem: true,
        description: `TODO description`,
    },
    {
        id: 'jon_anderson_song_of_seven',
        title: 'Song Of Seven',
        artist: 'Jon Anderson',
        year: 1980,
        country: regions.ENGLAND,
        cover: '.jpg',
        criteria: [criteria.C_ELECTRO, criteria.ART_POP, criteria.UNCOMMON_INSTRUMENTS],
        selectedTrackTitle: 'Song Of Seven',
        selectedTrackYtId: 'pbk7ExAkPNI',
        spotifyId: '51DsX4yQEhFcor8Gpz7KNq',
        deezerId: '365878',
        designers: ['Alwyn Clayden', 'Jon Anderson', 'Ian Nicholson'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'jon_anderson_animation',
        title: 'Animation',
        artist: 'Jon Anderson',
        year: 1982,
        country: regions.ENGLAND,
        cover: '.jpg',
        criteria: [criteria.C_ELECTRO, criteria.ART_POP, criteria.NEO_EIGHTIES, criteria.GLITTER, criteria.C_JAZZ, criteria.SYMPHONIC],
        selectedTrackTitle: 'The Spell',
        selectedTrackYtId: 'yyxL7kglxgI',
        spotifyId: '6E0uJMGd9nOTxHAdQRWnmP',
        deezerId: '472020',
        designers: ['Alwyn Clayden', 'Jon Anderson', 'Ian Nicholson'],
        similarAlbums: ['peter_gabriel_melt'],
        isAGem: false,
    },
    {
        id: 'journey_journey',
        title: 'Journey',
        artist: 'Journey',
        year: 1975,
        country: regions.USA,
        cover: '.jpg',
        criteria: [criteria.JAM, criteria.ROCK, criteria.JAZZY_GROOVY],
        selectedTrackTitle: 'Topaz',
        selectedTrackYtId: '4xGRVRS_bFI',
        spotifyId: '28NkOYgAmfDMjecduDX7lL',
        deezerId: '6862036',
        designers: [],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'journey_look_into_the_future',
        title: 'Look Into The Future',
        artist: 'Journey',
        year: 1976,
        country: regions.USA,
        cover: '.jpeg',
        criteria: [criteria.JAM, criteria.ROCK],
        selectedTrackTitle: `You're On Your Own`,
        selectedTrackYtId: '9po0EWpsP0U',
        spotifyId: '4cjthZg9EZT2Hik5XecWQl',
        deezerId: '115697',
        designers: ['Albert Louis Bramy', 'Mansfield'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'journey_next',
        title: 'Next',
        artist: 'Journey',
        year: 1977,
        country: regions.USA,
        cover: '.jpeg',
        criteria: [criteria.JAM, criteria.ROCK, criteria.ODD_RHYTHM],
        selectedTrackTitle: 'I Would Find You',
        selectedTrackYtId: 'BS0uwItV9Wc',
        spotifyId: '35GpNAlZhihN2jUm7WL7uH',
        deezerId: '111735',
        designers: ['Bruce Steinberg'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'judas_priest_rocka_rolla',
        title: 'Rocka Rolla',
        artist: 'Judas Priest',
        year: 1974,
        country: regions.ENGLAND,
        cover: '.jpg',
        criteria: [criteria.ODD_RHYTHM, criteria.HEAVY],
        selectedTrackTitle: 'Winter Retreat',
        selectedTrackYtId: 'qxH5N30AedM',
        spotifyId: '7G2yBPbPAgSKucJQui2JT3',
        deezerId: '6463585',
        designers: ['John Pasche', 'Bryce Attwell'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'judas_priest_sad_wings_of_destiny',
        title: 'Sad Wings Of Destiny',
        artist: 'Judas Priest',
        year: 1976,
        country: regions.ENGLAND,
        cover: '.jpg',
        criteria: [criteria.ODD_RHYTHM, criteria.HEAVY, criteria.TRANSITION, criteria.ROCK],
        selectedTrackTitle: 'Victim Of Changes',
        selectedTrackYtId: 'EKSU1W0ZUmQ',
        spotifyId: '5k3WFIHmmuHrUWSj5McaAe',
        deezerId: '8230928',
        designers: ['John Pasche', 'Patrick Woodroffe', 'Neil French'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'judas_priest_sin_after_sin',
        title: 'Sin After Sin',
        artist: 'Judas Priest',
        year: 1977,
        country: regions.ENGLAND,
        cover: '.jpg',
        criteria: [criteria.HEAVY],
        selectedTrackTitle: 'Let Us Prey / Call For The Priest',
        selectedTrackYtId: '8VmRM5zslHE',
        spotifyId: '2GXeHOkRouW0LnKBMUnVtv',
        deezerId: '98260',
        designers: ['Bob Carlos Clarke'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'julio_pereira_and_carlos_cavalheiro_bota_fora',
        title: 'Bota Fora',
        artist: 'Júlio Pereira & Carlos Cavalheiro',
        year: 1975,
        country: regions.PORTUGAL,
        cover: '.jpg',
        criteria: [criteria.TRANSITION, criteria.PORTUGUESE, criteria.UNCOMMON_INSTRUMENTS, criteria.RENAISSANCE, criteria.SOCIOPOLITICAL],
        selectedTrackTitle: 'Capitão Ambrósio',
        selectedTrackYtId: null,
        spotifyId: null,
        deezerId: null,
        designers: [],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'july_july',
        title: 'July',
        artist: 'July',
        year: 1968,
        country: regions.ENGLAND,
        cover: '.jpg',
        criteria: [criteria.ROCK, criteria.C_PSYCHE, criteria.CRISPY_SIXTIES],
        selectedTrackTitle: 'Jolly Mary',
        selectedTrackYtId: 'YuWpihpk9eA',
        spotifyId: null,
        deezerId: null,
        designers: ['Stephen Hill'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'jupiter_sunset_jupiter_sunset',
        title: 'Jupiter Sunset',
        artist: 'Jupiter Sunset',
        year: 1970,
        country: regions.FRANCE,
        cover: '.jpg',
        criteria: [criteria.ART_POP, criteria.FANTASY, criteria.C_FOLK, criteria.BAROQUE],
        selectedTrackTitle: 'Highway Man',
        selectedTrackYtId: 'YuWpihpk9eA',
        spotifyId: null,
        deezerId: null,
        designers: [],
        similarAlbums: [],
        isAGem: false,
    },
]

export default albums
