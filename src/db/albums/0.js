import { regions } from "../regions"
import { criteria } from "../criteria"

/**
 * @type {Array.<import(".").Album>}
 */
const albums = [
    {
        id: "zero_point_seven_hundred_and_twenty_aleacion_zero_point_seven_hundred_and_twenty_aleacion",
        title: "0.720 Aleación",
        artist: "0.720 Aleación",
        year: 1986,
        country: regions.MEXICO,
        criteria: [criteria.INSTRUMENTAL, criteria.ODD_RHYTHM, criteria.UNCOMMON_INSTRUMENTS, criteria.C_FOLK, criteria.SPANISH],
        selectedTrackTitle: "Tarahumara",
        selectedTrackYtId: "j64PAIWYwYg",
        spotifyId: "2BIA7hOEzPqMCzSLgLyqvl",
        deezerId: "3611421",
        designers: [],
        similarAlbums: [],
        isAGem: true,
        description: `TODO description`,
    },
    {
        id: "three_to_the_power_of_three",
        title: "...To The Power Of Three",
        artist: "3",
        year: 1988,
        country: regions.ENGLAND,
        criteria: [criteria.ROCK, criteria.C_ELECTRO, criteria.GLITTER, criteria.NEO_EIGHTIES, criteria.SPECTACULAR, criteria.ARENA],
        selectedTrackTitle: "Desde La Vida",
        selectedTrackYtId: "gy6rJI9-fRk",
        spotifyId: "2LEJ4JpSDbMK3M9RNGEYCC",
        deezerId: null,
        designers: ["Cream"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "tencc_tencc",
        title: "10cc",
        artist: "10cc",
        year: 1973,
        country: regions.ENGLAND,
        criteria: [criteria.FUNNY, criteria.ROCK, criteria.GREASY_SEVENTIES],
        selectedTrackTitle: "Sand In My Face",
        selectedTrackYtId: "0OJKkzAgE48",
        spotifyId: "1NefUKCblMkMNlspyQrJEH",
        deezerId: "121988532",
        designers: ["David Anstey", "Lol Creme"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "tencc_sheet_music",
        title: "Sheet Music",
        artist: "10cc",
        year: 1974,
        country: regions.ENGLAND,
        criteria: [criteria.ROCK, criteria.GREASY_SEVENTIES, criteria.UNCOMMON_INSTRUMENTS, criteria.FANFARE],
        selectedTrackTitle: "Clockwork Creep",
        selectedTrackYtId: "ipm2wm5Exik",
        spotifyId: "0sOJ1TztxZdEfUbX7f1CZO",
        deezerId: "121989902",
        designers: ["Hipgnosis", "Maurice Tate", "George Hardie"],
        similarAlbums: ["queen_sheer_heart_attack"],
        isAGem: false,
    },
    {
        id: "tencc_the_original_soundtrack",
        title: "The Original Soundtrack",
        artist: "10cc",
        year: 1975,
        country: regions.ENGLAND,
        criteria: [criteria.SOUND_COLLAGES, criteria.FANFARE, criteria.PIANO],
        selectedTrackTitle: "Une Nuit À Paris",
        selectedTrackYtId: "k0puHKg_CjQ",
        spotifyId: "1CMgmJjMFskwwmK8h8j1Oj",
        deezerId: "162124",
        designers: ["Hipgnosis", "Humphrey Ocean"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "tencc_how_dare_you",
        title: "How Dare You!",
        artist: "10cc",
        year: 1976,
        country: regions.ENGLAND,
        criteria: [criteria.FANFARE, criteria.ART_POP],
        selectedTrackTitle: `I'm Mandy Fly Me`,
        selectedTrackYtId: "Wv8N6zSzL7k",
        spotifyId: "3NdgPq01qSa5PP5mpaKuV4",
        deezerId: "122655",
        designers: ["Hipgnosis", "George Hardie"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "tencc_deceptive_bends",
        title: "Deceptive Bends",
        artist: "10cc",
        year: 1977,
        country: regions.ENGLAND,
        criteria: [criteria.ART_POP],
        selectedTrackTitle: `Feel The Benefit`,
        selectedTrackYtId: "5HcxhcSlTc4",
        spotifyId: "6D3RQD5AQZ4P2aDzsZmBI4",
        deezerId: "119948",
        designers: ["Hipgnosis"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "tencc_bloody_tourists",
        title: "Bloody Tourists",
        artist: "10cc",
        year: 1978,
        country: regions.ENGLAND,
        criteria: [criteria.ART_POP],
        selectedTrackTitle: `From Rochdale To Ocho Rios`,
        selectedTrackYtId: "fpx-0OdVtpM",
        spotifyId: "3MecVG0PeBObAhjwEAczFG",
        deezerId: "2251931",
        designers: ["Hipgnosis"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "tencc_look_hear",
        title: "Look Hear?",
        artist: "10cc",
        year: 1980,
        country: regions.ENGLAND,
        criteria: [criteria.ART_POP],
        selectedTrackTitle: `Strange Lover`,
        selectedTrackYtId: "1gJN4jaWoow",
        spotifyId: "31QbsXQzz5JS0mQDOpL0sU",
        deezerId: "10739530",
        designers: ["Hipgnosis"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "tencc_ten_out_of_10",
        title: "Ten Out Of 10",
        artist: "10cc",
        year: 1981,
        country: regions.ENGLAND,
        criteria: [criteria.ART_POP, criteria.SOFT, criteria.UNCOMMON_INSTRUMENTS],
        selectedTrackTitle: `Les Nouveaux Riches`,
        selectedTrackYtId: "unkBwo8XoIo",
        spotifyId: "4Rxc2Wvgv1cuV5QYfSYzRc",
        deezerId: "9046009",
        designers: ["Visible Ink"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "tencc_windows_in_the_jungle",
        title: "Windows In The Jungle",
        artist: "10cc",
        year: 1983,
        country: regions.ENGLAND,
        criteria: [criteria.ART_POP, criteria.SOFT, criteria.UNCOMMON_INSTRUMENTS],
        selectedTrackTitle: `24 Hours`,
        selectedTrackYtId: "vMvGBMDbALg",
        spotifyId: "54mVXcMNeiedbijf0nkL6V",
        deezerId: "8449261",
        designers: ["Storm Thorgerson"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "thirteenth_floor_elevators_the_psychedelic_sounds_of_the_thirteenth_floor_elevators",
        title: "The Psychedelic Sounds Of The 13th Floor Elevators",
        artist: "13th Floor Elevators",
        year: 1966,
        country: regions.USA,
        criteria: [criteria.C_PSYCHE, criteria.CRISPY_SIXTIES, criteria.ROCK],
        selectedTrackTitle: `Roller Coaster`,
        selectedTrackYtId: "Lt6sT_nX5Ic",
        spotifyId: null,
        deezerId: null,
        designers: ["John Cleveland"],
        similarAlbums: ["jefferson_airplane_surrealistic_pillow"],
        isAGem: false,
    },
    {
        id: "thirteenth_floor_elevators_easter_everywhere",
        title: "Easter Everywhere",
        artist: "13th Floor Elevators",
        year: 1967,
        country: regions.USA,
        criteria: [criteria.C_PSYCHE, criteria.CRISPY_SIXTIES, criteria.ROCK],
        selectedTrackTitle: `Earthquake`,
        selectedTrackYtId: "OUurlw2_teg",
        spotifyId: null,
        deezerId: null,
        designers: ["Flash Graphics"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "thirteenth_floor_elevators_bull_of_the_woods",
        title: "Bull Of The Woods",
        artist: "13th Floor Elevators",
        year: 1968,
        country: regions.USA,
        criteria: [criteria.C_PSYCHE, criteria.CRISPY_SIXTIES, criteria.ROCK, criteria.BLUESY],
        selectedTrackTitle: `Livin' On`,
        selectedTrackYtId: "wWJ6gtcKeoA",
        spotifyId: null,
        deezerId: null,
        designers: ["Lloyd Sepulveda"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "fourteen_bis_fourteen_bis",
        title: "14 Bis",
        artist: "14 Bis",
        year: 1979,
        country: regions.BRAZIL,
        criteria: [criteria.PORTUGUESE, criteria.GLITTER, criteria.UNCOMMON_INSTRUMENTS, criteria.FANFARE, criteria.C_FOLK],
        selectedTrackTitle: `Perdido Em Abbey Road`,
        selectedTrackYtId: "QI78Z_gcBQA",
        spotifyId: "5PHFRCFYGxddKUOAt4FKFi",
        deezerId: "126498832",
        designers: [],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "fourteen_bis_fourteen_bis_ii",
        title: "14 Bis II",
        artist: "14 Bis",
        year: 1980,
        country: regions.BRAZIL,
        criteria: [criteria.PORTUGUESE, criteria.GLITTER, criteria.UNCOMMON_INSTRUMENTS, criteria.LATINO, criteria.BAROQUE], // soundcollage
        selectedTrackTitle: `14 Bis (Instrumental I) / 14 Bis (Instrumental II)`,
        selectedTrackYtId: "M0DB0l4iwZ4",
        spotifyId: "2vUrdZvkJz6qwyAo7Vtum8",
        deezerId: "40600251",
        designers: [],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "the_four_levels_of_existence_the_four_levels_of_existence",
        title: "Τα 4 Επίπεδα Της Ύπαρξης",
        artist: "Τα 4 Επίπεδα Της Ύπαρξης",
        year: 1976,
        country: regions.GREECE,
        criteria: [criteria.GREEK, criteria.GREASY_SEVENTIES, criteria.HEAVY, criteria.ODD_RHYTHM],
        selectedTrackTitle: `Κάποια Μέρα Στην Αθήνα`,
        selectedTrackYtId: "Fi_v7XRZ1sA",
        spotifyId: "2vzR9ZV1aR2bSlZar3JwbV",
        deezerId: null,
        designers: ["Αθανάσιος Αλατάς"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "eight_o_one_eight_o_one_live",
        title: "801 Live",
        artist: "801",
        year: 1976,
        country: regions.ENGLAND,
        criteria: [criteria.LIVE, criteria.JAZZY_GROOVY, criteria.C_ELECTRO, criteria.C_PSYCHE, criteria.SOFT_SEVENTIES, criteria.ODD_RHYTHM, criteria.JAM],
        selectedTrackTitle: "Diamond Head",
        selectedTrackYtId: "4svA6Rzhd_U",
        spotifyId: "6jTcrXW3mOPSDlQrnekktc",
        deezerId: "1252017",
        designers: ["Richard Wallis"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "eighteen_karat_gold",
        title: "All-Bumm",
        artist: "18 Karat Gold",
        year: 1973,
        country: regions.GERMANY,
        criteria: [criteria.C_PSYCHE],
        selectedTrackTitle: "Flying",
        selectedTrackYtId: "YodNgXXyBUk",
        spotifyId: null,
        deezerId: null,
        designers: [],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "nine_half_fly_nine_half_fly",
        title: "9.30 Fly",
        artist: "9.30 Fly",
        year: 1972,
        country: regions.ENGLAND,
        criteria: [criteria.FEMALE, criteria.CRISPY_SIXTIES, criteria.C_FOLK],
        selectedTrackTitle: "Summerdays",
        selectedTrackYtId: "niRW7U7Z4yw",
        spotifyId: "4EkEYseGvJJGJ0otBQAV12",
        deezerId: "12554818",
        designers: ["Gerald Fifer"],
        similarAlbums: [],
        isAGem: true,
        description: `TODO description`,
    },
]

export default albums
