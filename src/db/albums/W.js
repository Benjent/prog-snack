import { regions } from "../regions"
import { criteria } from "../criteria"

/**
 * @type {Array.<import(".").Album>}
 */
const albums = [
    {
        id: "wallace_collection_laughing_cavalier",
        title: "Laughing Cavalier",
        artist: "Wallace Collection",
        year: 1969,
        country: regions.BELGIUM,
        criteria: [criteria.ROCK, criteria.BAROQUE, criteria.C_PSYCHE],
        selectedTrackTitle: "Peru",
        selectedTrackYtId: "GcFDbDRYTuY",
        spotifyId: "4RF5HhZgleQlS1Sj7fSIZ6",
        deezerId: "44805901",
        designers: [],
        similarAlbums: [], // similar beatles get back? ou white album
        isAGem: false,
    },
    {
        id: "wallace_collection_wallace_collection",
        title: "Wallace Collection",
        artist: "Wallace Collection",
        year: 1970,
        country: regions.BELGIUM,
        criteria: [criteria.ROCK, criteria.BAROQUE, criteria.C_PSYCHE, criteria.C_FOLK, criteria.FEMALE],
        selectedTrackTitle: "Bruxelles (Part 1)",
        selectedTrackYtId: "RyeFeLbLdsg",
        spotifyId: null,
        deezerId: null,
        designers: [],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "walpurgis_queen_of_saba",
        title: "Queen Of Saba",
        artist: "Walpurgis",
        year: 1972,
        country: regions.GERMANY,
        criteria: [criteria.UNCOMMON_INSTRUMENTS, criteria.C_FOLK, criteria.JAM],
        selectedTrackTitle: "My Last Illusion",
        selectedTrackYtId: "J9Io0tq-Gjs",
        spotifyId: "4otJ4ZHf7bCUSDMLcQeimu",
        deezerId: "72319892",
        designers: [],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "walrus_walrus",
        title: "Walrus",
        artist: "Walrus",
        year: 1970,
        country: regions.ENGLAND,
        criteria: [criteria.LENGTHY_TRACKS, criteria.UNCOMMON_INSTRUMENTS, criteria.JAZZY_GROOVY, criteria.ODD_RHYTHM, criteria.CRISPY_SIXTIES, criteria.C_PSYCHE, criteria.FANFARE],
        selectedTrackTitle: "Rags And Old Iron / Blind Man / Roadside",
        selectedTrackYtId: null,
        spotifyId: null,
        deezerId: "9924632",
        designers: ["David Anstey"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "waniyetula_natures_clear_well",
        title: "Nature's Clear Well",
        artist: "Waniyetula",
        year: 1978,
        country: regions.GERMANY,
        criteria: [criteria.SYMPHONIC, criteria.GLITTER, criteria.C_ELECTRO, criteria.C_FOLK],
        selectedTrackTitle: "Nature's Clear Well",
        selectedTrackYtId: "EHZKe1Mc5OU",
        spotifyId: "1AzwfkjHVa4m3RuMuv3Heq",
        deezerId: "106201862",
        designers: ["Michael Fessel"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "waniyetula_a_dream_within_a_dream",
        title: "A Dream Within A Dream",
        artist: "Waniyetula",
        year: 1983,
        country: regions.GERMANY,
        criteria: [criteria.NEO_EIGHTIES, criteria.C_ELECTRO, criteria.SOUND_COLLAGES, criteria.C_FOLK],
        selectedTrackTitle: "Alone",
        selectedTrackYtId: "JCMII6ngE7s",
        spotifyId: null,
        deezerId: null,
        designers: [],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "wara_el_inca",
        title: "El Inca",
        artist: "Wara",
        year: 1973,
        country: regions.BOLIVIA,
        criteria: [criteria.SPANISH, criteria.JAM, criteria.HUMBLE, criteria.FEMALE, criteria.UNCOMMON_INSTRUMENTS],
        selectedTrackTitle: "Wara",
        selectedTrackYtId: "ioRLAHDIbmQ",
        spotifyId: "1RIRXDnZnPOQMOqTfYULOg",
        deezerId: "9286726",
        designers: [],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "warhorse_warhorse",
        title: "Warhorse",
        artist: "Warhorse",
        year: 1970,
        country: regions.ENGLAND,
        criteria: [criteria.ROCK, criteria.HEAVY, criteria.OCCULT, criteria.GREASY_SEVENTIES],
        selectedTrackTitle: "Woman Of The Devil",
        selectedTrackYtId: "zgWyveaejwI",
        spotifyId: "64qvBsSA4aqWy5YyUSR68f",
        deezerId: "1498512",
        designers: ["Marcus Keef"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "warhorse_red_sea",
        title: "Warhorse",
        artist: "Warhorse",
        year: 1972,
        country: regions.ENGLAND,
        criteria: [criteria.ROCK, criteria.HEAVY, criteria.GREASY_SEVENTIES],
        selectedTrackTitle: "Red Sea",
        selectedTrackYtId: "LAo8e-rjJR0",
        spotifyId: null,
        deezerId: "6129509",
        designers: ["Rick Breach"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "water_the_second_day",
        title: "The Second Day",
        artist: "Water",
        year: 1975,
        country: regions.NETHERLANDS,
        criteria: [criteria.FEMALE, criteria.C_FOLK, criteria.JAZZY_GROOVY, criteria.ROCK],
        selectedTrackTitle: "Holiday Hideaway",
        selectedTrackYtId: "T9gVe_Keks0",
        spotifyId: null,
        deezerId: null,
        designers: ["Herman Baas", "Grafisch Kader"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "water_damburst",
        title: "Damburst",
        artist: "Water",
        year: 1976,
        country: regions.NETHERLANDS,
        criteria: [criteria.C_FOLK, criteria.C_PSYCHE, criteria.TRANSITION],
        selectedTrackTitle: "Water",
        selectedTrackYtId: null,
        spotifyId: null,
        deezerId: null,
        designers: ["Herman Baas"],
        similarAlbums: ["supertramp_indelibly_stamped"],
        isAGem: false,
    },
    {
        id: "weather_report_weather_report",
        title: "Weather Report",
        artist: "Weather Report",
        year: 1971,
        country: regions.USA,
        criteria: [criteria.JAZZ, criteria.JAZZY_GROOVY, criteria.INSTRUMENTAL, criteria.JAM, criteria.C_PSYCHE],
        selectedTrackTitle: "Orange Lady",
        selectedTrackYtId: "HC3zNYlMlQc",
        spotifyId: "6MBWaIBPJG7iAqJGIQvMkL",
        deezerId: "115810",
        designers: ["Ed Lee"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "weather_report_i_sing_the_body_electric",
        title: "I Sing The Body Electric",
        artist: "Weather Report",
        year: 1972,
        country: regions.USA,
        criteria: [criteria.JAZZ, criteria.INSTRUMENTAL, criteria.JAM, criteria.C_PSYCHE],
        selectedTrackTitle: "The Moors",
        selectedTrackYtId: "S9nGrC8R8a4",
        spotifyId: "5W6Amj3WJHHjp8i1PBaakK",
        deezerId: "242471",
        designers: ["Fred Swanson", "Jack Trompetter", "Ed Lee"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "weather_report_sweetnighter",
        title: "Sweetnighter",
        artist: "Weather Report",
        year: 1973,
        country: regions.USA,
        criteria: [criteria.C_JAZZ, criteria.INSTRUMENTAL, criteria.JAM, criteria.JAZZY_GROOVY, criteria.UNCOMMON_INSTRUMENTS, criteria.LENGTHY_TRACKS],
        selectedTrackTitle: "Boogie Woogie Waltz",
        selectedTrackYtId: "FiN-myhPEdI",
        spotifyId: "3i9ydF6tp0qsaIBw5VRjmV",
        deezerId: "113562",
        designers: ["Dick Hess", "John Berg"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "weather_report_mysterious_traveller",
        title: "Mysterious Traveller",
        artist: "Weather Report",
        year: 1974,
        country: regions.USA,
        criteria: [criteria.C_JAZZ, criteria.INSTRUMENTAL, criteria.JAM, criteria.JAZZY_GROOVY, criteria.C_PSYCHE, criteria.FEMALE, criteria.ODD_RHYTHM],
        selectedTrackTitle: "Scarlet Woman",
        selectedTrackYtId: "ScxBQ6DUGEI",
        spotifyId: "2JARH6A2TX28OzcPwJnD1p",
        deezerId: "97705",
        designers: ["Helmut K. Wimmer", "Teresa Alfieri"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "weather_report_tale_spinnin",
        title: `Tale Spinnin'`,
        artist: "Weather Report",
        year: 1975,
        country: regions.USA,
        criteria: [criteria.JAZZ, criteria.INSTRUMENTAL, criteria.JAZZY_GROOVY, criteria.C_ELECTRO, criteria.SOFT],
        selectedTrackTitle: "Badia",
        selectedTrackYtId: "B6ebkAx6iHQ",
        spotifyId: "12vjm3VGNfgIuXbaNWwUCm",
        deezerId: "98399",
        designers: ["Teresa Alfieri", "John Berg"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "weather_report_black_market",
        title: "Black Market",
        artist: "Weather Report",
        year: 1976,
        country: regions.USA,
        criteria: [criteria.CONCEPT, criteria.INSTRUMENTAL, criteria.JAM, criteria.JAZZ, criteria.JAZZY_GROOVY, criteria.SOFT_SEVENTIES],
        selectedTrackTitle: "Herandu",
        selectedTrackYtId: "_A4FqKg0c_A",
        spotifyId: "2OJTGgC8JfbpohsInwv6u5",
        deezerId: "2923691",
        designers: ["David McMacken", "Maxine Zawinul"],
        similarAlbums: [],
        isAGem: true,
        description: `A fully instrumental album that draws influences from African music. The chemistry between the musicians is perceptible as the tracks come one after another all equally groovy, masterly sketching a mellow mood, making the album a reference in the Jazz Fusion school.`,
    },
    {
        id: "weather_report_heavy_weather",
        title: "Heavy Weather",
        artist: "Weather Report",
        year: 1977,
        country: regions.USA,
        criteria: [criteria.JAZZ, criteria.C_ELECTRO, criteria.INSTRUMENTAL, criteria.JAZZY_GROOVY, criteria.JAM, criteria.SOFT_SEVENTIES, criteria.UNCOMMON_INSTRUMENTS],
        selectedTrackTitle: "Havona",
        selectedTrackYtId: "HEU-m_KVuYI",
        spotifyId: "2M9F2yYsUvqiBPwUGeNvn1",
        deezerId: "112936",
        designers: ["Nancy Donald", "Lou Beach"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "weather_report_mr_gone",
        title: "Mr. Gone",
        artist: "Weather Report",
        year: 1978,
        country: regions.USA,
        criteria: [criteria.JAZZ, criteria.C_ELECTRO, criteria.INSTRUMENTAL, criteria.JAZZY_GROOVY, criteria.JAM, criteria.SOFT_SEVENTIES, criteria.C_PSYCHE],
        selectedTrackTitle: "The Pursuit Of The Woman With The Feathered Hat",
        selectedTrackYtId: "eE38JtY75bo",
        spotifyId: "03CBiPwr9yFsSNtFv5HK7Y",
        deezerId: "2923711",
        designers: ["Nancy Donald", "Lou Beach"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "weather_report_night_passage",
        title: "Night Passage",
        artist: "Weather Report",
        year: 1980,
        country: regions.USA,
        criteria: [criteria.JAZZ, criteria.INSTRUMENTAL, criteria.JAZZY_GROOVY, criteria.JAM, criteria.SOFT_SEVENTIES, criteria.TECHNICAL],
        selectedTrackTitle: "Fast City",
        selectedTrackYtId: "f64fUzgu3p0",
        spotifyId: "297vP5Fa2Zox6ZNb5zWOuG",
        deezerId: "6750059",
        designers: [],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "weather_report_weather_report_nineteen_eightytwo",
        title: "Weather Report",
        artist: "Weather Report",
        year: 1982,
        country: regions.USA,
        criteria: [criteria.JAZZ, criteria.INSTRUMENTAL, criteria.JAZZY_GROOVY, criteria.JAM, criteria.SOFT_SEVENTIES],
        selectedTrackTitle: "Dara Factor Two",
        selectedTrackYtId: "XIzGa0AxEhg",
        spotifyId: "2HT7Ru1nE56j5hE2xTm6Wh",
        deezerId: "2923721",
        designers: [],
        similarAlbums: ["Don Dixon", "Michael Olsen", "Joe Zawinul", "Chris Dellorco", "Dick Bernot", "Todd Waite"],
        isAGem: false,
    },
    {
        id: "weather_report_procession",
        title: "Procession",
        artist: "Weather Report",
        year: 1983,
        country: regions.USA,
        criteria: [criteria.JAZZ, criteria.INSTRUMENTAL, criteria.JAZZY_GROOVY, criteria.JAM, criteria.SOFT_SEVENTIES, criteria.C_ELECTRO],
        selectedTrackTitle: "Procession",
        selectedTrackYtId: "TwMa5HMVW2Q",
        spotifyId: "6lQH1sMsHupywUFdjiiDNs",
        deezerId: "99146",
        designers: [],
        similarAlbums: ["John Lykes"],
        isAGem: false,
    },
    {
        id: "weather_report_domino_theory",
        title: "Domino Theory",
        artist: "Weather Report",
        year: 1984,
        country: regions.USA,
        criteria: [criteria.JAZZ, criteria.INSTRUMENTAL, criteria.NEO_EIGHTIES, criteria.C_ELECTRO, criteria.C_PSYCHE],
        selectedTrackTitle: "The Peasant",
        selectedTrackYtId: "dW6UKdnC-so",
        spotifyId: "0tXYdgzPsy67uuS0Ugirb7",
        deezerId: "77875",
        designers: [],
        similarAlbums: ["Nancy Donald", "Tony Lane"],
        isAGem: false,
    },
    {
        id: "weather_report_sportin_life",
        title: `Sportin' Life`,
        artist: "Weather Report",
        year: 1985,
        country: regions.USA,
        criteria: [criteria.JAZZ, criteria.INSTRUMENTAL, criteria.NEO_EIGHTIES, criteria.C_ELECTRO, criteria.CREOLE],
        selectedTrackTitle: "Pearl On The Half Shell",
        selectedTrackYtId: "C1lrRftmocs",
        spotifyId: "7am7e8BJWpEIx5kQiWxvho",
        deezerId: "121300",
        designers: [],
        similarAlbums: ["Nancy Donald", "Tony Lane", "Jerry McDonald"],
        isAGem: false,
    },
    {
        id: "weather_report_this_is_this",
        title: `This Is This`,
        artist: "Weather Report",
        year: 1986,
        country: regions.USA,
        criteria: [criteria.JAZZ, criteria.INSTRUMENTAL, criteria.NEO_EIGHTIES, criteria.C_ELECTRO, criteria.JAM],
        selectedTrackTitle: "Man With The Copper Fingers",
        selectedTrackYtId: "fCnsAjm5IO4",
        spotifyId: "4UjXA5zJwL0k1XcEI9qsZZ",
        deezerId: "121301",
        designers: [],
        similarAlbums: ["Nancy Donald", "Tony Lane", "Joe Zawinul", "June Valentine", "Lou Beach"],
        isAGem: false,
    },
    {
        id: "weidorje_weidorje",
        title: "Weidorje",
        artist: "Weidorje",
        year: 1978,
        country: regions.FRANCE,
        criteria: [criteria.ODD_RHYTHM, criteria.INSTRUMENTAL, criteria.LENGTHY_TRACKS, criteria.C_PSYCHE, criteria.C_JAZZ, criteria.C_ELECTRO, criteria.ZEUHL, criteria.SCI_FI],
        selectedTrackTitle: "Booldemug",
        selectedTrackYtId: "3UyB0hlR6nw",
        spotifyId: "1r6Ka4P0lSPeklmyhRBMiY",
        deezerId: "454495",
        designers: ["Klaus Blasquiz"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "welcome_welcome",
        title: "Welcome",
        artist: "Welcome",
        year: 1976,
        country: regions.SWITZERLAND,
        criteria: [criteria.SYMPHONIC, criteria.GLITTER, criteria.JAZZY_GROOVY, criteria.C_ELECTRO],
        selectedTrackTitle: "Chain Of Days",
        selectedTrackYtId: "41Wa9Nbketo",
        spotifyId: null,
        deezerId: null,
        designers: ["Michael Bennett"],
        similarAlbums: ["yes_close_to_the_edge"],
        isAGem: false,
    },
    // TODO INTROUVABLE Welcome - You're Welcome - 1979
    {
        id: "white_wing_white_wing",
        title: "White Wing",
        artist: "White Wing",
        year: 1976,
        country: regions.USA,
        criteria: [criteria.GLITTER, criteria.ROCK, criteria.JAM],
        selectedTrackTitle: `Wait 'Til Tomorrow`,
        selectedTrackYtId: "tl6ARn_xyWA",
        spotifyId: null,
        deezerId: null,
        designers: ["Cindy Berglund"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "the_who_a_quick_one",
        title: "A Quick One",
        artist: "The Who",
        year: 1966,
        country: regions.ENGLAND,
        criteria: [criteria.ROCK, criteria.CRISPY_SIXTIES, criteria.C_PSYCHE, criteria.BAROQUE, criteria.FANFARE],
        selectedTrackTitle: `A Quick One, While He's Away`,
        selectedTrackYtId: "Gbw2ygR2UCU",
        spotifyId: "4YlPOh1uDMnHtDdzSdAGBM",
        deezerId: "216527",
        designers: ["Alan Aldridge"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "the_who_the_who_sell_out",
        title: "The Who Sell Out",
        artist: "The Who",
        year: 1967,
        country: regions.ENGLAND,
        criteria: [criteria.BLENDS, criteria.CRISPY_SIXTIES, criteria.BAROQUE, criteria.FUNNY, criteria.TRANSITION],
        selectedTrackTitle: `Armenia City In The Sky`,
        selectedTrackYtId: "y7wrwctQS3s",
        spotifyId: "01Zc1xVpVQFnVKBc0SMMBO",
        deezerId: "217863",
        designers: ["David King", "Roger Law"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "the_who_tommy",
        title: "Tommy",
        artist: "The Who",
        year: 1969,
        country: regions.ENGLAND,
        criteria: [criteria.FANFARE, criteria.SYMPHONIC, criteria.CONCEPT, criteria.C_PSYCHE, criteria.TRANSITION, criteria.C_FOLK, criteria.PATCHWORK],
        selectedTrackTitle: `Christmas`,
        selectedTrackYtId: "7BWiYJ3yykw",
        spotifyId: "5cT7ee1sy2oEbFalP4asS4",
        deezerId: "94830112",
        designers: ["Mike McInnerney"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "the_who_whos_next",
        title: "Who's Next",
        artist: "The Who",
        year: 1971,
        country: regions.ENGLAND,
        criteria: [criteria.ROCK, criteria.C_ELECTRO],
        selectedTrackTitle: `The Song Is Over`,
        selectedTrackYtId: "NgYudFmmOl4",
        spotifyId: "5MqyhhHbT13zsloD3uHhlQ",
        deezerId: "213021",
        designers: ["John Kosh"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "the_who_quadrophenia",
        title: "Quadrophenia",
        artist: "The Who",
        year: 1973,
        country: regions.ENGLAND,
        criteria: [criteria.ROCK_OPERA, criteria.FANFARE, criteria.TRANSITION, criteria.SOUND_COLLAGES, criteria.SYMPHONIC, criteria.CONCEPT, criteria.TOUCHING_VOCALS],
        selectedTrackTitle: `Love, Reign O'er Me`,
        selectedTrackYtId: "gDbAtWpoA6k",
        spotifyId: "3JV6BIIXo3mj6GLIGH9p8a",
        deezerId: "124343",
        designers: ["Graham Hughes"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "the_who_the_who_by_numbers",
        title: "The Who By Numbers",
        artist: "The Who",
        year: 1975,
        country: regions.ENGLAND,
        criteria: [criteria.ROCK],
        selectedTrackTitle: `Imagine A Man`,
        selectedTrackYtId: "sBN5U-nA6Is",
        spotifyId: "6IxRCbXtyK6MlHlofsnhlm",
        deezerId: "125162",
        designers: ["John Entwistle"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "the_who_who_are_you",
        title: "Who Are You",
        artist: "The Who",
        year: 1978,
        country: regions.ENGLAND,
        criteria: [criteria.ROCK, criteria.C_ELECTRO, criteria.ORCHESTRAL_PARTS],
        selectedTrackTitle: `Music Must Change`,
        selectedTrackYtId: "ROG9llPP9qE",
        spotifyId: "7at3CV9Y9P57wsEXkfU0q8",
        deezerId: "70486242",
        designers: ["Bill Smith", "Terry O'Neill"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "the_who_face_dances",
        title: "Face Dances",
        artist: "The Who",
        year: 1981,
        country: regions.ENGLAND,
        criteria: [criteria.ROCK],
        selectedTrackTitle: `Did You Steal My Money`,
        selectedTrackYtId: "todo",
        spotifyId: "6mvsqS8xbCijlQLLjqDXng",
        deezerId: "228331",
        designers: ["Clive Barker", "Howard Hodgkin", "Patrick Caulfield", "Ronald Brooks Kitaj", "David Tindle", "Joe Tilson", "Patrick Procktor", "Peter Blake", "Bill Jacklin", "Colin Self", "Richard Hamilton", "Tom Phillips", "Allen Jones", "David Hockney", "David Inshaw", "Mike Andrews"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "the_who_its_hard",
        title: "It's Hard",
        artist: "The Who",
        year: 1982,
        country: regions.ENGLAND,
        criteria: [criteria.ROCK, criteria.C_ELECTRO, criteria.NEO_EIGHTIES],
        selectedTrackTitle: `Eminence Front`,
        selectedTrackYtId: "rx6Zgz0TZuA",
        spotifyId: "7ISmM3vnNkZ7EWkaiH6hBH",
        deezerId: "217907",
        designers: [],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "william_sheller_lux_aeterna",
        title: "Lux Aeterna",
        artist: "William Sheller",
        year: 1972,
        country: regions.FRANCE,
        criteria: [criteria.ROCK, criteria.LATIN, criteria.ORCHESTRAL_PARTS, criteria.UNCOMMON_INSTRUMENTS, criteria.CONCEPT, criteria.SPECTACULAR, criteria.FEMALE, criteria.C_PSYCHE, criteria.C_ELECTRO],
        selectedTrackTitle: `Introït`,
        selectedTrackYtId: "IAsFYAz7exs",
        spotifyId: null,
        deezerId: null,
        designers: ["Gérard Targowla"],
        similarAlbums: ["saint_preux_samara", "pink_floyd_atom_heart_mother"],
        isAGem: false,
    },
    {
        id: "willie_nelson_phases_and_stages",
        title: "Phases And Stages",
        artist: "Willie Nelson",
        year: 1974,
        country: regions.USA,
        criteria: [criteria.FOLK, criteria.SOFT, criteria.CONCEPT, criteria.HUMBLE],
        selectedTrackTitle: `Phases And Stages (Theme) / Walkin'`,
        selectedTrackYtId: "mET2R6XUBEo",
        spotifyId: "2UUGvJBpRoOQFwDLtq8KCP",
        deezerId: "364587",
        designers: [],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "wind_seasons",
        title: "Seasons",
        artist: "Wind",
        year: 1971,
        country: regions.GERMANY,
        criteria: [criteria.LENGTHY_TRACKS, criteria.GREASY_SEVENTIES, criteria.JAM],
        selectedTrackTitle: `Red Morningbird`,
        selectedTrackYtId: "4FgK6YLPSbg",
        spotifyId: null,
        deezerId: null,
        designers: ["Bernd Bär"],
        similarAlbums: ["uriah_heep_very_eavy_very_umble"],
        isAGem: false,
    },
    {
        id: "wind_morning",
        title: "Morning",
        artist: "Wind",
        year: 1972,
        country: regions.GERMANY,
        criteria: [criteria.C_FOLK, criteria.SOUND_COLLAGES, criteria.UNCOMMON_INSTRUMENTS],
        selectedTrackTitle: `Dragon's Maid`,
        selectedTrackYtId: "pfeoDxKCpNY",
        spotifyId: null,
        deezerId: null,
        designers: ["Designgruppe 5D"],
        similarAlbums: ["genesis_trespass", "acqua_fragile_acqua_fragile"], // similar premier king crimson un peu!
        isAGem: false,
    },
    {
        id: "the_wind_in_the_willows_the_wind_in_the_willows",
        title: "The Wind In The Willows",
        artist: "The Wind In The Willows",
        year: 1968,
        country: regions.USA,
        criteria: [criteria.FOLK, criteria.FEMALE, criteria.C_PSYCHE, criteria.BAROQUE],
        selectedTrackTitle: `Little People`,
        selectedTrackYtId: "Bauw9Vv4VOM",
        spotifyId: "5rwnOdH8ITKvFG3UbaMIYA",
        deezerId: null,
        designers: ["Howard Bernstein"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "windchase_symphinity",
        title: "Simphinity",
        artist: "Windchase",
        year: 1977,
        country: regions.AUSTRALIA,
        criteria: [criteria.ODD_RHYTHM, criteria.JAM, criteria.GLITTER, criteria.SOUND_COLLAGES, criteria.SCI_FI],
        selectedTrackTitle: "Glad To Be Alive",
        selectedTrackYtId: "grqGzuSak2s",
        spotifyId: null,
        deezerId: null,
        designers: ["Peter Ledger", "Cos Russo"],
        similarAlbums: ["cathedral_stained_glass_stories"],
        isAGem: true,
        description: `Electronic elements are used to throw the music in a sci-fi symphonic world, with groovy basslines and orchestral arrangements. Mario Millo and Toivo Pilt composed the album so that listening to it feels like naively exploring new horizons, sometimes mysterious, with rhythm changes inducing speed changes.`,
    },
    {
        id: "windflower_windflower",
        title: "Windflower",
        artist: "Windflower",
        year: 1974,
        country: regions.USA,
        criteria: [criteria.C_FOLK, criteria.SOFT, criteria.UNCOMMON_INSTRUMENTS],
        selectedTrackTitle: "Children Of The Loom",
        selectedTrackYtId: "UDorgp5Db7w",
        spotifyId: null,
        deezerId: null,
        designers: [],
        similarAlbums: [],
        isAGem: true,
        description: `TODO description`,
    },
    {
        id: "wings_venus_and_mars",
        title: "Venus And Mars",
        artist: "Wings",
        year: 1975,
        country: regions.ENGLAND,
        criteria: [criteria.ART_POP, criteria.TRANSITION, criteria.UNCOMMON_INSTRUMENTS],
        selectedTrackTitle: "Rock Show",
        selectedTrackYtId: "htmW4Fa2yxo",
        spotifyId: null,
        deezerId: "8929041",
        designers: [],
        similarAlbums: ["queen_a_night_at_the_opera"],
        isAGem: false,
    },
    {
        id: "winterhawk_revival",
        title: "Revival",
        artist: "Winterhawk",
        year: 1982,
        country: regions.USA,
        criteria: [criteria.JAM, criteria.ROCK, criteria.HEAVY],
        selectedTrackTitle: "Period Of Change",
        selectedTrackYtId: "zDW3m-LaaRc",
        spotifyId: "2t6dNr90wvqb1YvolnoAjg",
        deezerId: "758564",
        designers: [],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "wishbone_ash_wishbone_ash",
        title: "Wishbone Ash",
        artist: "Wishbone Ash",
        year: 1970,
        country: regions.ENGLAND,
        criteria: [criteria.JAM, criteria.ROCK, criteria.GREASY_SEVENTIES, criteria.HEAVY, criteria.JAM],
        selectedTrackTitle: "Phoenix",
        selectedTrackYtId: "7WIwkijLCAo",
        spotifyId: "02Y1xOnYuOQAsqr4TqQGio",
        deezerId: "126287",
        designers: ["John C. LePrevost"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "wishbone_ash_pilgrimage",
        title: "Pilgrimage",
        artist: "Wishbone Ash",
        year: 1971,
        country: regions.ENGLAND,
        criteria: [criteria.ODD_RHYTHM, criteria.JAM, criteria.ROCK],
        selectedTrackTitle: "Valediction",
        selectedTrackYtId: "PILotugu-s4",
        spotifyId: "5H0yhHRgZpQ7GLgmNc6gtx",
        deezerId: "124447",
        designers: ["Hipgnosis"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "wishbone_ash_argus",
        title: "Argus",
        artist: "Wishbone Ash",
        year: 1972,
        country: regions.ENGLAND,
        criteria: [criteria.JAM, criteria.ROCK],
        selectedTrackTitle: "Sometime World",
        selectedTrackYtId: "kvLVSPPLZZY",
        spotifyId: "7xEluvnbmFtRB5g66CJ2ND",
        deezerId: "107233",
        designers: ["Hipgnosis"],
        similarAlbums: ["beggars_opera_pathfinder"],
        isAGem: false,
    },
    {
        id: "wishbone_ash_wishbone_four",
        title: "Wishbone Four",
        artist: "Wishbone Ash",
        year: 1973,
        country: regions.ENGLAND,
        criteria: [criteria.JAM, criteria.ROCK],
        selectedTrackTitle: "Ballad Of The Beacon",
        selectedTrackYtId: "QXoYpY8Px3g",
        spotifyId: "3xRxJdz42lvZFJ8ShQzz9H",
        deezerId: "213025",
        designers: ["Hipgnosis"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "wishbone_ash_theres_the_rub",
        title: `There's The Rub`,
        artist: "Wishbone Ash",
        year: 1974,
        country: regions.ENGLAND,
        criteria: [criteria.JAM, criteria.ROCK],
        selectedTrackTitle: "Persephone",
        selectedTrackYtId: "VXQQjXwnbNA",
        spotifyId: "0jhrnGAzi75RYTsfACZMGW",
        deezerId: "40799591",
        designers: ["Hipgnosis"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "wishbone_ash_new_england",
        title: `New England`,
        artist: "Wishbone Ash",
        year: 1976,
        country: regions.ENGLAND,
        criteria: [criteria.SOFT, criteria.ROCK],
        selectedTrackTitle: "Lonely Island",
        selectedTrackYtId: "-l8SgZIT3Tc",
        spotifyId: "7crIwmJiCRxEJlfKRG43YZ",
        deezerId: "123880",
        designers: ["Hipgnosis"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "wishbone_ash_front_page_news",
        title: `Front Page News`,
        artist: "Wishbone Ash",
        year: 1977,
        country: regions.ENGLAND,
        criteria: [criteria.SOFT, criteria.ROCK, criteria.GLITTER],
        selectedTrackTitle: "714",
        selectedTrackYtId: "2z4KayN9vmw",
        spotifyId: "65WtCdb462v04dT6ntfomI",
        deezerId: "121910",
        designers: ["Hipgnosis", "Alwyn Clayden"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "wishbone_ash_no_smoke_without_fire",
        title: `No Smoke Without Fire`,
        artist: "Wishbone Ash",
        year: 1978,
        country: regions.ENGLAND,
        criteria: [criteria.ROCK],
        selectedTrackTitle: "The Way Of The World (Part I)",
        selectedTrackYtId: "wz2G1L2s3nU",
        spotifyId: "5NKfcsbI3nBy8e8dthzTxH",
        deezerId: "253398",
        designers: ["Colin Elgie"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "witch_lazy_bones",
        title: `Lazy Bones!!`,
        artist: "Witch",
        year: 1975,
        country: regions.ZAMBIA,
        criteria: [criteria.ROCK, criteria.CRISPY_SIXTIES, criteria.C_PSYCHE],
        selectedTrackTitle: "Strange Dream",
        selectedTrackYtId: "LGS5AEYqSYY",
        spotifyId: null,
        deezerId: null,
        designers: ["Gilbert Advertising Ltd."],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "witch_lukombo_vibes",
        title: `Lukombo Vibes`,
        artist: "Witch",
        year: 1976,
        country: regions.ZAMBIA,
        criteria: [criteria.ROCK, criteria.GREASY_SEVENTIES, criteria.HEAVY, criteria.HUMBLE, criteria.CHEWAN],
        selectedTrackTitle: "Bleeding Thunder",
        selectedTrackYtId: "duvAfny82Tg",
        spotifyId: null,
        deezerId: null,
        designers: ["Mike Greig"],
        similarAlbums: [], // similar uriah heep
        isAGem: false,
    },
    {
        id: "witch_witch",
        title: `Witch`,
        artist: "Witch",
        year: 1977,
        country: regions.ZAMBIA,
        criteria: [criteria.ROCK, criteria.HUMBLE, criteria.CHEWAN],
        selectedTrackTitle: "Nazingwa",
        selectedTrackYtId: "9Y9ljfbvsPQ",
        spotifyId: null,
        deezerId: null,
        designers: ["Pilcher Graphics"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "wizzard_wizzard_brew",
        title: "Wizzard Brew",
        artist: "Wizzard",
        year: 1973,
        country: regions.ENGLAND,
        criteria: [criteria.JAM, criteria.LENGTHY_TRACKS, criteria.C_PSYCHE, criteria.ROCK, criteria.HEAVY, criteria.FANFARE, criteria.GREASY_SEVENTIES],
        selectedTrackTitle: "Meet Me At The Jailhouse",
        selectedTrackYtId: "sBzeB36zYvU",
        spotifyId: "7FZgX7O5hHOw8n6WdEVle3",
        deezerId: "300763",
        designers: ["Roger Alexander"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "wizzo_band_super_active_wizzo",
        title: "Super Active Wizzo",
        artist: "Wizzo Band",
        year: 1977,
        country: regions.ENGLAND,
        criteria: [criteria.ODD_RHYTHM, criteria.C_JAZZ, criteria.HEAVY, criteria.FANFARE, criteria.GREASY_SEVENTIES],
        selectedTrackTitle: `Waitin' At This Door`,
        selectedTrackYtId: "I_Udqw806sA",
        spotifyId: "3KtwEcy5Ob8OW1pSQbrZDZ",
        deezerId: "13913394",
        designers: ["Dave Field"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "wlud_carrycroch",
        title: "Carrycroch'",
        artist: "WLUD",
        year: 1978,
        country: regions.FRANCE,
        criteria: [criteria.C_ELECTRO, criteria.GLITTER, criteria.INSTRUMENTAL, criteria.ODD_RHYTHM, criteria.SYMPHONIC],
        selectedTrackTitle: "Amazone",
        selectedTrackYtId: "qbSfzG-yKJY",
        spotifyId: "0K4sVZRkKIUe09bDXYjBLi",
        deezerId: "432189",
        designers: ["Studio Betty Peter"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "wlud_second",
        title: "Second",
        artist: "WLUD",
        year: 1979,
        country: regions.FRANCE,
        criteria: [criteria.C_ELECTRO, criteria.GLITTER, criteria.INSTRUMENTAL, criteria.ODD_RHYTHM, criteria.SYMPHONIC],
        selectedTrackTitle: "Rocky",
        selectedTrackYtId: "Sb7ByETgNZU",
        spotifyId: "6IDs4GRykuwp801O60BWdW",
        deezerId: "432180",
        designers: ["Graphic Saloon"],
        similarAlbums: [],
        isAGem: false, // TODO maybe true
    },
    {
        id: "womega_a_quick_step",
        title: "A Quick Step",
        artist: "Womega",
        year: 1975,
        country: regions.BELGIUM,
        criteria: [criteria.ODD_RHYTHM, criteria.UNCOMMON_INSTRUMENTS, criteria.JAZZY_GROOVY],
        selectedTrackTitle: `Nympho's Belly Button`,
        selectedTrackYtId: "rGIXIlhiP7w",
        spotifyId: null,
        deezerId: null,
        designers: ["GJos Vanlessen"],
        similarAlbums: [],
        isAGem: true,
        description: `TODO Description`,
    },
    {
        id: "the_world_of_oz_the_world_of_oz",
        title: "The World Of Oz",
        artist: "The World Of Oz",
        year: 1969,
        country: regions.ENGLAND,
        criteria: [criteria.SOUNDTRACK, criteria.CONCEPT, criteria.FANFARE, criteria.ORCHESTRAL_PARTS, criteria.BAROQUE, criteria.ROCK_OPERA, criteria.C_FOLK],
        selectedTrackTitle: "Bring The Ring",
        selectedTrackYtId: "K_u2b8Hl-Kk",
        spotifyId: null,
        deezerId: "7243452",
        designers: ["David Anstey"],
        similarAlbums: ["roger_glover_the_butterfly_ball_and_the_grasshoppers_feast"],
        isAGem: false,
    },
    {
        id: "woodoo_taikakulkunen",
        title: "Taikakulkunen",
        artist: "Woodoo",
        year: 1971,
        country: regions.FINLAND,
        criteria: [criteria.FINNISH, criteria.UNCOMMON_INSTRUMENTS, criteria.HUMBLE, criteria.ROCK],
        selectedTrackTitle: "Suudelma",
        selectedTrackYtId: "WG56nKOfhdU",
        spotifyId: "4wwd4hlOHQj4FMkhxqLc74",
        deezerId: "6633138",
        designers: [],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "woody_kern_the_awful_disclosures_of_maria_monk",
        title: "The Awful Disclosures Of Maria Monk",
        artist: "Woody Kern",
        year: 1969,
        country: regions.ENGLAND,
        criteria: [criteria.BLUESY, criteria.ROCK, criteria.C_PSYCHE, criteria.JAM],
        selectedTrackTitle: `Tell Ya I'm Gone`,
        selectedTrackYtId: "2TzzPRtRaEI",
        spotifyId: "0eeedjZiTVPTuuqm8i8W5t",
        deezerId: "13937378",
        designers: [],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "writing_on_the_wall_the_power_of_the_picts",
        title: "The Power Of The Picts",
        artist: "Writing On The Wall",
        year: 1969,
        country: regions.SCOTLAND,
        criteria: [criteria.GREASY_SEVENTIES, criteria.C_PSYCHE, criteria.HEAVY, criteria.UNCOMMON_INSTRUMENTS],
        selectedTrackTitle: "Aries",
        selectedTrackYtId: "fCg4BuJsIIA",
        spotifyId: "3u5tEJ638nYlBmmc6jIUZg",
        deezerId: null,
        designers: [],
        similarAlbums: ["warhorse_vultures", "the_crazy_world_of_arthur_brown_the_crazy_world_of_arthur_brown"],
        isAGem: false,
    },
    {
        id: "wurtemberg_rock_fantasia_opus_nine",
        title: "Rock Fantasia Opus 9",
        artist: "Wurtemberg",
        year: 1980,
        country: regions.FRANCE,
        criteria: [criteria.PIANO, criteria.BAROQUE, criteria.C_FOLK, criteria.UNCOMMON_INSTRUMENTS, criteria.MEDIEVAL, criteria.INSTRUMENTAL],
        selectedTrackTitle: "Concerto Pour Un Minot",
        selectedTrackYtId: null,
        spotifyId: "09kYZLYnmtlm2H2lyUPDUL",
        deezerId: "440475",
        designers: [],
        similarAlbums: [],
        isAGem: false,
    },
]

export default albums
