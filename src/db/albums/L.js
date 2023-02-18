import { regions } from "../regions"
import { criteria } from "../criteria"

const albums = [
    {
        id: "laurence_vanay_galaxies",
        title: "Galaxies",
        artist: "Laurence Vanay",
        year: 1974,
        country: regions.FRANCE,
        criteria: [criteria.FEMALE, criteria.FRENCH, criteria.UNCOMMON_INSTRUMENTS, criteria.SOFT, criteria.ODD_RHYTHM],
        selectedTrackTitle: "Galaxies",
        selectedTrackYtId: "dhH4pGZtkrk",
        spotifyId: "2ftJTzGjqoSRgm0Sn496R3",
        deezerId: "8477365",
        designers: [],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "laurence_vanay_evening_colours",
        title: "Evening Colours",
        artist: "Laurence Vanay",
        year: 1975,
        country: regions.FRANCE,
        criteria: [criteria.ODD_RHYTHM, criteria.C_PSYCHE, criteria.INSTRUMENTAL, criteria.SOFT],
        selectedTrackTitle: "Eyes Closed On The Way",
        selectedTrackYtId: "3rLUhgrDL30",
        spotifyId: null,
        deezerId: null,
        designers: [],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "laurence_vanay_magic_slows",
        title: "Magic Slows",
        artist: "Laurence Vanay",
        year: 1975,
        country: regions.FRANCE,
        criteria: [criteria.SOFT, criteria.C_PSYCHE, criteria.FOLK, criteria.INSTRUMENTAL],
        selectedTrackTitle: "Love Is A Special Way Of Feeling",
        selectedTrackYtId: "v3DwEctU6LU",
        spotifyId: null,
        deezerId: null,
        designers: [],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "laurent_thibault_mais_on_ne_peut_pas_rever_tout_le_temps",
        title: "Mais On Ne Peut Pas Rêver Tout Le Temps",
        artist: "Laurent Thibault",
        year: 1978,
        country: regions.FRANCE,
        criteria: [criteria.CONCEPT, criteria.ZEUHL, criteria.C_JAZZ, criteria.INSTRUMENTAL, criteria.AMBIENT, criteria.SYMPHONIC, criteria.ORIENTAL, criteria.SOUND_COLLAGES, criteria.FEMALE],
        selectedTrackTitle: "Orée",
        selectedTrackYtId: "Nzt0_aLyzvg",
        spotifyId: "5t4R4xvdXFf9NykpZkN8NN",
        deezerId: "428496",
        designers: ["Douanier Rousseau"],
        similarAlbums: [],
        isAGem: true,
        description: `TODO description`,
    },
    {
        id: "leaf_hound_growers_of_mushroom",
        title: "Growers Of Mushroom",
        artist: "Leaf Hound",
        year: 1971,
        country: regions.ENGLAND,
        criteria: [criteria.ROCK, criteria.HEAVY, criteria.BLUESY],
        selectedTrackTitle: "Stray",
        selectedTrackYtId: "mYv5QIJ__yQ",
        spotifyId: "7cz9xHXXMpdoTKM8VlIJZU",
        deezerId: "1198686",
        designers: ["Decca Publicity Art Department"],
        similarAlbums: ["warhorse_warhorse", "led_zeppelin_led_zeppelin"], // TODO atomic rooster
        isAGem: false,
    },
    {
        id: "led_zeppelin_led_zeppelin",
        title: "Led Zeppelin",
        artist: "Led Zeppelin",
        year: 1969,
        country: regions.ENGLAND,
        criteria: [criteria.ROCK, criteria.C_PSYCHE, criteria.JAM, criteria.BLUESY],
        selectedTrackTitle: "Dazed And Confused",
        selectedTrackYtId: "-rmtJ6-EY1E",
        spotifyId: "3ycjBixZf7S3WpC5WZhhUK",
        deezerId: "7820635",
        designers: ["George Hardie", "Sam Shere"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "led_zeppelin_led_zeppelin_ii",
        title: "Led Zeppelin II",
        artist: "Led Zeppelin",
        year: 1969,
        country: regions.ENGLAND,
        criteria: [criteria.ROCK, criteria.C_FOLK, criteria.BLUESY],
        selectedTrackTitle: "What Is And What Should Never Be",
        selectedTrackYtId: "jrqMdja4eYs",
        spotifyId: "70lQYZtypdCALtFVlQAcvx",
        deezerId: "7824595",
        designers: ["David Juniper"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "led_zeppelin_led_zeppelin_iii",
        title: "Led Zeppelin III",
        artist: "Led Zeppelin",
        year: 1970,
        country: regions.ENGLAND,
        criteria: [criteria.ODD_RHYTHM, criteria.FOLK, criteria.BLUESY],
        selectedTrackTitle: "Celebration Day",
        selectedTrackYtId: "KMQdiHIZgSo",
        spotifyId: "1u5BsuBK45mLwrbqdASN3g",
        deezerId: "7821441",
        designers: ["Zacron"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "led_zeppelin_led_zeppelin_iv",
        title: "Led Zeppelin IV",
        artist: "Led Zeppelin",
        year: 1971,
        country: regions.ENGLAND,
        criteria: [criteria.ODD_RHYTHM, criteria.UNCOMMON_INSTRUMENTS, criteria.C_FOLK, criteria.ROCK, criteria.FEMALE, criteria.BLUESY],
        selectedTrackTitle: "Four Sticks",
        selectedTrackYtId: "T8GP2j7NdSo",
        spotifyId: "5EyIDBAqhnlkAHqvPRwdbX",
        deezerId: "11591214",
        designers: ["Barrington Colby", "Keith Morris"],
        similarAlbums: [],
        isAGem: true,
        description: `TODO description`,
    },
    {
        id: "led_zeppelin_houses_of_the_holy",
        title: "Houses Of The Holy",
        artist: "Led Zeppelin",
        year: 1973,
        country: regions.ENGLAND,
        criteria: [criteria.ODD_RHYTHM, criteria.BLENDS, criteria.ROCK],
        selectedTrackTitle: "No Quarter",
        selectedTrackYtId: "Pu94mWlgzMY",
        spotifyId: "5phxHbK2GSr7hEu4orLywP",
        deezerId: "90486",
        designers: ["Hipgnosis", "Aubrey Powell"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "led_zeppelin_physical_graffiti",
        title: "Physical Graffiti",
        artist: "Led Zeppelin",
        year: 1975,
        country: regions.ENGLAND,
        criteria: [criteria.ODD_RHYTHM, criteria.JAM, criteria.ROCK, criteria.JAZZY_GROOVY, criteria.BLUESY],
        selectedTrackTitle: "Kashmir",
        selectedTrackYtId: "sfR_HWMzgyc",
        spotifyId: "0ovKDDAHiTwg4AEjKdgdWo",
        deezerId: "90402",
        designers: ["Peter Corristo", "Mike Doud"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "led_zeppelin_presence",
        title: "Presence",
        artist: "Led Zeppelin",
        year: 1976,
        country: regions.ENGLAND,
        criteria: [criteria.ODD_RHYTHM, criteria.JAM, criteria.ROCK, criteria.JAZZY_GROOVY, criteria.BLUESY],
        selectedTrackTitle: "Achilles Last Stand",
        selectedTrackYtId: "Rf1I9htJk",
        spotifyId: "3xiPkaTzfC48CcsXYgz5v0",
        deezerId: "90396",
        designers: ["Hipgnosis", "George Hardie"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "leo_ferre_et_basta",
        title: "Et... Basta !",
        artist: "Léo Ferré",
        year: 1973,
        country: regions.FRANCE,
        criteria: [criteria.FRENCH, criteria.LENGTHY_TRACKS, criteria.TOUCHING_VOCALS, criteria.STORYLINE, criteria.SOCIOPOLITICAL, criteria.ART_POP, criteria.PIANO, criteria.EXPERIMENTAL],
        selectedTrackTitle: "Et... Basta ! (Pas Vrai, Mec !)",
        selectedTrackYtId: "VSPga8UBT24",
        spotifyId: "1xkQm6I3kOzz2mmE7o8Rr0",
        deezerId: "6859513",
        designers: [],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "lethe_lethe",
        title: "Lethe",
        artist: "Lethe",
        year: 1981,
        country: regions.NETHERLANDS,
        criteria: [criteria.INSTRUMENTAL, criteria.SOFT, criteria.UNCOMMON_INSTRUMENTS, criteria.SOUND_COLLAGES, criteria.SOFT_SEVENTIES, criteria.SYMPHONIC],
        selectedTrackTitle: "Cold In Fingers",
        selectedTrackYtId: "ZCx4ENGwjFM",
        spotifyId: null,
        deezerId: null,
        designers: [],
        similarAlbums: [],
        isAGem: true,
        description: `TODO Description`,
    },
    {
        id: "lied_des_teufels_lied_des_teufels",
        title: "Lied Des Teufels",
        artist: "Lied Des Teufels",
        year: 1973,
        country: regions.GERMANY,
        criteria: [criteria.GERMAN, criteria.JAM, criteria.LENGTHY_TRACKS, criteria.UNCOMMON_INSTRUMENTS, criteria.SYMPHONIC],
        selectedTrackTitle: "Nichts",
        selectedTrackYtId: "KYGkQFHzwIE",
        spotifyId: "5mtT0p4CZHivxaI5pKDcim",
        deezerId: "1016956",
        designers: [],
        similarAlbums: [],
        isAGem: false,
    },
    // TODO introuvable - Lied Des Teufels - Höllisch Heiße Rockmusik
    {
        id: "lightyears_away_astral_navigations",
        title: "Astral Navigations",
        artist: "Lightyears Away",
        year: 1971,
        country: regions.ENGLAND,
        criteria: [criteria.FOLK, criteria.SOFT],
        selectedTrackTitle: "Tomorrow",
        selectedTrackYtId: null,
        spotifyId: null,
        deezerId: null,
        designers: ["Dave Wood"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "locanda_dell_fate_forse_le_lucciole_non_si_amano_piu",
        title: "Forse Le Lucciole Non Si Amano Più",
        artist: "Locanda Delle Fate",
        year: 1977,
        country: regions.ITALY,
        criteria: [criteria.ODD_RHYTHM, criteria.GLITTER, criteria.ITALIAN],
        selectedTrackTitle: "Forse Le Lucciole Non Si Amano Più",
        selectedTrackYtId: "QbaJfSEehns",
        spotifyId: "0U4WyeZ1hw3lSGxJo9orRA",
        deezerId: "103484",
        designers: ["Anna Montecroci", "Biagio Carrone"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "the_long_hello_the_long_hello",
        title: "The Long Hello",
        artist: "The Long Hello",
        year: 1974,
        country: regions.ENGLAND,
        criteria: [criteria.ODD_RHYTHM, criteria.INSTRUMENTAL, criteria.SOFT, criteria.C_FOLK],
        selectedTrackTitle: "Fairhazel Gardens",
        selectedTrackYtId: "DiiPTWZiJJ0",
        spotifyId: null,
        deezerId: null,
        designers: ["Paolo Paglia"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "love_forever_changes",
        title: "Forever Changes",
        artist: "Love",
        year: 1967,
        country: regions.USA,
        criteria: [criteria.FOLK, criteria.CRISPY_SIXTIES, criteria.SOFT, criteria.BAROQUE],
        selectedTrackTitle: "The Red Telephone",
        selectedTrackYtId: "NXa8IXvaW0I",
        spotifyId: "6myt0Ez6hGJIPQeZKgY8um",
        deezerId: "85229172",
        designers: ["William S. Harvey", "Bob Pepper"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "the_lovin_spoonful_revelation_revolution_69",
        title: `Revelation: Revolution '69`,
        artist: `The Lovin' Spoonful`,
        year: 1969,
        country: regions.USA,
        criteria: [criteria.FOLK, criteria.C_PSYCHE, criteria.SOFT, criteria.SOUND_COLLAGES],
        selectedTrackTitle: "Amazing Air",
        selectedTrackYtId: "I39393i1U_A",
        spotifyId: "52X7afMLQEUPhkrIkdJzJH",
        deezerId: "503192",
        designers: ["Acy R. Lehman"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "low_flying_aircraft_low_flying_aircraft",
        title: "Low Flying Aircraft",
        artist: "Low Flying Aircraft",
        year: 1987,
        country: regions.ENGLAND,
        criteria: [criteria.ODD_RHYTHM, criteria.INSTRUMENTAL, criteria.C_PSYCHE, criteria.C_JAZZ, criteria.C_ELECTRO, criteria.NEO_EIGHTIES],
        selectedTrackTitle: "Poolside",
        selectedTrackYtId: "7sspuSlsL1Q",
        spotifyId: null,
        deezerId: null,
        designers: ["Susan Power"],
        similarAlbums: [],
        isAGem: false,
    },
]

export default albums
