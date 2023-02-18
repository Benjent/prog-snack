import { regions } from "../regions"
import { criteria } from "../criteria"

const albums = [
    {
        id: "kaamos_deeds_and_talks",
        title: "Deeds And Talks",
        artist: "Kaamos",
        year: 1977,
        country: regions.FINLAND,
        criteria: [criteria.C_ELECTRO, criteria.ODD_RHYTHM, criteria.JAM, criteria.SYMPHONIC],
        selectedTrackTitle: "Delightful",
        selectedTrackYtId: "4_n3NWczjnw",
        spotifyId: "6ntmwISsCYSL58kP7m8vxL",
        deezerId: "6629876",
        designers: ["Tapio Kinnunen"],
        similarAlbums: [], // TODO similar kansas
        isAGem: true,
        description: `TODO Description`,
    },
    {
        id: "kaipa_kaipa",
        title: "Kaipa",
        artist: "Kaipa",
        year: 1975,
        country: regions.SWEDEN,
        criteria: [criteria.SWEDISH, criteria.SYMPHONIC, criteria.SOFT, criteria.C_ELECTRO],
        selectedTrackTitle: "Ankaret",
        selectedTrackYtId: "BUGsZtn_NlI",
        spotifyId: "14kr4VwmaiVRlX2LBe4dhM",
        deezerId: "59172662",
        designers: ["Pelle Metérus"],
        similarAlbums: ["focus_moving_waves"],
        isAGem: true,
        description: `TODO description`,
    },
    {
        id: "kaipa_inget_nytt_under_solen",
        title: "Inget Nytt Under Solen",
        artist: "Kaipa",
        year: 1976,
        country: regions.SWEDEN,
        criteria: [criteria.SWEDISH, criteria.SYMPHONIC, criteria.INSTRUMENTAL, criteria.SPECTACULAR, criteria.TOUCHING_VOCALS, criteria.UNCOMMON_INSTRUMENTS],
        selectedTrackTitle: "Skenet Bedrar",
        selectedTrackYtId: "ldWKu5ueUgY",
        spotifyId: "5c2ynbV1R5rJo1PFXQoJVL",
        deezerId: "59017362",
        designers: ["Pelle Metérus"],
        similarAlbums: ["focus_focus_iii"],
        isAGem: false,
    },
    {
        id: "kaipa_solo",
        title: "Solo",
        artist: "Kaipa",
        year: 1977,
        country: regions.SWEDEN,
        criteria: [criteria.SWEDISH, criteria.SYMPHONIC, criteria.ODD_RHYTHM, criteria.JAM, criteria.C_ELECTRO],
        selectedTrackTitle: "Den Skrattande Grevinnan",
        selectedTrackYtId: "vHB1M84hj3I",
        spotifyId: "6XcFdQkodBjuft1XeQHVMu",
        deezerId: "59174642",
        designers: ["Lars Holm"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "kaipa_hander",
        title: "Händer",
        artist: "Kaipa",
        year: 1980,
        country: regions.SWEDEN,
        criteria: [criteria.SWEDISH, criteria.NEO_EIGHTIES, criteria.ART_POP, criteria.SOFT, criteria.C_ELECTRO],
        selectedTrackTitle: "Regn",
        selectedTrackYtId: "CQxtSXrR-OI",
        spotifyId: null,
        deezerId: null,
        designers: ["Ermalm's Egenart"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "kaipa_nattdjurstid",
        title: "Nattdjurstid",
        artist: "Kaipa",
        year: 1982,
        country: regions.SWEDEN,
        criteria: [criteria.SWEDISH, criteria.NEO_EIGHTIES, criteria.ART_POP, criteria.SOFT, criteria.C_ELECTRO],
        selectedTrackTitle: "Identitetskris",
        selectedTrackYtId: "qgR4tDGDyG4",
        spotifyId: "17gyX2CBsza4InyWaKICjw",
        deezerId: "59113702",
        designers: ["Håkan Uppgren"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "kak_kak",
        title: "Kak",
        artist: "Kak",
        year: 1969,
        country: regions.USA,
        criteria: [criteria.CRISPY_SIXTIES, criteria.C_PSYCHE, criteria.ROCK],
        selectedTrackTitle: "Trieulogy: Golgotha / Mirage / Rain",
        selectedTrackYtId: "7gzW6MJijp8",
        spotifyId: "0tQUTlRzthZctE6eajqtQo",
        deezerId: "62446312",
        designers: ["Edward Kasper"],
        similarAlbums: ["jefferson_airplane_volunteers"],
        isAGem: false,
    },
    {
        id: "kaleidoscope_tangerine_dream",
        title: "Tangerine Dream",
        artist: "Kaleidoscope",
        year: 1967,
        country: regions.ENGLAND,
        criteria: [criteria.CRISPY_SIXTIES, criteria.C_PSYCHE, criteria.BAROQUE],
        selectedTrackTitle: "Dive Into Yesterday",
        selectedTrackYtId: "7gzW6MJijp8",
        spotifyId: null,
        deezerId: "53942002",
        designers: [],
        similarAlbums: [], // TODO similar the hollies
        isAGem: false,
    },
    {
        id: "kaleidoscope_faintly_blowing",
        title: "Faintly Blowing",
        artist: "Kaleidoscope",
        year: 1969,
        country: regions.ENGLAND,
        criteria: [criteria.CRISPY_SIXTIES, criteria.C_PSYCHE, criteria.BAROQUE, criteria.C_FOLK],
        selectedTrackTitle: "Music",
        selectedTrackYtId: null,
        spotifyId: null,
        deezerId: null,
        designers: ["Robin Nicol", "Johnny Clamp"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "kanguru_dreaming",
        title: "Dreaming",
        artist: "Kanguru",
        year: 1976,
        country: regions.AUSTRALIA,
        criteria: [criteria.INSTRUMENTAL, criteria.JAM, criteria.LENGTHY_TRACKS, criteria.SOFT, criteria.ORIENTAL, criteria.AMBIENT, criteria.UNCOMMON_INSTRUMENTS, criteria.C_PSYCHE, criteria.FEMALE],
        selectedTrackTitle: "Ras Lila",
        selectedTrackYtId: "eNTd_BY_zsI",
        spotifyId: null,
        deezerId: null,
        designers: [],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "kansas_kansas",
        title: "Kansas",
        artist: "Kansas",
        year: 1974,
        country: regions.USA,
        criteria: [criteria.ODD_RHYTHM, criteria.SYMPHONIC, criteria.HEAVY, criteria.C_FOLK, criteria.JAM],
        selectedTrackTitle: "Aperçu",
        selectedTrackYtId: "y9SWITyQjmQ",
        spotifyId: "5DwyFzATQVpvXqG4HXaJMj",
        deezerId: "75348",
        designers: ["John Steuart Curry"],
        similarAlbums: ["bloodrock_passage"],
        isAGem: false,
    },
    {
        id: "kansas_song_for_america",
        title: "Song For America",
        artist: "Kansas",
        year: 1975,
        country: regions.USA,
        criteria: [criteria.ODD_RHYTHM, criteria.SYMPHONIC, criteria.HEAVY, criteria.C_FOLK, criteria.C_ELECTRO, criteria.JAM],
        selectedTrackTitle: "Incomudro - Hymn To The Atman",
        selectedTrackYtId: "QmSdct1_Gfg",
        spotifyId: "0qxtKWBLB8jFFSqEZ56xqM",
        deezerId: "75256",
        designers: ["Peter Lloyd"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "kansas_masque",
        title: "Masque",
        artist: "Kansas",
        year: 1975,
        country: regions.USA,
        criteria: [criteria.ODD_RHYTHM, criteria.SYMPHONIC, criteria.HEAVY, criteria.C_FOLK, criteria.C_ELECTRO],
        selectedTrackTitle: "Icarus - Borne On Wings Of Steel",
        selectedTrackYtId: "Kesio4k-dMU",
        spotifyId: "3ErpZfUzDkjSIjSU3CC4RU",
        deezerId: "78376",
        designers: ["Giuseppe Arcimboldo", "Flournoy Holmes"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "kansas_leftoverture",
        title: "Leftoverture",
        artist: "Kansas",
        year: 1976,
        country: regions.USA,
        criteria: [criteria.ODD_RHYTHM, criteria.SYMPHONIC, criteria.HEAVY, criteria.C_FOLK, criteria.C_ELECTRO],
        selectedTrackTitle: "Miracles Out Of Nowhere",
        selectedTrackYtId: "jseTa7HUIDU",
        spotifyId: "7MejfRSNnrpcLZIxkeZDqR",
        deezerId: "78167",
        designers: ["David McMacken"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "kansas_point_of_know_return",
        title: "Point Of Know Return",
        artist: "Kansas",
        year: 1977,
        country: regions.USA,
        criteria: [criteria.ODD_RHYTHM, criteria.SYMPHONIC, criteria.HEAVY, criteria.C_FOLK, criteria.C_ELECTRO, criteria.TRANSITION, criteria.UNCOMMON_INSTRUMENTS],
        selectedTrackTitle: "The Spider",
        selectedTrackYtId: "eVCNIWdJz_k",
        spotifyId: "6oU298pdPTCQnMx1PYwyUA",
        deezerId: "96016",
        designers: ["Peter Lloyd"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "kansas_monolith",
        title: "Monolith",
        artist: "Kansas",
        year: 1979,
        country: regions.USA,
        criteria: [criteria.ODD_RHYTHM, criteria.C_FOLK, criteria.C_ELECTRO, criteria.JAZZY_GROOVY, criteria.GLITTER, criteria.SOUND_COLLAGES],
        selectedTrackTitle: "A Glimpse Of Home",
        selectedTrackYtId: "6QW_xi-5Gho",
        spotifyId: "4qRDOvTdOTI1qX62pdQZak",
        deezerId: "3093221",
        designers: ["Bruce Wolfe"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "kansas_audiovisions",
        title: "Audio-Visions",
        artist: "Kansas",
        year: 1980,
        country: regions.USA,
        criteria: [criteria.ODD_RHYTHM, criteria.C_FOLK, criteria.C_ELECTRO, criteria.SYMPHONIC, criteria.GLITTER, criteria.ORCHESTRAL_PARTS, criteria.ARENA, criteria.UNCOMMON_INSTRUMENTS],
        selectedTrackTitle: "No One Together",
        selectedTrackYtId: "ZLG0CGQVhRI",
        spotifyId: "6mkFLh2kDYQwIMkCctbGqU",
        deezerId: "3093211",
        designers: ["Peter Lloyd"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "kansas_vinyl_confessions",
        title: "Vinyl Confessions",
        artist: "Kansas",
        year: 1982,
        country: regions.USA,
        criteria: [criteria.ROCK, criteria.ARENA, criteria.C_ELECTRO],
        selectedTrackTitle: "Fair Exchange",
        selectedTrackYtId: "7FoapSZ0EdI",
        spotifyId: "31kDP6XF3s8dIt0iGFS4PX",
        deezerId: "3093231",
        designers: ["Tom Drennon", "Andrew Barnum"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "kansas_power",
        title: "Power",
        artist: "Kansas",
        year: 1986,
        country: regions.USA,
        criteria: [criteria.ROCK, criteria.ODD_RHYTHM, criteria.C_ELECTRO, criteria.ARENA, criteria.NEO_EIGHTIES],
        selectedTrackTitle: "Musicatto",
        selectedTrackYtId: "dgWaIVzEU-w",
        spotifyId: "6ChzE4e8wUyH4wzRRkQYjg",
        deezerId: "1688796",
        designers: ["Andy Engel"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "kate_bush_the_kick_inside",
        title: "The Kick Inside",
        artist: "Kate Bush",
        year: 1978,
        country: regions.ENGLAND,
        criteria: [criteria.ART_POP, criteria.SOFT, criteria.BAROQUE, criteria.TRANSITION, criteria.FEMALE],
        selectedTrackTitle: "Strange Phenomena",
        selectedTrackYtId: "r6NvNBpwQj0",
        spotifyId: "5NKTuBLCYhN0OwqFiGdXd1",
        deezerId: "301656",
        designers: ["Splash Studio"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "kate_bush_lionheart",
        title: "Lionheart",
        artist: "Kate Bush",
        year: 1978,
        country: regions.ENGLAND,
        criteria: [criteria.ART_POP, criteria.SOFT, criteria.BAROQUE, criteria.FEMALE],
        selectedTrackTitle: "Symphony In Blue",
        selectedTrackYtId: "-t7mO529zUg",
        spotifyId: "7qeRejAsyqrM1hw3LwVPYp",
        deezerId: "301654",
        designers: ["John Carder Bush", "Richard Gray"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "kate_bush_never_for_ever",
        title: "Never For Ever",
        artist: "Kate Bush",
        year: 1980,
        country: regions.ENGLAND,
        criteria: [criteria.ART_POP, criteria.SOFT, criteria.BAROQUE, criteria.FEMALE],
        selectedTrackTitle: "The Wedding List",
        selectedTrackYtId: "yKK_2gizAlQ",
        spotifyId: "4MYtX4Kta7FL4NVUE0FYws",
        deezerId: "301642",
        designers: ["Nick Price"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "kate_bush_the_dreaming",
        title: "The Dreaming",
        artist: "Kate Bush",
        year: 1982,
        country: regions.ENGLAND,
        criteria: [criteria.ART_POP, criteria.SOFT, criteria.BAROQUE, criteria.ODD_RHYTHM, criteria.C_ELECTRO, criteria.FEMALE],
        selectedTrackTitle: "Houdini",
        selectedTrackYtId: "McCTH9C9o34",
        spotifyId: "1gRJsaJ7ExC9Q9YdB9ZMC5",
        deezerId: "1063593",
        designers: ["Nick Price", "Kindlight", "Bill Clark"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "kate_bush_hounds_of_love",
        title: "Hounds Of Love",
        artist: "Kate Bush",
        year: 1985,
        country: regions.ENGLAND,
        criteria: [criteria.ART_POP, criteria.SOFT, criteria.ODD_RHYTHM, criteria.C_ELECTRO, criteria.SOUND_COLLAGES, criteria.FEMALE],
        selectedTrackTitle: "Hello Earth",
        selectedTrackYtId: "0S0zNFzK_ns",
        spotifyId: "5BWl0bB1q0TqyFmkBEupZy",
        deezerId: "1063611",
        designers: ["Bill Smith"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "kate_bush_the_sensual_world",
        title: "The Sensual World",
        artist: "Kate Bush",
        year: 1989,
        country: regions.ENGLAND,
        criteria: [criteria.ART_POP, criteria.SOFT, criteria.ODD_RHYTHM, criteria.C_ELECTRO, criteria.SOUND_COLLAGES, criteria.FEMALE],
        selectedTrackTitle: "The Fog",
        selectedTrackYtId: "RIgK6-tmPao",
        spotifyId: "0Bk6rV33JObdtOpjJg0vIy",
        deezerId: "1063594",
        designers: ["Bill Smith", "Kindlight"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "kate_bush_the_red_shoes",
        title: "The Red Shoes",
        artist: "Kate Bush",
        year: 1993,
        country: regions.ENGLAND,
        criteria: [criteria.ART_POP, criteria.SOFT, criteria.C_ELECTRO, criteria.FEMALE],
        selectedTrackTitle: "Lily",
        selectedTrackYtId: "MWaqPOnR5wU",
        spotifyId: "72MmcinutOLOAMic13Edb6",
        deezerId: "1031288",
        designers: ["Peacock Marketing & Design"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "kayak_see_the_sun",
        title: "See The Sun",
        artist: "Kayak",
        year: 1973,
        country: regions.NETHERLANDS,
        criteria: [criteria.SYMPHONIC, criteria.BAROQUE, criteria.GLITTER, criteria.ODD_RHYTHM],
        selectedTrackTitle: "Reason For It All",
        selectedTrackYtId: "q-mLliZutO4",
        spotifyId: "5o0FE0zKwCoXYX2rvY2IcU",
        deezerId: "11539374",
        designers: ["Herman Baas"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "kayak_kayak",
        title: "Kayak",
        artist: "Kayak",
        year: 1974,
        country: regions.NETHERLANDS,
        criteria: [criteria.SYMPHONIC, criteria.BAROQUE, criteria.GLITTER, criteria.C_PSYCHE, criteria.ODD_RHYTHM],
        selectedTrackTitle: "Wintertime",
        selectedTrackYtId: "todo",
        spotifyId: "6I845iSbO5VJPDiQUEFCQK",
        deezerId: "11539324",
        designers: ["Herman Baas"],
        similarAlbums: [], // TODO similar 10cc
        isAGem: false,
    },
    {
        id: "kayak_royal_bed_bouncer",
        title: "Royal Bed Bouncer",
        artist: "Kayak",
        year: 1975,
        country: regions.NETHERLANDS,
        criteria: [criteria.SYMPHONIC, criteria.BAROQUE, criteria.GLITTER, criteria.C_PSYCHE, criteria.C_ELECTRO, criteria.UNCOMMON_INSTRUMENTS, criteria.ODD_RHYTHM, criteria.FANFARE, criteria.TRANSITION],
        selectedTrackTitle: "Bury The World",
        selectedTrackYtId: "vMMgh7BdRU0",
        spotifyId: "69f5x8uyjxILpotUprBTnp",
        deezerId: "48214132",
        designers: ["Cream"],
        similarAlbums: [], // TODO similar elo + lamb lies down?
        isAGem: false, // TODO gem?
    },
    {
        id: "kayak_the_last_encore",
        title: "The Last Encore",
        artist: "Kayak",
        year: 1976,
        country: regions.NETHERLANDS,
        criteria: [criteria.SYMPHONIC, criteria.BAROQUE, criteria.GLITTER, criteria.ODD_RHYTHM, criteria.FANFARE, criteria.ART_POP],
        selectedTrackTitle: "Back To The Front",
        selectedTrackYtId: "qhmPPsmK_Vw",
        spotifyId: "4EVRbR1lJ6gXJqLL1kXaC4",
        deezerId: "6297057",
        designers: ["Fred Hansen"],
        similarAlbums: [], // TODO similar elo + lamb lies down?
        isAGem: false, // TODO gem?
    },
    {
        id: "kayak_starlight_dancer",
        title: "Starlight Dancer",
        artist: "Kayak",
        year: 1977,
        country: regions.NETHERLANDS,
        criteria: [criteria.ORCHESTRAL_PARTS, criteria.ART_POP, criteria.C_ELECTRO, criteria.SOFT_SEVENTIES, criteria.PIANO],
        selectedTrackTitle: "Irene",
        selectedTrackYtId: "nA_FQDSmsCw",
        spotifyId: "6Ypj9krwR3bIIgnpV31kUX",
        deezerId: "629341",
        designers: ["Ronnie Hertz", "Marius van Boordt"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "kayak_phantom_of_the_night",
        title: "Phantom Of The Night",
        artist: "Kayak",
        year: 1978,
        country: regions.NETHERLANDS,
        criteria: [criteria.SOFT_SEVENTIES, criteria.ART_POP, criteria.ORCHESTRAL_PARTS, criteria.FEMALE, criteria.SOFT_SEVENTIES],
        selectedTrackTitle: "No Man's Land",
        selectedTrackYtId: "vtgcfJblxk0",
        spotifyId: "4O2rDbLV3vuGIT0pNhsVqj",
        deezerId: "50254312",
        designers: ["Rens Benerink"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "kayak_periscope_life",
        title: "Merlin",
        artist: "Kayak",
        year: 1980,
        country: regions.NETHERLANDS,
        criteria: [criteria.SYMPHONIC, criteria.BAROQUE, criteria.GLITTER, criteria.ART_POP],
        selectedTrackTitle: "Astral Aliens",
        selectedTrackYtId: "ltOaxSu4Gz0",
        spotifyId: "4Eq6lC8CyqebXUWI5CmmxC",
        deezerId: "6297056",
        designers: ["Rens Benerink", "Govert de Roos"],
        similarAlbums: ["the_alan_parsons_project_eye_in_the_sky"],
        isAGem: false,
    },
    {
        id: "kayak_merlin",
        title: "Merlin",
        artist: "Kayak",
        year: 1981,
        country: regions.NETHERLANDS,
        criteria: [criteria.CONCEPT, criteria.NEO_EIGHTIES, criteria.ODD_RHYTHM, criteria.FANTASY, criteria.C_ELECTRO, criteria.SYMPHONIC, criteria.PIANO],
        selectedTrackTitle: "Merlin",
        selectedTrackYtId: "0siEExxUiic",
        spotifyId: "4JS6UyAprbVJXgVGIxGRpM",
        deezerId: "207299242",
        designers: ["Govert de Roos", "Ollie Sassen"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "keef_hartley_band_the_time_is_near",
        title: "The Time Is Near...",
        artist: "Keef Hartley Band",
        year: 1971,
        country: regions.ENGLAND,
        criteria: [criteria.JAM, criteria.C_FOLK, criteria.ROCK, criteria.JAZZY_GROOVY, criteria.BLUESY],
        selectedTrackTitle: "The Time Is Near",
        selectedTrackYtId: "SIm_uYzdcsA",
        spotifyId: "0pKa943UCMOv0aE5eIKYUA",
        deezerId: "15611242",
        designers: ["Keef Hartley"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "keef_hartley_band_overdog",
        title: "Overdog",
        artist: "Keef Hartley Band",
        year: 1971,
        country: regions.ENGLAND,
        criteria: [criteria.JAM, criteria.C_FOLK, criteria.ROCK, criteria.JAZZY_GROOVY, criteria.BLUESY],
        selectedTrackTitle: "Theme Song / En Route",
        selectedTrackYtId: "76upSLEWHL8",
        spotifyId: "1FRSUQURGB2DV4JnrsFEMO",
        deezerId: "15610516",
        designers: ["West Four", "Keef Hartley"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "khan_space_shanty",
        title: "Space Shanty",
        artist: "Khan",
        year: 1972,
        country: regions.ENGLAND,
        criteria: [criteria.ODD_RHYTHM, criteria.INSTRUMENTAL, criteria.JAM],
        selectedTrackTitle: "Stranded",
        selectedTrackYtId: "tHkYXKlwB9s",
        spotifyId: "75sMiBX4FEfaAdbKNBxPfK",
        deezerId: "13817312",
        designers: ["David Anstey"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "khazad_doom_6_and_a_half",
        title: "Level 6 1/2",
        artist: "Khazad Doom",
        year: 1970,
        country: regions.USA,
        criteria: [criteria.LENGTHY_TRACKS, criteria.CRISPY_SIXTIES, criteria.C_PSYCHE, criteria.FANFARE],
        selectedTrackTitle: "Narcissus",
        selectedTrackYtId: "NlsTHPt-RqM",
        spotifyId: null,
        deezerId: null,
        designers: [],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "kimio_mizutani_a_path_through_haze",
        title: "A Path Through Haze",
        artist: "Kimio Mizutani",
        year: 1971,
        country: regions.JAPAN,
        criteria: [criteria.C_ELECTRO, criteria.C_PSYCHE, criteria.JAM, criteria.INSTRUMENTAL, criteria.GREASY_SEVENTIES, criteria.ODD_RHYTHM, criteria.FEMALE],
        selectedTrackTitle: "Sail In The Sky",
        selectedTrackYtId: "4JvXoBfIa8A",
        spotifyId: "5hUAqSGrsZ7fMMdghB7sRR",
        deezerId: null,
        designers: ["Koichi Chigi", "Kuni Kawachi"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "king_crimson_in_the_court_of_the_crimson_king",
        title: "In The Court Of The Crimson King",
        artist: "King Crimson",
        year: 1969,
        country: regions.ENGLAND,
        criteria: [criteria.ODD_RHYTHM, criteria.LENGTHY_TRACKS, criteria.SOFT, criteria.UNCOMMON_INSTRUMENTS, criteria.C_PSYCHE, criteria.C_JAZZ, criteria.TOUCHING_VOCALS],
        selectedTrackTitle: "The Court Of The Crimson King",
        selectedTrackYtId: "gvCmtHDDuu0",
        spotifyId: null,
        deezerId: null,
        designers: ["Barry Godber"],
        similarAlbums: [],
        isAGem: true,
        description: `A lunatic album that starts with a strident sound but then inverts the mood with soft songs to ultimately display a memorable symphonic performance. The soft parts are held by Greg Lake's vocals and Ian McDonald's flute and clarinet, while Robert Fripp and Michael Giles implicitely put Jazz in the compositions. Just like the cover of the schizoid man, when focusing on specific parts, a veriety of emotions can be interpreted, but overall, an abandonned feeling leaves the biggest trace in the listening experience.`,
    },
    {
        id: "king_crimson_in_the_wake_of_poseidon",
        title: "In The Wake Of Poseidon",
        artist: "King Crimson",
        year: 1970,
        country: regions.ENGLAND,
        criteria: [criteria.ODD_RHYTHM, criteria.LENGTHY_TRACKS, criteria.SOFT, criteria.UNCOMMON_INSTRUMENTS, criteria.C_PSYCHE, criteria.C_JAZZ, criteria.TOUCHING_VOCALS],
        selectedTrackTitle: "In The Wake Of Poseidon",
        selectedTrackYtId: "J1JjOpXsJ7A",
        spotifyId: null,
        deezerId: null,
        designers: ["Tammo De Jongh"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "king_crimson_lizard",
        title: "Lizard",
        artist: "King Crimson",
        year: 1970,
        country: regions.ENGLAND,
        criteria: [criteria.ODD_RHYTHM, criteria.LENGTHY_TRACKS, criteria.C_PSYCHE, criteria.C_JAZZ],
        selectedTrackTitle: "Cirkus",
        selectedTrackYtId: "IYHjPE9ByS4",
        spotifyId: null,
        deezerId: null,
        designers: ["Gini Barris", "Koraz Wallpapers", "CCS"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "king_crimson_islands",
        title: "Islands",
        artist: "King Crimson",
        year: 1971,
        country: regions.ENGLAND,
        criteria: [criteria.ODD_RHYTHM, criteria.C_PSYCHE, criteria.C_JAZZ, criteria.TOUCHING_VOCALS],
        selectedTrackTitle: "Islands",
        selectedTrackYtId: "8UUWBCXa21Y",
        spotifyId: null,
        deezerId: null,
        designers: ["Peter Sinfield"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "king_crimson_larks_tongue_in_aspic",
        title: `Larks' Tongues In Aspic`,
        artist: "King Crimson",
        year: 1973,
        country: regions.ENGLAND,
        criteria: [criteria.ODD_RHYTHM, criteria.LENGTHY_TRACKS, criteria.C_PSYCHE, criteria.C_JAZZ],
        selectedTrackTitle: "Book Of Saturday",
        selectedTrackYtId: null,
        spotifyId: null,
        deezerId: null,
        designers: ["Tantra Designs"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "king_crimson_starless_and_bible_black",
        title: "Starless And Bible Black",
        artist: "King Crimson",
        year: 1974,
        country: regions.ENGLAND,
        criteria: [criteria.ODD_RHYTHM, criteria.LENGTHY_TRACKS, criteria.C_PSYCHE, criteria.C_JAZZ],
        selectedTrackTitle: "Fracture",
        selectedTrackYtId: "ZaD7gk7BTwU",
        spotifyId: null,
        deezerId: null,
        designers: ["Tom Phillips"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "king_crimson_red",
        title: "Red",
        artist: "King Crimson",
        year: 1974,
        country: regions.ENGLAND,
        criteria: [criteria.CONCEPT, criteria.ODD_RHYTHM, criteria.LENGTHY_TRACKS, criteria.HEAVY, criteria.C_PSYCHE, criteria.C_JAZZ, criteria.TOUCHING_VOCALS, criteria.SOPHISTICATED],
        selectedTrackTitle: "Starless",
        selectedTrackYtId: "OfR6_V91fG8",
        spotifyId: null,
        deezerId: null,
        designers: ["John Kosh"],
        similarAlbums: [],
        isAGem: true,
        description: `The band uses a crushing sound and dissonant riffs to install a nerve-racking mood throughout the album. Soft moments are rare, just enough to take our breath, so that it feels that the album drives us in its hypnotic dark race, where the end is a magnificent music representation of despair.`,
    },
    {
        id: "king_crimson_discipline",
        title: "Discipline",
        artist: "King Crimson",
        year: 1981,
        country: regions.ENGLAND,
        criteria: [criteria.ODD_RHYTHM, criteria.C_ELECTRO, criteria.ROCK, criteria.NEO_EIGHTIES],
        selectedTrackTitle: "Frame By Frame",
        selectedTrackYtId: null,
        spotifyId: null,
        deezerId: null,
        designers: ["Peter Saville", "John Kyrk"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "king_crimson_beat",
        title: "Beat",
        artist: "King Crimson",
        year: 1982,
        country: regions.ENGLAND,
        criteria: [criteria.ODD_RHYTHM, criteria.C_ELECTRO, criteria.ROCK, criteria.NEO_EIGHTIES],
        selectedTrackTitle: "Waiting Man",
        selectedTrackYtId: null,
        spotifyId: null,
        deezerId: null,
        designers: ["Rob O'Connor"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "king_crimson_three_of_a_perfect_pair",
        title: "Three Of A Perfect Pair",
        artist: "King Crimson",
        year: 1984,
        country: regions.ENGLAND,
        criteria: [criteria.ODD_RHYTHM, criteria.C_PSYCHE, criteria.C_ELECTRO, criteria.ROCK, criteria.NEO_EIGHTIES],
        selectedTrackTitle: "Three Of A Perfect Pair",
        selectedTrackYtId: null,
        spotifyId: null,
        deezerId: null,
        designers: ["Timothy Earnes", "Peter Willis"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "king_crimson_thrak",
        title: "THRAK",
        artist: "King Crimson",
        year: 1995,
        country: regions.ENGLAND,
        criteria: [criteria.CONCEPT, criteria.ODD_RHYTHM, criteria.TRANSITION, criteria.SYMPHONIC, criteria.UNCOMMON_INSTRUMENTS, criteria.C_PSYCHE, criteria.SOPHISTICATED],
        selectedTrackTitle: "VROOOM",
        selectedTrackYtId: null,
        spotifyId: null,
        deezerId: null,
        designers: ["Bill Smith"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "kingdom_come_galactic_zoo_dossier",
        title: "Galactic Zoo Dossier",
        artist: "Kingdom Come",
        year: 1971,
        country: regions.ENGLAND,
        criteria: [criteria.C_PSYCHE, criteria.HEAVY, criteria.TRANSITION, criteria.SYMPHONIC, criteria.C_ELECTRO],
        selectedTrackTitle: "Simple Man",
        selectedTrackYtId: "DbkZx7xs4yo",
        spotifyId: "5dwmGKF5cQ0samIbPtcaZ8",
        deezerId: null,
        designers: [],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "kingdom_come_kingdom_come",
        title: "Kingdom Come",
        artist: "Kingdom Come",
        year: 1972,
        country: regions.ENGLAND,
        criteria: [criteria.C_PSYCHE, criteria.SOUND_COLLAGES, criteria.ROCK_OPERA, criteria.CONCEPT, criteria.C_ELECTRO, criteria.FUNNY, criteria.TRANSITION],
        selectedTrackTitle: "The Experiment",
        selectedTrackYtId: null,
        spotifyId: "1TL1GjEmukmrQwrsrrYUkk",
        deezerId: null,
        designers: [],
        similarAlbums: [],
        isAGem: true,
        description: `TODO Description`,
    },
    {
        id: "kingdom_come_journey",
        title: "Journey",
        artist: "Kingdom Come",
        year: 1973,
        country: regions.ENGLAND,
        criteria: [criteria.C_PSYCHE, criteria.ELECTRO, criteria.TRANSITION, criteria.NEO_EIGHTIES],
        selectedTrackTitle: "Time Captives",
        selectedTrackYtId: "1PnpK0wb338",
        spotifyId: "2OXgKfhrJfZci3L6ZcjKnv",
        deezerId: null,
        designers: [],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "kiss_music_from_the_elder",
        title: "Music From The Elder",
        artist: "Kiss",
        year: 1981,
        country: regions.USA,
        criteria: [criteria.CONCEPT, criteria.TRANSITION, criteria.GLITTER, criteria.HEAVY, criteria.ORCHESTRAL_PARTS],
        selectedTrackTitle: "Odyssey",
        selectedTrackYtId: "N_ta20wKllM",
        spotifyId: "1J7sLrUoYUrsjhunsgzZpL",
        deezerId: "126547",
        designers: [],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "klaatu_3_47_est",
        title: "3:47 EST",
        artist: "Klaatu",
        year: 1976,
        country: regions.CANADA,
        criteria: [criteria.SYMPHONIC, criteria.C_ELECTRO, criteria.SOUND_COLLAGES, criteria.ART_POP, criteria.ROCK_OPERA, criteria.UNCOMMON_INSTRUMENTS, criteria.FANFARE, criteria.BAROQUE],
        selectedTrackTitle: "Little Neutrino",
        selectedTrackYtId: "yk0Is8-gGSQ",
        spotifyId: "58UcN7f8fECrlCmmLgbDAT",
        deezerId: "13727100",
        designers: ["Ted Jones"],
        similarAlbums: ["the_beatles_sgt_peppers_lonely_hearts_club_band"],
        isAGem: false,
    },
    {
        id: "klaatu_hope",
        title: "Hope",
        artist: "Klaatu",
        year: 1977,
        country: regions.CANADA,
        criteria: [criteria.SYMPHONIC, criteria.ORCHESTRAL_PARTS, criteria.ART_POP, criteria.ROCK_OPERA, criteria.BAROQUE, criteria.TRANSITION],
        selectedTrackTitle: "Around The Universe In Eighty Days",
        selectedTrackYtId: "3-_PQZfRL_o",
        spotifyId: "6LEiIksxaQiQ6uHLKtOKQK",
        deezerId: "13777006",
        designers: ["Ted Jones"],
        similarAlbums: ["electric_light_orchestra_out_of_the_blue"],
        isAGem: false,
    },
    {
        id: "klaatu_sir_army_suit",
        title: "Sir Army Suit",
        artist: "Klaatu",
        year: 1978,
        country: regions.CANADA,
        criteria: [criteria.ART_POP, criteria.HEAVY, criteria.BAROQUE, criteria.SOFT_SEVENTIES, criteria.ELECTRO],
        selectedTrackTitle: "Perpetual Motion Machine",
        selectedTrackYtId: "zFQ6UySenbU",
        spotifyId: "3ion6KUuAZ8j6Hi53fphDY",
        deezerId: "13727148",
        designers: ["Hugh Syme"],
        similarAlbums: [], // TODO 10cc end carrieer
        isAGem: false,
    },
    {
        id: "klaatu_endangered_species",
        title: "Endangered Species",
        artist: "Klaatu",
        year: 1980,
        country: regions.CANADA,
        criteria: [criteria.ROCK],
        selectedTrackTitle: "All Good Things",
        selectedTrackYtId: "bNFCKfyOKcc",
        spotifyId: "0e8o4qrveZYeoFDQc9ygoL",
        deezerId: "13726988",
        designers: ["Ted Jones"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "klaatu_magentalane",
        title: "Magentalane",
        artist: "Klaatu",
        year: 1981,
        country: regions.CANADA,
        criteria: [criteria.ART_POP, criteria.C_ELECTRO, criteria.BAROQUE],
        selectedTrackTitle: `Maybe I'll Move To Mars`,
        selectedTrackYtId: "qDH3bsXoLWs",
        spotifyId: "67voFne6CSj4rpdeFbgmbu",
        deezerId: "7555663",
        designers: ["Ted Jones"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "kvartetten_som_sprangde_kattvals",
        title: "Kattvals",
        artist: "Kvartetten Som Sprängde",
        year: 1973,
        country: regions.SWEDEN,
        criteria: [criteria.INSTRUMENTAL, criteria.UNCOMMON_INSTRUMENTS, criteria.JAZZY_GROOVY, criteria.JAM, criteria.GREASY_SEVENTIES],
        selectedTrackTitle: `Andesamba`,
        selectedTrackYtId: "MiBTCnUBuP0",
        spotifyId: null,
        deezerId: null,
        designers: ["Studio Sjuttio"],
        similarAlbums: [],
        isAGem: false,
    },
]

export default albums
