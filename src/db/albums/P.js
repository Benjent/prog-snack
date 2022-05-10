import regions from "../regions"
import { criteria } from "../criteria"

const albums = [
    {
        id: "pacific_drift_feelin_free",
        title: `Feelin' Free`,
        artist: "Pacific Drift",
        year: 1970,
        country: regions.ENGLAND,
        cover: ".jpg",
        criteria: [criteria.C_PSYCHE, criteria.JAM, criteria.ROCK, criteria.FANFARE],
        selectedTrackTitle: "Norman",
        selectedTrackYtId: "iw9g6nd4SUE",
        spotifyId: "0ahWrdtFsy0M2SKVKbgo8J",
        deezerId: null,
        designers: [],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "paga_group_haunted",
        title: "Haunted",
        artist: "Paga Group",
        year: 1988,
        country: regions.FRANCE,
        cover: ".jpg",
        criteria: [criteria.NEO_EIGHTIES, criteria.C_JAZZ, criteria.JAM],
        selectedTrackTitle: "In A Spiral",
        selectedTrackYtId: "AzVutYDCK3E",
        spotifyId: null,
        deezerId: null,
        designers: ["Naoko Paganotti", "Francois Anssens"],
        similarAlbums: [],
        isAGem: false,
    },
    // TODO Introuvable 1993 - Gnosis designers: Klaus Blasquiz
    {
        id: "paice_ashton_and_lord_malice_in_wonderland",
        title: "Malice In Wonderland",
        artist: "Paice, Ashton & Lord",
        year: 1977,
        country: regions.ENGLAND,
        cover: ".jpg",
        criteria: [criteria.ROCK],
        selectedTrackTitle: "Arabella (Oh Tell Me)",
        selectedTrackYtId: "vhBU2KdHfEY",
        spotifyId: "3F2uMgVXxZ1ZRFuedWxWbp",
        deezerId: "93079782",
        designers: ["Graham Ovenden"],
        similarAlbums: ["badger_white_lady"],
        isAGem: false,
    },
    {
        id: "paladin_paladin",
        title: "Paladin",
        artist: "Paladin",
        year: 1971,
        country: regions.ENGLAND,
        cover: ".jpg",
        criteria: [criteria.JAZZY_GROOVY, criteria.JAM, criteria.ROCK],
        selectedTrackTitle: "Bad Times",
        selectedTrackYtId: "4xDnN1wDNo0",
        spotifyId: null,
        deezerId: "161772",
        designers: [],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "paladin_charge",
        title: "Charge!",
        artist: "Paladin",
        year: 1972,
        country: regions.ENGLAND,
        cover: ".jpg",
        criteria: [criteria.JAZZY_GROOVY, criteria.JAM, criteria.ROCK],
        selectedTrackTitle: "Give Me Your Hand",
        selectedTrackYtId: "4IkkrkiNNGc",
        spotifyId: "56sMyp4iTiuSVsSzbjv2MX",
        deezerId: null,
        designers: ["Roger Dean"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "pallas_the_sentinel",
        title: "The Sentinel",
        artist: "Pallas",
        year: 1984,
        country: regions.SCOTLAND,
        cover: ".jpg",
        criteria: [criteria.NEO_EIGHTIES, criteria.STORYLINE, criteria.GLITTER, criteria.C_ELECTRO, criteria.SCI_FI, criteria.ODD_RHYTHM, criteria.TRANSITION],
        selectedTrackTitle: "Cut And Run",
        selectedTrackYtId: "HKPsRLfdOAw",
        spotifyId: "7dDNkXsAVYRXi8zogb98WS",
        deezerId: "628834",
        designers: ["Patrick Woodroffe"],
        similarAlbums: [],
        isAGem: true,
    },
    {
        id: "pallas_the_wedge",
        title: "The Wedge",
        artist: "Pallas",
        year: 1986,
        country: regions.SCOTLAND,
        cover: ".jpg",
        criteria: [criteria.NEO_EIGHTIES, criteria.C_ELECTRO, criteria.ODD_RHYTHM, criteria.ARENA],
        selectedTrackTitle: "The Executioner",
        selectedTrackYtId: null,
        spotifyId: "08JGJxUQHxkenNzykTIkMr",
        deezerId: "628851",
        designers: ["Andrew Douglas", "Bill Smith"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "pangee_hymnemonde",
        title: "Hymnemonde",
        artist: "Pangée",
        year: 1995,
        country: regions.QUEBEC,
        cover: ".jpg",
        criteria: [criteria.ODD_RHYTHM, criteria.INSTRUMENTAL, criteria.LENGTHY_TRACKS, criteria.C_PSYCHE, criteria.C_ELECTRO],
        selectedTrackTitle: "Cataracte",
        selectedTrackYtId: "TVkcSh3COMc",
        spotifyId: null,
        deezerId: null,
        designers: [],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "patrick_campbell_lyons_me_and_my_friend",
        title: "Me And My Friend",
        artist: "Patrick Campbell-Lyons",
        year: 1973,
        country: regions.IRELAND,
        cover: ".jpg",
        criteria: [criteria.FOLK, criteria.BAROQUE, criteria.SOFT],
        selectedTrackTitle: "Jesus Christ Junior",
        selectedTrackYtId: null,
        spotifyId: "3NmVQAwNGt3sQPGqGOrPvC",
        deezerId: "49395822",
        designers: [],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "the_patron_saints_fohhoh_bohob",
        title: "Fohhoh Bohob",
        artist: "The Patron Saints",
        year: 1969,
        country: regions.USA,
        cover: ".jpg",
        criteria: [criteria.ROCK, criteria.C_PSYCHE, criteria.C_FOLK, criteria.SOFT],
        selectedTrackTitle: "Relax",
        selectedTrackYtId: "G5oWJhXE0IM",
        spotifyId: null,
        deezerId: null,
        designers: [],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "paul_mccartney_mccartney_ii",
        title: "McCartney II",
        artist: "Paul McCartney",
        year: 1980,
        country: regions.ENGLAND,
        cover: ".jpg",
        criteria: [criteria.ART_POP, criteria.C_ELECTRO],
        selectedTrackTitle: "Front Parlour",
        selectedTrackYtId: "yVE0qmOfO-A",
        spotifyId: "17lbwRRrRoDWFY0QGkailA",
        deezerId: "78320792",
        designers: ["Linda McCartney"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "paul_and_linda_mcCartney_ram",
        title: "Ram",
        artist: "Paul & Linda McCartney",
        year: 1971,
        country: regions.USA,
        cover: ".jpg",
        criteria: [criteria.ART_POP, criteria.C_FOLK],
        selectedTrackTitle: "Uncle Albert / Admiral Halsey",
        selectedTrackYtId: "XI6C7L66zq8",
        spotifyId: "0B4A9VnKXkK9HcDegigo5S",
        deezerId: "2408871",
        designers: [],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "people_ceremony",
        title: "Ceremony - Buddha Meets Rock",
        artist: "People",
        year: 1971,
        country: regions.ENGLAND,
        cover: ".jpg",
        criteria: [criteria.C_PSYCHE, criteria.JAM, criteria.SOUND_COLLAGES, criteria.UNCOMMON_INSTRUMENTS, criteria.ORIENTAL, criteria.EXPERIMENTAL, criteria.SPIRITUAL],
        selectedTrackTitle: "Epilogue",
        selectedTrackYtId: null,
        spotifyId: "1aUFZwleSBPcDkeiMvxkPE",
        deezerId: null,
        designers: ["Harucha-Nekocha", "Mick"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "peter_gabriel_car",
        title: "Car",
        artist: "Peter Gabriel",
        year: 1977,
        country: regions.ENGLAND,
        cover: ".jpg",
        criteria: [criteria.ART_POP],
        selectedTrackTitle: "Here Comes The Flood",
        selectedTrackYtId: "vb7htoJAK7g",
        spotifyId: "0kDFjyfGFtiIMXlxJ120Ok",
        deezerId: "70550882",
        designers: ["Storm Thorgerson", "Hipgnosis"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "peter_gabriel_scratch",
        title: "Scratch",
        artist: "Peter Gabriel",
        year: 1978,
        country: regions.ENGLAND,
        cover: ".jpg",
        criteria: [criteria.ART_POP, criteria.C_ELECTRO, criteria.ODD_RHYTHM],
        selectedTrackTitle: "White Shadow",
        selectedTrackYtId: "CJrtA-shb7Y",
        spotifyId: "3Ob7H8Z9DXN2XWMUbGtqmZ",
        deezerId: "70550532",
        designers: ["Hipgnosis"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "peter_gabriel_melt",
        title: "Melt",
        artist: "Peter Gabriel",
        year: 1980,
        country: regions.ENGLAND,
        cover: ".jpg",
        criteria: [criteria.ART_POP, criteria.C_ELECTRO, criteria.SOFT_SEVENTIES],
        selectedTrackTitle: "Family Snapshot",
        selectedTrackYtId: "Uh9wIVZBhT0",
        spotifyId: "0KLyPao7XpXHSAMmbkxCoz",
        deezerId: "70550782",
        designers: ["Hipgnosis"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "picchio_dal_pozzo_picchio_dal_pozzo",
        title: "Picchio Dal Pozzo",
        artist: "Picchio Dal Pozzo",
        year: 1976,
        country: regions.ITALY,
        cover: ".jpg",
        criteria: [criteria.ITALIAN, criteria.C_JAZZ, criteria.C_PSYCHE, criteria.ODD_RHYTHM, criteria.UNCOMMON_INSTRUMENTS, criteria.INSTRUMENTAL, criteria.SYMPHONIC, criteria.FEMALE],
        selectedTrackTitle: "La Bolla",
        selectedTrackYtId: "zkdN_QXh5e4",
        spotifyId: null,
        deezerId: null,
        designers: [],
        similarAlbums: [],
        isAGem: true,
        description: `TODO description`,
    },
    {
        id: "picchio_dal_pozzo_abbiamo_tutti_i_suoi_problemi",
        title: "Abbiamo Tutti I Suoi Problemi",
        artist: "Picchio Dal Pozzo",
        year: 1980,
        country: regions.ITALY,
        cover: ".jpg",
        criteria: [criteria.ITALIAN, criteria.EXPERIMENTAL, criteria.C_JAZZ, criteria.C_PSYCHE, criteria.ODD_RHYTHM, criteria.LENGTHY_TRACKS, criteria.PATCHWORK],
        selectedTrackTitle: "Moderno Ballabile (Richiesta Con Dedica)",
        selectedTrackYtId: "hU0B-K-Me1Q",
        spotifyId: null,
        deezerId: null,
        designers: [],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "pierre_henry_urban_sax_paradise_lost",
        title: "Paradise Lost",
        artist: "Pierre Henry & Urban Sax",
        year: 1982,
        country: regions.FRANCE,
        cover: ".jpg",
        criteria: [criteria.ELECTRO, criteria.INSTRUMENTAL, criteria.SPACY, criteria.C_PSYCHE, criteria.EXPERIMENTAL, criteria.C_JAZZ],
        selectedTrackTitle: "Gate Of paradise",
        selectedTrackYtId: "fGXP-CS0EHU",
        spotifyId: null,
        deezerId: null,
        designers: [],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "pink_floyd_the_piper_at_the_gates_of_dawn",
        title: "The Piper At The Gates Of Dawn",
        artist: "Pink Floyd",
        year: 1967,
        country: regions.ENGLAND,
        cover: ".jpg",
        criteria: [criteria.C_PSYCHE, criteria.FUNNY, criteria.CRISPY_SIXTIES],
        selectedTrackTitle: "Interstellar Overdrive",
        selectedTrackYtId: "4o2sA0vpA-4",
        spotifyId: "0Fke5eiQ6lszQHlwiFygqn",
        deezerId: "12506866",
        designers: ["Vic Singh"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "pink_floyd_a_saucerful_of_secrets",
        title: "A Saucerful Of Secrets",
        artist: "Pink Floyd",
        year: 1968,
        country: regions.ENGLAND,
        cover: ".jpg",
        criteria: [criteria.C_PSYCHE, criteria.CRISPY_SIXTIES],
        selectedTrackTitle: "Set The Controls For The Heart Of The Sun",
        selectedTrackYtId: "bbWOmh_rRq0",
        spotifyId: "5rwuexO7oiRJKqzZrd1upQ",
        deezerId: "1262258",
        designers: ["Hipgnosis"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "pink_floyd_ummagumma",
        title: "Ummagumma",
        artist: "Pink Floyd",
        year: 1969,
        country: regions.ENGLAND,
        cover: ".jpg",
        criteria: [criteria.TRANSITION, criteria.SOUND_COLLAGES, criteria.C_PSYCHE, criteria.C_FOLK, criteria.CRISPY_SIXTIES],
        selectedTrackTitle: "The Narrow Way",
        selectedTrackYtId: "85Iz-_xigS8",
        spotifyId: "4uuyGVEZpYaGB1HtewAogW",
        deezerId: "1262260",
        designers: ["Hipgnosis"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "pink_floyd_more",
        title: "More",
        artist: "Pink Floyd",
        year: 1969,
        country: regions.ENGLAND,
        cover: ".jpg",
        criteria: [criteria.C_PSYCHE, criteria.C_FOLK, criteria.PATCHWORK, criteria.SOUNDTRACK, criteria.CRISPY_SIXTIES],
        selectedTrackTitle: "Cymbaline",
        selectedTrackYtId: "ZM5iopSs_rI",
        spotifyId: "6xWRCFsaqoYj3ZwxMkCE85",
        deezerId: "1262259",
        designers: ["Hipgnosis"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "pink_floyd_atom_heart_mother",
        title: "Atom Heart Mother",
        artist: "Pink Floyd",
        year: 1970,
        country: regions.ENGLAND,
        cover: ".jpg",
        criteria: [criteria.CONCEPT, criteria.EXPERIMENTAL, criteria.LENGTHY_TRACKS, criteria.SOUND_COLLAGES, criteria.BLENDS, criteria.C_PSYCHE, criteria.C_FOLK, criteria.CRISPY_SIXTIES],
        selectedTrackTitle: "Atom Heart Mother",
        selectedTrackYtId: "yusGUGTVAyw",
        spotifyId: "5c1ZTzT4oSkiiFS4wmEuOe",
        deezerId: "1262261",
        designers: ["Hipgnosis", "Storm Thorgerson"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "pink_floyd_meddle",
        title: "Meddle",
        artist: "Pink Floyd",
        year: 1971,
        country: regions.ENGLAND,
        cover: ".jpg",
        criteria: [criteria.EXPERIMENTAL, criteria.LENGTHY_TRACKS, criteria.SOUND_COLLAGES, criteria.C_PSYCHE, criteria.C_ELECTRO, criteria.C_FOLK],
        selectedTrackTitle: "A Pillow Of Winds",
        selectedTrackYtId: "uThZ1uuLLWM",
        spotifyId: "7yKRvvqspSxfLkr7C7RaAI",
        deezerId: "1262262",
        designers: ["Storm Thorgerson"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "pink_floyd_obscured_by_clouds",
        title: "Obscured By Clouds",
        artist: "Pink Floyd",
        year: 1972,
        country: regions.ENGLAND,
        cover: ".jpg",
        criteria: [criteria.ROCK, criteria.SOUNDTRACK],
        selectedTrackTitle: `When You're In`,
        selectedTrackYtId: "6vr07uuBjg4",
        spotifyId: "3HZKOTmpigZcWHxACjENyh",
        deezerId: "1262263",
        designers: ["Hipgnosis"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "pink_floyd_dark_side_of_the_moon",
        title: "Dark Side Of The Moon",
        artist: "Pink Floyd",
        year: 1973,
        country: regions.ENGLAND,
        cover: ".jpg",
        criteria: [criteria.CONCEPT, criteria.ODD_RHYTHM, criteria.TRANSITION, criteria.SOFT, criteria.SOUND_COLLAGES, criteria.C_ELECTRO],
        selectedTrackTitle: "Time",
        selectedTrackYtId: "rL3AgkwbYgo",
        spotifyId: "2WT1pbYjLJciAR26yMebkH",
        deezerId: "59853992",
        designers: ["Hipgnosis", "George Hardie"],
        similarAlbums: [],
        isAGem: true,
        description: `TODO description`,
    },
    {
        id: "pink_floyd_wish_you_were_here",
        title: "Wish You Were Here",
        artist: "Pink Floyd",
        year: 1975,
        country: regions.ENGLAND,
        cover: ".jpg",
        criteria: [criteria.JAM, criteria.LENGTHY_TRACKS, criteria.SOUND_COLLAGES, criteria.C_ELECTRO, criteria.TOUCHING_VOCALS],
        selectedTrackTitle: "Welcome To The Machine",
        selectedTrackYtId: "lt-udg9zQSE",
        spotifyId: "6uvBKDGlJAYLH5Vy6RQVsc",
        deezerId: "59853252",
        designers: ["Hipgnosis", "George Hardie"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "pink_floyd_animals",
        title: "Animals",
        artist: "Pink Floyd",
        year: 1977,
        country: regions.ENGLAND,
        cover: ".jpg",
        criteria: [criteria.CONCEPT, criteria.JAM, criteria.LENGTHY_TRACKS, criteria.SOUND_COLLAGES, criteria.C_FOLK, criteria.FANTASY],
        selectedTrackTitle: "Sheep",
        selectedTrackYtId: "UqlsVZ1zxMk",
        spotifyId: "21jUB9RqplD6OqtsTjKBnO",
        deezerId: "1262266",
        designers: ["Aubrey Powell", "Storm Thorgerson", "Roger Waters"],
        similarAlbums: [],
        isAGem: true,
        description: `TODO description`,
    },
    {
        id: "pink_floyd_the_wall",
        title: "The Wall",
        artist: "Pink Floyd",
        year: 1979,
        country: regions.ENGLAND,
        cover: ".jpg",
        criteria: [criteria.CONCEPT, criteria.TRANSITION, criteria.SOUND_COLLAGES, criteria.BLENDS, criteria.SPECTACULAR, criteria.ROCK_OPERA, criteria.TOUCHING_VOCALS, criteria.NEO_EIGHTIES, criteria.ARENA],
        selectedTrackTitle: "The Trial",
        selectedTrackYtId: "4fa7AtI1msk",
        spotifyId: "6WaIQHxEHtZL0RZ62AuY0g",
        deezerId: "59854962",
        designers: ["Roger Waters", "Gerald Scarfe"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "pink_floyd_the_final_cut",
        title: "The Final Cut",
        artist: "Pink Floyd",
        year: 1983,
        country: regions.ENGLAND,
        cover: ".jpg",
        criteria: [criteria.STORYLINE, criteria.TRANSITION, criteria.SOUND_COLLAGES, criteria.ROCK_OPERA, criteria.TOUCHING_VOCALS, criteria.NEO_EIGHTIES, criteria.ORCHESTRAL_PARTS],
        selectedTrackTitle: "Your Possible Pasts",
        selectedTrackYtId: "E-ve_sgdgZs",
        spotifyId: "5ChHkKb5VhZe0pgQRsvpek",
        deezerId: "1262269",
        designers: ["Roger Waters", "Artful Dodgers"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "pink_floyd_a_momentary_lapse_of_reason",
        title: "A Momentary Lapse Of Reason",
        artist: "Pink Floyd",
        year: 1987,
        country: regions.ENGLAND,
        cover: ".jpg",
        criteria: [criteria.SOUND_COLLAGES, criteria.NEO_EIGHTIES, criteria.ART_POP, criteria.TRANSITION, criteria.C_ELECTRO],
        selectedTrackTitle: "The Dogs Of War",
        selectedTrackYtId: "rdBtwsSPgW4",
        spotifyId: "1tWgv9v78StWukBRBVNyxA",
        deezerId: "12114252",
        designers: ["Storm Thorgerson", "Nexus", "Icon", "Andrew Ellis"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "pink_floyd_the_division_bell",
        title: "The Division Bell",
        artist: "Pink Floyd",
        year: 1994,
        country: regions.ENGLAND,
        cover: ".jpg",
        criteria: [criteria.SOUND_COLLAGES, criteria.NEO_EIGHTIES, criteria.ART_POP, criteria.TRANSITION],
        selectedTrackTitle: "High Hopes",
        selectedTrackYtId: "7jMlFXouPk8",
        spotifyId: "7wzStEU2keGohEu8jpVMZW",
        deezerId: "1262268",
        designers: ["Storm Thorgerson"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "plat_du_jour_plat_du_jour",
        title: "Plat Du Jour",
        artist: "Plat Du Jour",
        year: 1977,
        country: regions.FRANCE,
        cover: ".jpg",
        criteria: [criteria.ODD_RHYTHM, criteria.C_PSYCHE, criteria.C_JAZZ, criteria.FRENCH, criteria.HEAVY, criteria.JAZZY_GROOVY],
        selectedTrackTitle: "Zilbra",
        selectedTrackYtId: "NnSnwsz9aXs",
        spotifyId: null,
        deezerId: null,
        designers: [],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "pollen_pollen",
        title: "Pollen",
        artist: "Pollen",
        year: 1976,
        country: regions.QUEBEC,
        cover: ".jpg",
        criteria: [criteria.FRENCH, criteria.C_ELECTRO, criteria.ODD_RHYTHM, criteria.UNCOMMON_INSTRUMENTS, criteria.SOPHISTICATED, criteria.SYMPHONIC],
        selectedTrackTitle: "La Femme Ailée",
        selectedTrackYtId: "k_FJWO-jNUQ",
        spotifyId: "1Pz6HZgLz1V3YV8M69i309",
        deezerId: "259813472",
        designers: ["Claudel Huet", "Jacques Lamarche"],
        similarAlbums: [],
        isAGem: true,
        description: `TODO Description`,
    },
    {
        id: "poseidon_found_my_way",
        title: "Found My Way",
        artist: "Poseidon",
        year: 1975,
        country: regions.GERMANY,
        cover: ".jpg",
        criteria: [criteria.C_FOLK, criteria.SYMPHONIC, criteria.C_ELECTRO],
        selectedTrackTitle: "Found My Way",
        selectedTrackYtId: "qITuvN48Wxo",
        spotifyId: null,
        deezerId: null,
        designers: ["Werner Kühn"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "premiata_forneria_marconi_storia_di_un_minuto",
        title: "Storia Di Un Minuto",
        artist: "Premiata Forneria Marconi",
        year: 1972,
        country: regions.ITALY,
        cover: ".jpg",
        criteria: [criteria.ITALIAN, criteria.MEDIEVAL, criteria.BAROQUE, criteria.SYMPHONIC, criteria.C_JAZZ, criteria.C_FOLK],
        selectedTrackTitle: "Dove... Quando... (Parte I)",
        selectedTrackYtId: "5qa0029LAbo",
        spotifyId: "51pz4wvc0BPtjnGCWjxX91",
        deezerId: "111977",
        designers: ["Cesar Monti", "Marco Damiani", "Wanda Spinello"],
        similarAlbums: [],
        isAGem: true,
        description: `TODO description`,
    },
    {
        id: "premiata_forneria_marconi_per_un_amico",
        title: "Per Un Amico",
        artist: "Premiata Forneria Marconi",
        year: 1972,
        country: regions.ITALY,
        cover: ".jpg",
        criteria: [criteria.ITALIAN, criteria.MEDIEVAL, criteria.BAROQUE, criteria.SYMPHONIC, criteria.C_JAZZ, criteria.C_FOLK, criteria.ODD_RHYTHM, criteria.UNCOMMON_INSTRUMENTS],
        selectedTrackTitle: "Per Un Amico",
        selectedTrackYtId: "gDWKIgopUSI",
        spotifyId: "1NeJ0QqKv002iYDiOCaUOA",
        deezerId: "117007",
        designers: ["Cesar Monti", "Gianni Celano Giannici", "Wanda Spinello"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "premiata_forneria_marconi_lisola_di_niente",
        title: `L'isola Di Niente`,
        artist: "Premiata Forneria Marconi",
        year: 1974,
        country: regions.ITALY,
        cover: ".jpg",
        criteria: [criteria.ITALIAN, criteria.SYMPHONIC, criteria.C_FOLK, criteria.MEDIEVAL],
        selectedTrackTitle: "La Luna Nuova",
        selectedTrackYtId: "JzjoIRPtuWo",
        spotifyId: "7bXJzll4GUEOGqX1YshA8C",
        deezerId: "117077",
        designers: ["Fabio Nicoli Associates", "Terry Gough"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "premiata_forneria_marconi_chocolate_kings",
        title: "Chocolate Kings",
        artist: "Premiata Forneria Marconi",
        year: 1975,
        country: regions.ITALY,
        cover: ".jpg",
        criteria: [criteria.ODD_RHYTHM, criteria.SYMPHONIC, criteria.C_FOLK, criteria.C_JAZZ],
        selectedTrackTitle: "Harlequin",
        selectedTrackYtId: "SAL0LInPlx8",
        spotifyId: "3FTBY9sW29JfLjAZHndgyY",
        deezerId: "5696441",
        designers: [],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "premiata_forneria_marconi_jet_lag",
        title: "Jet Lag",
        artist: "Premiata Forneria Marconi",
        year: 1977,
        country: regions.ITALY,
        cover: ".jpg",
        criteria: [criteria.ODD_RHYTHM, criteria.SYMPHONIC, criteria.C_FOLK, criteria.C_JAZZ, criteria.JAM],
        selectedTrackTitle: "Jet Lag",
        selectedTrackYtId: "URDMIQLVqu8",
        spotifyId: "1F8ppE674Bik93kRyqaEly",
        deezerId: "111251",
        designers: ["Consorzio Comunicazione Sonora"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "premiata_forneria_marconi_passpartu",
        title: "Passpartù",
        artist: "Premiata Forneria Marconi",
        year: 1978,
        country: regions.ITALY,
        cover: ".jpg",
        criteria: [criteria.ITALIAN, criteria.MEDIEVAL, criteria.ODD_RHYTHM, criteria.C_FOLK],
        selectedTrackTitle: "Viene Il Santo",
        selectedTrackYtId: "syj_fJmucaE",
        spotifyId: "2JNaih64nuuvmaDDkPKGFL",
        deezerId: "117050",
        designers: ["Rolando Cassinari", "Andrea Pazienza"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "premiata_forneria_marconi_suonare_suonare",
        title: "Suonare Suonare",
        artist: "Premiata Forneria Marconi",
        year: 1980,
        country: regions.ITALY,
        cover: ".jpg",
        criteria: [criteria.ITALIAN, criteria.ART_POP, criteria.SOFT_SEVENTIES],
        selectedTrackTitle: "Volo A Vela",
        selectedTrackYtId: "QrKt2JRlyFw",
        spotifyId: "1Gre4E48EWeLgA4ffo5cve",
        deezerId: "117059",
        designers: ["Francesco Logoluso", "Ambrogio Lo Giudice"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "premiata_forneria_marconi_come_ti_va_in_riva_alla_citta",
        title: "Come Ti Va In Riva Alla Città",
        artist: "Premiata Forneria Marconi",
        year: 1981,
        country: regions.ITALY,
        cover: ".jpg",
        criteria: [criteria.ITALIAN, criteria.ART_POP, criteria.NEO_EIGHTIES, criteria.ARENA],
        selectedTrackTitle: "Come Ti Va",
        selectedTrackYtId: "TkRke9s_TkY",
        spotifyId: "6oiL1Z5oSaXjTNyPv8sjNE",
        deezerId: "243998",
        designers: ["Mario Convertino"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "premiata_forneria_marconi_pfm_pfm",
        title: "PFM? PFM!",
        artist: "Premiata Forneria Marconi",
        year: 1981,
        country: regions.ITALY,
        cover: ".jpg",
        criteria: [criteria.ITALIAN, criteria.ART_POP, criteria.NEO_EIGHTIES, criteria.C_ELECTRO],
        selectedTrackTitle: "Sentimentalmente",
        selectedTrackYtId: "b_S9JQiRzvw",
        spotifyId: "6tsMQpxTi06P7o4WZXRNSQ",
        deezerId: null,
        designers: ["Max Quinque", "Alessandro Petrini"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "premiata_forneria_marconi_miss_baker",
        title: "Miss Baker",
        artist: "Premiata Forneria Marconi",
        year: 1981,
        country: regions.ITALY,
        cover: ".jpg",
        criteria: [criteria.ITALIAN, criteria.ART_POP, criteria.NEO_EIGHTIES, criteria.C_ELECTRO, criteria.FRENCH, criteria.FEMALE],
        selectedTrackTitle: "Finta Lettera Di Addio Di Una Rock Star Per Farsi Propaganda",
        selectedTrackYtId: "6JkgwzY8Dc4",
        spotifyId: "74JWuMT8283wZ97AO6S9rf",
        deezerId: "8240240",
        designers: ["Mauro Pagani"],
        similarAlbums: ["genesis_invisible_touch"],
        isAGem: false,
    },
    {
        id: "procol_harum_procol_harum",
        title: "Procol Harum",
        artist: "Procol Harum",
        year: 1967,
        country: regions.ENGLAND,
        cover: ".jpg",
        criteria: [criteria.ROCK, criteria.PIANO, criteria.BAROQUE],
        selectedTrackTitle: "Conquistador",
        selectedTrackYtId: "qXjIGRYBzEY",
        spotifyId: "6OLClv70DOXi5XxmNR0jk2",
        deezerId: "77251802",
        designers: ["Dickinson"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "procol_harum_shine_on_brightly",
        title: "Shine On Brightly",
        artist: "Procol Harum",
        year: 1968,
        country: regions.ENGLAND,
        cover: ".jpg",
        criteria: [criteria.SYMPHONIC, criteria.LENGTHY_TRACKS, criteria.BAROQUE, criteria.FEMALE],
        selectedTrackTitle: `In Held 'Twas In I`,
        selectedTrackYtId: null,
        spotifyId: "2jdvkNAo0dG5QwoMHwB42C",
        deezerId: "77251812",
        designers: ["George Underwood"],
        similarAlbums: ["deep_purple_the_book_of_taliesyn"],
        isAGem: false,
    },
    {
        id: "procol_harum_a_salty_dog",
        title: "A Salty Dog",
        artist: "Procol Harum",
        year: 1969,
        country: regions.ENGLAND,
        cover: ".jpg",
        criteria: [criteria.BAROQUE, criteria.ROCK, criteria.C_FOLK, criteria.UNCOMMON_INSTRUMENTS, criteria.ORCHESTRAL_PARTS],
        selectedTrackTitle: `Wreck Of The Hesperus`,
        selectedTrackYtId: "0gIW8w3J_ds",
        spotifyId: "1IIiA6WGb5XGb9qZpvCQKK",
        deezerId: "77251772",
        designers: ["Dickinson"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "procol_harum_home",
        title: "Home",
        artist: "Procol Harum",
        year: 1970,
        country: regions.ENGLAND,
        cover: ".jpg",
        criteria: [criteria.BAROQUE, criteria.ROCK],
        selectedTrackTitle: `Whaling Stories`,
        selectedTrackYtId: "nRvA4W4vSqU",
        spotifyId: "2ksXuf8dKe61LDYSxeNYBs",
        deezerId: "77251872",
        designers: ["Dickinson"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "procol_harum_broken_barricades",
        title: "Broken Barricades",
        artist: "Procol Harum",
        year: 1971,
        country: regions.ENGLAND,
        cover: ".jpg",
        criteria: [criteria.ROCK],
        selectedTrackTitle: `Song For A Dreamer`,
        selectedTrackYtId: "u-vOp7hr1c0",
        spotifyId: "35vRWznRW5OPcb2NASm6ub",
        deezerId: "123402462",
        designers: ["CCS"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "procol_harum_grand_hotel",
        title: "Grand Hotel",
        artist: "Procol Harum",
        year: 1973,
        country: regions.ENGLAND,
        cover: ".jpg",
        criteria: [criteria.BAROQUE, criteria.PIANO, criteria.ORCHESTRAL_PARTS, criteria.ODD_RHYTHM],
        selectedTrackTitle: `Grand Hotel`,
        selectedTrackYtId: "cPkkqJmoyVA",
        spotifyId: "5IVVAF53kGojw4SCY6Dgu2",
        deezerId: "129099512",
        designers: ["Spencer Zahn"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "procol_harum_exotic_birds_and_fruit",
        title: "Exotic Birds And Fruit",
        artist: "Procol Harum",
        year: 1974,
        country: regions.ENGLAND,
        cover: ".jpg",
        criteria: [criteria.ROCK, criteria.PIANO],
        selectedTrackTitle: `The Thin End Of The Wedge`,
        selectedTrackYtId: "Ae8tGuc57-U",
        spotifyId: null,
        deezerId: "123402452",
        designers: ["Jakob Bogdani"],
        similarAlbums: ["supertramp_crisis_what_crisis"],
        isAGem: false,
    },
    {
        id: "procol_harum_procols_ninth",
        title: `Procol's Ninth`,
        artist: "Procol Harum",
        year: 1975,
        country: regions.ENGLAND,
        cover: ".jpg",
        criteria: [criteria.ROCK, criteria.PIANO],
        selectedTrackTitle: `Without A Doubt`,
        selectedTrackYtId: "Boxb8ZKulqA",
        spotifyId: null,
        deezerId: null,
        designers: ["James Cotier"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "procol_harum_something_magic",
        title: "Something Magic",
        artist: "Procol Harum",
        year: 1977,
        country: regions.ENGLAND,
        cover: ".jpg",
        criteria: [criteria.ORCHESTRAL_PARTS, criteria.PIANO, criteria.SYMPHONIC, criteria.LENGTHY_TRACKS, criteria.BAROQUE, criteria.STORYLINE],
        selectedTrackTitle: `The Worm & The Tree`,
        selectedTrackYtId: "iQZk8L0f4hk",
        spotifyId: "0gQRFovuwdan4HfovGf67w",
        deezerId: null,
        designers: ["Bruce Meek"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "prosper_broken_door",
        title: "Broken Door",
        artist: "Prosper",
        year: 1975,
        country: regions.GERMANY,
        cover: ".jpg",
        criteria: [criteria.C_JAZZ, criteria.SOPHISTICATED, criteria.C_PSYCHE, criteria.INSTRUMENTAL, criteria.JAM, criteria.SOFT],
        selectedTrackTitle: "Beginning",
        selectedTrackYtId: "0zXQJRMRydk",
        spotifyId: null,
        deezerId: null,
        designers: ["Ernst Müller"],
        similarAlbums: [], // todo similar to yes early
        isAGem: true,
        description: `TODO description`,
    },
    {
        id: "providence_ever_sense_the_dawn",
        title: "Ever Sence The Dawn",
        artist: "Providence",
        year: 1972,
        country: regions.USA,
        cover: ".jpg",
        criteria: [criteria.FOLK, criteria.GLITTER, criteria.SOFT, criteria.UNCOMMON_INSTRUMENTS, criteria.BAROQUE],
        selectedTrackTitle: "Mountain",
        selectedTrackYtId: "gNSXJD2RZBg",
        spotifyId: null,
        deezerId: null,
        designers: ["Bob Barriatua"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "prudence_tomorrow_may_be_vanished",
        title: "Tomorrow May Be Vanished",
        artist: "Prudence",
        year: 1972,
        country: regions.NORWAY,
        cover: ".jpg",
        criteria: [criteria.UNCOMMON_INSTRUMENTS, criteria.ODD_RHYTHM, criteria.C_FOLK],
        selectedTrackTitle: "Tomorrow May Be Vanished",
        selectedTrackYtId: "I1NljUJ3NNU",
        spotifyId: "575ox0MaU9ogzw1ZyZhTO3",
        deezerId: null,
        designers: [],
        similarAlbums: [], // TODO similar jethro tull early
        isAGem: false,
    },
    {
        id: "prudence_drunk_and_happy",
        title: "Drunk And Happy",
        artist: "Prudence",
        year: 1973,
        country: regions.NORWAY,
        cover: ".jpg",
        criteria: [criteria.UNCOMMON_INSTRUMENTS, criteria.FUNNY, criteria.C_FOLK],
        selectedTrackTitle: "I Hope We Never Get Too Serious About The Music So This Is Just A Joke",
        selectedTrackYtId: "lb4E6GLGNzA",
        spotifyId: "0Ym8hOjR8ogK1nPEC7Nztx",
        deezerId: "690209",
        designers: [],
        similarAlbums: [], // TODO similar jethro tull early
        isAGem: false,
    },
    {
        id: "public_foot_the_roman_public_foot_the_roman",
        title: "Public Foot The Roman",
        artist: "Public Foot The Roman",
        year: 1973,
        country: regions.ENGLAND,
        cover: ".jpg",
        criteria: [criteria.ODD_RHYTHM, criteria.GLITTER, criteria.JAZZY_GROOVY],
        selectedTrackTitle: "Decline And Fall",
        selectedTrackYtId: "KAZhNNda0kw",
        spotifyId: null,
        deezerId: null,
        designers: ["Hipgnosis"],
        similarAlbums: ["wishbone_ash_argus"],
        isAGem: true,
        description: `TODO Description`,
    },
    {
        id: "public_image_ltd_the_flowers_of_romance",
        title: "The Flowers Of Romance",
        artist: "Public Image Ltd.",
        year: 1981,
        country: regions.ENGLAND,
        cover: ".jpg",
        criteria: [criteria.EXPERIMENTAL, criteria.ART_POP, criteria.NEO_EIGHTIES, criteria.C_ELECTRO],
        selectedTrackTitle: "Phenagen",
        selectedTrackYtId: "rDeBlxqBu1U",
        spotifyId: "6pC9DVTtbrL6vPQ2wcUrMu",
        deezerId: "1499361",
        designers: ["Jeannette Lee"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "public_image_ltd_this_is_what_you_want",
        title: "This Is What You Want... This Is What You Get",
        artist: "Public Image Ltd.",
        year: 1984,
        country: regions.ENGLAND,
        cover: ".jpg",
        criteria: [criteria.C_PSYCHE, criteria.EXPERIMENTAL, criteria.NEO_EIGHTIES, criteria.ART_POP],
        selectedTrackTitle: "The Pardon",
        selectedTrackYtId: "d6rpCFHvqKg",
        spotifyId: "6eSITOp2WRPIwqRD1tTJjX",
        deezerId: "1499368",
        designers: [],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "pulsar_pollen",
        title: "Pollen",
        artist: "Pulsar",
        year: 1975,
        country: regions.FRANCE,
        cover: ".jpg",
        criteria: [criteria.ODD_RHYTHM, criteria.INSTRUMENTAL, criteria.LENGTHY_TRACKS, criteria.SOFT, criteria.C_PSYCHE, criteria.C_ELECTRO, criteria.HUMBLE, criteria.FRENCH],
        selectedTrackTitle: "Apaisement",
        selectedTrackYtId: "21D_sVa_-p8",
        spotifyId: null,
        deezerId: null,
        designers: ["Logo"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "pulsar_the_strands_of_the_future",
        title: "The Strands Of The Future",
        artist: "Pulsar",
        year: 1976,
        country: regions.FRANCE,
        cover: ".jpg",
        criteria: [criteria.ODD_RHYTHM, criteria.INSTRUMENTAL, criteria.LENGTHY_TRACKS, criteria.SOFT, criteria.C_PSYCHE, criteria.C_ELECTRO, criteria.HUMBLE, criteria.FRENCH],
        selectedTrackTitle: "The Strands Of The Future",
        selectedTrackYtId: "KpL5htneI-c",
        spotifyId: null,
        deezerId: null,
        designers: ["Alain Golay", "Victor Bosch"],
        similarAlbums: [],
        isAGem: true,
        description: `TODO description`,
    },
    {
        id: "pulsar_halloween",
        title: "Halloween",
        artist: "Pulsar",
        year: 1977,
        country: regions.FRANCE,
        cover: ".jpg",
        criteria: [criteria.ODD_RHYTHM, criteria.INSTRUMENTAL, criteria.LENGTHY_TRACKS, criteria.SOFT, criteria.C_PSYCHE, criteria.C_ELECTRO, criteria.HUMBLE, criteria.FRENCH],
        selectedTrackTitle: "Halloween (Part I)",
        selectedTrackYtId: "2yD0VxZgobo",
        spotifyId: null,
        deezerId: null,
        designers: ["Victor Bosch"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "pulsar_bienvenue_au_conseil_dadministration",
        title: `Bienvenue Au Conseil D'administration`,
        artist: "Pulsar",
        year: 1981,
        country: regions.FRANCE,
        cover: ".jpg",
        criteria: [criteria.SOFT_SEVENTIES, criteria.FRENCH, criteria.C_ELECTRO, criteria.SPACY, criteria.UNCOMMON_INSTRUMENTS, criteria.STORYLINE, criteria.ROCK_OPERA, criteria.ODD_RHYTHM, criteria.TOUCHING_VOCALS],
        selectedTrackTitle: "La Femme Au Bout Du Couloir / La Tempête, Encore / Accident-Vision / Cri",
        selectedTrackYtId: "zM2mUigP73U",
        spotifyId: "5fsksUZIVtaEWQVDPVzTQz",
        deezerId: "494960",
        designers: [],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "pulsar_gorlitz",
        title: `Görlitz`,
        artist: "Pulsar",
        year: 1989,
        country: regions.FRANCE,
        cover: ".jpg",
        criteria: [criteria.LENGTHY_TRACKS, criteria.NEO_EIGHTIES, criteria.FRENCH, criteria.SOFT, criteria.SYMPHONIC, criteria.C_ELECTRO],
        selectedTrackTitle: "Görlitz",
        selectedTrackYtId: "51lquCYrS4Q",
        spotifyId: "6q8WIwIJghFUHp9niOcpdy",
        deezerId: "46200",
        designers: [],
        similarAlbums: ["pink_floyd_the_division_bell"],
        isAGem: false,
    },
    {
        id: "pythagoras_journey_to_the_vast_unknown",
        title: "Journey To The Vast Unknown",
        artist: "Pythagoras",
        year: 1980,
        country: regions.NETHERLANDS,
        cover: ".jpg",
        criteria: [criteria.INSTRUMENTAL, criteria.JAM, criteria.AMBIENT, criteria.C_PSYCHE, criteria.ELECTRO],
        selectedTrackTitle: "Journey To The Vast Unknown (Part II)",
        selectedTrackYtId: "qLWSAGAjUqw",
        spotifyId: "4rhvRh9TBivWZ6OLCv3Jzv",
        deezerId: "72275242",
        designers: ["Robert Paul Batwin"],
        similarAlbums: [],
        isAGem: false,
    },
]

export default albums
