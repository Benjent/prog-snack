import { regions } from "../regions"
import { criteria } from "../criteria"

const albums = [
    {
        id: "akritas_akritas",
        title: "Ακρίτας",
        artist: "Ακρίτας",
        year: 1973,
        country: regions.GREECE,
        cover: ".jpg",
        criteria: [criteria.ODD_RHYTHM, criteria.INSTRUMENTAL, criteria.GREEK, criteria.SYMPHONIC],
        selectedTrackTitle: "Εισβολείς",
        selectedTrackYtId: "H_BLWgoEmJg",
        spotifyId: null,
        deezerId: null,
        designers: ["Κώστας Φέρρης"],
        similarAlbums: [],
        isAGem: false,
    },
]

export default albums
