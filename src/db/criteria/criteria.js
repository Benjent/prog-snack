// 4-occurence update : the criterium, its position in the criteria list, its categorization and its vue-filter translation
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
    FINNISH: "FINNISH",
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
    TURKISH: "TURKISH",
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
    criteria.FINNISH,
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
    criteria.TURKISH,
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

const criteriumLabels = {
    [criteria.AFROBEAT]: "Afrobeat",
    [criteria.AMBIENT]: "Ambient",
    [criteria.ARENA]: "Arena",
    [criteria.ARMENIAN]: "Armenian sung",
    [criteria.ART_POP]: "Art Pop",
    [criteria.BAROQUE]: "Baroque vibes",
    [criteria.BELARUSIAN]: "Belarusian sung",
    [criteria.BLENDS]: "Blends many music genres",
    [criteria.BLUESY]: "Bluesy",
    [criteria.BRETON]: "Breton sung",
    [criteria.BULGARIAN]: "Bulgarian sung",
    [criteria.C_ELECTRO]: "Contains electronic elements",
    [criteria.C_FOLK]: "Contains Folk elements",
    [criteria.C_JAZZ]: "Contains Jazz elements",
    [criteria.C_PSYCHE]: "Contains psychedelic elements",
    [criteria.CELTIC]: "Celtic",
    [criteria.CONCEPT]: "Concept album",
    [criteria.CREOLE]: "Creole sung",
    [criteria.CRISPY_SIXTIES]: "Crispy 60s sound",
    [criteria.CROATIAN]: "Croatian sung",
    [criteria.CZECH]: "Czech sung",
    [criteria.ELECTRO]: "Electro-based with a Prog touch",
    [criteria.EXPERIMENTAL]: "Experimental",
    [criteria.FANFARE]: "Fanfare",
    [criteria.FANTASY]: "Fantasy-influenced",
    [criteria.FEMALE]: "Female vocals or backing vocals",
    [criteria.FINNISH]: "Finnish sung",
    [criteria.FOLK]: "Folk-based with a Prog touch",
    [criteria.FRENCH]: "French sung",
    [criteria.FUNNY]: "Funny",
    [criteria.GERMAN]: "German sung",
    [criteria.GLITTER]: "Glittering",
    [criteria.GREASY_SEVENTIES]: "Greasy early 70s sound",
    [criteria.GREEK]: "Greek sung",
    [criteria.HEAVY]: "Rather heavy",
    [criteria.HEBREW]: "Hebrew sung",
    [criteria.HINDI]: "Hindi sung",
    [criteria.HISTORICAL]: "Historical",
    [criteria.HUMBLE]: "Humble",
    [criteria.HUNGARIAN]: "Hungarian sung",
    [criteria.IGBO]: "Igbo sung",
    [criteria.INDONESIAN]: "Indonesian sung",
    [criteria.INSTRUMENTAL]: "Mainly instrumental",
    [criteria.ITALIAN]: "Italian sung",
    [criteria.JAM]: "Jam-oriented",
    [criteria.JAPANESE]: "Japanese sung",
    [criteria.JAZZ]: "Jazz-based with a Prog touch",
    [criteria.JAZZY_GROOVY]: "Jazzy groovy",
    [criteria.LATIN]: "Latin sung",
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
    [criteria.PORTUGUESE]: "Portuguese sung",
    [criteria.RENAISSANCE]: "Renaissance",
    [criteria.ROCK]: "Rock-based with a Prog touch",
    [criteria.ROCK_OPERA]: "Rock opera",
    [criteria.RUSSIAN]: "Russian sung",
    [criteria.SANSKRIT]: "Sanskrit sung",
    [criteria.SCI_FI]: "Sci-fi-influenced",
    [criteria.SOCIOPOLITICAL]: "Sociopolitical",
    [criteria.SOFT]: "Rather soft",
    [criteria.SOFT_SEVENTIES]: "Soft late 70s sound",
    [criteria.SOPHISTICATED]: "Sophisticated",
    [criteria.SOUND_COLLAGES]: "Uses sound collages",
    [criteria.SOUNDTRACK]: "Soundtrack album",
    [criteria.SPACY]: "Spacy",
    [criteria.SPANISH]: "Spanish sung",
    [criteria.SPECTACULAR]: "Spectacular",
    [criteria.SPIRITUAL]: "Spiritual",
    [criteria.STORYLINE]: "Storyline",
    [criteria.SWEDISH]: "Swedish sung",
    [criteria.SYMPHONIC]: "Symphonic",
    [criteria.TECHNICAL]: "Technical",
    [criteria.TIBETAN]: "Tibetan sung",
    [criteria.TOUCHING_VOCALS]: "Touching vocals",
    [criteria.TRANSITION]: "Tracks have transitions",
    [criteria.TURKISH]: "Turkish sung",
    [criteria.UNCOMMON_INSTRUMENTS]: "Uncommon instruments",
    [criteria.ZEUHL]: "Zeuhl",
}

export {
    criteria,
    criteriaOrder,
    criteriumLabels,
}
