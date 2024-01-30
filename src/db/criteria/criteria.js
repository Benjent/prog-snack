import { languageLabels, languages } from "./languages"

// 4-occurence update : the criterium, its position in the criteria list, its categorization and its vue-filter translation
/**
 * @enum {string}
 * @readonly
 */
const criteria = /** @type {const} */ ({
    // Concept
    CONCEPT: "CONCEPT",
    STORYLINE: "STORYLINE",
    SOUNDTRACK: "SOUNDTRACK",
    LIVE: "LIVE",

    // Language
    ...languages,

    // Theme
    SCI_FI: "SCI_FI",
    FANTASY: "FANTASY",
    MEDIEVAL: "MEDIEVAL",
    OCCULT: "OCCULT",
    SPIRITUAL: "SPIRITUAL",
    SOCIOPOLITICAL: "SOCIOPOLITICAL",
    HISTORICAL: "HISTORICAL",

    // Genre-based
    ROCK: "ROCK",
    JAZZ: "JAZZ",
    FOLK: "FOLK",
    ELECTRO: "ELECTRO",
    ART_POP: "ART_POP",
    AFROBEAT: "AFROBEAT",

    // Genre borrowing
    BLENDS: "BLENDS",
    C_JAZZ: "C_JAZZ",
    C_FOLK: "C_FOLK",
    C_ELECTRO: "C_ELECTRO",
    C_PSYCHE: "C_PSYCHE",

    // Musically
    ODD_RHYTHM: "ODD_RHYTHM",
    TECHNICAL: "TECHNICAL",
    INSTRUMENTAL: "INSTRUMENTAL",
    EXPERIMENTAL: "EXPERIMENTAL",
    JAM: "JAM",
    SOPHISTICATED: "SOPHISTICATED",

    // Style
    BLUESY: "BLUESY",
    JAZZY_GROOVY: "JAZZY_GROOVY",
    PIANO: "PIANO",
    ROCK_OPERA: "ROCK_OPERA",
    FANFARE: "FANFARE",
    SPACY: "SPACY",
    GLITTER: "GLITTER",
    BAROQUE: "BAROQUE",
    RENAISSANCE: "RENAISSANCE",
    ORIENTAL: "ORIENTAL",
    AMBIENT: "AMBIENT",
    ARENA: "ARENA",
    LATINO: "LATINO",
    CELTIC: "CELTIC",

    // Album structure
    LENGTHY_TRACKS: "LENGTHY_TRACKS",
    PATCHWORK: "PATCHWORK",
    TRANSITION: "TRANSITION",
    SYMPHONIC: "SYMPHONIC",

    // Album era-sound
    CRISPY_SIXTIES: "CRISPY_SIXTIES",
    GREASY_SEVENTIES: "GREASY_SEVENTIES",
    SOFT_SEVENTIES: "SOFT_SEVENTIES",
    NEO_EIGHTIES: "NEO_EIGHTIES",

    // Album loudness
    SOFT: "SOFT",
    HEAVY: "HEAVY",
    HUMBLE: "HUMBLE",
    SPECTACULAR: "SPECTACULAR",

    // Temperature
    FUNNY: "FUNNY",
    TOUCHING_VOCALS: "TOUCHING_VOCALS",

    // Miscellaneous
    UNCOMMON_INSTRUMENTS: "UNCOMMON_INSTRUMENTS",
    FEMALE: "FEMALE",
    SOUND_COLLAGES: "SOUND_COLLAGES",
    ORCHESTRAL_PARTS: "ORCHESTRAL_PARTS",
})

/**
 * @type { Array.<keyof typeof criteria> }
 * @readonly
 */
const criteriaOrder = [
    // Concept
    criteria.CONCEPT,
    criteria.STORYLINE,
    criteria.SOUNDTRACK,
    criteria.LIVE,

    // Language
    ...Object.values(languages),

    // Theme
    criteria.SCI_FI,
    criteria.FANTASY,
    criteria.MEDIEVAL,
    criteria.OCCULT,
    criteria.SPIRITUAL,
    criteria.SOCIOPOLITICAL,
    criteria.HISTORICAL,

    // Genre-based
    criteria.ROCK,
    criteria.JAZZ,
    criteria.FOLK,
    criteria.ELECTRO,
    criteria.ART_POP,
    criteria.AFROBEAT,

    // Genre borrowing
    criteria.BLENDS,
    criteria.C_JAZZ,
    criteria.C_FOLK,
    criteria.C_ELECTRO,
    criteria.C_PSYCHE,

    // Musically
    criteria.ODD_RHYTHM,
    criteria.TECHNICAL,
    criteria.INSTRUMENTAL,
    criteria.EXPERIMENTAL,
    criteria.JAM,
    criteria.SOPHISTICATED,

    // Style
    criteria.BLUESY,
    criteria.JAZZY_GROOVY,
    criteria.PIANO,
    criteria.ROCK_OPERA,
    criteria.FANFARE,
    criteria.SPACY,
    criteria.GLITTER,
    criteria.ORIENTAL,
    criteria.LATINO,
    criteria.CELTIC,
    criteria.AMBIENT,
    criteria.BAROQUE,
    criteria.RENAISSANCE,
    criteria.ARENA,

    // Album structure
    criteria.LENGTHY_TRACKS,
    criteria.PATCHWORK,
    criteria.TRANSITION,
    criteria.SYMPHONIC,

    // Album era-sound
    criteria.CRISPY_SIXTIES,
    criteria.GREASY_SEVENTIES,
    criteria.SOFT_SEVENTIES,
    criteria.NEO_EIGHTIES,

    // Album loudness
    criteria.SOFT,
    criteria.HEAVY,
    criteria.HUMBLE,
    criteria.SPECTACULAR,

    // Temperature
    criteria.FUNNY,
    criteria.TOUCHING_VOCALS,

    // Miscellaneous
    criteria.UNCOMMON_INSTRUMENTS,
    criteria.FEMALE,
    criteria.SOUND_COLLAGES,
    criteria.ORCHESTRAL_PARTS,
]

