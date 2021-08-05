const criteria = {
    // Concept
    CONCEPT: 'CONCEPT',
    STORYLINE: 'STORYLINE',
    SOUNDTRACK: 'SOUNDTRACK',
    LIVE: 'LIVE',
    
    // Language
    BRETON: 'BRETON',
    CROATIAN: 'CROATIAN',
    FRENCH: 'FRENCH',
    GERMAN: 'GERMAN',
    GREEK: 'GREEK',
    HEBREW: 'HEBREW',
    HINDI: 'HINDI',
    IGBO: 'IGBO',
    ITALIAN: 'ITALIAN',
    JAPANESE: 'JAPANESE',
    PORTUGUESE: 'PORTUGUESE',
    SPANISH: 'SPANISH',
    SWEDISH: 'SWEDISH',
    ZEUHL: 'ZEUHL',
    
    // Theme
    SCI_FI: 'SCI_FI',
    FANTASY: 'FANTASY',
    MEDIEVAL: 'MEDIEVAL',
    OCCULT: 'OCCULT',
    SPIRITUAL: 'SPIRITUAL',
    SOCIOPOLITICAL: 'SOCIOPOLITICAL',

    // Genre-based
    ROCK: 'ROCK',
    JAZZ: 'JAZZ',
    FOLK: 'FOLK',
    ELECTRO: 'ELECTRO',
    ART_POP: 'ART_POP',
    AFROBEAT: 'AFROBEAT',

    // Genre borrowing
    BLENDS: 'BLENDS', 
    C_JAZZ: 'C_JAZZ',
    C_FOLK: 'C_FOLK',
    C_ELECTRO: 'C_ELECTRO',
    C_PSYCHE: 'C_PSYCHE',

    // Musically
    ODD_RHYTHM: 'ODD_RHYTHM',
    TECHNICAL: 'TECHNICAL',
    INSTRUMENTAL: 'INSTRUMENTAL',
    EXPERIMENTAL: 'EXPERIMENTAL',
    JAM: 'JAM',
    SOPHISTICATED: 'SOPHISTICATED',

    // Style
    BLUESY: 'BMUESY',
    JAZZY_GROOVY: 'JAZZY_GROOVY',
    PIANO: 'PIANO',
    ROCK_OPERA: 'ROCK_OPERA',
    FANFARE: 'FANFARE',
    SPACY: 'SPACY',
    GLITTER: 'GLITTER',
    BAROQUE: 'BAROQUE',
    RENAISSANCE: 'RENAISSANCE',
    ORIENTAL: 'ORIENTAL',
    AMBIENT: 'AMBIENT',
    ARENA: 'ARENA',
    LATINO: 'LATINO',
    CELTIC: 'CELTIC',

    // Album structure
    LENGTHY_TRACKS: 'LENGTHY_TRACKS',
    PATCHWORK: 'PATCHWORK',
    TRANSITION: 'TRANSITION',
    SYMPHONIC: 'SYMPHONIC',

    // Album era-sound
    CRISPY_SIXTIES: 'CRISPY_SIXTIES',
    GREASY_SEVENTIES: 'GREASY_SEVENTIES',
    SOFT_SEVENTIES: 'SOFT_SEVENTIES',
    NEO_EIGHTIES: 'NEO_EIGHTIES',

    // Album loudness
    SOFT: 'SOFT',
    HEAVY: 'HEAVY',
    HUMBLE: 'HUMBLE',
    SPECTACULAR: 'SPECTACULAR',

    // Temperature
    FUNNY: 'FUNNY',
    TOUCHING_VOCALS: 'TOUCHING_VOCALS',

    // Miscellaneous
    UNCOMMON_INSTRUMENTS: 'UNCOMMON_INSTRUMENTS',
    FEMALE: 'FEMALE',
    SOUND_COLLAGES: 'SOUND_COLLAGES',
    ORCHESTRAL_PARTS: 'ORCHESTRAL_PARTS',
}

// ALWAYS sync above model with below model to sort the VM criteria
const criteriaOrder = [
    // Concept
    criteria.CONCEPT,
    criteria.STORYLINE,
    criteria.SOUNDTRACK,
    criteria.LIVE,
    
    // Language
    criteria.BRETON,
    criteria.CROATIAN,
    criteria.FRENCH,
    criteria.GERMAN,
    criteria.GREEK,
    criteria.HEBREW,
    criteria.HINDI,
    criteria.IGBO,
    criteria.ITALIAN,
    criteria.JAPANESE,
    criteria.PORTUGUESE,
    criteria.SPANISH,
    criteria.SWEDISH,
    criteria.ZEUHL,

    // Theme
    criteria.SCI_FI,
    criteria.FANTASY,
    criteria.MEDIEVAL,
    criteria.OCCULT,
    criteria.SPIRITUAL,
    criteria.SOCIOPOLITICAL,

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

export { criteria, criteriaOrder }