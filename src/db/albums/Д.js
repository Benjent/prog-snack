import { regions } from "../regions"
import { criteria } from "../criteria"

/**
 * @type {Array.<import(".").Album>}
 */
const albums = [
    {
        id: "fsb_non_stop",
        title: "Нон Стоп",
        artist: "ФСБ",
        year: 1977,
        country: regions.BULGARIA,
        criteria: [criteria.C_ELECTRO, criteria.BULGARIAN, criteria.ODD_RHYTHM, criteria.SYMPHONIC, criteria.INSTRUMENTAL, criteria.JAZZY_GROOVY],
        selectedTrackTitle: "Интермецо",
        selectedTrackYtId: "p11H1lXabIY",
        spotifyId: null,
        deezerId: null,
        designers: ["Евгени Донков"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "fsb_fsb_ii",
        title: "ФСБ II",
        artist: "ФСБ",
        year: 1978,
        country: regions.BULGARIA,
        criteria: [criteria.C_ELECTRO, criteria.ODD_RHYTHM, criteria.SYMPHONIC, criteria.INSTRUMENTAL, criteria.C_JAZZ],
        selectedTrackTitle: "Утро",
        selectedTrackYtId: "JSi6Iud7Z4U",
        spotifyId: null,
        deezerId: null,
        designers: ["Николай Пекарев"],
        similarAlbums: [],
        isAGem: true,
        description: `TODO Description`,
    },
    {
        id: "pesnyary_pesnyary_iii",
        title: "Песняры III",
        artist: "Песняры",
        year: 1974,
        country: regions.BELARUS,
        criteria: [criteria.BELARUSIAN, criteria.FANFARE],
        selectedTrackTitle: "Крик Птицы",
        selectedTrackYtId: "HIf0Rev1xRE",
        spotifyId: null,
        deezerId: null,
        designers: [],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "pesnyary_pesnyary_iv",
        title: "Песняры IV",
        artist: "Песняры",
        year: 1978,
        country: regions.BELARUS,
        criteria: [criteria.RUSSIAN, criteria.FANFARE, criteria.UNCOMMON_INSTRUMENTS, criteria.C_FOLK, criteria.BAROQUE, criteria.ODD_RHYTHM],
        selectedTrackTitle: "Перепелочка",
        selectedTrackYtId: "9H2bgx4mBGw",
        spotifyId: null,
        deezerId: null,
        designers: [],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "shturcite_shturcite",
        title: "Щурците",
        artist: "Щурците ",
        year: 1976,
        country: regions.BULGARIA,
        criteria: [criteria.BULGARIAN, criteria.ROCK, criteria.C_ELECTRO],
        selectedTrackTitle: "А Утре",
        selectedTrackYtId: "OlX6O23Ei18",
        spotifyId: null,
        deezerId: null,
        designers: ["Дянко Дянков"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "shturcite_shturcite_ii",
        title: "Щурците",
        artist: "Щурците ",
        year: 1978,
        country: regions.BULGARIA,
        criteria: [criteria.BULGARIAN, criteria.ROCK, criteria.C_ELECTRO, criteria.JAZZY_GROOVY],
        selectedTrackTitle: "Карат",
        selectedTrackYtId: "4jIAoevC5xQ",
        spotifyId: "4LVnzWfJpIxnAv0PVrd7WD",
        deezerId: null,
        designers: [],
        similarAlbums: [],
        isAGem: false,
    },
]

export default albums