/**
 * @type { Record<keyof typeof criteria, string> }
 * @readonly
 */
const criteriumLabels = {
    ...languageLabels,
    [criteria.AFROBEAT]: "Afrobeat",
    [criteria.AMBIENT]: "Ambient",
    [criteria.ARENA]: "Arena",
    [criteria.ART_POP]: "Art Pop",
    [criteria.BAROQUE]: "Baroque vibes",
    [criteria.BLENDS]: "Blends many music genres",
    [criteria.BLUESY]: "Bluesy",
    [criteria.C_ELECTRO]: "Contains electronic elements",
    [criteria.C_FOLK]: "Contains Folk elements",
    [criteria.C_JAZZ]: "Contains Jazz elements",
    [criteria.C_PSYCHE]: "Contains psychedelic elements",
    [criteria.CELTIC]: "Celtic",
    [criteria.CONCEPT]: "Concept album",
    [criteria.CRISPY_SIXTIES]: "Crispy 60s sound",
    [criteria.ELECTRO]: "Electro-based with a Prog touch",
    [criteria.EXPERIMENTAL]: "Experimental",
    [criteria.FANFARE]: "Fanfare",
    [criteria.FANTASY]: "Fantasy-influenced",
    [criteria.FEMALE]: "Female vocals or backing vocals",
    [criteria.FOLK]: "Folk-based with a Prog touch",
    [criteria.FUNNY]: "Funny",
    [criteria.GLITTER]: "Glittering",
    [criteria.GREASY_SEVENTIES]: "Greasy early 70s sound",
    [criteria.HEAVY]: "Rather heavy",
    [criteria.HISTORICAL]: "Historical",
    [criteria.HUMBLE]: "Humble",
    [criteria.INSTRUMENTAL]: "Mainly instrumental",
    [criteria.JAM]: "Jam-oriented",
    [criteria.JAZZ]: "Jazz-based with a Prog touch",
    [criteria.JAZZY_GROOVY]: "Jazzy groovy",
    [criteria.LATINO]: "Latino",
    [criteria.LENGTHY_TRACKS]: "Lengthy tracks",
    [criteria.LIVE]: "Live",
    [criteria.MEDIEVAL]: "Medieval-influenced",
    [criteria.NEO_EIGHTIES]: "Neo 80s sound",
    [criteria.OCCULT]: "Occult",
    [criteria.ODD_RHYTHM]: "Odd rhythm signatures",
    [criteria.ORCHESTRAL_PARTS]: "Orchestral parts",
    [criteria.ORIENTAL]: "Oriental",
    [criteria.PATCHWORK]: "Patchwork of tracks",
    [criteria.PIANO]: "Piano driven",
    [criteria.RENAISSANCE]: "Renaissance",
    [criteria.ROCK]: "Rock-based with a Prog touch",
    [criteria.ROCK_OPERA]: "Rock opera",
    [criteria.SCI_FI]: "Sci-fi-influenced",
    [criteria.SOCIOPOLITICAL]: "Sociopolitical",
    [criteria.SOFT]: "Rather soft",
    [criteria.SOFT_SEVENTIES]: "Soft late 70s sound",
    [criteria.SOPHISTICATED]: "Sophisticated",
    [criteria.SOUND_COLLAGES]: "Uses sound collages",
    [criteria.SOUNDTRACK]: "Soundtrack album",
    [criteria.SPACY]: "Spacy",
    [criteria.SPECTACULAR]: "Spectacular",
    [criteria.SPIRITUAL]: "Spiritual",
    [criteria.STORYLINE]: "Storyline",
    [criteria.SYMPHONIC]: "Symphonic",
    [criteria.TECHNICAL]: "Technical",
    [criteria.TOUCHING_VOCALS]: "Touching vocals",
    [criteria.TRANSITION]: "Tracks have transitions",
    [criteria.UNCOMMON_INSTRUMENTS]: "Uncommon instruments",
}

export {
    criteria,
    criteriaOrder,
    criteriumLabels,
}
