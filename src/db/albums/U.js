import { regions } from "../regions"
import { criteria } from "../criteria"

const albums = [
    {
        id: "ufo_ufo_one",
        title: "UFO 1",
        artist: "UFO",
        year: 1970,
        country: regions.ENGLAND,
        criteria: [criteria.C_PSYCHE, criteria.ROCK, criteria.GREASY_SEVENTIES, criteria.JAM],
        selectedTrackTitle: "Unidentified Flying Object",
        selectedTrackYtId: "n9Ep7ctkziw",
        spotifyId: "64mle6iNvq51hO6D869KLH",
        deezerId: "2606281",
        designers: [],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "ufo_flying",
        title: "Flying",
        artist: "UFO",
        year: 1971,
        country: regions.ENGLAND,
        criteria: [criteria.LENGTHY_TRACKS, criteria.C_PSYCHE, criteria.ROCK, criteria.C_ELECTRO, criteria.JAM],
        selectedTrackTitle: "Flying",
        selectedTrackYtId: "uaY1NkaHGdA",
        spotifyId: "2EXBxhWhbcJjCiJxHb8EUX",
        deezerId: "2606261",
        designers: ["Günter Blum"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "uk_uk",
        title: "U.K.",
        artist: "U.K.",
        year: 1978,
        country: regions.ENGLAND,
        criteria: [criteria.C_JAZZ, criteria.ODD_RHYTHM, criteria.C_ELECTRO, criteria.SOFT_SEVENTIES, criteria.TRANSITION, criteria.JAM, criteria.TECHNICAL],
        selectedTrackTitle: "In The Dead Of Night",
        selectedTrackYtId: "hMu7XUc9OcI",
        spotifyId: "75z31r1se3YTcaPwmFJtp7",
        deezerId: "301435",
        designers: ["Nicholas De Ville"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "uk_danger_money",
        title: "Danger Money",
        artist: "U.K.",
        year: 1979,
        country: regions.ENGLAND,
        criteria: [criteria.C_JAZZ, criteria.ODD_RHYTHM, criteria.C_ELECTRO, criteria.SOFT_SEVENTIES, criteria.JAM, criteria.TECHNICAL],
        selectedTrackTitle: "Carrying No Cross",
        selectedTrackYtId: "ngqSL4tZGos",
        spotifyId: null,
        deezerId: null,
        designers: ["Hipgnosis"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "ultimate_spinach_ultimate_spinach",
        title: "Ultimate Spinach",
        artist: "Ultimate Spinach",
        year: 1968,
        country: regions.USA,
        criteria: [criteria.C_PSYCHE, criteria.ROCK, criteria.CRISPY_SIXTIES, criteria.FEMALE],
        selectedTrackTitle: "Ego Trip",
        selectedTrackYtId: "uIy3WOK2-iY",
        spotifyId: "3g1Dzj83jWRcQMCtmLHTka",
        deezerId: "175894",
        designers: ["Richard Sauter", "David Jenks"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "ultimate_spinach_behold_and_see",
        title: "Behold & See",
        artist: "Ultimate Spinach",
        year: 1968,
        country: regions.USA,
        criteria: [criteria.JAM, criteria.C_PSYCHE, criteria.ROCK, criteria.CRISPY_SIXTIES, criteria.FEMALE],
        selectedTrackTitle: "Mind Flowers",
        selectedTrackYtId: "eoj6au1h6m0",
        spotifyId: "2eulQiPbWqjUOTYgJBJ61T",
        deezerId: "6621430",
        designers: ["David Jenks"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "univeria_zekt_the_unnamables",
        title: "Univeria Zekt",
        artist: "Univeria Zekt",
        year: 1972,
        country: regions.FRANCE,
        criteria: [criteria.ZEUHL, criteria.C_JAZZ, criteria.ODD_RHYTHM, criteria.UNCOMMON_INSTRUMENTS],
        selectedTrackTitle: "Ourania",
        selectedTrackYtId: "CAGW466OA7g",
        spotifyId: "3xtcDZm5ZG4XhfAVikMBHO",
        deezerId: "394750",
        designers: ["Duncan"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "univers_zero_univers_zero",
        title: "Univers Zéro",
        artist: "Univers Zéro",
        year: 1977,
        country: regions.BELGIUM,
        criteria: [criteria.ZEUHL, criteria.EXPERIMENTAL, criteria.INSTRUMENTAL, criteria.JAZZ, criteria.ODD_RHYTHM, criteria.LENGTHY_TRACKS, criteria.UNCOMMON_INSTRUMENTS],
        selectedTrackTitle: "Docteur Petiot",
        selectedTrackYtId: "1oXy5DycArs",
        spotifyId: "5RR8HGBBHCqFwElMrkrKrB",
        deezerId: "8661343",
        designers: [],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "univers_zero_heresie",
        title: "Hérésie",
        artist: "Univers Zéro",
        year: 1979,
        country: regions.BELGIUM,
        criteria: [criteria.EXPERIMENTAL, criteria.INSTRUMENTAL, criteria.LENGTHY_TRACKS, criteria.UNCOMMON_INSTRUMENTS, criteria.C_PSYCHE, criteria.OCCULT],
        selectedTrackTitle: "Jack The Ripper",
        selectedTrackYtId: "pyb3it1j24U",
        spotifyId: "68fWbPDzZMjOoLGabHVHmn",
        deezerId: "8676753",
        designers: ["A.R.C. Dael"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "univers_zero_ceux_du_dehors",
        title: "Ceux Du Dehors",
        artist: "Univers Zéro",
        year: 1981,
        country: regions.BELGIUM,
        criteria: [criteria.EXPERIMENTAL, criteria.INSTRUMENTAL, criteria.LENGTHY_TRACKS, criteria.UNCOMMON_INSTRUMENTS, criteria.C_PSYCHE, criteria.ODD_RHYTHM, criteria.TECHNICAL, criteria.SOPHISTICATED],
        selectedTrackTitle: "Dense",
        selectedTrackYtId: "N2z01xngKKU",
        spotifyId: "1J0tUfb0y6YHoKF4uGCOzA",
        deezerId: "8676769",
        designers: ["Annie De Bruecker"],
        similarAlbums: [],
        isAGem: false, // TODO Maybe true
    },
    {
        id: "univers_zero_uzed",
        title: "Uzed",
        artist: "Univers Zéro",
        year: 1984,
        country: regions.BELGIUM,
        criteria: [criteria.EXPERIMENTAL, criteria.INSTRUMENTAL, criteria.LENGTHY_TRACKS, criteria.UNCOMMON_INSTRUMENTS, criteria.C_PSYCHE, criteria.ODD_RHYTHM, criteria.TECHNICAL, criteria.SOPHISTICATED],
        selectedTrackTitle: "Présage",
        selectedTrackYtId: "qjK72xY8BWs",
        spotifyId: "333eNumS6ajTH4iY4RJH3V",
        deezerId: "8706189",
        designers: ["Guy Denis"],
        similarAlbums: [],
        isAGem: false, // TODO Maybe true as well!
    },
    {
        id: "univers_zero_heatwave",
        title: "Heatwave",
        artist: "Univers Zéro",
        year: 1987,
        country: regions.BELGIUM,
        criteria: [criteria.EXPERIMENTAL, criteria.INSTRUMENTAL, criteria.LENGTHY_TRACKS, criteria.UNCOMMON_INSTRUMENTS, criteria.C_ELECTRO, criteria.C_PSYCHE, criteria.ODD_RHYTHM, criteria.SOPHISTICATED],
        selectedTrackTitle: "Heatwave",
        selectedTrackYtId: "O5b0pJTezoE",
        spotifyId: null,
        deezerId: null,
        designers: ["Marie-Noêlle Dufromont"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "urban_sax_urban_sax",
        title: "Urban Sax",
        artist: "Urban Sax",
        year: 1977,
        country: regions.FRANCE,
        criteria: [criteria.ODD_RHYTHM, criteria.EXPERIMENTAL, criteria.INSTRUMENTAL, criteria.LENGTHY_TRACKS, criteria.AMBIENT, criteria.C_PSYCHE, criteria.JAZZ],
        selectedTrackTitle: "Urban Sax (Part I)",
        selectedTrackYtId: "q01oHWFqVqM",
        spotifyId: "71YRJRyqklF7a8maAe8COJ",
        deezerId: "8895469",
        designers: ["Patrick Alexandre"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "uriah_heep_very_eavy_very_umble",
        title: `...Very 'Eavy ...Very 'Umble`,
        artist: "Uriah Heep",
        year: 1970,
        country: regions.ENGLAND,
        criteria: [criteria.ROCK, criteria.HEAVY, criteria.GREASY_SEVENTIES, criteria.JAM],
        selectedTrackTitle: "Gypsy",
        selectedTrackYtId: "b_5CgNbo0ns",
        spotifyId: "6P97mLQaNkyKfY0AWfGHVT",
        deezerId: "13944256",
        designers: ["Design Machine", "Robin Nicol"],
        similarAlbums: ["deep_purple_in_rock"],
        isAGem: false,
    },
    {
        id: "uriah_heep_demons_and_wizards",
        title: "Demons And Wizards",
        artist: "Uriah Heep",
        year: 1972,
        country: regions.ENGLAND,
        criteria: [criteria.ROCK, criteria.HEAVY, criteria.FANTASY, criteria.GREASY_SEVENTIES],
        selectedTrackTitle: "The Spell",
        selectedTrackYtId: "w5L-AOGt7qw",
        spotifyId: "0kOW78XBGL598LEvB2JjAz",
        deezerId: "15679320",
        designers: ["Roger Dean"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "uriah_heep_the_magicians_birthday",
        title: `The Magician's Birthday`,
        artist: "Uriah Heep",
        year: 1972,
        country: regions.ENGLAND,
        criteria: [criteria.ROCK, criteria.HEAVY, criteria.FANTASY, criteria.GREASY_SEVENTIES],
        selectedTrackTitle: `The Magician's Birthday`,
        selectedTrackYtId: "apWKh3D9oVw",
        spotifyId: "7mfX6R2LiMxljsvL1jFndR",
        deezerId: "13944752",
        designers: ["Roger Dean"],
        similarAlbums: [],
        isAGem: false,
    },
]

export default albums
