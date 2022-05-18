import regions from "../regions"
import { criteria } from "../criteria"

const albums = [
    {
        id: "hampton_grease_band_music_to_eat",
        title: "Music To Eat",
        artist: "Hampton Grease Band",
        year: 1971,
        country: regions.USA,
        cover: ".jpg",
        criteria: [criteria.SOFT, criteria.LENGTHY_TRACKS, criteria.UNCOMMON_INSTRUMENTS, criteria.C_PSYCHE, criteria.JAM, criteria.SYMPHONIC, criteria.FUNNY, criteria.ODD_RHYTHM], 
        selectedTrackTitle: "Hendon",
        selectedTrackYtId: "bxFF1xJZqv0",
        spotifyId: "1ehhbLSKFnX2w1FFO3oFz6",
        deezerId: "11428658",
        designers: ["Espy Geissler", "Sam Whiteside", "Mike Holbrook", "Harold Kelling", "Bruce Hampton"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "hannibal_hannibal",
        title: "Hannibal",
        artist: "Hannibal",
        year: 1970,
        country: regions.USA,
        cover: ".jpg",
        criteria: [criteria.LENGTHY_TRACKS, criteria.JAM, criteria.BLUESY, criteria.ROCK, criteria.INSTRUMENTAL],
        selectedTrackTitle: "Winds Of Change",
        selectedTrackYtId: "qFZutJHyWLU",
        spotifyId: "3hK5N9aRKGWZs13Q77SjvU",
        deezerId: "7673821",
        designers: ["Marcus Keef"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "hanuman_hanuman",
        title: "Hanuman",
        artist: "Hanuman",
        year: 1971,
        country: regions.GERMANY,
        cover: ".jpg",
        criteria: [criteria.LENGTHY_TRACKS, criteria.JAM, criteria.GERMAN, criteria.SYMPHONIC, criteria.C_JAZZ],
        selectedTrackTitle: "Schädelstätten",
        selectedTrackYtId: "MAdMDgEJx9U",
        spotifyId: "4NBFGrhmqp2kIdtCAKYEqA",
        deezerId: "1017036",
        designers: ["Caspar Klebusch"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "happy_the_man_happy_the_man",
        title: "Happy The Man",
        artist: "Happy The Man",
        year: 1977,
        country: regions.USA,
        cover: ".jpg",
        criteria: [criteria.ODD_RHYTHM, criteria.INSTRUMENTAL, criteria.GLITTER, criteria.SOFT, criteria.C_JAZZ, criteria.C_ELECTRO, criteria.JAZZY_GROOVY],
        selectedTrackTitle: "Starborne",
        selectedTrackYtId: "7eMlI4MzQks",
        spotifyId: "0y4tO6nOsPafJvofvMLJ4h",
        deezerId: "13890154",
        designers: ["Mary Walsh", "Dennis Luzak"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "happy_the_man_crafty_hands",
        title: "Crafty Hands",
        artist: "Happy The Man",
        year: 1978,
        country: regions.USA,
        cover: ".jpg",
        criteria: [criteria.ODD_RHYTHM, criteria.INSTRUMENTAL, criteria.GLITTER, criteria.SOFT, criteria.C_JAZZ, criteria.C_ELECTRO, criteria.JAZZY_GROOVY],
        selectedTrackTitle: "Morning Sun",
        selectedTrackYtId: "g9B_P36s_-A",
        spotifyId: null,
        deezerId: null,
        designers: ["Mario Grimaldi"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "harmonium_harmonium",
        title: "Harmonium",
        artist: "Harmonium",
        year: 1974,
        country: regions.QUEBEC,
        cover: ".jpg",
        criteria: [criteria.SOFT, criteria.FOLK, criteria.FEMALE],
        selectedTrackTitle: `Un Musicien Parmi Tant D'autres`,
        selectedTrackYtId: "KkDNsKPLXaM",
        spotifyId: null,
        deezerId: null,
        designers: [],
        similarAlbums: ["fiori_seguin_deux_cents_nuits_a_lheure"],
        isAGem: false,
    },
    {
        id: "harmonium_si_on_avait_besoin_dune_cinquieme_saison",
        title: `Si On Avait Besoin D'une Cinquième Saison`,
        artist: "Harmonium",
        year: 1975,
        country: regions.QUEBEC,
        cover: ".jpg",
        criteria: [criteria.LENGTHY_TRACKS, criteria.SOFT, criteria.C_JAZZ, criteria.C_FOLK, criteria.JAZZY_GROOVY, criteria.FEMALE],
        selectedTrackTitle: `Depuis L'automne`,
        selectedTrackYtId: "sCkkxr7tS7c",
        spotifyId: "1o2UqbYkULKaLzkD5VUPlm",
        deezerId: "259495",
        designers: ["Louis-Pierre Bougie"],
        similarAlbums: [],
        isAGem: true,
        description: `TODO description`,
    },
    {
        id: "harmonium_lheptade",
        title: `L'heptade`,
        artist: "Harmonium",
        year: 1976,
        country: regions.QUEBEC,
        cover: ".jpg",
        criteria: [criteria.CONCEPT, criteria.LENGTHY_TRACKS, criteria.SYMPHONIC, criteria.C_JAZZ, criteria.C_FOLK, criteria.ROCK_OPERA, criteria.TOUCHING_VOCALS, criteria.SPIRITUAL, criteria.FEMALE],
        selectedTrackTitle: "Le Premier Ciel",
        selectedTrackYtId: "G8qda-s8Yks",
        spotifyId: "1F82UuPUIGO9EovuErU18m",
        deezerId: "66294302",
        designers: ["Michel Normandeau", "Robert Lussier"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "hatfield_and_the_north_hatfield_and_the_north",
        title: "Hatfield And The North",
        artist: "Hatfield And The North",
        year: 1974,
        country: regions.ENGLAND,
        cover: ".jpg",
        criteria: [criteria.ODD_RHYTHM, criteria.INSTRUMENTAL, criteria.JAM, criteria.SOFT, criteria.C_JAZZ, criteria.FUNNY, criteria.PATCHWORK, criteria.FEMALE],
        selectedTrackTitle: `Son Of There's No Place Like Homerton`,
        selectedTrackYtId: "Qk04cGkff44",
        spotifyId: "4BOWgeJvFkiCg9qa2LYHDk",
        deezerId: "330066",
        designers: ["Laurie Lewis"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "hatfield_and_the_north_the_rotters_club",
        title: `The Rotter's Club`,
        artist: "Hatfield And The North",
        year: 1975,
        country: regions.ENGLAND,
        cover: ".jpg",
        criteria: [criteria.ODD_RHYTHM, criteria.INSTRUMENTAL, criteria.JAM, criteria.LENGTHY_TRACKS, criteria.SOFT, criteria.C_JAZZ, criteria.FUNNY, criteria.FEMALE],
        selectedTrackTitle: "Mumps",
        selectedTrackYtId: "h_MUajIs9Vs",
        spotifyId: "6NqP2oaumNCKtIoxIpgPKj",
        deezerId: "301454",
        designers: ["Laurie Lewis"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "hawkwind_in_search_of_space",
        title: "In Search Of Space",
        artist: "Hawkwind",
        year: 1971,
        country: regions.ENGLAND,
        cover: ".jpg",
        criteria: [criteria.JAM, criteria.LENGTHY_TRACKS, criteria.C_PSYCHE, criteria.C_ELECTRO, criteria.HEAVY, criteria.SPACY, criteria.GREASY_SEVENTIES],
        selectedTrackTitle: "Masters Of The Universe",
        selectedTrackYtId: "X3W7ch0oLeA",
        spotifyId: "1cgsYqtDTMTetu7FjEsIhI",
        deezerId: "300059",
        designers: ["Barney Bubbles"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "hawkwind_doremi_fasol_latido",
        title: "Doremi Fasol Latido",
        artist: "Hawkwind",
        year: 1972,
        country: regions.ENGLAND,
        cover: ".jpg",
        criteria: [criteria.JAM, criteria.C_PSYCHE, criteria.C_ELECTRO, criteria.HEAVY, criteria.SPACY, criteria.GREASY_SEVENTIES],
        selectedTrackTitle: "Time We Left This World Today",
        selectedTrackYtId: "X5SRYtPLDLI",
        spotifyId: "3L8loctj4t0QbqBH3NTcoU",
        deezerId: "319939",
        designers: ["Barney Bubbles"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "hawkwind_hall_of_the_mountain_grill",
        title: "Hall Of The Mountain Grill",
        artist: "Hawkwind",
        year: 1974,
        country: regions.ENGLAND,
        cover: ".jpg",
        criteria: [criteria.JAM, criteria.C_PSYCHE, criteria.C_ELECTRO, criteria.HEAVY, criteria.SPACY, criteria.GREASY_SEVENTIES],
        selectedTrackTitle: "The Psychedelic Warlords",
        selectedTrackYtId: "MvHtfoqcDss",
        spotifyId: "0CIh8QCK9o0mKyzzNWzjUZ",
        deezerId: "330111",
        designers: ["Barney Bubbles"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "hawkwind_warriors_on_the_edge_of_time",
        title: "Warriors On The Edge Of Time",
        artist: "Hawkwind",
        year: 1975,
        country: regions.ENGLAND,
        cover: ".jpg",
        criteria: [criteria.JAM, criteria.C_PSYCHE, criteria.C_ELECTRO, criteria.HEAVY, criteria.SPACY, criteria.SPIRITUAL, criteria.GREASY_SEVENTIES],
        selectedTrackTitle: "Assault And Battery / The Golden Void",
        selectedTrackYtId: "1UIYMxZRLf0",
        spotifyId: "2S5MzNaOk2kXrwmNhMngRV",
        deezerId: "12160332",
        designers: ["Comte Pierre D'Auvergne"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "henry_cow_legend",
        title: "Legend",
        artist: "Henry Cow",
        year: 1973,
        country: regions.ENGLAND,
        cover: ".jpg",
        criteria: [criteria.ODD_RHYTHM, criteria.EXPERIMENTAL, criteria.UNCOMMON_INSTRUMENTS, criteria.C_PSYCHE, criteria.JAZZ],
        selectedTrackTitle: "Amygdala",
        selectedTrackYtId: "t4e-Zq6kPk4",
        spotifyId: null,
        deezerId: null,
        designers: ["Ray Smith"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "henry_cow_unrest",
        title: "Unrest",
        artist: "Henry Cow",
        year: 1974,
        country: regions.ENGLAND,
        cover: ".jpg",
        criteria: [criteria.ODD_RHYTHM, criteria.EXPERIMENTAL, criteria.LENGTHY_TRACKS, criteria.UNCOMMON_INSTRUMENTS, criteria.C_PSYCHE, criteria.JAZZ, criteria.FEMALE],
        selectedTrackTitle: "Half Asleep/Half Awake",
        selectedTrackYtId: "DDLqUcUls6s",
        spotifyId: null,
        deezerId: null,
        designers: ["Ray Smith"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "henry_cow_in_praise_of_learning",
        title: "In Praise Of Learning",
        artist: "Henry Cow",
        year: 1975,
        country: regions.ENGLAND,
        cover: ".jpg",
        criteria: [criteria.ODD_RHYTHM, criteria.EXPERIMENTAL, criteria.LENGTHY_TRACKS, criteria.UNCOMMON_INSTRUMENTS, criteria.C_PSYCHE, criteria.JAZZ, criteria.FEMALE],
        selectedTrackTitle: "Beautiful As The Moon - Terrible As An Army With Banners",
        selectedTrackYtId: "374qf7xCFkY",
        spotifyId: null,
        deezerId: null,
        designers: ["Ray Smith"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "henry_cow_concerts",
        title: "Concerts",
        artist: "Henry Cow",
        year: 1976,
        country: regions.ENGLAND,
        cover: ".jpg",
        criteria: [criteria.ODD_RHYTHM, criteria.EXPERIMENTAL, criteria.LENGTHY_TRACKS, criteria.UNCOMMON_INSTRUMENTS, criteria.JAZZ, criteria.FEMALE, criteria.LIVE, criteria.INSTRUMENTAL],
        selectedTrackTitle: "Bad Alchemy / Little Red Riding Hood Hits The Road",
        selectedTrackYtId: "qF1D9BgftPo",
        spotifyId: null,
        deezerId: null,
        designers: ["Maggie Thomas"],
        similarAlbums: [],
        isAGem: true,
        description: `TODO description`, // TODO experimental BUT listenable!
    },
    {
        id: "henry_cow_western_culture",
        title: "Western Culture",
        artist: "Henry Cow",
        year: 1978,
        country: regions.ENGLAND,
        cover: ".jpg",
        criteria: [criteria.ODD_RHYTHM, criteria.EXPERIMENTAL, criteria.UNCOMMON_INSTRUMENTS, criteria.JAZZ, criteria.INSTRUMENTAL],
        selectedTrackTitle: "Falling Away",
        selectedTrackYtId: "UhDve-qpQ8M",
        spotifyId: null,
        deezerId: null,
        designers: ["Chris Cutler"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "herbie_hancock_sextant",
        title: "Sextant",
        artist: "Herbie Hancock",
        year: 1973,
        country: regions.USA,
        cover: ".jpg",
        criteria: [criteria.ELECTRO, criteria.INSTRUMENTAL, criteria.C_PSYCHE, criteria.LENGTHY_TRACKS, criteria.EXPERIMENTAL, criteria.C_JAZZ, criteria.UNCOMMON_INSTRUMENTS],
        selectedTrackTitle: "Hornets",
        selectedTrackYtId: "IWKmThDn9gM",
        spotifyId: "0J6PpQHDOcr54tXvh1MMCr",
        deezerId: "78436",
        designers: ["Robert Springett"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "herbie_hancock_thrust",
        title: "Thrust",
        artist: "Herbie Hancock",
        year: 1974,
        country: regions.USA,
        cover: ".jpg",
        criteria: [criteria.ODD_RHYTHM, criteria.INSTRUMENTAL, criteria.JAM, criteria.SOFT, criteria.C_ELECTRO, criteria.JAZZ, criteria.JAZZY_GROOVY],
        selectedTrackTitle: "Butterfly",
        selectedTrackYtId: "knbmKDUYDXc",
        spotifyId: "00Uf5PRAinCJ0oiCX1Cv2k",
        deezerId: "78186",
        designers: ["Rob Springett"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "herbie_hancock_man_child",
        title: "Man-Child",
        artist: "Herbie Hancock",
        year: 1975,
        country: regions.USA,
        cover: ".jpg",
        criteria: [criteria.INSTRUMENTAL, criteria.JAM, criteria.SOFT, criteria.C_ELECTRO, criteria.JAZZ, criteria.JAZZY_GROOVY],
        selectedTrackTitle: "Bubbles",
        selectedTrackYtId: "4uNaOnO876s",
        spotifyId: "5ez9bb1h1hOLV8Wb5YCmkj",
        deezerId: "115696",
        designers: ["Dario Campanile"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "herbie_hancock_secrets",
        title: "Secrets",
        artist: "Herbie Hancock",
        year: 1976,
        country: regions.USA,
        cover: ".jpg",
        criteria: [criteria.INSTRUMENTAL, criteria.JAM, criteria.SOFT, criteria.C_ELECTRO, criteria.JAZZ, criteria.JAZZY_GROOVY],
        selectedTrackTitle: "Gentle Thoughts",
        selectedTrackYtId: "JwfsrD792jk",
        spotifyId: "13rwtqLWF1jl1NEDhgbYsw",
        deezerId: "7357907",
        designers: [],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "het_pandorra_ensemble_iii",
        title: "III",
        artist: "Het Pandorra Ensemble",
        year: 1978,
        country: regions.NETHERLANDS,
        cover: ".jpg",
        criteria: [criteria.INSTRUMENTAL, criteria.LENGTHY_TRACKS, criteria.C_JAZZ, criteria.ODD_RHYTHM, criteria.SYMPHONIC, criteria.JAM, criteria.C_PSYCHE],
        selectedTrackTitle: "Karotten",
        selectedTrackYtId: "9ctwxu5iHMI",
        spotifyId: null,
        deezerId: null,
        designers: ["Erik Krabbenbosch"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "high_tide_sea_shanties",
        title: "Sea Shanties",
        artist: "High Tide",
        year: 1969,
        country: regions.ENGLAND,
        cover: ".jpg",
        criteria: [criteria.GREASY_SEVENTIES, criteria.HEAVY, criteria.JAM, criteria.UNCOMMON_INSTRUMENTS],
        selectedTrackTitle: "Pushed, But Not Forgotten",
        selectedTrackYtId: "7ZNPPx98k7k",
        spotifyId: "4ePph9It2qFFDbj9yByznq",
        deezerId: "330460",
        designers: ["Paul Whitehead"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "high_tide_high_tide",
        title: "High Tide",
        artist: "High Tide",
        year: 1970,
        country: regions.ENGLAND,
        cover: ".jpg",
        criteria: [criteria.GREASY_SEVENTIES, criteria.HEAVY, criteria.JAM, criteria.UNCOMMON_INSTRUMENTS, criteria.LENGTHY_TRACKS, criteria.ODD_RHYTHM],
        selectedTrackTitle: "The Joke",
        selectedTrackYtId: "guO46ILhY9I",
        spotifyId: "2llyB6pfedAwMjL5E9tqLq",
        deezerId: "330459",
        designers: [],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "the_hollies_evolution",
        title: "Evolution",
        artist: "The Hollies",
        year: 1967,
        country: regions.ENGLAND,
        cover: ".jpg",
        criteria: [criteria.BAROQUE, criteria.SOFT, criteria.C_PSYCHE, criteria.CRISPY_SIXTIES, criteria.C_FOLK],
        selectedTrackTitle: "Ye Olde Toffee Shoppe",
        selectedTrackYtId: "Xeq1_aFQ9WU",
        spotifyId: "0Jl5lHWji4Wc6Lz3irhXzw",
        deezerId: "11220132",
        designers: ["Seemon & Marijke"],
        similarAlbums: ["the_beatles_magical_mystery_tour"],
        isAGem: false,
    },
    {
        id: "the_hollies_butterfly",
        title: "Butterfly",
        artist: "The Hollies",
        year: 1967,
        country: regions.ENGLAND,
        cover: ".jpg",
        criteria: [criteria.BAROQUE, criteria.SOFT, criteria.C_PSYCHE, criteria.C_FOLK],
        selectedTrackTitle: "Maker",
        selectedTrackYtId: "r1kYqi2ZhqQ",
        spotifyId: "6NdHBsXYc15De3sE00qSWB",
        deezerId: "11219534",
        designers: ["Tony Robins"],
        similarAlbums: ["the_beatles_magical_mystery_tour"],
        isAGem: false,
    },
    {
        id: "the_hollies_confessions_of_the_mind",
        title: "Confessions Of The Mind",
        artist: "The Hollies",
        year: 1970,
        country: regions.ENGLAND,
        cover: ".jpg",
        criteria: [criteria.BAROQUE, criteria.ROCK, criteria.C_FOLK],
        selectedTrackTitle: "Confessions Of A Mind",
        selectedTrackYtId: "Xsnl0PoHZaI",
        spotifyId: "12YClBmrcVkW7GqtR5jtkh",
        deezerId: "11220594",
        designers: ["Trade Platemaking Services"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "horse_horse",
        title: "Horse",
        artist: "Horse",
        year: 1970,
        country: regions.ENGLAND,
        cover: ".jpg",
        criteria: [criteria.GREASY_SEVENTIES, criteria.HEAVY],
        selectedTrackTitle: "See The People Creeping Round",
        selectedTrackYtId: "4ErBgL9KC0E",
        spotifyId: null,
        deezerId: null,
        designers: ["Roger Wootton", "Glen Goring"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "human_egg_human_egg",
        title: "Human Egg",
        artist: "Human Egg",
        year: 1978,
        country: regions.FRANCE,
        cover: ".jpg",
        criteria: [criteria.C_ELECTRO, criteria.SOUND_COLLAGES, criteria.ODD_RHYTHM, criteria.JAZZY_GROOVY],
        selectedTrackTitle: "Delusion",
        selectedTrackYtId: "7DwzDXObP_8",
        spotifyId: "2TmQEAgqoecjpy3rBw2Hdm",
        deezerId: "67461902",
        designers: ["Martine Leprince"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "hungry_wolf_hungry_wolf",
        title: "Hungry Wolf",
        artist: "Hungry Wolf",
        year: 1970,
        country: regions.ENGLAND,
        cover: ".jpg",
        criteria: [criteria.ROCK, criteria.JAM, criteria.INSTRUMENTAL, criteria.JAZZY_GROOVY],
        selectedTrackTitle: "Melanie",
        selectedTrackYtId: "_PUodu168xM",
        spotifyId: null,
        deezerId: null,
        designers: ["Marcus Keef"],
        similarAlbums: [],
        isAGem: false,
    },
]

export default albums
