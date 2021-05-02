import regions from '../regions'
import { criteria } from '../criteria'

const albums = [
    // TODO Laughing Cavalier
    // rock, baroque, c_psyche
    // similar beatles get back? ou white album
    // rack is Peru?
    // TODO Wallace Collection
    // rock, c_folk, baroque, c_psyché, female
    {
        id: 'walrus_walrus',
        title: 'Walrus',
        artist: 'Walrus',
        year: 1970,
        country: regions.ENGLAND,
        cover: '.jpg',
        criteria: [criteria.LENGTHY_TRACKS, criteria.UNCOMMON_INSTRUMENTS, criteria.JAZZY_GROOVY, criteria.ODD_RHYTHM, criteria.CRISPY_SIXTIES],
        selectedTrackTitle: 'Rags And Old Iron / Blind Man / Roadside',
        selectedTrackYtId: null,
        spotifyId: null,
        deezerId: '9924632',
        designers: ['David Anstey'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'wara_el_inca',
        title: 'El Inca',
        artist: 'Wara',
        year: 1973,
        country: regions.BOLIVIA,
        cover: '.jpg',
        criteria: [criteria.SPANISH, criteria.JAM, criteria.HUMBLE, criteria.FEMALE, criteria.UNCOMMON_INSTRUMENTS],
        selectedTrackTitle: 'Wara',
        selectedTrackYtId: 'ioRLAHDIbmQ',
        spotifyId: '1RIRXDnZnPOQMOqTfYULOg',
        deezerId: '9286726',
        designers: [],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'warhorse_warhorse',
        title: 'Warhorse',
        artist: 'Warhorse',
        year: 1970,
        country: regions.ENGLAND,
        cover: '.jpg',
        criteria: [criteria.ROCK, criteria.HEAVY, criteria.OCCULT, criteria.GREASY_SEVENTIES],
        selectedTrackTitle: 'Woman Of The Devil',
        selectedTrackYtId: 'zgWyveaejwI',
        spotifyId: '64qvBsSA4aqWy5YyUSR68f',
        deezerId: '1498512',
        designers: ['Marcus Keef'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'warhorse_red_sea',
        title: 'Warhorse',
        artist: 'Warhorse',
        year: 1972,
        country: regions.ENGLAND,
        cover: '.jpg',
        criteria: [criteria.ROCK, criteria.HEAVY, criteria.GREASY_SEVENTIES],
        selectedTrackTitle: 'Red Sea',
        selectedTrackYtId: 'LAo8e-rjJR0',
        spotifyId: null,
        deezerId: '6129509',
        designers: ['Rick Breach'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'weather_report_black_market',
        title: 'Black Market',
        artist: 'Weather Report',
        year: 1976,
        country: regions.USA,
        cover: '.jpg',
        criteria: [criteria.CONCEPT, criteria.INSTRUMENTAL, criteria.JAM, criteria.JAZZ, criteria.JAZZY_GROOVY, criteria.SOFT_SEVENTIES],
        selectedTrackTitle: 'Herandu',
        selectedTrackYtId: '_A4FqKg0c_A',
        spotifyId: '2OJTGgC8JfbpohsInwv6u5',
        deezerId: '2923691',
        designers: ['David McMacken', 'Maxine Zawinul'],
        similarAlbums: [],
        isAGem: true,
        description: `A fully instrumental album that draws influences from African music. The chemistry between the musicians is perceptible as the tracks come one after another all equally groovy, masterly sketching a mellow mood, making the album a reference in the Jazz Fusion school.`
    },
    {
        id: 'weidorje_weidorje',
        title: 'Weidorje',
        artist: 'Weidorje',
        year: 1978,
        country: regions.FRANCE,
        cover: '.jpg',
        criteria: [criteria.ODD_RHYTHM, criteria.INSTRUMENTAL, criteria.LENGTHY_TRACKS, criteria.C_PSYCHE, criteria.C_JAZZ, criteria.C_ELECTRO, criteria.ZEUHL, criteria.SCI_FI],
        selectedTrackTitle: 'Booldemug',
        selectedTrackYtId: '3UyB0hlR6nw',
        spotifyId: '1r6Ka4P0lSPeklmyhRBMiY',
        deezerId: '454495',
        designers: ['Klaus Blasquiz'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'welcome_welcome',
        title: 'Welcome',
        artist: 'Welcome',
        year: 1976,
        country: regions.SWITZERLAND,
        cover: '.jpg',
        criteria: [criteria.SYMPHONIC, criteria.GLITTER, criteria.JAZZY_GROOVY],
        selectedTrackTitle: 'Chain Of Days',
        selectedTrackYtId: '41Wa9Nbketo',
        spotifyId: null,
        deezerId: null,
        designers: ['Michael Bennett'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'white_wing_white_wing',
        title: 'White Wing',
        artist: 'White Wing',
        year: 1976,
        country: regions.USA,
        cover: '.jpg',
        criteria: [criteria.GLITTER, criteria.ROCK],
        selectedTrackTitle: `Wait 'Til Tomorrow`,
        selectedTrackYtId: 'tl6ARn_xyWA',
        spotifyId: null,
        deezerId: null,
        designers: ['Cindy Berglund'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'willie_nelson_phases_and_stages',
        title: 'Phases And Stages',
        artist: 'Willie Nelson',
        year: 1974,
        country: regions.USA,
        cover: '.jpg',
        criteria: [criteria.FOLK, criteria.SOFT, criteria.CONCEPT, criteria.HUMBLE],
        selectedTrackTitle: `Phases And Stages (Theme) / Walkin'`,
        selectedTrackYtId: 'mET2R6XUBEo',
        spotifyId: '2UUGvJBpRoOQFwDLtq8KCP',
        deezerId: '364587',
        designers: [],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'windchase_symphinity',
        title: 'Simphinity',
        artist: 'Windchase',
        year: 1977,
        country: regions.AUSTRALIA,
        cover: '.jpg',
        criteria: [criteria.ODD_RHYTHM, criteria.JAM, criteria.GLITTER, criteria.SOUND_COLLAGES, criteria.SCI_FI],
        selectedTrackTitle: 'Glad To Be Alive',
        selectedTrackYtId: 'grqGzuSak2s',
        spotifyId: null,
        deezerId: null,
        designers: ['Peter Ledger', 'Cos Russo'],
        similarAlbums: ['cathedral_stained_glass_stories'],
        isAGem: true,
        description: `Electronic elements are used to throw the music in a sci-fi symphonic world, with groovy basslines and orchestral arrangements. Mario Millo and Toivo Pilt composed the album so that listening to it feels like naively exploring new horizons, sometimes mysterious, with rhythm changes inducing speed changes.`
    },
    {
        id: 'windflower_windflower',
        title: 'Windflower',
        artist: 'Windflower',
        year: 1974,
        country: regions.USA,
        cover: '.jpg',
        criteria: [criteria.C_FOLK, criteria.SOFT, criteria.UNCOMMON_INSTRUMENTS],
        selectedTrackTitle: 'Children Of The Loom',
        selectedTrackYtId: 'UDorgp5Db7w',
        spotifyId: null,
        deezerId: null,
        designers: [],
        similarAlbums: [],
        isAGem: true,
        description: `TODO description`
    },
    {
        id: 'winterhawk_revival',
        title: 'Revival',
        artist: 'Winterhawk',
        year: 1982,
        country: regions.USA,
        cover: '.jpg',
        criteria: [criteria.JAM, criteria.ROCK, criteria.HEAVY],
        selectedTrackTitle: 'Period Of Change',
        selectedTrackYtId: 'zDW3m-LaaRc',
        spotifyId: '2t6dNr90wvqb1YvolnoAjg',
        deezerId: '758564',
        designers: [],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'wishbone_ash_wishbone_ash',
        title: 'Wishbone Ash',
        artist: 'Wishbone Ash',
        year: 1970,
        country: regions.ENGLAND,
        cover: '.jpg',
        criteria: [criteria.JAM, criteria.ROCK, criteria.GREASY_SEVENTIES, criteria.HEAVY, criteria.JAM],
        selectedTrackTitle: 'Phoenix',
        selectedTrackYtId: '7WIwkijLCAo',
        spotifyId: '02Y1xOnYuOQAsqr4TqQGio',
        deezerId: '126287',
        designers: ['John C. LePrevost'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'wishbone_ash_pilgrimage',
        title: 'Pilgrimage',
        artist: 'Wishbone Ash',
        year: 1971,
        country: regions.ENGLAND,
        cover: '.jpg',
        criteria: [criteria.ODD_RHYTHM, criteria.JAM, criteria.ROCK],
        selectedTrackTitle: 'Valediction',
        selectedTrackYtId: 'PILotugu-s4',
        spotifyId: '5H0yhHRgZpQ7GLgmNc6gtx',
        deezerId: '124447',
        designers: ['Hipgnosis'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'wishbone_ash_argus',
        title: 'Argus',
        artist: 'Wishbone Ash',
        year: 1972,
        country: regions.ENGLAND,
        cover: '.jpg',
        criteria: [criteria.JAM, criteria.ROCK],
        selectedTrackTitle: 'Sometime World',
        selectedTrackYtId: 'kvLVSPPLZZY',
        spotifyId: '7xEluvnbmFtRB5g66CJ2ND',
        deezerId: '107233',
        designers: ['Hipgnosis'],
        similarAlbums: ['beggars_opera_pathfinder'],
        isAGem: false,
    },
    {
        id: 'wishbone_ash_wishbone_four',
        title: 'Wishbone Four',
        artist: 'Wishbone Ash',
        year: 1973,
        country: regions.ENGLAND,
        cover: '.jpg',
        criteria: [criteria.JAM, criteria.ROCK],
        selectedTrackTitle: 'Ballad Of The Beacon',
        selectedTrackYtId: 'QXoYpY8Px3g',
        spotifyId: '3xRxJdz42lvZFJ8ShQzz9H',
        deezerId: '213025',
        designers: ['Hipgnosis'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'wishbone_ash_theres_the_rub',
        title: `There's The Rub`,
        artist: 'Wishbone Ash',
        year: 1974,
        country: regions.ENGLAND,
        cover: '.jpg',
        criteria: [criteria.JAM, criteria.ROCK],
        selectedTrackTitle: 'Persephone',
        selectedTrackYtId: 'VXQQjXwnbNA',
        spotifyId: '0jhrnGAzi75RYTsfACZMGW',
        deezerId: '40799591',
        designers: ['Hipgnosis'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'wishbone_ash_new_england',
        title: `New England`,
        artist: 'Wishbone Ash',
        year: 1976,
        country: regions.ENGLAND,
        cover: '.jpg',
        criteria: [criteria.SOFT, criteria.ROCK],
        selectedTrackTitle: 'Lonely Island',
        selectedTrackYtId: '-l8SgZIT3Tc',
        spotifyId: '7crIwmJiCRxEJlfKRG43YZ',
        deezerId: '123880',
        designers: ['Hipgnosis'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'wishbone_ash_front_page_news',
        title: `Front Page News`,
        artist: 'Wishbone Ash',
        year: 1977,
        country: regions.ENGLAND,
        cover: '.jpg',
        criteria: [criteria.SOFT, criteria.ROCK, criteria.GLITTER],
        selectedTrackTitle: '714',
        selectedTrackYtId: '2z4KayN9vmw',
        spotifyId: '65WtCdb462v04dT6ntfomI',
        deezerId: '121910',
        designers: ['Hipgnosis', 'Alwyn Clayden'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'wishbone_ash_no_smoke_without_fire',
        title: `No Smoke Without Fire`,
        artist: 'Wishbone Ash',
        year: 1978,
        country: regions.ENGLAND,
        cover: '.jpg',
        criteria: [criteria.ROCK],
        selectedTrackTitle: 'The Way Of The World (Part I)',
        selectedTrackYtId: 'wz2G1L2s3nU',
        spotifyId: '5NKfcsbI3nBy8e8dthzTxH',
        deezerId: '253398',
        designers: ['Colin Elgie'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'wizzard_wizzard_brew',
        title: 'Wizzard Brew',
        artist: 'Wizzard',
        year: 1973,
        country: regions.ENGLAND,
        cover: '.jpg',
        criteria: [criteria.JAM, criteria.LENGTHY_TRACKS, criteria.C_PSYCHE, criteria.ROCK, criteria.HEAVY, criteria.FANFARE, criteria.GREASY_SEVENTIES],
        selectedTrackTitle: 'Meet Me At The Jailhouse',
        selectedTrackYtId: 'sBzeB36zYvU',
        spotifyId: '7FZgX7O5hHOw8n6WdEVle3',
        deezerId: '300763',
        designers: ['Roger Alexander'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'wizzo_band_super_active_wizzo',
        title: 'Super Active Wizzo',
        artist: 'Wizzo Band',
        year: 1977,
        country: regions.ENGLAND,
        cover: '.jpg',
        criteria: [criteria.ODD_RHYTHM, criteria.C_JAZZ, criteria.HEAVY, criteria.FANFARE, criteria.GREASY_SEVENTIES],
        selectedTrackTitle: `Waitin' At This Door`,
        selectedTrackYtId: 'I_Udqw806sA',
        spotifyId: '3KtwEcy5Ob8OW1pSQbrZDZ',
        deezerId: '13913394',
        designers: ['Dave Field'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'wlud_second',
        title: 'Second',
        artist: 'WLUD',
        year: 1979,
        country: regions.FRANCE,
        cover: '.jpg',
        criteria: [criteria.C_ELECTRO, criteria.GLITTER, criteria.INSTRUMENTAL, criteria.ODD_RHYTHM, criteria.SYMPHONIC],
        selectedTrackTitle: 'Rocky',
        selectedTrackYtId: null,
        spotifyId: '6IDs4GRykuwp801O60BWdW',
        deezerId: '432180',
        designers: ['Graphic Saloon'],
        similarAlbums: [],
        isAGem: false, // TODO maybe true
    },
    {
        id: 'womega_a_quick_step',
        title: 'A Quick Step',
        artist: 'Womega',
        year: 1975,
        country: regions.BELGIUM,
        cover: '.jpg',
        criteria: [criteria.ODD_RHYTHM, criteria.UNCOMMON_INSTRUMENTS, criteria.JAZZY_GROOVY],
        selectedTrackTitle: `Nympho's Belly Button`,
        selectedTrackYtId: 'rGIXIlhiP7w',
        spotifyId: null,
        deezerId: null,
        designers: ['GJos Vanlessen'],
        similarAlbums: [],
        isAGem: true,
        description: `TODO Description`,
    },
    {
        id: 'the_world_of_oz_the_world_of_oz',
        title: 'The World Of Oz',
        artist: 'The World Of Oz',
        year: 1969,
        country: regions.ENGLAND,
        cover: '.jpg',
        criteria: [criteria.SOUNDTRACK, criteria.CONCEPT, criteria.FANFARE, criteria.ORCHESTRAL_PARTS, criteria.BAROQUE, criteria.ROCK_OPERA, criteria.C_FOLK],
        selectedTrackTitle: 'Bring The Ring',
        selectedTrackYtId: 'K_u2b8Hl-Kk',
        spotifyId: null,
        deezerId: '7243452',
        designers: ['David Anstey'],
        similarAlbums: ['roger_glover_the_butterfly_ball_and_the_grasshoppers_feast'],
        isAGem: false,
    },
    {
        id: 'woody_kern_the_awful_disclosures_of_maria_monk',
        title: 'The Awful Disclosures Of Maria Monk',
        artist: 'Woody Kern',
        year: 1969,
        country: regions.ENGLAND,
        cover: '.jpg',
        criteria: [criteria.BLUESY, criteria.ROCK, criteria.C_PSYCHE, criteria.JAM],
        selectedTrackTitle: `Tell Ya I'm Gone`,
        selectedTrackYtId: '2TzzPRtRaEI',
        spotifyId: '0eeedjZiTVPTuuqm8i8W5t',
        deezerId: '13937378',
        designers: [],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'writing_on_the_wall_the_power_of_the_picts',
        title: 'The Power Of The Picts',
        artist: 'Writing On The Wall',
        year: 1969,
        country: regions.SCOTLAND,
        cover: '.jpg',
        criteria: [criteria.GREASY_SEVENTIES, criteria.C_PSYCHE, criteria.HEAVY, criteria.UNCOMMON_INSTRUMENTS],
        selectedTrackTitle: 'Aries',
        selectedTrackYtId: 'fCg4BuJsIIA',
        spotifyId: '3u5tEJ638nYlBmmc6jIUZg',
        deezerId: null,
        designers: [],
        similarAlbums: ['warhorse_vultures', 'the_crazy_world_of_arthur_brown_the_crazy_world_of_arthur_brown'],
        isAGem: false,
    },
    {
        id: 'wurtemberg_rock_fantasia_opus_nine',
        title: 'Rock Fantasia Opus 9',
        artist: 'Wurtemberg',
        year: 1980,
        country: regions.FRANCE,
        cover: '.jpg',
        criteria: [criteria.PIANO, criteria.BAROQUE, criteria.C_FOLK, criteria.UNCOMMON_INSTRUMENTS, criteria.MEDIEVAL, criteria.INSTRUMENTAL],
        selectedTrackTitle: 'Concerto Pour Un Minot',
        selectedTrackYtId: null,
        spotifyId: '09kYZLYnmtlm2H2lyUPDUL',
        deezerId: '440475',
        designers: [],
        similarAlbums: [],
        isAGem: false,
    },
]

export default albums