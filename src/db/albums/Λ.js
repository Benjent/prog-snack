import { regions } from "../regions"
import { criteria } from "../criteria"

/**
 * @type {Array.<import(".").Album>}
 */
const albums = [
    {
        id: "akritas_akritas",
        title: "Ακρίτας",
        artist: "Ακρίτας",
        year: 1973,
        country: regions.GREECE,
        criteria: [criteria.ODD_RHYTHM, criteria.INSTRUMENTAL, criteria.GREEK, criteria.SYMPHONIC],
        selectedTrackTitle: "Εισβολείς",
        selectedTrackYtId: "H_BLWgoEmJg",
        spotifyId: null,
        deezerId: null,
        designers: ["Κώστας Φέρρης"],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "stavros_logaridis_stavros_logaridis",
        title: "Σταύρος Λογαρίδης",
        artist: "Σταύρος Λογαρίδης",
        year: 1978,
        country: regions.GREECE,
        criteria: [criteria.GREEK, criteria.JAZZY_GROOVY, criteria.C_ELECTRO, criteria.ODD_RHYTHM, criteria.SOFT_SEVENTIES],
        selectedTrackTitle: "Σνιφ Σνιφ",
        selectedTrackYtId: "x5a0ir9JUmk",
        spotifyId: "40ecy8QFqFBSGXoJKLObDZ",
        deezerId: "376474157",
        designers: [],
        similarAlbums: [],
        isAGem: false,
    },
]

export default albums
