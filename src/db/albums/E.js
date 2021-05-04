import regions from '../regions'
import { criteria } from '../criteria'

const albums = [
    {
        id: 'earthrise_earthrise',
        title: 'Earthrise',
        artist: 'Earthrise',
        year: 1978,
        country: regions.USA,
        cover: '.jpg',
        criteria: [criteria.CONCEPT, criteria.ODD_RHYTHM, criteria.INSTRUMENTAL, criteria.JAM, criteria.SOFT, criteria.C_JAZZ, criteria.C_ELECTRO, criteria.JAZZY_GROOVY],
        selectedTrackTitle: 'Arcturus',
        selectedTrackYtId: '4YDGiubWxvw',
        spotifyId: null,
        deezerId: null,
        designers: [],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'easter_island_easter_island',
        title: 'Easter Island',
        artist: 'Easter Island',
        year: 1979,
        country: regions.USA,
        cover: '.jpg',
        criteria: [criteria.ODD_RHYTHM, criteria.HEAVY, criteria.C_JAZZ, criteria.SYMPHONIC],
        selectedTrackTitle: 'Face To Face',
        selectedTrackYtId: 'UL50QdzUqMY',
        spotifyId: null,
        deezerId: '63044732',
        designers: [],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'egg_egg',
        title: 'Egg',
        artist: 'Egg',
        year: 1970,
        country: regions.ENGLAND,
        cover: '.jpg',
        criteria: [criteria.ODD_RHYTHM, criteria.INSTRUMENTAL, criteria.JAM, criteria.LENGTHY_TRACKS, criteria.C_JAZZ, criteria.FUNNY, criteria.JAZZY_GROOVY],
        selectedTrackTitle: 'Symphony No. 2',
        selectedTrackYtId: 'gR1TYEOVpJ0',
        spotifyId: '5pMUtQr5NeAS8nVhHDoNJg',
        deezerId: '7730016',
        designers: ['Trevor Key'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'egg_the_polite_force',
        title: 'The Polite Force',
        artist: 'Egg',
        year: 1971,
        country: regions.ENGLAND,
        cover: '.jpg',
        criteria: [criteria.ODD_RHYTHM, criteria.INSTRUMENTAL, criteria.JAM, criteria.C_JAZZ, criteria.JAZZY_GROOVY],
        selectedTrackTitle: 'A Visit To Newport Hospital',
        selectedTrackYtId: 'DanChmmX4k0',
        spotifyId: null,
        deezerId: '57226532',
        designers: ['Terry Yetton'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'egg_the_civil_surface',
        title: 'The Civil Surface',
        artist: 'Egg',
        year: 1974,
        country: regions.ENGLAND,
        cover: '.jpg',
        criteria: [criteria.ODD_RHYTHM, criteria.INSTRUMENTAL, criteria.JAM, criteria.C_JAZZ, criteria.JAZZY_GROOVY],
        selectedTrackTitle: 'Enneagram',
        selectedTrackYtId: 'QS96H34Ywv4',
        spotifyId: null,
        deezerId: '58280522',
        designers: ['Peter Chapman'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'elder_kindred_kindred_spirits',
        title: 'Kindred Spirits',
        artist: 'Elder Kindred',
        year: 1971,
        country: regions.ENGLAND,
        cover: '.jpg',
        criteria: [criteria.JAZZY_GROOVY, criteria.FOLK],
        selectedTrackTitle: 'Castles',
        selectedTrackYtId: 'Tw9Ksxrm7hg',
        spotifyId: '6xBz57CFwGO7ta0IGkF2QR',
        deezerId: '8875695',
        designers: [],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'electric_light_orchestra_the_electric_light_orchestra',
        title: 'The Electric Light Orchestra',
        artist: 'Electric Light Orchestra',
        year: 1971,
        country: regions.ENGLAND,
        cover: '.jpg',
        criteria: [criteria.BAROQUE, criteria.UNCOMMON_INSTRUMENTS, criteria.C_FOLK, criteria.ORCHESTRAL_PARTS],
        selectedTrackTitle: 'Nellie Takes Her Bow',
        selectedTrackYtId: 'tsnNqlM0AvM',
        spotifyId: '5XlyV8daz3tuhEYW9VKxfe',
        deezerId: '1557730',
        designers: ['Hipgnosis'],
        similarAlbums: ['roy_wood_boulders', 'the_beatles_let_it_be'],
        isAGem: false,
    },
    {
        id: 'electric_light_orchestra_elo_2',
        title: 'ELO 2',
        artist: 'Electric Light Orchestra',
        year: 1972,
        country: regions.ENGLAND,
        cover: '.jpg',
        criteria: [criteria.ODD_RHYTHM, criteria.BAROQUE, criteria.GREASY_SEVENTIES, criteria.UNCOMMON_INSTRUMENTS, criteria.SYMPHONIC, criteria.ORCHESTRAL_PARTS],
        selectedTrackTitle: 'From The Sun To The World (Boogie No. 1)',
        selectedTrackYtId: 'jFhii4bE9JA',
        spotifyId: '5SeRsknrRC8Ch082iwtB40',
        deezerId: '9210551',
        designers: ['Hipgnosis'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'electric_light_orchestra_on_the_third_day',
        title: 'On The Third Day',
        artist: 'Electric Light Orchestra',
        year: 1973,
        country: regions.ENGLAND,
        cover: '.jpg',
        criteria: [criteria.TRANSITION, criteria.BAROQUE, criteria.ROCK_OPERA, criteria.ART_POP, criteria.SYMPHONIC, criteria.C_ELECTRO, criteria.ORCHESTRAL_PARTS],
        selectedTrackTitle: 'New World Rising',
        selectedTrackYtId: 'vSoL8WdgI_Y',
        spotifyId: '4U3gNrULmJ7m12b6APsvm3',
        deezerId: '11674556',
        designers: ['John Kehe'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'electric_light_orchestra_eldorado',
        title: 'Eldorado',
        artist: 'Electric Light Orchestra',
        year: 1974,
        country: regions.ENGLAND,
        cover: '.jpg',
        criteria: [criteria.ORCHESTRAL_PARTS, criteria.ART_POP, criteria.BAROQUE, criteria.C_ELECTRO, criteria.TRANSITION, criteria.CONCEPT],
        selectedTrackTitle: 'Poor Boy (The Greenwood)',
        selectedTrackYtId: '2HngGfym_RY',
        spotifyId: '11O60gqbQl6f3EmTyZGaur',
        deezerId: '11674510',
        designers: ['John Kehe'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'electric_light_orchestra_face_the_music',
        title: 'Face The Music',
        artist: 'Electric Light Orchestra',
        year: 1975,
        country: regions.ENGLAND,
        cover: '.jpg',
        criteria: [criteria.SOUND_COLLAGES, criteria.ORCHESTRAL_PARTS, criteria.ART_POP, criteria.BAROQUE, criteria.C_ELECTRO],
        selectedTrackTitle: 'Fire On High',
        selectedTrackYtId: 'Yt6o03K_y54',
        spotifyId: '7BU9d77tqAw7W26V6waEpt',
        deezerId: '11674498',
        designers: ['Art Attack', 'John Kehe', 'Mick Haggerty'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'electric_light_orchestra_a_new_world_record',
        title: 'A New World Record',
        artist: 'Electric Light Orchestra',
        year: 1976,
        country: regions.ENGLAND,
        cover: '.jpg',
        criteria: [criteria.ORCHESTRAL_PARTS, criteria.ART_POP, criteria.TRANSITION, criteria.ROCK_OPERA, criteria.BAROQUE],
        selectedTrackTitle: `Livin' Thing`,
        selectedTrackYtId: 'lvBOZCrJsAI',
        spotifyId: '7a35UzxXYuKQGMGImyB0Un',
        deezerId: '11674580',
        designers: ['John Kosh'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'electric_light_orchestra_out_of_the_blue',
        title: 'Out Of The Blue',
        artist: 'Electric Light Orchestra',
        year: 1977,
        country: regions.ENGLAND,
        cover: '.jpg',
        criteria: [criteria.CONCEPT, criteria.TRANSITION, criteria.C_ELECTRO, criteria.ROCK_OPERA, criteria.FANFARE, criteria.ORCHESTRAL_PARTS],
        selectedTrackTitle: 'Mr. Blue Sky',
        selectedTrackYtId: 'aQUlA8Hcv4s',
        spotifyId: '3usnShwygMXVZB4IV5dwnU',
        deezerId: '11674696',
        designers: ['John Kosh', 'Ria Lewerke', 'Shusei Nagaoka'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'electric_light_orchestra_discovery',
        title: 'Discovery',
        artist: 'Electric Light Orchestra',
        year: 1979,
        country: regions.ENGLAND,
        cover: '.jpg',
        criteria: [criteria.FANFARE, criteria.C_ELECTRO, criteria.ART_POP, criteria.ROCK_OPERA],
        selectedTrackTitle: 'The Diary Of Horace Wimp',
        selectedTrackYtId: 'PFU9HYyMVxQ',
        spotifyId: '2SlLJQ2VAa1thmcRiVuXrb',
        deezerId: '11674502',
        designers: ['Norman Moore', 'Paul Gross'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'electric_light_orchestra_time',
        title: 'Time',
        artist: 'Electric Light Orchestra',
        year: 1981,
        country: regions.ENGLAND,
        cover: '.jpg',
        criteria: [criteria.STORYLINE, criteria.TRANSITION, criteria.ROCK_OPERA, criteria.ELECTRO, criteria.NEO_EIGHTIES, criteria.SCI_FI],
        selectedTrackTitle: 'Ticket To The Moon',
        selectedTrackYtId: 'CJdZTNLkpuA',
        spotifyId: '4k1GJg2poyo6hwWLqJn9C2',
        deezerId: '1413698',
        designers: ['Guy Fery'],
        similarAlbums: [],
        isAGem: true,
        description: `Jeff Lynne takes us into a futuristic romantic story where a man enters the year 2095 and compares his new life with his old one with nostalgia, in the same place that has now drastically changed. Each track borrows a lot of different musical styles such as Disco, New Wave and Reggae, but the album remains heavily Synth-Pop oriented with strong Electro-Rock roots.`
    },
    {
        id: 'electric_light_orchestra_secret_messages',
        title: 'Secret Messages',
        artist: 'Electric Light Orchestra',
        year: 1983,
        country: regions.ENGLAND,
        cover: '.jpg',
        criteria: [criteria.ART_POP, criteria.TRANSITION, criteria.NEO_EIGHTIES, criteria.ELECTRO],
        selectedTrackTitle: 'Secret Messages',
        selectedTrackYtId: 'eDAcbxz0fuQ',
        spotifyId: '78r6mzLPWq7Ke6Ld2vlypp',
        deezerId: null,
        designers: ['David Costa', 'Kim Harris'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'electronic_system_tchip_tchip',
        title: 'Tchip Tchip',
        artist: 'Electronic System',
        year: 1974,
        country: regions.BELGIUM,
        cover: '.jpg',
        criteria: [criteria.ELECTRO, criteria.FUNNY],
        selectedTrackTitle: 'Skylab',
        selectedTrackYtId: 'cIwDLN2X6Rs',
        spotifyId: '6wBkm1tSSd6QfdvbAEDJK9',
        deezerId: null,
        designers: ['Vanderstadt Rimo'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'eloy_eloy',
        title: 'Eloy',
        artist: 'Eloy',
        year: 1971,
        country: regions.GERMANY,
        cover: '.jpg',
        criteria: [criteria.JAM, criteria.ROCK],
        selectedTrackTitle: 'Something Yellow',
        selectedTrackYtId: 'yDatGyROJ1c',
        spotifyId: null,
        deezerId: null,
        designers: [],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'eloy_inside',
        title: 'Inside',
        artist: 'Eloy',
        year: 1973,
        country: regions.GERMANY,
        cover: '.jpg',
        criteria: [criteria.JAM, criteria.LENGTHY_TRACKS, criteria.SYMPHONIC, criteria.C_ELECTRO],
        selectedTrackTitle: 'Inside',
        selectedTrackYtId: 'g9geep2yJjI',
        spotifyId: '6mnhtrfvfW4kW6XrxCsD3T',
        deezerId: '327442',
        designers: ['Roberto Patelli'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'eloy_floating',
        title: 'Floating',
        artist: 'Eloy',
        year: 1974,
        country: regions.GERMANY,
        cover: '.jpg',
        criteria: [criteria.JAM, criteria.LENGTHY_TRACKS, criteria.SYMPHONIC, criteria.C_ELECTRO],
        selectedTrackTitle: 'Castle In The Air',
        selectedTrackYtId: 'K_oPTaKCjcY',
        spotifyId: '7zhuy8vqMtMJF73gQN0lvi',
        deezerId: '327443',
        designers: ['Roberto Patelli'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'eloy_power_and_the_passion',
        title: 'Power And The Passion',
        artist: 'Eloy',
        year: 1975,
        country: regions.GERMANY,
        cover: '.jpg',
        criteria: [criteria.STORYLINE, criteria.JAM, criteria.SYMPHONIC, criteria.C_ELECTRO, criteria.FANTASY],
        selectedTrackTitle: 'The Bells Of Notre Dame',
        selectedTrackYtId: 'p9P8OlPZnrM',
        spotifyId: '0eiGbiuC1sd5HITiGIUuAh',
        deezerId: '327444',
        designers: ['Kochlowski'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'eloy_dawn',
        title: 'Dawn',
        artist: 'Eloy',
        year: 1976,
        country: regions.GERMANY,
        cover: '.jpg',
        criteria: [criteria.STORYLINE, criteria.JAM, criteria.SYMPHONIC, criteria.C_ELECTRO, criteria.FANTASY],
        selectedTrackTitle: 'Gliding Into Light And Knowledge',
        selectedTrackYtId: 'FGcpZ_4a5Y8',
        spotifyId: '4RiTnI1jMR8q1g0ig7R03G',
        deezerId: null,
        designers: ['Kochlowski'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'eloy_ocean',
        title: 'Ocean',
        artist: 'Eloy',
        year: 1977,
        country: regions.GERMANY,
        cover: '.jpg',
        criteria: [criteria.CONCEPT, criteria.JAM, criteria.LENGTHY_TRACKS, criteria.SYMPHONIC, criteria.C_ELECTRO, criteria.ROCK_OPERA, criteria.FANTASY],
        selectedTrackTitle: `Poseidon's Creation`,
        selectedTrackYtId: 'NIeO4IAhpGM',
        spotifyId: '2dn0CYoFrWYBgaXc3YGiCk',
        deezerId: '327392',
        designers: ['Wojtek Siudmak'],
        similarAlbums: [],
        isAGem: true,
        description: `A Space Rock symphonic album divided in four long tracks, lifted with clear basslines by Klaus-Peter Matziol and deep use of Detlev Schmidtchen's synthesizers that sometimes create an atmospheric doom atmosphere - Frank Bornemann's guitars being in the background. Jürgen Rosenthal, fascinated by the myth of Atlantide since always, decided to make it a concept album in which he sings how mankind lost paradise it was given, by its violent behavior.`
    },
    {
        id: 'eloy_silent_cries_and_mighty_echoes',
        title: 'Silent Cries And Mighty Echoes',
        artist: 'Eloy',
        year: 1979,
        country: regions.GERMANY,
        cover: '.jpg',
        criteria: [criteria.JAM, criteria.LENGTHY_TRACKS, criteria.GLITTER, criteria.SYMPHONIC, criteria.C_ELECTRO],
        selectedTrackTitle: 'Master Of Sensation',
        selectedTrackYtId: 'GzJ8a29jvMU',
        spotifyId: '6XAES0j2QM7gPjLsEEKPVn',
        deezerId: '327393',
        designers: ['Winfried Reinbacher'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'eloy_colours',
        title: 'Colours',
        artist: 'Eloy',
        year: 1980,
        country: regions.GERMANY,
        cover: '.jpg',
        criteria: [criteria.JAM, criteria.GLITTER, criteria.C_ELECTRO],
        selectedTrackTitle: 'Giant',
        selectedTrackYtId: 'E1X0euUgYgA',
        spotifyId: null,
        deezerId: null,
        designers: ['Winfried Reinbacher'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'eloy_planets',
        title: 'Planets',
        artist: 'Eloy',
        year: 1981,
        country: regions.GERMANY,
        cover: '.jpg',
        criteria: [criteria.JAM, criteria.GLITTER, criteria.C_ELECTRO, criteria.NEO_EIGHTIES, criteria.TRANSITION],
        selectedTrackTitle: 'Mysterious Monolith',
        selectedTrackYtId: 'qLUmum7-Krs',
        spotifyId: null,
        deezerId: null,
        designers: ['Winfried Reinbacher'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'eloy_time_to_turn',
        title: 'Time To Turn',
        artist: 'Eloy',
        year: 1982,
        country: regions.GERMANY,
        cover: '.jpg',
        criteria: [criteria.JAM, criteria.GLITTER, criteria.C_ELECTRO, criteria.NEO_EIGHTIES],
        selectedTrackTitle: 'End Of An Odyssey',
        selectedTrackYtId: 'MCr4WoovspA',
        spotifyId: '24xpef77qNidD1GoWXBHLf',
        deezerId: '327389',
        designers: ['Winfried Reinbacher'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'elton_john_empty_sky',
        title: 'Empty Sky',
        artist: 'Elton John',
        year: 1969,
        country: regions.ENGLAND,
        cover: '.jpg',
        criteria: [criteria.ART_POP, criteria.BAROQUE, criteria.TOUCHING_VOCALS, criteria.PIANO],
        selectedTrackTitle: 'Sails',
        selectedTrackYtId: '2F4iV_GuiXw',
        spotifyId: '2AWW5zXJBwLeroqj9D5oWV',
        deezerId: '122253',
        designers: ['Dave Larkham'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'elton_john_elton_john',
        title: 'Elton John',
        artist: 'Elton John',
        year: 1970,
        country: regions.ENGLAND,
        cover: '.jpg',
        criteria: [criteria.ART_POP, criteria.BAROQUE, criteria.TOUCHING_VOCALS, criteria.ORCHESTRAL_PARTS, criteria.PIANO],
        selectedTrackTitle: 'The King Must Die',
        selectedTrackYtId: '9OHa8pAXJBs',
        spotifyId: '7dtLYwLOdYQa2S8Vjeuxci',
        deezerId: '122252',
        designers: ['Jim Goff'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'elton_john_tumbleweed_connection',
        title: 'Tumbleweed Connection',
        artist: 'Elton John',
        year: 1970,
        country: regions.ENGLAND,
        cover: '.jpg',
        criteria: [criteria.ART_POP, criteria.PIANO],
        selectedTrackTitle: 'Love Song',
        selectedTrackYtId: '8Ri96HlRCKI',
        spotifyId: '03zfU3IwWmymKoaWnwFNaY',
        deezerId: '247855',
        designers: ['David Larkham'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'elton_john_madman_across_the_water',
        title: 'Madman Across The Water',
        artist: 'Elton John',
        year: 1971,
        country: regions.ENGLAND,
        cover: '.jpg',
        criteria: [criteria.ART_POP, criteria.ORCHESTRAL_PARTS, criteria.TOUCHING_VOCALS, criteria.C_FOLK, criteria.PIANO],
        selectedTrackTitle: 'Tiny Dancer',
        selectedTrackYtId: 'yYcyacLRPNs',
        spotifyId: '2OZbaW9tgO62ndm375lFZr',
        deezerId: '1969081',
        designers: ['David Larkham'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'elton_john_honky_chateau',
        title: 'Honky Château',
        artist: 'Elton John',
        year: 1972,
        country: regions.ENGLAND,
        cover: '.jpg',
        criteria: [criteria.ART_POP, criteria.TOUCHING_VOCALS, criteria.PIANO],
        selectedTrackTitle: 'Salvation',
        selectedTrackYtId: 'uJYMLqPxAhM',
        spotifyId: '2ei2X6ghPnw7YRwQtAH075',
        deezerId: '122698',
        designers: ['Ed Caraeff'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'emerson_lake_and_palmer_emerson_lake_and_palmer',
        title: 'Emerson, Lake & Palmer',
        artist: 'Emerson, Lake & Palmer',
        year: 1970,
        country: regions.ENGLAND,
        cover: '.jpg',
        criteria: [criteria.ODD_RHYTHM, criteria.TECHNICAL, criteria.INSTRUMENTAL, criteria.LENGTHY_TRACKS, criteria.SYMPHONIC, criteria.C_PSYCHE, criteria.C_FOLK, criteria.SPECTACULAR],
        selectedTrackTitle: 'Take A Pebble',
        selectedTrackYtId: 'tVz35uXqFYw',
        spotifyId: '4Q8vDc5lmB9SW9cgMDeQAJ',
        deezerId: '13680764',
        designers: ['Nic Dartnell'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'emerson_lake_and_palmer_tarkus',
        title: 'Tarkus',
        artist: 'Emerson, Lake & Palmer',
        year: 1971,
        country: regions.ENGLAND,
        cover: '.jpg',
        criteria: [criteria.ODD_RHYTHM, criteria.TECHNICAL, criteria.INSTRUMENTAL, criteria.LENGTHY_TRACKS, criteria.SYMPHONIC, criteria.C_PSYCHE, criteria.C_FOLK, criteria.SPECTACULAR],
        selectedTrackTitle: 'Tarkus',
        selectedTrackYtId: 'WKNOlDtZluU',
        spotifyId: '6mqJylLfGnLCXhdyMPBCRo',
        deezerId: '13681070',
        designers: ['William Neal'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'emerson_lake_and_palmer_pictures_at_an_exhibition',
        title: 'Pictures At An Exhibition',
        artist: 'Emerson, Lake & Palmer',
        year: 1971,
        country: regions.ENGLAND,
        cover: '.jpg',
        criteria: [criteria.CONCEPT, criteria.INSTRUMENTAL, criteria.SYMPHONIC, criteria.LIVE, criteria.C_ELECTRO, criteria.PATCHWORK, criteria.ROCK_OPERA],
        selectedTrackTitle: 'The Sage',
        selectedTrackYtId: '1gxAGj-Svcc',
        spotifyId: '4mxTngMVhtDdDsFd8SPwo3',
        deezerId: '13680812',
        designers: ['William Neal'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'emerson_lake_and_palmer_trilogy',
        title: 'Trilogy',
        artist: 'Emerson, Lake & Palmer',
        year: 1972,
        country: regions.ENGLAND,
        cover: '.jpg',
        criteria: [criteria.ODD_RHYTHM, criteria.SYMPHONIC, criteria.C_ELECTRO],
        selectedTrackTitle: 'Trilogy',
        selectedTrackYtId: '-yB1rilcUGQ',
        spotifyId: '4Swf9iftTTaoEPbPXyxxUQ',
        deezerId: '14167544',
        designers: ['Hipgnosis'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'emerson_lake_and_palmer_brain_salad_surgery',
        title: 'Brain Salad Surgery',
        artist: 'Emerson, Lake & Palmer',
        year: 1973,
        country: regions.ENGLAND,
        cover: '.jpg',
        criteria: [criteria.TECHNICAL, criteria.TRANSITION, criteria.SYMPHONIC, criteria.C_PSYCHE, criteria.C_ELECTRO],
        selectedTrackTitle: 'Still... You Turn Me On',
        selectedTrackYtId: '_8VHHcd0M_o',
        spotifyId: '1wTqdsmCCQQLCQjXZM3H59',
        deezerId: '14167536',
        designers: ['H.R. Giger'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'emerson_lake_and_powell_emerson_lake_and_powell',
        title: 'Emerson, Lake & Powell',
        artist: 'Emerson, Lake & Powell',
        year: 1986,
        country: regions.ENGLAND,
        cover: '.jpg',
        criteria: [criteria.ELECTRO, criteria.GLITTER, criteria.NEO_EIGHTIES, criteria.SPECTACULAR, criteria.C_JAZZ, criteria.ODD_RHYTHM, criteria.ARENA],
        selectedTrackTitle: 'The Score',
        selectedTrackYtId: 'n0Oz9Eqouc4',
        spotifyId: '2YKjFHhp52XE2ot0u2GZsh',
        deezerId: null,
        designers: ['Debra Bishop'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'eno_moebius_roedelius_after_the_heat',
        title: 'After The Heat',
        artist: 'Eno Moebius Roedelius',
        year: 1978,
        country: regions.GERMANY,
        cover: '.jpg',
        criteria: [criteria.ELECTRO, criteria.AMBIENT, criteria.SOFT, criteria.INSTRUMENTAL],
        selectedTrackTitle: 'The Shade',
        selectedTrackYtId: '8CudLTfb0Qk',
        spotifyId: '4yq2tSTIBBHE8S0zvanABi',
        deezerId: '62479142',
        designers: ['Michael Weisse'],
        similarAlbums: [], // TODO something tangerine dream après Stratosfear?
        isAGem: false,
    },
    {
        id: 'eskaton_4_visions',
        title: '4 Visions',
        artist: 'Eskaton',
        year: 1979,
        country: regions.FRANCE,
        cover: '.jpg',
        criteria: [criteria.LENGTHY_TRACKS, criteria.C_PSYCHE, criteria.C_JAZZ, criteria.C_ELECTRO, criteria.JAZZY_GROOVY],
        selectedTrackTitle: 'Le Cri',
        selectedTrackYtId: 'aMpmbXRIu28',
        spotifyId: null,
        deezerId: null,
        designers: ['Paul Sevehon'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'eskaton_ardeur',
        title: 'Ardeur',
        artist: 'Eskaton',
        year: 1980,
        country: regions.FRANCE,
        cover: '.jpg',
        criteria: [criteria.ODD_RHYTHM, criteria.LENGTHY_TRACKS, criteria.C_PSYCHE, criteria.C_JAZZ, criteria.C_ELECTRO, criteria.JAZZY_GROOVY],
        selectedTrackTitle: 'Eskaton',
        selectedTrackYtId: 'YRrKHFxLRh4',
        spotifyId: null,
        deezerId: null,
        designers: ['Stephane Dumont'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'et_cetera_et_cetera',
        title: 'Et Cetera',
        artist: 'Et Cetera',
        year: 1976,
        country: regions.FRANCE,
        cover: '.jpg',
        criteria: [criteria.FRENCH, criteria.C_JAZZ, criteria.JAZZY_GROOVY, criteria.C_ELECTRO, criteria.SOPHISTICATED, criteria.FEMALE, criteria.ODD_RHYTHM, criteria.SOFT_SEVENTIES],
        selectedTrackTitle: `L'âge Dort`,
        selectedTrackYtId: 'wtIpGZ0lwZI',
        spotifyId: null,
        deezerId: '7355877',
        designers: ['Stephane Dumont'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'ex_vitae_mandarine',
        title: 'Mandarine',
        artist: 'Ex Vitae',
        year: 1978,
        country: regions.FRANCE,
        cover: '.jpg',
        criteria: [criteria.ODD_RHYTHM, criteria.LENGTHY_TRACKS, criteria.JAZZ, criteria.SOPHISTICATED, criteria.UNCOMMON_INSTRUMENTS, criteria.FRENCH, criteria.C_PSYCHE, criteria.JAZZY_GROOVY, criteria.INSTRUMENTAL],
        selectedTrackTitle: 'Saxophonie',
        selectedTrackYtId: 'qZGjbv8k3Os',
        spotifyId: '61x86KuqdUWOIQrgD4bQ7m',
        deezerId: '67970622',
        designers: ['Jacques Pineau', 'Jean Lars'],
        similarAlbums: [],
        isAGem: false,
    },
]

export default albums