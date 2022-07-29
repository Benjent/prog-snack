import { regions } from "../regions"
import { criteria } from "../criteria"

const albums = [
    {
        id: "yatha_sidhra_a_meditation_mass",
        title: "A Meditation Mass",
        artist: "Yatha Sidhra",
        year: 1974,
        country: regions.GERMANY,
        cover: ".jpg",
        criteria: [criteria.ORIENTAL, criteria.AMBIENT, criteria.INSTRUMENTAL, criteria.TRANSITION, criteria.LENGTHY_TRACKS, criteria.JAM, criteria.SOFT, criteria.C_PSYCHE, criteria.UNCOMMON_INSTRUMENTS],
        selectedTrackTitle: "A Meditation Mass (Part 3)",
        selectedTrackYtId: "KQGMyob1TK4",
        spotifyId: "0GrGzm48mhWhsqRK8pi1Df",
        deezerId: "215777",
        designers: [],
        similarAlbums: ["amon_duul_paradieswarts_duul"],
        isAGem: false,
    },
    {
        id: "year_one_year_one",
        title: "Year One",
        artist: "Year One",
        year: 1971,
        country: regions.USA,
        cover: ".jpg",
        criteria: [criteria.ODD_RHYTHM, criteria.C_FOLK, criteria.GREASY_SEVENTIES, criteria.UNCOMMON_INSTRUMENTS, criteria.SOPHISTICATED, criteria.JAM],
        selectedTrackTitle: "E = MC²",
        selectedTrackYtId: "clf0byl9gyU",
        spotifyId: null,
        deezerId: null,
        designers: [],
        similarAlbums: [], // TODO circus ?, similar coma_financial_tycoon
        isAGem: true,
        description: `TODO description`,
    },
    {
        id: "yes_yes",
        title: "Yes",
        artist: "Yes",
        year: 1969,
        country: regions.ENGLAND,
        cover: ".jpg",
        criteria: [criteria.GLITTER, criteria.ROCK],
        selectedTrackTitle: "Beyond & Before",
        selectedTrackYtId: "YFcxNnKZGNU",
        spotifyId: "5ohKuf3H4R3JdhP2WmYDYG",
        deezerId: "82952",
        designers: ["Crosby/Fletcher/Forbes"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "yes_time_and_a_word",
        title: "Time And A Word",
        artist: "Yes",
        year: 1970,
        country: regions.ENGLAND,
        cover: ".jpg",
        criteria: [criteria.GLITTER, criteria.ROCK],
        selectedTrackTitle: "Astral Traveller",
        selectedTrackYtId: "q0aXTN_AeKw",
        spotifyId: "6k3pRlamC3srUePKSlUaxJ",
        deezerId: "81492",
        designers: ["Laurence Sackman"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "yes_the_yes_album",
        title: "The Yes Album",
        artist: "Yes",
        year: 1970,
        country: regions.ENGLAND,
        cover: ".jpg",
        criteria: [criteria.ODD_RHYTHM, criteria.TECHNICAL, criteria.GLITTER],
        selectedTrackTitle: "Starship Trooper",
        selectedTrackYtId: "DKftiJS30Cs",
        spotifyId: "4nQe6IzubN7cE7EWzrIvu4",
        deezerId: "81495",
        designers: ["Phil Franks"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "yes_fragile",
        title: "Fragile",
        artist: "Yes",
        year: 1971,
        country: regions.ENGLAND,
        cover: ".jpg",
        criteria: [criteria.ODD_RHYTHM, criteria.TECHNICAL, criteria.EXPERIMENTAL, criteria.GLITTER, criteria.SYMPHONIC, criteria.SOUND_COLLAGES, criteria.BLENDS, criteria.SPECTACULAR, criteria.PATCHWORK],
        selectedTrackTitle: "Roundabout",
        selectedTrackYtId: "-Tdu4uKSZ3M",
        spotifyId: "0dZF93WHyOhTWjz5EWM7yG",
        deezerId: "82947",
        designers: ["Roger Dean"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "yes_close_to_the_edge",
        title: "Close To The Edge",
        artist: "Yes",
        year: 1972,
        country: regions.ENGLAND,
        cover: ".jpg",
        criteria: [criteria.ODD_RHYTHM, criteria.TECHNICAL, criteria.LENGTHY_TRACKS, criteria.GLITTER, criteria.SYMPHONIC, criteria.BLENDS, criteria.SPECTACULAR],
        selectedTrackTitle: "Siberian Khatru",
        selectedTrackYtId: "r0HnIr6jYWU",
        spotifyId: "6344rkGqCBDenGoS7eJlBN",
        deezerId: "82944",
        designers: ["Roger Dean"],
        similarAlbums: [],
        isAGem: true,
        description: `TODO description`,
    },
    {
        id: "yes_tales_from_topographic_oceans",
        title: "Tales From Topographic Oceans",
        artist: "Yes",
        year: 1973,
        country: regions.ENGLAND,
        cover: ".jpg",
        criteria: [criteria.CONCEPT, criteria.ODD_RHYTHM, criteria.EXPERIMENTAL, criteria.LENGTHY_TRACKS, criteria.SYMPHONIC, criteria.ORIENTAL, criteria.C_PSYCHE, criteria.JAZZY_GROOVY, criteria.C_FOLK, criteria.C_ELECTRO, criteria.SPIRITUAL],
        selectedTrackTitle: "The Remembering",
        selectedTrackYtId: "438-Ii_BueM",
        spotifyId: "4kn7nw5uHF6T9biAX5qcrW",
        deezerId: "82939",
        designers: ["Roger Dean"],
        similarAlbums: [],
        isAGem: true,
        description: `TODO description`,
    },
    {
        id: "yes_relayer",
        title: "Relayer",
        artist: "Yes",
        year: 1974,
        country: regions.ENGLAND,
        cover: ".jpg",
        criteria: [criteria.ODD_RHYTHM, criteria.TECHNICAL, criteria.LENGTHY_TRACKS, criteria.GLITTER, criteria.SYMPHONIC, criteria.BLENDS, criteria.SPECTACULAR],
        selectedTrackTitle: "The Gates Of Delirium",
        selectedTrackYtId: "EdmUAsU2eXI",
        spotifyId: "6MK9yp7hFeOLeR7F1hsBp6",
        deezerId: "90163",
        designers: ["Roger Dean"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "yes_going_for_the_one",
        title: "Going For The One",
        artist: "Yes",
        year: 1977,
        country: regions.ENGLAND,
        cover: ".jpg",
        criteria: [criteria.GLITTER, criteria.BLENDS, criteria.SPECTACULAR],
        selectedTrackTitle: "Going For The One",
        selectedTrackYtId: "f9GAkA7W5Qg",
        spotifyId: "2U4JHXMiBxsKH4dnYEQg2g",
        deezerId: "90150",
        designers: ["Hipgnosis"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "yes_tormato",
        title: "Tormato",
        artist: "Yes",
        year: 1978,
        country: regions.ENGLAND,
        cover: ".jpg",
        criteria: [criteria.GLITTER, criteria.C_ELECTRO, criteria.SPECTACULAR, criteria.ODD_RHYTHM, criteria.SOUND_COLLAGES],
        selectedTrackTitle: "Future Times / Rejoice",
        selectedTrackYtId: "M06rsoMYW8A",
        spotifyId: "3O5JCiht37hm8eO8ySZxLz",
        deezerId: "364308",
        designers: ["Hipgnosis"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "yes_drama",
        title: "Drama",
        artist: "Yes",
        year: 1980,
        country: regions.ENGLAND,
        cover: ".jpg",
        criteria: [criteria.GLITTER, criteria.C_ELECTRO, criteria.SPECTACULAR, criteria.SYMPHONIC, criteria.HEAVY],
        selectedTrackTitle: "Tempus Fugit",
        selectedTrackYtId: "vzxZzIiO84Y",
        spotifyId: "7pIdphNSHXEjdXdThmgOOb",
        deezerId: "82923",
        designers: ["Roger Dean"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "yes_90125",
        title: "90125",
        artist: "Yes",
        year: 1983,
        country: regions.ENGLAND,
        cover: ".jpg",
        criteria: [criteria.ROCK, criteria.NEO_EIGHTIES, criteria.C_ELECTRO, criteria.ODD_RHYTHM, criteria.ARENA],
        selectedTrackTitle: "Changes",
        selectedTrackYtId: "omhNnvX3Sx0",
        spotifyId: "0fkBhymKIOdozggyTtnNXl",
        deezerId: "340834",
        designers: ["Garry Mouat"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "yes_big_generator",
        title: "Big Generator",
        artist: "Yes",
        year: 1987,
        country: regions.ENGLAND,
        cover: ".jpg",
        criteria: [criteria.ROCK, criteria.NEO_EIGHTIES, criteria.C_ELECTRO, criteria.ODD_RHYTHM, criteria.ARENA],
        selectedTrackTitle: `I'm Running`,
        selectedTrackYtId: "GFdkr2_UKgA",
        spotifyId: "1tlsJPpfTZA7Z9o091Ylkk",
        deezerId: "381174",
        designers: ["Garry Mouat"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "yes_union",
        title: "Union",
        artist: "Yes",
        year: 1991,
        country: regions.ENGLAND,
        cover: ".jpg",
        criteria: [criteria.NEO_EIGHTIES, criteria.C_ELECTRO, criteria.GLITTER],
        selectedTrackTitle: "Lift Me Up",
        selectedTrackYtId: "rzD4m17exRA",
        spotifyId: "447aJIB9W5eJbQCRc00oEy",
        deezerId: "6989795",
        designers: ["Roger Dean"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "yes_talk",
        title: "Talk",
        artist: "Yes",
        year: 1994,
        country: regions.ENGLAND,
        cover: ".jpg",
        criteria: [criteria.NEO_EIGHTIES, criteria.ROCK, criteria.C_ELECTRO, criteria.SPECTACULAR, criteria.ARENA],
        selectedTrackTitle: "Endless Dream II: Talk",
        selectedTrackYtId: "Sg-JFGooj2w",
        spotifyId: "3OQ1J3yuyACLQAxrfsOpd8",
        deezerId: null,
        designers: ["Peter Max"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "yezda_urfa_boris",
        title: "Boris",
        artist: "Yezda Urfa",
        year: 1975,
        country: regions.USA,
        cover: ".jpg",
        criteria: [criteria.FUNNY, criteria.LENGTHY_TRACKS, criteria.ODD_RHYTHM, criteria.SYMPHONIC, criteria.TECHNICAL, criteria.SPECTACULAR, criteria.SOPHISTICATED, criteria.C_JAZZ, criteria.C_ELECTRO],
        selectedTrackTitle: "The Basis Of Dubenglazy While Dirk Does The Dance",
        selectedTrackYtId: "XKK8kdDVMag",
        spotifyId: null,
        deezerId: null,
        designers: ["Don Tarr"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "yezda_urfa_sacred_baboon",
        title: "Sacred Baboon",
        artist: "Yezda Urfa",
        year: 1989,
        country: regions.USA,
        cover: ".jpg",
        criteria: [criteria.FUNNY, criteria.ODD_RHYTHM, criteria.SYMPHONIC, criteria.TECHNICAL, criteria.SPECTACULAR, criteria.SOPHISTICATED, criteria.C_JAZZ, criteria.C_ELECTRO],
        selectedTrackTitle: "To-Ta In The Moya",
        selectedTrackYtId: "E4nOCeMnAjk",
        spotifyId: "4HRPz0VvEfPEhuitH73oSs",
        deezerId: "9027821",
        designers: ["Ron Pieniak"],
        similarAlbums: [], // TODO similar to yes relayer
        isAGem: true,
        description: `Originally recorded in 1976, this album did not draw enough attention to sign the band with a label. One can wonder why though, as the music is as complex as interesting: technical parts, original harmonies, rhythm breaks, a large assets of instruments ; anything that can be used to change the mood of the music is used efficiently. Sacred Baboon may be one of the earliest examples of self-produced Math Rock music blent with pure symphonic style of the early 70's.`,
    },
]

export default albums
