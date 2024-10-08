import { regions } from "../regions"
import { criteria } from "../criteria"

/**
 * @type {Array.<import(".").Album>}
 */
const albums = [
    {
        id: "ia_and_batiste_un_gran_dia",
        title: "Un Gran Día",
        artist: "Ia & Batiste",
        year: 1972,
        country: regions.SPAIN,
        criteria: [criteria.SPANISH, criteria.C_FOLK, criteria.ART_POP, criteria.BAROQUE, criteria.TRANSITION, criteria.UNCOMMON_INSTRUMENTS],
        selectedTrackTitle: "Sleeping Rock",
        selectedTrackYtId: "6D3pAXUcqTc",
        spotifyId: "699vHeE8vBrQ1G2PH37AM6",
        deezerId: "10076744",
        designers: ["Jordi Batiste"],
        similarAlbums: [],
        isAGem: false,
    },
    // TODO INTROUVABLE - Ia & Batiste - Chichonera's Cat - 1975
    {
        id: "ian_gillan_band_child_in_time",
        title: "Child In Time",
        artist: "Ian Gillan Band",
        year: 1976,
        country: regions.ENGLAND,
        criteria: [criteria.ROCK, criteria.HEAVY],
        selectedTrackTitle: "Let It Slide",
        selectedTrackYtId: "LGSLgGhtZNw",
        spotifyId: null,
        deezerId: null,
        designers: ["Dan Fern"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "ian_gillan_band_clear_air_turbulence",
        title: "Clear Air Turbulence",
        artist: "Ian Gillan Band",
        year: 1977,
        country: regions.ENGLAND,
        criteria: [criteria.C_ELECTRO, criteria.JAZZY_GROOVY, criteria.TRANSITION, criteria.UNCOMMON_INSTRUMENTS, criteria.JAM],
        selectedTrackTitle: "Clear Air Turbulence",
        selectedTrackYtId: "sh9yY0-Vcgo",
        spotifyId: "7hOVBrnihRibV6139Oswc4",
        deezerId: "446934",
        designers: ["Chris Foss"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "ian_gillan_band_scarabus",
        title: "Scarabus",
        artist: "Ian Gillan Band",
        year: 1977,
        country: regions.ENGLAND,
        criteria: [criteria.ROCK, criteria.JAZZY_GROOVY, criteria.ODD_RHYTHM, criteria.SOFT_SEVENTIES],
        selectedTrackTitle: `Fool's Mate`,
        selectedTrackYtId: "tYrx-IEe9RQ",
        spotifyId: "3pNyqEHh31xUCa2nbMxMG7",
        deezerId: "513946",
        designers: [],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "ibio_cuevas_de_altamira",
        title: "Cuevas De Altamira",
        artist: "Ibio",
        year: 1978,
        country: regions.SPAIN,
        criteria: [criteria.INSTRUMENTAL, criteria.SYMPHONIC, criteria.SPANISH, criteria.C_ELECTRO, criteria.GLITTER],
        selectedTrackTitle: `La Baila De Ibio`,
        selectedTrackYtId: "MZU82X4aY5o",
        spotifyId: "7JHzOcKxQZVRAeAHIHjjSn",
        deezerId: "365648",
        designers: ["Mario Gómez Calderón"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "icecross_icecross",
        title: "Icecross",
        artist: "Icecross",
        year: 1973,
        country: regions.ICELAND,
        criteria: [criteria.OCCULT, criteria.C_PSYCHE, criteria.HEAVY],
        selectedTrackTitle: `1999`,
        selectedTrackYtId: "l7nXWkEmHiU",
        spotifyId: "5Www81c9n28kl1SVJLidd9",
        deezerId: null,
        designers: ["Jón Erlings"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "ikarus_ikarus",
        title: "Ikarus",
        artist: "Ikarus",
        year: 1971,
        country: regions.GERMANY,
        criteria: [criteria.ODD_RHYTHM, criteria.INSTRUMENTAL, criteria.JAM, criteria.LENGTHY_TRACKS, criteria.C_JAZZ, criteria.GREASY_SEVENTIES],
        selectedTrackTitle: "The Raven",
        selectedTrackYtId: "Q09vwl1A9CY",
        spotifyId: "24WaOfzbGpPOlQoUaQWU76",
        deezerId: "63044492",
        designers: ["Paul Sachse"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "illusion_out_of_the_mist",
        title: "Out Of The Mist",
        artist: "Illusion",
        year: 1977,
        country: regions.ENGLAND,
        criteria: [criteria.FEMALE, criteria.PIANO, criteria.SOFT, criteria.ORCHESTRAL_PARTS],
        selectedTrackTitle: "Isadora",
        selectedTrackYtId: "W5oSFKWOLaQ",
        spotifyId: "0Z8pQf8ygNuzwrRdttTntx",
        deezerId: null,
        designers: ["Bloomfield/Travis"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "illusion_illusion",
        title: "Illusion",
        artist: "Illusion",
        year: 1978,
        country: regions.ENGLAND,
        criteria: [criteria.FEMALE, criteria.PIANO, criteria.SOFT, criteria.ORCHESTRAL_PARTS],
        selectedTrackTitle: "The Revolutionary",
        selectedTrackYtId: "r11BnMUxnNw",
        spotifyId: "1JhZlHv6fzIop7tM1cBVyl",
        deezerId: null,
        designers: ["Graves/Aslett Associates"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "iman_califato_independiente_iman_califato_independiente",
        title: "Imán, Califato Independiente",
        artist: "Imán, Califato Independiente",
        year: 1978,
        country: regions.SPAIN,
        criteria: [criteria.LENGTHY_TRACKS, criteria.INSTRUMENTAL, criteria.C_ELECTRO, criteria.JAM, criteria.SPANISH, criteria.SOFT_SEVENTIES, criteria.UNCOMMON_INSTRUMENTS, criteria.ORIENTAL],
        selectedTrackTitle: "Tarantos Del Califato Independiente",
        selectedTrackYtId: "YDtK2UIAclE",
        spotifyId: null,
        deezerId: null,
        designers: [],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "iman_califato_independiente_camino_del_aguila",
        title: "Camino Del Águila",
        artist: "Imán, Califato Independiente",
        year: 1980,
        country: regions.SPAIN,
        criteria: [criteria.LENGTHY_TRACKS, criteria.INSTRUMENTAL, criteria.ORIENTAL, criteria.SOFT_SEVENTIES, criteria.C_FOLK],
        selectedTrackTitle: "La Marcha De Los Enanitos",
        selectedTrackYtId: "9fVaxCLTtzA",
        spotifyId: null,
        deezerId: null,
        designers: [],
        similarAlbums: ["camel_rain_dances"],
        isAGem: true,
        description: `TODO Description`,
    },
    {
        id: "the_incredible_string_band_the_incredible_string_band",
        title: "The Incredible String Band",
        artist: "The Incredible String Band",
        year: 1966,
        country: regions.SCOTLAND,
        criteria: [criteria.UNCOMMON_INSTRUMENTS, criteria.FOLK, criteria.CRISPY_SIXTIES],
        selectedTrackTitle: "Dandelion Blues",
        selectedTrackYtId: "QF2pR4hq02k",
        spotifyId: "0jrTadRWLIYY2sRp2HA2KU",
        deezerId: "687043",
        designers: ["William S. Harvey"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "the_incredible_string_band_the_5000_spirits_or_the_layers_of_the_onion",
        title: "The 5000 Spirits Or The Layers Of The Onion",
        artist: "The Incredible String Band",
        year: 1967,
        country: regions.SCOTLAND,
        criteria: [criteria.ORIENTAL, criteria.UNCOMMON_INSTRUMENTS, criteria.C_PSYCHE, criteria.FOLK, criteria.CRISPY_SIXTIES],
        selectedTrackTitle: "Painting Box",
        selectedTrackYtId: "UoQ3tmohEX4",
        spotifyId: "3htu0UsV5JuouSfugMHNgS",
        deezerId: "687042",
        designers: ["Simon & Marijke"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "the_incredible_string_band_the_hangmans_beautiful_daughter",
        title: `The Hangman's Beautiful Daughter`,
        artist: "The Incredible String Band",
        year: 1968,
        country: regions.SCOTLAND,
        criteria: [criteria.LENGTHY_TRACKS, criteria.ORIENTAL, criteria.UNCOMMON_INSTRUMENTS, criteria.C_PSYCHE, criteria.FOLK, criteria.CRISPY_SIXTIES, criteria.FEMALE],
        selectedTrackTitle: "A Very Cellular Song",
        selectedTrackYtId: "-90rrjR6Wvk",
        spotifyId: "168tPkaBJZKYxSrWDo4n1h",
        deezerId: "687041",
        designers: [],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "the_incredible_string_band_wee_tam",
        title: "Wee Tam",
        artist: "The Incredible String Band",
        year: 1968,
        country: regions.SCOTLAND,
        criteria: [criteria.ORIENTAL, criteria.UNCOMMON_INSTRUMENTS, criteria.C_PSYCHE, criteria.FOLK, criteria.SPIRITUAL, criteria.FEMALE],
        selectedTrackTitle: `Job's Tears`,
        selectedTrackYtId: "Dd5yq76q51c",
        spotifyId: "6MNdP3UdxQeqrfGkBS1BLc",
        deezerId: "687040",
        designers: ["Diogenic Attempts Ltd"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "the_incredible_string_band_the_big_huge",
        title: "The Big Huge",
        artist: "The Incredible String Band",
        year: 1968,
        country: regions.SCOTLAND,
        criteria: [criteria.ORIENTAL, criteria.UNCOMMON_INSTRUMENTS, criteria.C_PSYCHE, criteria.FOLK, criteria.SPIRITUAL, criteria.FEMALE],
        selectedTrackTitle: "Cousin Caterpillar",
        selectedTrackYtId: "nu0brlGGQ2Y",
        spotifyId: "3XIJsxs4sBkEK7aIdFSn00",
        deezerId: "687039",
        designers: ["Diogenic Attempts Ltd"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "indian_summer_indian_summer",
        title: "Indian Summer",
        artist: "Indian Summer",
        year: 1971,
        country: regions.ENGLAND,
        criteria: [criteria.JAM, criteria.JAZZY_GROOVY, criteria.C_JAZZ, criteria.TECHNICAL],
        selectedTrackTitle: "Half Changed Again",
        selectedTrackYtId: "rGRs6ZwzBcY",
        spotifyId: null,
        deezerId: null,
        designers: ["Marcus Keef"],
        similarAlbums: [],
        isAGem: true,
        description: `TODO description`,
    },
    {
        id: "iris_litanies",
        title: "Litanies",
        artist: "Iris",
        year: 1972,
        country: regions.FRANCE,
        criteria: [criteria.FRENCH, criteria.HUMBLE, criteria.SOUND_COLLAGES, criteria.C_PSYCHE, criteria.SYMPHONIC, criteria.UNCOMMON_INSTRUMENTS, criteria.SOFT, criteria.GLITTER],
        selectedTrackTitle: `Donnez-Moi De L'eau`,
        selectedTrackYtId: "eUh5jHcxQKc",
        spotifyId: null,
        deezerId: null,
        designers: ["G. Lochu"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "iron_butterfly_heavy",
        title: "Heavy",
        artist: "Iron Butterfly",
        year: 1968,
        country: regions.USA,
        criteria: [criteria.GREASY_SEVENTIES, criteria.ROCK, criteria.C_PSYCHE],
        selectedTrackTitle: "Iron Butterfly Theme",
        selectedTrackYtId: "ZebFhFwEs9A",
        spotifyId: "1J2sJJSNlSoWAT9JWBEBeW",
        deezerId: "513074",
        designers: ["Armando Busich"],
        similarAlbums: ["uriah_heep_very_eavy_very_umble"],
        isAGem: false,
    },
    {
        id: "iron_butterfly_in_a_gadda_da_vida",
        title: "In-A-Gadda-Da-Vida",
        artist: "Iron Butterfly",
        year: 1968,
        country: regions.USA,
        criteria: [criteria.LENGTHY_TRACKS, criteria.GREASY_SEVENTIES, criteria.ROCK, criteria.C_PSYCHE, criteria.JAM],
        selectedTrackTitle: "In-A-Gadda-Da-Vida",
        selectedTrackYtId: "Tfpn3wHoNGA",
        spotifyId: "4L1Qw49gKwFuQwQovBxsKI",
        deezerId: "7240961",
        designers: ["Loring Eutemey"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "iron_butterfly_ball",
        title: "Ball",
        artist: "Iron Butterfly",
        year: 1969,
        country: regions.USA,
        criteria: [criteria.GREASY_SEVENTIES, criteria.ROCK, criteria.C_PSYCHE],
        selectedTrackTitle: "In The Time Of Our Lives",
        selectedTrackYtId: "jwjsmmM450o",
        spotifyId: "1bN4ZGUSstaxa7pUKBBtxC",
        deezerId: "7245360",
        designers: ["The Graffiteria"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "iron_butterfly_metamorphosis",
        title: "Metamorphosis",
        artist: "Iron Butterfly",
        year: 1970,
        country: regions.USA,
        criteria: [criteria.ROCK, criteria.BLUESY, criteria.LENGTHY_TRACKS, criteria.C_PSYCHE],
        selectedTrackTitle: "Butterfly Bleu",
        selectedTrackYtId: "_-N7DEIKKlo",
        spotifyId: "0ueXh1hstGicPDCxMC7f73",
        deezerId: "364245",
        designers: ["Roger Webster"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "iron_butterfly_scorching_beauty",
        title: "Scorching Beauty",
        artist: "Iron Butterfly",
        year: 1975,
        country: regions.USA,
        criteria: [criteria.ROCK, criteria.C_ELECTRO, criteria.JAM],
        selectedTrackTitle: "Hard Miseree",
        selectedTrackYtId: "sK56mpei-ag",
        spotifyId: null,
        deezerId: null,
        designers: ["Pacific Eye & Ear", "Drew Struzan"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "iron_butterfly_sun_and_steel",
        title: "Sun And Steel",
        artist: "Iron Butterfly",
        year: 1975,
        country: regions.USA,
        criteria: [criteria.ROCK, criteria.UNCOMMON_INSTRUMENTS, criteria.JAM],
        selectedTrackTitle: "Sun And Steel",
        selectedTrackYtId: "w0rz-1fFhYU",
        spotifyId: null,
        deezerId: null,
        designers: [],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "isaiah_isaiah",
        title: "Isaiah",
        artist: "Isaiah",
        year: 1975,
        country: regions.AUSTRIA,
        criteria: [criteria.JAZZY_GROOVY, criteria.UNCOMMON_INSTRUMENTS, criteria.ODD_RHYTHM, criteria.HUMBLE],
        selectedTrackTitle: "Leave It All Behind",
        selectedTrackYtId: "fng7B_u5d10",
        spotifyId: null,
        deezerId: null,
        designers: ["Wolfgang Spahn"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "island_pictures",
        title: "Pictures",
        artist: "Island",
        year: 1977,
        country: regions.SWITZERLAND,
        criteria: [criteria.ODD_RHYTHM, criteria.LENGTHY_TRACKS, criteria.SYMPHONIC, criteria.UNCOMMON_INSTRUMENTS, criteria.C_PSYCHE, criteria.C_JAZZ, criteria.SOPHISTICATED],
        selectedTrackTitle: "Zero",
        selectedTrackYtId: "JY4fRFeJOoE",
        spotifyId: null,
        deezerId: null,
        designers: ["H.R. Giger"],
        similarAlbums: [],
        isAGem: true,
        description: `TODO description`,
    },
    {
        id: "ivory_sad_cypress",
        title: "Sad Cypress",
        artist: "Ivory",
        year: 1980,
        country: regions.GERMANY,
        criteria: [criteria.LENGTHY_TRACKS, criteria.SOFT_SEVENTIES, criteria.C_ELECTRO, criteria.SPANISH, criteria.SYMPHONIC, criteria.ODD_RHYTHM],
        selectedTrackTitle: "Sad Cypress",
        selectedTrackYtId: "ATGkbU0V48M",
        spotifyId: "4qnMQq9AznX3RuWltSI1tA",
        deezerId: "45612",
        designers: [],
        similarAlbums: [],
        isAGem: false,
    },
]

export default albums
