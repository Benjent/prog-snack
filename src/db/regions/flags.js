import { regions } from "./regions"

/**
 * Emoji flags can be found at https://emojiterra.com/flags/ through the unicode data
 * @type { Record<keyof typeof regions, string> }
 * @readonly
*/
const flags = {
    [regions.ARGENTINA]: "🇦🇷",
    [regions.AUSTRALIA]: "🇦🇺",
    [regions.AUSTRIA]: "🇦🇹",
    [regions.BELARUS]: "🇧🇾",
    [regions.BELGIUM]: "🇧🇪",
    [regions.BOLIVIA]: "🇧🇴",
    [regions.BOSNIA_AND_HERZEGOVINA]: "🇧🇦",
    [regions.BRAZIL]: "🇧🇷",
    [regions.BULGARIA]: "🇧🇬",
    [regions.CANADA]: "🇨🇦",
    [regions.CZECHIA]: "🇨🇿",
    [regions.DENMARK]: "🇩🇰",
    [regions.ENGLAND]: "🇬🇧",
    [regions.FRANCE]: "🇫🇷",
    [regions.FINLAND]: "🇫🇮",
    [regions.GERMANY]: "🇩🇪",
    [regions.GREECE]: "🇬🇷",
    [regions.HUNGARY]: "🇭🇺",
    [regions.INDIA]: "🇮🇳",
    [regions.INDONESIA]: "🇮🇩",
    [regions.ICELAND]: "🇮🇸",
    [regions.IRELAND]: "🇮🇪",
    [regions.ISRAEL]: "🇮🇱",
    [regions.ITALY]: "🇮🇹",
    [regions.JAPAN]: "🇯🇵",
    [regions.MEXICO]: "🇲🇽",
    [regions.NETHERLANDS]: "🇳🇱",
    [regions.NEW_ZEALAND]: "🇳🇿",
    [regions.NORTHERN_IRELAND]: "🇬🇧",
    [regions.NORWAY]: "🇳🇴",
    [regions.PORTUGAL]: "🇵🇹",
    [regions.QUEBEC]: "🇨🇦",
    [regions.RUSSIA]: "🇷🇺",
    [regions.SCOTLAND]: "🇬🇧",
    [regions.SERBIA]: "🇷🇸",
    [regions.SLOVAKIA]: "🇸🇰",
    [regions.SOUTH_AFRICA]: "🇿🇦",
    [regions.SPAIN]: "🇪🇸",
    [regions.SWEDEN]: "🇸🇪",
    [regions.SWITZERLAND]: "🇨🇭",
    [regions.USA]: "🇺🇸",
    [regions.VENEZUELA]: "🇻🇪",
    [regions.WALES]: "🇬🇧",
    [regions.ZAMBIA]: "🇿🇲",
}

export default flags
