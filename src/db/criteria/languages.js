// 2-occurence update : the language and its vue-filter translation
/**
 * @enum {string}
 * @readonly
 */
const languages = /** @type {const} */ ({
    ARMENIAN: "ARMENIAN",
    BELARUSIAN: "BELARUSIAN",
    BRETON: "BRETON",
    BULGARIAN: "BULGARIAN",
    CATALAN: "CATALAN",
    CHEWAN: "CHEWAN",
    CREOLE: "CREOLE",
    CROATIAN: "CROATIAN",
    CZECH: "CZECH",
    DANISH: "DANISH",
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
})

/**
 * @type { Record<keyof typeof languages, string> }
 * @readonly
 */
const languageLabels = {
    [languages.ARMENIAN]: "Armenian sung",
    [languages.BELARUSIAN]: "Belarusian sung",
    [languages.BRETON]: "Breton sung",
    [languages.BULGARIAN]: "Bulgarian sung",
    [languages.CATALAN]: "Catalan sung",
    [languages.CHEWAN]: "Chewan sung",
    [languages.CREOLE]: "Creole sung",
    [languages.CROATIAN]: "Croatian sung",
    [languages.CZECH]: "Czech sung",
    [languages.DANISH]: "Danish sung",
    [languages.FINNISH]: "Finnish sung",
    [languages.FRENCH]: "French sung",
    [languages.GERMAN]: "German sung",
    [languages.GREEK]: "Greek sung",
    [languages.HEBREW]: "Hebrew sung",
    [languages.HINDI]: "Hindi sung",
    [languages.HUNGARIAN]: "Hungarian sung",
    [languages.IGBO]: "Igbo sung",
    [languages.INDONESIAN]: "Indonesian sung",
    [languages.ITALIAN]: "Italian sung",
    [languages.JAPANESE]: "Japanese sung",
    [languages.LATIN]: "Latin sung",
    [languages.PORTUGUESE]: "Portuguese sung",
    [languages.RUSSIAN]: "Russian sung",
    [languages.SANSKRIT]: "Sanskrit sung",
    [languages.SPANISH]: "Spanish sung",
    [languages.SWEDISH]: "Swedish sung",
    [languages.TIBETAN]: "Tibetan sung",
    [languages.TURKISH]: "Turkish sung",
    [languages.ZEUHL]: "Zeuhl",
}

export { languages, languageLabels }
