import regions from "../regions"
import { criteria } from "../criteria"

const albums = [
    {
        id: "nascita_della_sfera_per_una_scultura_di_ceschia",
        title: "Per Una Scultura Di Ceschia",
        artist: "Nascita Della Sfera",
        year: 1978,
        country: regions.ITALY,
        cover: ".jpg",
        criteria: [criteria.C_FOLK, criteria.EXPERIMENTAL, criteria.INSTRUMENTAL, criteria.ELECTRO, criteria.SOUND_COLLAGES, criteria.ITALIAN, criteria.C_PSYCHE, criteria.CONCEPT, criteria.UNCOMMON_INSTRUMENTS, criteria.PATCHWORK],
        selectedTrackTitle: "Pianeta Terra",
        selectedTrackYtId: "ER8Ke6PKuwQ",
        spotifyId: "01nUq7U9hzDvAP6hQho0jd",
        deezerId: null,
        designers: [],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "national_health_national_health",
        title: "National Health",
        artist: "National Health",
        year: 1978,
        country: regions.ENGLAND,
        cover: ".jpg",
        criteria: [criteria.ODD_RHYTHM, criteria.LENGTHY_TRACKS, criteria.C_PSYCHE, criteria.C_JAZZ, criteria.C_ELECTRO, criteria.C_FOLK, criteria.SOPHISTICATED],
        selectedTrackTitle: "Tenemos Roads",
        selectedTrackYtId: "vj9ZUHju7JE",
        spotifyId: "6NMlE5KSAEtg110RKNdh2J",
        deezerId: "128426",
        designers: ["Kevin Burke"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "national_health_of_queues_and_cures",
        title: "Of Queues And Cures",
        artist: "National Health",
        year: 1978,
        country: regions.ENGLAND,
        cover: ".jpg",
        criteria: [criteria.ODD_RHYTHM, criteria.LENGTHY_TRACKS, criteria.C_PSYCHE, criteria.C_JAZZ, criteria.C_ELECTRO, criteria.C_FOLK, criteria.SOPHISTICATED],
        selectedTrackTitle: "Squarer For Maud",
        selectedTrackYtId: "BeHheJ3kqYI",
        spotifyId: "7fSqgzucVPinisWaIhcklO",
        deezerId: "128417",
        designers: ["Jill Mumford"],
        similarAlbums: [],
        isAGem: true,
        description: `TODO description`,
    },
    {
        id: "national_health_ds_al_coda",
        title: "D.S. Al Coda",
        artist: "National Health",
        year: 1982,
        country: regions.ENGLAND,
        cover: ".jpg",
        criteria: [criteria.ODD_RHYTHM, criteria.C_PSYCHE, criteria.C_JAZZ, criteria.C_ELECTRO, criteria.C_FOLK, criteria.SOPHISTICATED, criteria.NEO_EIGHTIES],
        selectedTrackTitle: "Black Hat",
        selectedTrackYtId: "mYGh1aejZiA",
        spotifyId: null,
        deezerId: null,
        designers: [],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "nautilus_20_000_miles_under_the_sea",
        title: "20 000 Miles Under The Sea",
        artist: "Nautilus",
        year: 1978,
        country: regions.SWITZERLAND,
        cover: ".jpg",
        criteria: [criteria.SYMPHONIC, criteria.HEAVY, criteria.ODD_RHYTHM],
        selectedTrackTitle: "Sleeping In The Wind",
        selectedTrackYtId: "SHZEczUbxdM",
        spotifyId: null,
        deezerId: null,
        designers: ["Ralph Stucki"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "nautilus_space_storm",
        title: "Space-Storm",
        artist: "Nautilus",
        year: 1980,
        country: regions.SWITZERLAND,
        cover: ".jpg",
        criteria: [criteria.ROCK],
        selectedTrackTitle: "Saturday Night",
        selectedTrackYtId: "aDK_D0S87_k",
        spotifyId: null,
        deezerId: null,
        designers: ["Ralph Stucki"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "nazareth_nazareth",
        title: "Nazareth",
        artist: "Nazareth",
        year: 1971,
        country: regions.SCOTLAND,
        cover: ".jpg",
        criteria: [criteria.ROCK, criteria.GREASY_SEVENTIES, criteria.BAROQUE, criteria.ORCHESTRAL_PARTS],
        selectedTrackTitle: "The King Is Dead",
        selectedTrackYtId: "C7LkHCDS5-w",
        spotifyId: "59sGauuSIiMD5gjoqSy9uQ",
        deezerId: "15484780",
        designers: ["CCS"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "nazareth_exercises",
        title: "Exercises",
        artist: "Nazareth",
        year: 1972,
        country: regions.SCOTLAND,
        cover: ".jpg",
        criteria: [criteria.BAROQUE, criteria.FOLK, criteria.ORCHESTRAL_PARTS, criteria.UNCOMMON_INSTRUMENTS],
        selectedTrackTitle: "1692 Glencoe Massacre",
        selectedTrackYtId: "3syno-cGYpU",
        spotifyId: "2Hw7xx2dsRuQOWnyRrznkJ",
        deezerId: "15484774",
        designers: ["CCS"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "nazareth_rampant",
        title: "Rampant",
        artist: "Nazareth",
        year: 1974,
        country: regions.SCOTLAND,
        cover: ".jpg",
        criteria: [criteria.JAM, criteria.ROCK, criteria.HEAVY, criteria.GREASY_SEVENTIES],
        selectedTrackTitle: "Shapes Of Things / Space Safari",
        selectedTrackYtId: "t3_aDNVK_OE",
        spotifyId: "0QUDqPjTgUJ5rqyPGjhu8c",
        deezerId: "15485508",
        designers: ["Hipgnosis", "Joe Petagno"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "nazareth_hair_of_the_dog",
        title: "Hair Of The Dog",
        artist: "Nazareth",
        year: 1975,
        country: regions.SCOTLAND,
        cover: ".jpg",
        criteria: [criteria.JAM, criteria.ROCK, criteria.HEAVY, criteria.GREASY_SEVENTIES, criteria.FEMALE],
        selectedTrackTitle: `Please Don't Judas Me`,
        selectedTrackYtId: "PdiIu1RwGhA",
        spotifyId: "5naYBHiMro7E0MVPmhhYHP",
        deezerId: "15485516",
        designers: ["David Fairbrother Roe"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "nazareth_close_enough_for_rock_n_roll",
        title: `Close Enough For Rock 'N' Roll`,
        artist: "Nazareth",
        year: 1976,
        country: regions.SCOTLAND,
        cover: ".jpg",
        criteria: [criteria.JAM, criteria.ROCK, criteria.HEAVY],
        selectedTrackTitle: "Telegram",
        selectedTrackYtId: "xRgZlEVzAss",
        spotifyId: "6P3mt9QSzK9pygefaZwfl8",
        deezerId: "15484838",
        designers: ["Hipgnosis"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "nef_mais_alors_cest_a_lenvers",
        title: `Mais Alors !!?... C'est À L'envers`,
        artist: "Nef",
        year: 1983,
        country: regions.FRANCE,
        cover: ".jpg",
        criteria: [criteria.UNCOMMON_INSTRUMENTS, criteria.SOPHISTICATED, criteria.C_ELECTRO, criteria.SOFT_SEVENTIES, criteria.C_PSYCHE, criteria.FRENCH, criteria.INSTRUMENTAL],
        selectedTrackTitle: "Le Miroir Sur Le Dos II: À Chaque Bout",
        selectedTrackYtId: "P0X3bkCat4w",
        spotifyId: "4zVLNZKDkjuw889686XlYN",
        deezerId: "110982812",
        designers: ["Myrtille", "Richard Lorenzi", "Vincent Tronc"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "neil_young_harvest",
        title: "Harvest",
        artist: "Neil Young",
        year: 1972,
        country: regions.CANADA,
        cover: ".jpeg",
        criteria: [criteria.ROCK, criteria.C_FOLK, criteria.ODD_RHYTHM, criteria.ORCHESTRAL_PARTS, criteria.TOUCHING_VOCALS],
        selectedTrackTitle: `There's A World`,
        selectedTrackYtId: "mVHQSvcSa6o",
        spotifyId: "1pHo7X82cTObgZll65R1rW",
        deezerId: "86605",
        designers: ["Tom Wilkes"],
        similarAlbums: [],
        isAGem: true,
        description: `Although Neil Young never had anything much related to Progressive music, Harvest flirted with the genre with a few odd time signatures and the use of orchestral arrangements. The rest is pure melancholic Folk music with a fragile voice with only but memorable melodies that make the album monumental.`,
    },
    {
        id: "neil_young_on_the_beach",
        title: "On The Beach",
        artist: "Neil Young",
        year: 1974,
        country: regions.CANADA,
        cover: ".jpg",
        criteria: [criteria.ROCK, criteria.C_FOLK, criteria.TOUCHING_VOCALS, criteria.BLUESY],
        selectedTrackTitle: "On The Beach",
        selectedTrackYtId: "CKgj1FNToWY",
        spotifyId: "4uXg1lAzlcr1CJWLwekgaM",
        deezerId: "14459694",
        designers: ["Bob Seidemann"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "nektar_journey_to_the_centre_of_the_eye",
        title: "Journey To The Centre Of The Eye",
        artist: "Nektar",
        year: 1971,
        country: regions.ENGLAND,
        cover: ".jpg",
        criteria: [criteria.HEAVY, criteria.CONCEPT, criteria.TRANSITION, criteria.SCI_FI, criteria.SYMPHONIC, criteria.C_PSYCHE, criteria.SPACY, criteria.GREASY_SEVENTIES],
        selectedTrackTitle: `It's All In The Mind`,
        selectedTrackYtId: "bwv2qOWvBNc",
        spotifyId: "4rel9GvJIiVBx3m3680Kqz",
        deezerId: "6305753",
        designers: ["Ernst Steingässer"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "nektar_a_tab_in_the_ocean",
        title: "A Tab In The Ocean",
        artist: "Nektar",
        year: 1972,
        country: regions.ENGLAND,
        cover: ".jpg",
        criteria: [criteria.SPECTACULAR, criteria.SYMPHONIC, criteria.JAZZY_GROOVY, criteria.JAM, criteria.LENGTHY_TRACKS, criteria.TRANSITION],
        selectedTrackTitle: "Desolation Valley",
        selectedTrackYtId: "9Tu65PeEqdE",
        spotifyId: "7Iq2CLAPWXPK0W2dQhhqMY",
        deezerId: "6305752",
        designers: ["Helmut Wenske"],
        similarAlbums: [],
        isAGem: true,
        description: `TODO description`,
    },
    {
        id: "nektar_sounds_like_this",
        title: "...Sounds Like This",
        artist: "Nektar",
        year: 1973,
        country: regions.ENGLAND,
        cover: ".jpg",
        criteria: [criteria.ROCK, criteria.SPECTACULAR, criteria.SYMPHONIC, criteria.JAM, criteria.LENGTHY_TRACKS],
        selectedTrackTitle: "A Day In The Life Of A Preacher",
        selectedTrackYtId: "S3F_t43v2oI",
        spotifyId: "4zz8OO6V7gAdmoVOndIB25",
        deezerId: "6385337",
        designers: ["Helmut Wenske", "Keith Walters"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "nektar_remember_the_future",
        title: "Remember The Future",
        artist: "Nektar",
        year: 1973,
        country: regions.ENGLAND,
        cover: ".jpg",
        criteria: [criteria.LENGTHY_TRACKS, criteria.JAM, criteria.SYMPHONIC, criteria.SPACY, criteria.SCI_FI, criteria.CONCEPT, criteria.JAZZY_GROOVY],
        selectedTrackTitle: "Remember The Future (Part I)",
        selectedTrackYtId: "v27E8PjIqLM",
        spotifyId: "1BQYS7PTIxgYFY4mv5P8M0",
        deezerId: "6546914",
        designers: ["Helmut Wenske"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "nektar_down_to_earth",
        title: "Down To Earth",
        artist: "Nektar",
        year: 1973,
        country: regions.ENGLAND,
        cover: ".jpg",
        criteria: [criteria.CONCEPT, criteria.ODD_RHYTHM, criteria.ART_POP],
        selectedTrackTitle: `That's Life`,
        selectedTrackYtId: "YSLxhG-V-Q8",
        spotifyId: "4t9PsjX15Z5NYerBWMFv2x",
        deezerId: "6569517",
        designers: ["Pierre Tubbs", "Helmut Wenske"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "nektar_recycled",
        title: "Recycled",
        artist: "Nektar",
        year: 1975,
        country: regions.ENGLAND,
        cover: ".jpg",
        criteria: [criteria.CONCEPT, criteria.SYMPHONIC, criteria.SPACY, criteria.LENGTHY_TRACKS, criteria.GLITTER],
        selectedTrackTitle: "Recycled (Part I)",
        selectedTrackYtId: "9Ev1ueQv3u8",
        spotifyId: "5oGax634VNpeGwiI30dIh6",
        deezerId: "5942677",
        designers: ["Helmut Wenske"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "nektar_magic_is_a_child",
        title: "Magic Is A Child",
        artist: "Nektar",
        year: 1977,
        country: regions.ENGLAND,
        cover: ".jpg",
        criteria: [criteria.GLITTER, criteria.BAROQUE, criteria.ODD_RHYTHM],
        selectedTrackTitle: "Midnight Light",
        selectedTrackYtId: "JovQXQlIm_4",
        spotifyId: "6yGTZHrVmun3tv7rT5wHj7",
        deezerId: "6512473",
        designers: ["Basil Pao"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "neu_neu",
        title: "Neu!",
        artist: "Neu!",
        year: 1972,
        country: regions.GERMANY,
        cover: ".jpg",
        criteria: [criteria.SPACY, criteria.SOFT, criteria.C_PSYCHE, criteria.AMBIENT, criteria.SOUND_COLLAGES],
        selectedTrackTitle: "Hallogallo",
        selectedTrackYtId: "NC5pQaRgXP8",
        spotifyId: "3noxBQoCT5h9Cvd0syULk7",
        deezerId: "53024752",
        designers: ["Neu!"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "neu_neu_2",
        title: "Neu! 2",
        artist: "Neu!",
        year: 1972,
        country: regions.GERMANY,
        cover: ".jpg",
        criteria: [criteria.SPACY, criteria.EXPERIMENTAL, criteria.C_PSYCHE, criteria.AMBIENT],
        selectedTrackTitle: "Für Immer",
        selectedTrackYtId: "Oy5A7fOY0MA",
        spotifyId: "1XYD1JqLsSRqL1YQ9bIP2N",
        deezerId: "53024802",
        designers: ["Neu!"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "neu_neu_75",
        title: "Neu! 75",
        artist: "Neu!",
        year: 1975,
        country: regions.GERMANY,
        cover: ".jpg",
        criteria: [criteria.SPACY, criteria.AMBIENT, criteria.INSTRUMENTAL, criteria.C_PSYCHE, criteria.SOFT, criteria.SOUND_COLLAGES],
        selectedTrackTitle: `Leb' Wohl`,
        selectedTrackYtId: "t1psvprDgS0",
        spotifyId: "2wJYAUIQItl0QXIDqyahQZ",
        deezerId: "53024592",
        designers: ["Neu!"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "the_nice_the_thoughts_of_emerlist_davjack",
        title: "The Thoughts Of Emerlist Davjack",
        artist: "The Nice",
        year: 1967,
        country: regions.ENGLAND,
        cover: ".jpg",
        criteria: [criteria.BAROQUE, criteria.CRISPY_SIXTIES, criteria.HEAVY, criteria.SPECTACULAR, criteria.C_PSYCHE, criteria.SYMPHONIC],
        selectedTrackTitle: "The Cry Of Eugene",
        selectedTrackYtId: "A6KARjX8NWc",
        spotifyId: "3PTutcLYaYrk2G71tKIVCL",
        deezerId: "128936",
        designers: ["Derek Burton", "Gered Mankowitz"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "the_nice_ars_longa_vita_brevis",
        title: "Ars Longa Vita Brevis",
        artist: "The Nice",
        year: 1968,
        country: regions.ENGLAND,
        cover: ".jpg",
        criteria: [criteria.BAROQUE, criteria.CRISPY_SIXTIES, criteria.HEAVY, criteria.SPECTACULAR, criteria.C_PSYCHE, criteria.SYMPHONIC, criteria.FUNNY, criteria.LENGTHY_TRACKS, criteria.JAM, criteria.ORCHESTRAL_PARTS],
        selectedTrackTitle: "Ars Longa Vita Brevis",
        selectedTrackYtId: "TC9cJLHeO00",
        spotifyId: "3ygsp68ybDKo4jrwBMLrLA",
        deezerId: "128861",
        designers: ["Gered Mankowitz"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "the_nice_nice",
        title: "Nice",
        artist: "The Nice",
        year: 1969,
        country: regions.ENGLAND,
        cover: ".jpg",
        criteria: [criteria.BAROQUE, criteria.CRISPY_SIXTIES, criteria.HEAVY, criteria.SPECTACULAR, criteria.SYMPHONIC, criteria.FUNNY, criteria.JAM, criteria.ORCHESTRAL_PARTS],
        selectedTrackTitle: "Azreal Revisited",
        selectedTrackYtId: "xyuG-g8Ee84",
        spotifyId: null,
        deezerId: null,
        designers: [],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "the_nice_five_bridges",
        title: "Five Bridges",
        artist: "The Nice",
        year: 1970,
        country: regions.ENGLAND,
        cover: ".jpg",
        criteria: [criteria.LIVE, criteria.BAROQUE, criteria.SPECTACULAR, criteria.SYMPHONIC, criteria.ORCHESTRAL_PARTS, criteria.TRANSITION, criteria.C_JAZZ, criteria.C_ELECTRO],
        selectedTrackTitle: "High Level Fugue: 4th Bridge",
        selectedTrackYtId: "MO3YSKqga6U",
        spotifyId: "33URnP2kyItDfs8xDhxKAH",
        deezerId: "301447",
        designers: ["Hipgnosis"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "the_nice_elegy",
        title: "Elegy",
        artist: "The Nice",
        year: 1971,
        country: regions.ENGLAND,
        cover: ".jpg",
        criteria: [criteria.ORCHESTRAL_PARTS, criteria.JAM, criteria.JAZZY_GROOVY],
        selectedTrackTitle: "My Back Pages",
        selectedTrackYtId: "IQZnn8L0jUk",
        spotifyId: "4i9mKG4nrsin6gntcVL0ap",
        deezerId: "309130",
        designers: ["Hipgnosis"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "nicholas_greenwood_cold_cuts",
        title: "Cold Cuts",
        artist: "Nicholas Greenwood",
        year: 1972,
        country: regions.ENGLAND,
        cover: ".jpg",
        criteria: [criteria.ORCHESTRAL_PARTS, criteria.JAM, criteria.JAZZY_GROOVY],
        selectedTrackTitle: "A Sea Of Holy Pleasure: Parts 1, 2, 3",
        selectedTrackYtId: "IsT0to29wRw",
        spotifyId: "4uZIzkAu2EzYYk3WVtuHI4",
        deezerId: "9079719",
        designers: ["Philip Mora"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "nick_mason_nick_mason_fictitious_sports",
        title: `Nick Mason's Fictitious Sports`,
        artist: "Nick Mason",
        year: 1981,
        country: regions.ENGLAND,
        cover: ".jpg",
        criteria: [criteria.C_JAZZ, criteria.C_PSYCHE, criteria.FEMALE, criteria.FUNNY, criteria.ART_POP],
        selectedTrackTitle: "Hot River",
        selectedTrackYtId: "11KHbPpwxZY",
        spotifyId: "186h8hclIvxHoMR8q1x8Qq",
        deezerId: "71718932",
        designers: ["Hipgnosis", "Geoff Halpin"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "nick_mason_and_rick_fenn_profiles",
        title: `Profiles`,
        artist: "Nick Mason & Rick Fenn",
        year: 1985,
        country: regions.ENGLAND,
        cover: ".jpg",
        criteria: [criteria.INSTRUMENTAL, criteria.ELECTRO, criteria.NEO_EIGHTIES],
        selectedTrackTitle: "Profiles",
        selectedTrackYtId: "uFW9GYm79Cw",
        spotifyId: "4clkdWqlVchCZfIpWxGmaJ",
        deezerId: "71719292",
        designers: [],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "nico_gianni_frank_maurizio_canti_dinnocenza_canti_desperienza",
        title: `Canti D'Innocenza Canti D'Esperienza`,
        artist: "Nico, Gianni, Frank, Maurizio",
        year: 1973,
        country: regions.ITALY,
        cover: ".jpg",
        criteria: [criteria.C_PSYCHE, criteria.HEAVY, criteria.ITALIAN, criteria.GREASY_SEVENTIES, criteria.ODD_RHYTHM],
        selectedTrackTitle: "Vecchia Amica",
        selectedTrackYtId: "BZYP66g2JBA",
        spotifyId: "6zsAqnr4JTErDompbfFQuU",
        deezerId: "6424176",
        designers: ["Gian Carlo Greguoli"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "nightwinds_nightwinds",
        title: "Nightwinds",
        artist: "Nightwinds",
        year: 1979,
        country: regions.CANADA,
        cover: ".jpg",
        criteria: [criteria.GLITTER, criteria.C_ELECTRO],
        selectedTrackTitle: "As The Crow Flies",
        selectedTrackYtId: "EmtT_l7MYsE",
        spotifyId: null,
        deezerId: null,
        designers: [],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "nino_ferrer_metronomie",
        title: "Métronomie",
        artist: "Nino Ferrer",
        year: 1972,
        country: regions.FRANCE,
        cover: ".jpg",
        criteria: [criteria.FRENCH, criteria.C_PSYCHE, criteria.SOUND_COLLAGES, criteria.UNCOMMON_INSTRUMENTS, criteria.CONCEPT, criteria.TRANSITION],
        selectedTrackTitle: "Métronomie",
        selectedTrackYtId: "ydWdoHvXWaA",
        spotifyId: "3ULRYqolMNV9YINhmsNqjp",
        deezerId: "65253092",
        designers: ["Claude Verlinde"],
        similarAlbums: [],
        isAGem: true,
        description: `TODO description`,
    },
    {
        id: "nino_ferrer_nino_ferrer_and_leggs",
        title: "Nino Ferrer & Leggs",
        artist: "Nino Ferrer",
        year: 1973,
        country: regions.FRANCE,
        cover: ".jpg",
        criteria: [criteria.FRENCH, criteria.JAM, criteria.UNCOMMON_INSTRUMENTS, criteria.BLUESY],
        selectedTrackTitle: "Moby Dick",
        selectedTrackYtId: "6P_Vc1tsgEA",
        spotifyId: "3dTxwjyyKuDP4qlH44lRrR",
        deezerId: "6940916",
        designers: [],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "nino_ferrer_nino_and_radiah",
        title: "Nino And Radiah",
        artist: "Nino Ferrer",
        year: 1974,
        country: regions.FRANCE,
        cover: ".jpg",
        criteria: [criteria.FEMALE, criteria.ROCK, criteria.C_FOLK, criteria.SOFT, criteria.BLUESY],
        selectedTrackTitle: "Looking For You",
        selectedTrackYtId: "1s0-tbR-nzs",
        spotifyId: "3pXXyHO0Cenk1PvNbXokYy",
        deezerId: "6937516",
        designers: ["Richard Bennett"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "nino_ferrer_suite_en_oeuf",
        title: "Suite En Œuf",
        artist: "Nino Ferrer",
        year: 1976,
        country: regions.FRANCE,
        cover: ".jpg",
        criteria: [criteria.FRENCH, criteria.SOUND_COLLAGES, criteria.C_PSYCHE, criteria.BAROQUE, criteria.FUNNY, criteria.BLUESY],
        selectedTrackTitle: "Les Morceaux De Fer",
        selectedTrackYtId: "G8myvW7Ri-4",
        spotifyId: "1crxdGNkb707IlKkknuyx5",
        deezerId: "6940917",
        designers: ["Gabriel Pasqualini"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "nino_ferrer_blanat",
        title: "Blanat",
        artist: "Nino Ferrer",
        year: 1979,
        country: regions.FRANCE,
        cover: ".jpg",
        criteria: [criteria.ITALIAN, criteria.FRENCH, criteria.SOUND_COLLAGES, criteria.C_PSYCHE, criteria.ROCK],
        selectedTrackTitle: `L'arbre Noir`,
        selectedTrackYtId: "znp0eaGWTOA",
        spotifyId: "20HonPilsF78HT0cvXOHtR",
        deezerId: "6937514",
        designers: [],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "nirvana_the_story_of_simon_simopath",
        title: "The Story Of Simon Simopath",
        artist: "Nirvana",
        year: 1967,
        country: regions.ENGLAND,
        cover: ".jpg",
        criteria: [criteria.CRISPY_SIXTIES, criteria.C_PSYCHE, criteria.UNCOMMON_INSTRUMENTS, criteria.BAROQUE, criteria.C_FOLK],
        selectedTrackTitle: "Lonely Boy",
        selectedTrackYtId: "2nl2ygWrUhw",
        spotifyId: "5QNBtA2eDdzRJSiyZAT9nP",
        deezerId: "247316",
        designers: ["David Browning"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "nirvana_all_of_us",
        title: "All Of Us",
        artist: "Nirvana",
        year: 1968,
        country: regions.ENGLAND,
        cover: ".jpg",
        criteria: [criteria.CRISPY_SIXTIES, criteria.C_PSYCHE, criteria.UNCOMMON_INSTRUMENTS, criteria.C_FOLK, criteria.FEMALE, criteria.BAROQUE, criteria.ORCHESTRAL_PARTS],
        selectedTrackTitle: "The Show Must Go On",
        selectedTrackYtId: "mx9LxyZ96rI",
        spotifyId: "57uN1kslaOghbC5snKvWpI",
        deezerId: "215741",
        designers: ["CCS"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "nirvana_to_markos_iii",
        title: "To Markos III",
        artist: "Nirvana",
        year: 1969,
        country: regions.ENGLAND,
        cover: ".jpg",
        criteria: [criteria.CRISPY_SIXTIES, criteria.ORCHESTRAL_PARTS, criteria.UNCOMMON_INSTRUMENTS, criteria.C_FOLK, criteria.FEMALE],
        selectedTrackTitle: "Love Suite",
        selectedTrackYtId: "rga-9ppgSx4",
        spotifyId: "52kqJMitnOUS7wmXWpmxd4",
        deezerId: "747763",
        designers: [],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "nirvana_local_anaesthetic",
        title: "Local Anaesthetic",
        artist: "Nirvana",
        year: 1971,
        country: regions.ENGLAND,
        cover: ".jpg",
        criteria: [criteria.LENGTHY_TRACKS, criteria.JAM, criteria.C_PSYCHE, criteria.UNCOMMON_INSTRUMENTS],
        selectedTrackTitle: "Modus Operandi (Method Of Work)",
        selectedTrackYtId: null,
        spotifyId: null,
        deezerId: null,
        designers: ["Marcus Keef"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "nirvana_songs_of_love_and_praise",
        title: "Songs Of Love And Praise",
        artist: "Nirvana",
        year: 1972,
        country: regions.ENGLAND,
        cover: ".jpg",
        criteria: [criteria.FOLK, criteria.JAM, criteria.BAROQUE, criteria.UNCOMMON_INSTRUMENTS],
        selectedTrackTitle: "Stadium",
        selectedTrackYtId: "MMWRjDQgSLc",
        spotifyId: null,
        deezerId: null,
        designers: ["Rick Breach"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "nosferatu_nosferatu",
        title: "Nosferatu",
        artist: "Nosferatu",
        year: 1970,
        country: regions.GERMANY,
        cover: ".jpg",
        criteria: [criteria.GREASY_SEVENTIES, criteria.ODD_RHYTHM, criteria.C_PSYCHE, criteria.UNCOMMON_INSTRUMENTS, criteria.JAM, criteria.JAZZY_GROOVY],
        selectedTrackTitle: "Willie The Fox",
        selectedTrackYtId: "4N2KQJhbjk4",
        spotifyId: null,
        deezerId: null,
        designers: ["Jack Kipp"],
        similarAlbums: ["titus_groan_titus_groan"],
        isAGem: true,
        description: `TODO Description`,
    },
    {
        id: "nyl_nyl",
        title: "Nyl",
        artist: "Nyl",
        year: 1976,
        country: regions.FRANCE,
        cover: ".jpg",
        criteria: [criteria.FRENCH, criteria.C_PSYCHE, criteria.SPACY, criteria.JAM, criteria.INSTRUMENTAL],
        selectedTrackTitle: "Nyl",
        selectedTrackYtId: "gxVbq33795g",
        spotifyId: "5jNdUJ73yrUZrJMVVGIuVQ",
        deezerId: "1536242",
        designers: ["Pierre Lacombe", "Bertrand Dhomme"],
        similarAlbums: [],
        isAGem: false,
    },
]

export default albums
