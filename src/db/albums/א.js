import regions from "../regions"
import { criteria } from "../criteria"

const albums = [
    {
        id: "gan_eden_gan_eden",
        title: "להקת גן עדן",
        artist: "להקת גן עדן",
        year: 1979,
        country: regions.ISRAEL,
        cover: ".jpg",
        criteria: [criteria.HEBREW, criteria.ODD_RHYTHM, criteria.C_ELECTRO, criteria.SOFT_SEVENTIES],
        selectedTrackTitle: "פרמיקס",
        selectedTrackYtId: "He_RXiYpecc",
        spotifyId: "3rMv8mGgdowrKr5qwrxH9k",
        deezerId: "10310852",
        designers: [],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: "ktzat_acheret_nonames",
        title: "קצת אחרת",
        artist: "קצת אחרת",
        year: 1974,
        country: regions.ISRAEL,
        cover: ".jpg",
        criteria: [criteria.HEBREW, criteria.SOPHISTICATED, criteria.ODD_RHYTHM, criteria.C_FOLK, criteria.UNCOMMON_INSTRUMENTS],
        selectedTrackTitle: "204",
        selectedTrackYtId: "OsfVoxjltfE",
        spotifyId: "6xjSKLHpGoFeXPmQbKiF8e",
        deezerId: null,
        designers: ["Yossi Orbach"],
        similarAlbums: [],
        isAGem: true,
        description: `TODO Description`,
    },
]

export default albums
