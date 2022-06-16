// 3-occurence update : the criterium, its position in the criteria list and its categorization
const criteria = {
    // Concept
    CONCEPT: "CONCEPT",
    STORYLINE: "STORYLINE",
    SOUNDTRACK: "SOUNDTRACK",
    LIVE: "LIVE",

    // Language
    ARMENIAN: "ARMENIAN",
    BELARUSIAN: "BELARUSIAN",
    BRETON: "BRETON",
    BULGARIAN: "BULGARIAN",
    CREOLE: "CREOLE",
    CROATIAN: "CROATIAN",
    CZECH: "CZECH",
    FRENCH: "FRENCH",
    GERMAN: "GERMAN",
    GREEK: "GREEK",
    HEBREW: "HEBREW",
    HINDI: "HINDI",
    HUNGARIAN: "HUNGARIAN",
    IGBO: "IGBO",
    INDONESIAN: "INDONESIAN",
    ITALIAN: "ITALIAN",
    JAPANESE: "JAPANESE",
    LATIN: "LATIN",
    PORTUGUESE: "PORTUGUESE",
    RUSSIAN: "RUSSIAN",
    SANSKRIT: "SANSKRIT",
    SPANISH: "SPANISH",
    SWEDISH: "SWEDISH",
    TIBETAN: "TIBETAN",
    ZEUHL: "ZEUHL",

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
    BLUESY: "BMUESY",
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
}

const criteriaOrder = [
    // Concept
    criteria.CONCEPT,
    criteria.STORYLINE,
    criteria.SOUNDTRACK,
    criteria.LIVE,

    // Language
    criteria.ARMENIAN,
    criteria.BELARUSIAN,
    criteria.BRETON,
    criteria.BULGARIAN,
    criteria.CREOLE,
    criteria.CROATIAN,
    criteria.CZECH,
    criteria.FRENCH,
    criteria.GERMAN,
    criteria.GREEK,
    criteria.HEBREW,
    criteria.HINDI,
    criteria.HUNGARIAN,
    criteria.IGBO,
    criteria.INDONESIAN,
    criteria.ITALIAN,
    criteria.JAPANESE,
    criteria.LATIN,
    criteria.PORTUGUESE,
    criteria.RUSSIAN,
    criteria.SANSKRIT,
    criteria.SPANISH,
    criteria.SWEDISH,
    criteria.TIBETAN,
    criteria.ZEUHL,

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

const categories = {
    TYPE: "TYPE",
    LANGUAGE: "LANGUAGE",
    THEME: "THEME",
    GENRE: "GENRE",
    CONTAINS: "CONTAINS",
    STYLE: "STYLE",
    STRUCTURE: "STRUCTURE",
    ERA: "ERA",
    LOUDNESS: "LOUDNESS",
    ARRANGEMENT: "ARRANGEMENT",
    TEMPER: "TEMPER",
}

const categoriesOrder = [
    categories.TYPE,
    categories.LANGUAGE,
    categories.THEME,
    categories.GENRE,
    categories.CONTAINS,
    categories.STYLE,
    categories.STRUCTURE,
    categories.ERA,
    categories.LOUDNESS,
    criteria.ARRANGEMENT,
    criteria.TEMPER,
]

const criteriaCategory = {
    [categories.TYPE]: [
        criteria.CONCEPT,
        criteria.STORYLINE,
        criteria.SOUNDTRACK,
        criteria.LIVE,
    ],
    [categories.LANGUAGE]: [
        criteria.BELARUSIAN,
        criteria.BRETON,
        criteria.BULGARIAN,
        criteria.CREOLE,
        criteria.CROATIAN,
        criteria.FRENCH,
        criteria.GERMAN,
        criteria.GREEK,
        criteria.HEBREW,
        criteria.HINDI,
        criteria.HUNGARIAN,
        criteria.IGBO,
        criteria.ITALIAN,
        criteria.JAPANESE,
        criteria.PORTUGUESE,
        criteria.RUSSIAN,
        criteria.SANSKRIT,
        criteria.SPANISH,
        criteria.SWEDISH,
        criteria.TIBETAN,
        criteria.ZEUHL,
    ],
    [categories.THEME]: [
        criteria.SCI_FI,
        criteria.FANTASY,
        criteria.MEDIEVAL,
        criteria.OCCULT,
        criteria.SPIRITUAL,
        criteria.SOCIOPOLITICAL,
        criteria.HISTORICAL,
    ],
    [categories.GENRE]: [
        criteria.ROCK,
        criteria.JAZZ,
        criteria.FOLK,
        criteria.ELECTRO,
        criteria.ART_POP,
        criteria.AFROBEAT,
    ],
    [categories.CONTAINS]: [
        criteria.BLENDS,
        criteria.C_JAZZ,
        criteria.C_FOLK,
        criteria.C_ELECTRO,
        criteria.C_PSYCHE,
    ],
    [categories.STYLE]: [
        criteria.ODD_RHYTHM,
        criteria.TECHNICAL,
        criteria.INSTRUMENTAL,
        criteria.EXPERIMENTAL,
        criteria.JAM,
        criteria.SOPHISTICATED,
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
    ],
    [categories.STRUCTURE]: [
        criteria.LENGTHY_TRACKS,
        criteria.PATCHWORK,
        criteria.TRANSITION,
        criteria.SYMPHONIC,
    ],
    [categories.ERA]: [
        criteria.CRISPY_SIXTIES,
        criteria.GREASY_SEVENTIES,
        criteria.SOFT_SEVENTIES,
        criteria.NEO_EIGHTIES,
    ],
    [categories.LOUDNESS]: [
        criteria.SOFT,
        criteria.HEAVY,
        criteria.HUMBLE,
        criteria.SPECTACULAR,
    ],
    [categories.ARRANGEMENT]: [
        criteria.UNCOMMON_INSTRUMENTS,
        criteria.FEMALE,
        criteria.SOUND_COLLAGES,
        criteria.ORCHESTRAL_PARTS,
    ],
    [categories.TEMPER]: [
        criteria.FUNNY,
        criteria.TOUCHING_VOCALS,
    ],
}

export {
    categories, categoriesOrder, criteria, criteriaOrder, criteriaCategory,
}
