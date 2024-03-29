import { criteria } from "./criteria"
import { languages } from "./languages"

// 3-occurence update : the category, its position in the category list and its vue-filter translation
/**
 * @enum {string}
 * @readonly
 */
const categories = /** @type {const} */ ({
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
})

/**
 * @type { Array.<keyof typeof categories> }
 * @readonly
 */
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
    categories.ARRANGEMENT,
    categories.TEMPER,
]

/**
 * @type { Object.<keyof typeof categories, Array.<keyof typeof criteria | keyof typeof languages>> }
 * @readonly
 */
const criteriaCategory = {
    [categories.TYPE]: [
        criteria.CONCEPT,
        criteria.STORYLINE,
        criteria.SOUNDTRACK,
        criteria.LIVE,
    ],
    [categories.LANGUAGE]: [
        ...Object.values(languages),
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

/**
 * @type { Record<keyof typeof categories, string> }
 * @readonly
 */
const categoryLabels = {
    [categories.ARRANGEMENT]: "Arrangement",
    [categories.CONTAINS]: "Contains elements of",
    [categories.ERA]: "Era sound",
    [categories.GENRE]: "Main genre",
    [categories.LANGUAGE]: "Language",
    [categories.LOUDNESS]: "Loudness",
    [categories.STRUCTURE]: "Album structuration",
    [categories.STYLE]: "Style",
    [categories.TEMPER]: "Temper",
    [categories.THEME]: "Theme",
    [categories.TYPE]: "Type",
}

export {
    categories,
    categoriesOrder,
    criteriaCategory,
    categoryLabels,
}
