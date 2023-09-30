// 3-occurence update : the region, its flag and its vue-filter translation
/**
 * @enum {string}
 * @readonly
 */
const regions = /** @type {const} */ ({
    ARGENTINA: "ARGENTINA",
    AUSTRALIA: "AUSTRALIA",
    AUSTRIA: "AUSTRIA",
    BELARUS: "BELARUS",
    BELGIUM: "BELGIUM",
    BOLIVIA: "BOLIVIA",
    BOSNIA_AND_HERZEGOVINA: "BOSNIA_AND_HERZEGOVINA",
    BRAZIL: "BRAZIL",
    BULGARIA: "BULGARIA",
    CANADA: "CANADA",
    CZECHIA: "CZECHIA",
    DENMARK: "DENMARK",
    ENGLAND: "ENGLAND",
    FINLAND: "FINLAND",
    FRANCE: "FRANCE",
    GERMANY: "GERMANY",
    GREECE: "GREECE",
    HUNGARY: "HUNGARY",
    INDIA: "INDIA",
    INDONESIA: "INDONESIA",
    ICELAND: "ICELAND",
    IRELAND: "IRELAND",
    ISRAEL: "ISRAEL",
    ITALY: "ITALY",
    JAPAN: "JAPAN",
    MEXICO: "MEXICO",
    NETHERLANDS: "NETHERLANDS",
    NEW_ZEALAND: "NEW_ZEALAND",
    NORTHERN_IRELAND: "NORTHERN_IRELAND",
    NORWAY: "NORWAY",
    PORTUGAL: "PORTUGAL",
    QUEBEC: "QUEBEC",
    RUSSIA: "RUSSIA",
    SCOTLAND: "SCOTLAND",
    SERBIA: "SERBIA",
    SLOVAKIA: "SLOVAKIA",
    SOUTH_AFRICA: "SOUTH_AFRICA",
    SPAIN: "SPAIN",
    SWEDEN: "SWEDEN",
    SWITZERLAND: "SWITZERLAND",
    USA: "USA", // TODO split by region
    VENEZUELA: "VENEZUELA",
    WALES: "WALES",
})

/**
 * @type { Record<keyof typeof regions, string> }
 * @readonly
*/
const regionLabels = {
    [regions.ARGENTINA]: "Argentina",
    [regions.AUSTRALIA]: "Australia",
    [regions.AUSTRIA]: "Austria",
    [regions.BELARUS]: "Belarus",
    [regions.BELGIUM]: "Belgium",
    [regions.BOLIVIA]: "Bolivia",
    [regions.BOSNIA_AND_HERZEGOVINA]: "Bosnia and Herzegovina",
    [regions.BRAZIL]: "Brazil",
    [regions.BULGARIA]: "Bulgaria",
    [regions.CANADA]: "Canada",
    [regions.CZECHIA]: "Czechia",
    [regions.DENMARK]: "Denmark",
    [regions.ENGLAND]: "England",
    [regions.FINLAND]: "Finland",
    [regions.FRANCE]: "France",
    [regions.GERMANY]: "Germany",
    [regions.GREECE]: "Greece",
    [regions.HUNGARY]: "Hungary",
    [regions.INDIA]: "India",
    [regions.INDONESIA]: "Indonesia",
    [regions.ICELAND]: "Iceland",
    [regions.IRELAND]: "Ireland",
    [regions.ISRAEL]: "Israel",
    [regions.ITALY]: "Italy",
    [regions.JAPAN]: "Japan",
    [regions.MEXICO]: "Mexico",
    [regions.NETHERLANDS]: "Netherlands",
    [regions.NEW_ZEALAND]: "New Zealand",
    [regions.NORTHERN_IRELAND]: "Northern Ireland",
    [regions.NORWAY]: "Norway",
    [regions.PORTUGAL]: "Portugal",
    [regions.QUEBEC]: "Québec",
    [regions.RUSSIA]: "Russia",
    [regions.SCOTLAND]: "Scotland",
    [regions.SERBIA]: "Serbia",
    [regions.SLOVAKIA]: "Slovakia",
    [regions.SOUTH_AFRICA]: "South Africa",
    [regions.SPAIN]: "Spain",
    [regions.SWEDEN]: "Sweden",
    [regions.SWITZERLAND]: "Switzerland",
    [regions.USA]: "USA", // TODO split by region
    [regions.VENEZUELA]: "Venezuela",
    [regions.WALES]: "Wales",
}

export {
    regions,
    regionLabels,
}
