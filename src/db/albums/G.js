import regions from '../regions'
import { criteria } from '../criteria'

const albums = [
    // TODO Gäa - 1973 -  Auf Der Bahn Zum Uranus
    // germansung
    {
        id: 'gash_a_young_mans_gash',
        title: `A Young Man's Gash`,
        artist: 'Gash',
        year: 1972,
        country: regions.GERMANY,
        cover: '.jpg',
        criteria: [criteria.SOFT, criteria.SYMPHONIC, criteria.ORCHESTRAL_PARTS, criteria.C_PSYCHE, criteria.JAM, criteria.GREASY_SEVENTIES, criteria.BLUESY],
        selectedTrackTitle: `A Young Man's Gash (Part I)`,
        selectedTrackYtId: 'NeJuSS-I9ao',
        spotifyId: null,
        deezerId: null,
        designers: ['Patrick Von Spreckelsen'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'gaulois_asterix_inochi',
        title: `Inochi`,
        artist: 'Gaulois Asterix',
        year: 1970,
        country: regions.JAPAN,
        cover: '.jpg',
        criteria: [criteria.C_PSYCHE, criteria.LENGTHY_TRACKS, criteria.EXPERIMENTAL, criteria.FRENCH, criteria.FEMALE, criteria.JAM],
        selectedTrackTitle: `Acid Agitation`,
        selectedTrackYtId: null,
        spotifyId: null,
        deezerId: null,
        designers: [],
        similarAlbums: [], // TODO cromagnon
        isAGem: false,
    },
    {
        id: 'genesis_from_genesis_to_revelation',
        title: 'From Genesis To Revelation',
        artist: 'Genesis',
        year: 1969,
        country: regions.ENGLAND,
        cover: '.jpg',
        criteria: [criteria.CONCEPT, criteria.TRANSITION, criteria.SOFT, criteria.UNCOMMON_INSTRUMENTS],
        selectedTrackTitle: 'The Serpent',
        selectedTrackYtId: '_lUJ9f0B3jo',
        spotifyId: '525nWIZPd0L525Jo7EljVB',
        deezerId: '77067432',
        designers: [],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'genesis_trespass',
        title: 'Trespass',
        artist: 'Genesis',
        year: 1970,
        country: regions.ENGLAND,
        cover: '.jpg',
        criteria: [criteria.ODD_RHYTHM, criteria.SYMPHONIC, criteria.SPECTACULAR, criteria.ROCK_OPERA, criteria.TOUCHING_VOCALS],
        selectedTrackTitle: 'Dusk',
        selectedTrackYtId: 'R8fq7djQAnQ',
        spotifyId: '0mKr6PDMuhTEWatlw5a4hl',
        deezerId: '302651',
        designers: ['Paul Whitehead'],
        similarAlbums: [],
        isAGem: true,
        description: `A cold mood surrounds the music with a few happy fantasy moments. Peter Gabriel's theatrical vocals fit the sophisticated sections of Anthony Phillips's and Michael Rutherford's folk guitars as well as Anthony Banks's and John Mayhew's unleashed symphonic keyboards and drums. A lot of thoughts have been given to render the calm moments a little bit sweet but distant.`
    },
    {
        id: 'genesis_nursery_cryme',
        title: 'Nursery Cryme',
        artist: 'Genesis',
        year: 1971,
        country: regions.ENGLAND,
        cover: '.jpg',
        criteria: [criteria.ODD_RHYTHM, criteria.SYMPHONIC, criteria.SPECTACULAR, criteria.ROCK_OPERA, criteria.TOUCHING_VOCALS],
        selectedTrackTitle: 'Harold The Barrel',
        selectedTrackYtId: 'qT7k7keej0k',
        spotifyId: '6hCrozhHxZ2kKQwc1qTPIB',
        deezerId: '302652',
        designers: ['Paul Whitehead'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'genesis_foxtrot',
        title: 'Foxtrot',
        artist: 'Genesis',
        year: 1972,
        country: regions.ENGLAND,
        cover: '.jpg',
        criteria: [criteria.ODD_RHYTHM, criteria.LENGTHY_TRACKS, criteria.SYMPHONIC, criteria.SPECTACULAR, criteria.ROCK_OPERA, criteria.TOUCHING_VOCALS],
        selectedTrackTitle: `Get 'Em Out By Friday`,
        selectedTrackYtId: 'Kp-TwWnn0dk',
        spotifyId: '1P9AuGH530Oy9JEW5XVuxo',
        deezerId: '302653',
        designers: ['Paul Whitehead'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'genesis_selling_england_by_the_pound',
        title: 'Selling England By The Pound',
        artist: 'Genesis',
        year: 1973,
        country: regions.ENGLAND,
        cover: '.jpg',
        criteria: [criteria.ODD_RHYTHM, criteria.LENGTHY_TRACKS, criteria.SYMPHONIC, criteria.SPECTACULAR, criteria.ROCK_OPERA, criteria.TOUCHING_VOCALS],
        selectedTrackTitle: 'Firth Of Fifth',
        selectedTrackYtId: 'SD5engyVXe0',
        spotifyId: '2tSRe2rkdJvZWMOIZpu6lk',
        deezerId: '302654',
        designers: ['Betty Swanwick'],
        similarAlbums: [],
        isAGem: true,
        description: `TODO description`,
    },
    {
        id: 'genesis_the_lamb_lies_down_on_broadway',
        title: 'The Lamb Lies Down On Broadway',
        artist: 'Genesis',
        year: 1974,
        country: regions.ENGLAND,
        cover: '.jpg',
        criteria: [criteria.CONCEPT, criteria.TRANSITION, criteria.ROCK_OPERA, criteria.TOUCHING_VOCALS],
        selectedTrackTitle: 'Fly On A Windshield',
        selectedTrackYtId: 'k9X2QtzCvBQ',
        spotifyId: '6kuKRIu6YGYxQLwasTL3Gx',
        deezerId: '69990532',
        designers: ['Hipgnosis', 'George Hardie'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'genesis_a_trick_of_the_tail',
        title: 'A Trick Of The Tail',
        artist: 'Genesis',
        year: 1976,
        country: regions.ENGLAND,
        cover: '.jpg',
        criteria: [criteria.TOUCHING_VOCALS, criteria.ART_POP, criteria.SOFT_SEVENTIES],
        selectedTrackTitle: 'Mad Mad Moon',
        selectedTrackYtId: 'IQ_U4XkAarE',
        spotifyId: '6gzQHMfNleYdrw5PDkLxBv',
        deezerId: '300488',
        designers: ['Hipgnosis', 'Colin Elgie'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'genesis_wind_and_wuthering',
        title: 'Wind & Wuthering',
        artist: 'Genesis',
        year: 1976,
        country: regions.ENGLAND,
        cover: '.jpg',
        criteria: [criteria.TOUCHING_VOCALS, criteria.ART_POP, criteria.SOFT_SEVENTIES],
        selectedTrackTitle: 'Blood On The Rooftops',
        selectedTrackYtId: 'EeZRdd_1b4g',
        spotifyId: '4CgleVVe43iVPsmWh7Mydo',
        deezerId: '300490',
        designers: ['Hipgnosis', 'Colin Elgie'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'genesis_and_then_there_were_three',
        title: 'And Thene There Were Three',
        artist: 'Genesis',
        year: 1978,
        country: regions.ENGLAND,
        cover: '.jpg',
        criteria: [criteria.TOUCHING_VOCALS, criteria.ODD_RHYTHM, criteria.C_ELECTRO],
        selectedTrackTitle: 'Down And Out',
        selectedTrackYtId: '5U2nTJ4huxA',
        spotifyId: '0lTuVJuCbD3FHEjIeQqyXg',
        deezerId: '300489',
        designers: ['Hipgnosis'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'genesis_duke',
        title: 'Duke',
        artist: 'Genesis',
        year: 1980,
        country: regions.ENGLAND,
        cover: '.jpg',
        criteria: [criteria.TOUCHING_VOCALS, criteria.TRANSITION, criteria.C_ELECTRO, criteria.SPECTACULAR, criteria.ARENA],
        selectedTrackTitle: `Duke's Travels`,
        selectedTrackYtId: 'B4YJRM7kFzE',
        spotifyId: '7ryVZ5ca6GM3FAkmlrymgv',
        deezerId: '300486',
        designers: ['Lionel Koechlin'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'genesis_abacab',
        title: 'Abacab',
        artist: 'Genesis',
        year: 1981,
        country: regions.ENGLAND,
        cover: '.jpg',
        criteria: [criteria.ART_POP, criteria.C_ELECTRO, criteria.SPECTACULAR, criteria.ARENA, criteria.NEO_EIGHTIES],
        selectedTrackTitle: `Dodo / Lurker`,
        selectedTrackYtId: 'LXgSIJjW-DI',
        spotifyId: '3ISa2uikrj9EiTRrWdgs5b',
        deezerId: '300487',
        designers: ['Bill Smith'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'genesis_genesis',
        title: 'Genesis',
        artist: 'Genesis',
        year: 1983,
        country: regions.ENGLAND,
        cover: '.jpg',
        criteria: [criteria.ART_POP, criteria.C_ELECTRO, criteria.TOUCHING_VOCALS, criteria.NEO_EIGHTIES],
        selectedTrackTitle: `Second Home By The Sea`,
        selectedTrackYtId: 'UKlIGh1-spk',
        spotifyId: '2u0T1xzCoI7ANxWDEj9yl6',
        deezerId: '303936',
        designers: ['Bill Smith'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'genesis_invisible_touch',
        title: 'Invisible Touch',
        artist: 'Genesis',
        year: 1986,
        country: regions.ENGLAND,
        cover: '.jpg',
        criteria: [criteria.ART_POP, criteria.C_ELECTRO, criteria.ARENA, criteria.NEO_EIGHTIES],
        selectedTrackTitle: `Domino`,
        selectedTrackYtId: 'hPYaEplq7KQ',
        spotifyId: '5BDGtXKMQ6k267KX4PoGhP',
        deezerId: '302792',
        designers: ['Baker Dave'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'genesis_we_cant_dance',
        title: `We Can't Dance`,
        artist: 'Genesis',
        year: 1991,
        country: regions.ENGLAND,
        cover: '.jpg',
        criteria: [criteria.ART_POP, criteria.C_ELECTRO, criteria.ARENA, criteria.NEO_EIGHTIES],
        selectedTrackTitle: `Driving The Last Spike`,
        selectedTrackYtId: 'vHGqGmzzQaY',
        spotifyId: '2WFkJi4USarY1qe3yjifjG',
        deezerId: '302794',
        designers: ['David Scheinmann', 'Felicity Roma Bowers'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'gentle_giant_gentle_giant',
        title: 'Gentle Giant',
        artist: 'Gentle Giant',
        year: 1970,
        country: regions.ENGLAND,
        cover: '.jpg',
        criteria: [criteria.ODD_RHYTHM, criteria.C_PSYCHE, criteria.C_JAZZ, criteria.C_FOLK, criteria.SOPHISTICATED],
        selectedTrackTitle: 'Nothing At All',
        selectedTrackYtId: 'XIlG0TmxzTs',
        spotifyId: '74Ocu3SLMQ1SD9uGAR8dVe',
        deezerId: '122364',
        designers: ['George Underwood'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'gentle_giant_acquiring_the_taste',
        title: 'Acquiring The Taste',
        artist: 'Gentle Giant',
        year: 1971,
        country: regions.ENGLAND,
        cover: '.jpg',
        criteria: [criteria.ODD_RHYTHM, criteria.C_PSYCHE, criteria.C_JAZZ, criteria.C_FOLK, criteria.SOPHISTICATED],
        selectedTrackTitle: `Pantagruel's Nativity`,
        selectedTrackYtId: 'ODWYJyJh6cg',
        spotifyId: '7sMpdqLgCDDGMx7NE3rf3o',
        deezerId: '67414822',
        designers: [],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'gentle_giant_three_friends',
        title: 'Three Friends',
        artist: 'Gentle Giant',
        year: 1972,
        country: regions.ENGLAND,
        cover: '.jpg',
        criteria: [criteria.CONCEPT, criteria.ODD_RHYTHM, criteria.C_JAZZ, criteria.C_FOLK, criteria.SOPHISTICATED],
        selectedTrackTitle: 'Peel The Paint',
        selectedTrackYtId: 'SIl5RCLNy1E',
        spotifyId: '4wJZXbfVqi4q4NntTUEz9o',
        deezerId: '977181',
        designers: ['Rick Breach'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'gentle_giant_octopus',
        title: 'Octopus',
        artist: 'Gentle Giant',
        year: 1972,
        country: regions.ENGLAND,
        cover: '.jpg',
        criteria: [criteria.ODD_RHYTHM, criteria.C_JAZZ, criteria.C_FOLK, criteria.SOPHISTICATED, criteria.UNCOMMON_INSTRUMENTS],
        selectedTrackTitle: 'The Boys In The Band',
        selectedTrackYtId: 'BTet3C_afKA',
        spotifyId: '3zrWDaBwnrobMeSdMmUham',
        deezerId: '288051',
        designers: ['Roger Dean'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'gentle_giant_in_a_glass_house',
        title: 'In A Glass House',
        artist: 'Gentle Giant',
        year: 1973,
        country: regions.ENGLAND,
        cover: '.jpg',
        criteria: [criteria.ODD_RHYTHM, criteria.C_JAZZ, criteria.C_FOLK, criteria.SOPHISTICATED],
        selectedTrackTitle: 'In A Glass House',
        selectedTrackYtId: 'cgUpLcnLkxs',
        spotifyId: '3XIbbhpEsyqlxggk7qJNcH',
        deezerId: '14932907',
        designers: [],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'gentle_giant_the_power_and_the_glory',
        title: 'The Power And The Glory',
        artist: 'Gentle Giant',
        year: 1974,
        country: regions.ENGLAND,
        cover: '.jpg',
        criteria: [criteria.CONCEPT, criteria.ODD_RHYTHM, criteria.C_JAZZ, criteria.C_FOLK, criteria.SOPHISTICATED],
        selectedTrackTitle: 'Aspirations',
        selectedTrackYtId: 'd8tpBYUIvTk',
        spotifyId: '29OQeJSa3kVeo4E8HLb4Az',
        deezerId: '14932909',
        designers: ['Cream'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'gentle_giant_free_hand',
        title: 'Free Hand',
        artist: 'Gentle Giant',
        year: 1975,
        country: regions.ENGLAND,
        cover: '.jpg',
        criteria: [criteria.ODD_RHYTHM, criteria.C_JAZZ, criteria.C_FOLK, criteria.SOPHISTICATED],
        selectedTrackTitle: 'His Last Voyage',
        selectedTrackYtId: 'hqyTDtgSmm4',
        spotifyId: '0q8Qt2dk9NL0F35BmrImUA',
        deezerId: '13797242',
        designers: ['Richard Evans'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'george_harrison_wonderwall_music',
        title: 'Wonderwall Music',
        artist: 'George Harrisson',
        year: 1968,
        country: regions.ENGLAND,
        cover: '.jpg',
        criteria: [criteria.SOUNDTRACK, criteria.UNCOMMON_INSTRUMENTS, criteria.ORIENTAL, criteria.PATCHWORK, criteria.INSTRUMENTAL, criteria.HINDI, criteria.SOUND_COLLAGES, criteria.C_PSYCHE],
        selectedTrackTitle: 'Dream Scene',
        selectedTrackYtId: '779ZlgO9low',
        spotifyId: '5cH3fpk7okaczpozIjz5WN',
        deezerId: '8549007',
        designers: ['Bob Gill', 'John Kelly', 'Alan Aldridge'],
        similarAlbums: ['yatha_sidhra_a_meditation_mass'],
        isAGem: false,
    },
    {
        id: 'george_harrison_electronic_sound',
        title: 'Electronic Sound',
        artist: 'George Harrisson',
        year: 1969,
        country: regions.ENGLAND,
        cover: '.jpg',
        criteria: [criteria.ELECTRO, criteria.LENGTHY_TRACKS, criteria.EXPERIMENTAL, criteria.INSTRUMENTAL],
        selectedTrackTitle: 'Under The Mersey Wall',
        selectedTrackYtId: 'tfeidh8PQU4',
        spotifyId: '7IeUQakpsbd90SezOi5M5X',
        deezerId: '8549029',
        designers: ['George Harrisson'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'georges_moustaki_and_flairck',
        title: 'Moustaki & Flairck',
        artist: 'George Moustaki & Flairck',
        year: 1982,
        country: regions.FRANCE,
        cover: '.jpg',
        criteria: [criteria.FOLK, criteria.C_JAZZ, criteria.SOFT, criteria.FRENCH, criteria.UNCOMMON_INSTRUMENTS, criteria.BAROQUE, criteria.TRANSITION, criteria.ODD_RHYTHM, criteria.ORIENTAL],
        selectedTrackTitle: 'Ma Nouvelle Aventure',
        selectedTrackYtId: null,
        spotifyId: null,
        deezerId: null,
        designers: ['Poen De Wijs'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'george_duke_faces_in_reflection',
        title: 'Faces In Reflection',
        artist: 'George Duke',
        year: 1974,
        country: regions.USA,
        cover: '.jpg',
        criteria: [criteria.JAZZ, criteria.JAM, criteria.SOFT, criteria.JAZZY_GROOVY, criteria.C_ELECTRO, criteria.INSTRUMENTAL, criteria.ODD_RHYTHM, criteria.UNCOMMON_INSTRUMENTS],
        selectedTrackTitle: 'Psychosomatic Dung',
        selectedTrackYtId: 'j5eJUEayLWY',
        spotifyId: '27LrzDfCpvyhJw63OQz9cw',
        deezerId: '1672523',
        designers: ['Heinz Bähr'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'george_duke_feel',
        title: 'Feel',
        artist: 'George Duke',
        year: 1974,
        country: regions.USA,
        cover: '.jpg',
        criteria: [criteria.JAZZ, criteria.JAM, criteria.SOFT, criteria.JAZZY_GROOVY, criteria.C_ELECTRO, criteria.INSTRUMENTAL, criteria.ODD_RHYTHM],
        selectedTrackTitle: 'The Once Over',
        selectedTrackYtId: 'DGZMACbTj5g',
        spotifyId: '1QhnNI715XeCP0jdXcAatN',
        deezerId: '1672135',
        designers: ['Sätty'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'george_duke_the_aura_will_prevail',
        title: 'The Aura Will Prevail',
        artist: 'George Duke',
        year: 1975,
        country: regions.USA,
        cover: '.jpg',
        criteria: [criteria.JAZZ, criteria.JAM, criteria.SOFT, criteria.JAZZY_GROOVY, criteria.C_ELECTRO, criteria.ODD_RHYTHM],
        selectedTrackTitle: 'For Love',
        selectedTrackYtId: 'dk_RfQmV1Zg',
        spotifyId: '3eh1IRX651996u3aAJX9xU',
        deezerId: '10298722',
        designers: ['Sätty'],
        similarAlbums: [],
        isAGem: false,
    },
    // TODO Ginger Baker - Stratavarious - 
    // afrobeat, c_jazz, igbo, jam, odd, femle
    // track is Tiwa
    {
        id: 'gnidrolog_in_spite_of_harrys_toenail',
        title: `In Spite Of Harry's Toenail`,
        artist: 'Gnidrolog',
        year: 1972,
        country: regions.ENGLAND,
        cover: '.jpg',
        criteria: [criteria.ODD_RHYTHM, criteria.C_JAZZ, criteria.C_FOLK],
        selectedTrackTitle: 'Long Live Man Dead',
        selectedTrackYtId: 'N7c00SXMNaQ',
        spotifyId: '5vgx9FXyHl6XzC4ao0gNaS',
        deezerId: '3829681',
        designers: [],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'gnidrolog_lady_lake',
        title: 'Lady Lake',
        artist: 'Gnidrolog',
        year: 1972,
        country: regions.ENGLAND,
        cover: '.jpg',
        criteria: [criteria.C_JAZZ, criteria.C_FOLK],
        selectedTrackTitle: 'Lady Lake',
        selectedTrackYtId: '3LdNEFRkbGk',
        spotifyId: '4BE2lbxqHkUHTA5mlHWnGQ',
        deezerId: '3829661',
        designers: ['Peter Cowling', 'Bruce Pennington'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'goblin_roller',
        title: 'Roller',
        artist: 'Goblin',
        year: 1976,
        country: regions.ITALY,
        cover: '.jpg',
        criteria: [criteria.ODD_RHYTHM, criteria.INSTRUMENTAL, criteria.SYMPHONIC, criteria.SOUNDTRACK],
        selectedTrackTitle: 'Roller',
        selectedTrackYtId: 'X_hHhhE4suU',
        spotifyId: '0f4XuQuCuuL570i4anZtrK',
        deezerId: '1226415',
        designers: ['Gian Franco Marignani'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'gong_camembert_electrique',
        title: 'Camembert Electrique',
        artist: 'Gong',
        year: 1971,
        country: regions.FRANCE,
        cover: '.jpg',
        criteria: [criteria.ODD_RHYTHM, criteria.JAM, criteria.TRANSITION, criteria.C_PSYCHE, criteria.C_JAZZ, criteria.C_ELECTRO, criteria.FUNNY, criteria.JAZZY_GROOVY, criteria.SPACY, criteria.GREASY_SEVENTIES, criteria.FEMALE],
        selectedTrackTitle: 'Fohat Digs Holes In Space',
        selectedTrackYtId: 'Pk1jsxcXWqE',
        spotifyId: '0QWmqw8ui1akXCQmfUplsf',
        deezerId: '9844450',
        designers: ['Dingo Virgin'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'gong_flying_teapot',
        title: 'Flying Teapot',
        artist: 'Gong',
        year: 1973,
        country: regions.FRANCE,
        cover: '.jpg',
        criteria: [criteria.STORYLINE, criteria.ODD_RHYTHM, criteria.JAM, criteria.TRANSITION, criteria.C_PSYCHE, criteria.C_JAZZ, criteria.C_ELECTRO, criteria.FUNNY, criteria.JAZZY_GROOVY, criteria.SPACY, criteria.GREASY_SEVENTIES, criteria.FEMALE],
        selectedTrackTitle: 'Flying Teapot',
        selectedTrackYtId: 'SIgzP4Rj0Ns',
        spotifyId: '47tuhYAVX2ELCONy10VOLX',
        deezerId: '129262',
        designers: ['Dingo Virgin', 'Maggie Thomas', 'Tom Fu'],
        similarAlbums: [],
        isAGem: true,
        description: `TODO description`,
    },
    {
        id: 'gong_angels_egg',
        title: 'Angels Egg',
        artist: 'Gong',
        year: 1973,
        country: regions.FRANCE,
        cover: '.jpg',
        criteria: [criteria.STORYLINE, criteria.ODD_RHYTHM, criteria.TRANSITION, criteria.C_PSYCHE, criteria.C_ELECTRO, criteria.PATCHWORK, criteria.SPACY, criteria.FEMALE],
        selectedTrackTitle: 'Oily Way',
        selectedTrackYtId: 'xZWW1ClYxYo',
        spotifyId: '2w9jcoFYXE4MQPHc0iiRIj',
        deezerId: '329558',
        designers: [],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'gong_you',
        title: 'You',
        artist: 'Gong',
        year: 1974,
        country: regions.FRANCE,
        cover: '.jpg',
        criteria: [criteria.STORYLINE, criteria.TRANSITION, criteria.UNCOMMON_INSTRUMENTS, criteria.C_PSYCHE, criteria.C_JAZZ, criteria.C_ELECTRO, criteria.JAZZY_GROOVY, criteria.SPACY, criteria.FEMALE],
        selectedTrackTitle: 'Master Builder',
        selectedTrackYtId: 'CKfTKNp_yUI',
        spotifyId: '6hAIjAPceH3bu3kHEijTRZ',
        deezerId: '302280',
        designers: ['Barved Zumizion', 'Brigitte Moonweed', 'Tim Moonweed'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'gong_shamal',
        title: 'Shamal',
        artist: 'Gong',
        year: 1975,
        country: regions.FRANCE,
        cover: '.jpg',
        criteria: [criteria.ODD_RHYTHM, criteria.INSTRUMENTAL, criteria.SOFT, criteria.UNCOMMON_INSTRUMENTS, criteria.JAZZ, criteria.JAZZY_GROOVY, criteria.SOFT_SEVENTIES, criteria.FEMALE],
        selectedTrackTitle: 'Mandrake',
        selectedTrackYtId: 'Ks9YscGny8g',
        spotifyId: '6toBULpdqeeFe2bbmkvY8o',
        deezerId: '329493',
        designers: ['Clive Arrowsmith'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'gong_gazeuse',
        title: 'Gazeuse !',
        artist: 'Gong',
        year: 1976,
        country: regions.FRANCE,
        cover: '.jpg',
        criteria: [criteria.ODD_RHYTHM, criteria.INSTRUMENTAL, criteria.SOFT, criteria.UNCOMMON_INSTRUMENTS, criteria.JAZZ, criteria.JAZZY_GROOVY, criteria.SOFT_SEVENTIES],
        selectedTrackTitle: 'Percolations',
        selectedTrackYtId: 'G0tsWMzmr-c',
        spotifyId: '2TYKRlxGfQWNcVSl5NSRw9',
        deezerId: '329490',
        designers: ['Jacques Moitoret'],
        similarAlbums: [],
        isAGem: true,
        description: `TODO description`,
    },
    {
        id: 'gong_expresso_ii',
        title: 'Expresso II',
        artist: 'Gong',
        year: 1976,
        country: regions.FRANCE,
        cover: '.jpg',
        criteria: [criteria.ODD_RHYTHM, criteria.INSTRUMENTAL, criteria.SOFT, criteria.UNCOMMON_INSTRUMENTS, criteria.JAZZ, criteria.JAZZY_GROOVY, criteria.SOFT_SEVENTIES],
        selectedTrackTitle: 'Golden Dilemma',
        selectedTrackYtId: '59jLXceqQsc',
        spotifyId: '4wHbNpvcRJlpB43r4zAKzA',
        deezerId: '329570',
        designers: ['Splash Studio'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'gracious_gracious',
        title: 'Gracious!',
        artist: 'Gracious!',
        year: 1970,
        country: regions.ENGLAND,
        cover: '.jpg',
        criteria: [criteria.BAROQUE, criteria.FUNNY, criteria.C_PSYCHE, criteria.SYMPHONIC, criteria.JAM, criteria.INSTRUMENTAL, criteria.LENGTHY_TRACKS],
        selectedTrackTitle: 'The Dream',
        selectedTrackYtId: 'Y1Jhmsh8IyA',
        spotifyId: '4TMtiIxpWqxmXoosijUBCH',
        deezerId: '161703',
        designers: ['Teenburger'],
        similarAlbums: ['beggars_opera_act_one', 'the_nice_ars_longa_vita_brevis'],
        isAGem: false,
    },
    {
        id: 'gracious_this_is_gracious',
        title: 'This Is... Gracious!!',
        artist: 'Gracious!',
        year: 1971,
        country: regions.ENGLAND,
        cover: '.jpg',
        criteria: [criteria.SYMPHONIC, criteria.C_PSYCHE, criteria.LENGTHY_TRACKS],
        selectedTrackTitle: 'Super Nova',
        selectedTrackYtId: '2lpYlplNSXQ',
        spotifyId: null,
        deezerId: null,
        designers: ['Roger Dean'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'grateful_dead_anthem_of_the_sun',
        title: 'Anthem Of The Sun',
        artist: 'Grateful Dead',
        year: 1968,
        country: regions.USA,
        cover: '.jpg',
        criteria: [criteria.JAM, criteria.LENGTHY_TRACKS, criteria.C_PSYCHE, criteria.C_FOLK, criteria.ROCK, criteria.JAZZY_GROOVY],
        selectedTrackTitle: 'Alligator',
        selectedTrackYtId: 'eNJTIU8b8Yk',
        spotifyId: '0jtBMVjCxL1CkyrkvtCATH',
        deezerId: '7407478',
        designers: ['Bill Walker'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'grateful_dead_blues_for_allah',
        title: 'Blues For Allah',
        artist: 'Grateful Dead',
        year: 1975,
        country: regions.USA,
        cover: '.jpg',
        criteria: [criteria.JAM, criteria.C_PSYCHE, criteria.C_FOLK, criteria.JAZZY_GROOVY],
        selectedTrackTitle: 'Blues For Allah / Sand Castles And Glass Camels / Unusual Occurrences In The Desert',
        selectedTrackYtId: 'Ss1_Xu7YBrM',
        spotifyId: '5BwjVdVJ4aOmbIYomznfCv',
        deezerId: '7407466',
        designers: ['Philip Garris'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'grateful_dead_terrapin_station',
        title: 'Terrapin Station',
        artist: 'Grateful Dead',
        year: 1977,
        country: regions.USA,
        cover: '.jpg',
        criteria: [criteria.JAM, criteria.LENGTHY_TRACKS, criteria.C_FOLK, criteria.ROCK, criteria.JAZZY_GROOVY, criteria.SOFT_SEVENTIES],
        selectedTrackTitle: 'Terrapin Station',
        selectedTrackYtId: '3I7CLy70WtI',
        spotifyId: '0WVDqz6ty88sjpbfvMqF98',
        deezerId: '7407450',
        designers: ['Alton Kelley', 'Stanley Mouse'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'greenslade_greenslade',
        title: 'Greenslade',
        artist: 'Greenslade',
        year: 1973,
        country: regions.ENGLAND,
        cover: '.jpg',
        criteria: [criteria.SOFT, criteria.JAM, criteria.SYMPHONIC],
        selectedTrackTitle: 'Mélange',
        selectedTrackYtId: 'yukqSJAunPM',
        spotifyId: '2iGn2eFebXjFNoaE3Kopl9',
        deezerId: '52676482',
        designers: ['Roger Dean'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'greenslade_bedside_manners_are_extra',
        title: 'Bedside Manners Are Extra',
        artist: 'Greenslade',
        year: 1973,
        country: regions.ENGLAND,
        cover: '.jpg',
        criteria: [criteria.SOFT, criteria.JAM, criteria.ODD_RHYTHM, criteria.C_PSYCHE],
        selectedTrackTitle: `Pilgrim's Progress`,
        selectedTrackYtId: 'Q_MRYPcoqeA',
        spotifyId: '1B2NQ9QBTNjKprjjxLs4q0',
        deezerId: '52676582',
        designers: ['Roger Dean'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'greenslade_spyglass_guest',
        title: 'Spyglass Guest',
        artist: 'Greenslade',
        year: 1974,
        country: regions.ENGLAND,
        cover: '.jpg',
        criteria: [criteria.SOFT, criteria.JAM, criteria.C_JAZZ, criteria.ODD_RHYTHM],
        selectedTrackTitle: 'Spirit Of The Dance',
        selectedTrackYtId: 'tjBkvZnIrEs',
        spotifyId: '0yIj3ffE7jyh5opZryXvuA',
        deezerId: '53873122',
        designers: ['Marcus Keef'],
        similarAlbums: [],
        isAGem: true,
        description: `TODO description`,
    },
    {
        id: 'greenslade_time_and_tide',
        title: 'Time And Tide',
        artist: 'Greenslade',
        year: 1975,
        country: regions.ENGLAND,
        cover: '.jpg',
        criteria: [criteria.ODD_RHYTHM],
        selectedTrackTitle: 'Tide',
        selectedTrackYtId: 'mChW5w-_-cw',
        spotifyId: '1c1QR2iqANYMrQVwKvF1z7',
        deezerId: '53873262',
        designers: ['Patrick Woodroffe'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'gryphon_gryphon',
        title: 'Gryphon',
        artist: 'Gryphon',
        year: 1973,
        country: regions.ENGLAND,
        cover: '.jpg',
        criteria: [criteria.ODD_RHYTHM, criteria.INSTRUMENTAL, criteria.UNCOMMON_INSTRUMENTS, criteria.C_FOLK, criteria.MEDIEVAL],
        selectedTrackTitle: 'The Unquiet Grave',
        selectedTrackYtId: '69wZpcPtMIo',
        spotifyId: '60ExHcZkZDEgTWJWf0cRnE',
        deezerId: '64644082',
        designers: ['Dan Pearce'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'gryphon_midnight_mushrumps',
        title: 'Midnight Mushrumps',
        artist: 'Gryphon',
        year: 1974,
        country: regions.ENGLAND,
        cover: '.jpg',
        criteria: [criteria.LENGTHY_TRACKS, criteria.UNCOMMON_INSTRUMENTS, criteria.C_FOLK, criteria.MEDIEVAL, criteria.BAROQUE],
        selectedTrackTitle: 'Midnight Mushrumps',
        selectedTrackYtId: 'WsSsTTovsAs',
        spotifyId: '4GRKqxMatxVZqgMTne0UKD',
        deezerId: '64644142',
        designers: ['Ann Sullivan', 'Clive Boursnell'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'gryphon_red_queen_to_gryphon_three',
        title: 'Red Queen To Gryphon Three',
        artist: 'Gryphon',
        year: 1974,
        country: regions.ENGLAND,
        cover: '.jpg',
        criteria: [criteria.CONCEPT, criteria.ODD_RHYTHM, criteria.INSTRUMENTAL, criteria.LENGTHY_TRACKS, criteria.UNCOMMON_INSTRUMENTS, criteria.C_FOLK, criteria.MEDIEVAL, criteria.JAZZY_GROOVY],
        selectedTrackTitle: 'Second Spasm',
        selectedTrackYtId: 'EcBm-GbbEyI',
        spotifyId: '6M33CK8kyv7Fr5c9m2LpZH',
        deezerId: '64643642',
        designers: ['Dan Pearce'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'gryphon_raindance',
        title: 'Raindance',
        artist: 'Gryphon',
        year: 1975,
        country: regions.ENGLAND,
        cover: '.jpg',
        criteria: [criteria.ODD_RHYTHM, criteria.C_ELECTRO, criteria.SOUND_COLLAGES, criteria.C_FOLK, criteria.MEDIEVAL, criteria.LENGTHY_TRACKS, criteria.SYMPHONIC, criteria.UNCOMMON_INSTRUMENTS],
        selectedTrackTitle: 'Heldenleben',
        selectedTrackYtId: 'HVqtexuIbho',
        spotifyId: '7LBbQhDXxruCKSnLLJlyEn',
        deezerId: '64643772',
        designers: ['Tony Wright'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'gryphon_treason',
        title: 'Treason',
        artist: 'Gryphon',
        year: 1977,
        country: regions.ENGLAND,
        cover: '.jpg',
        criteria: [criteria.ODD_RHYTHM, criteria.C_ELECTRO, criteria.SYMPHONIC, criteria.UNCOMMON_INSTRUMENTS],
        selectedTrackTitle: 'Spring Song',
        selectedTrackYtId: 'z5Q5NJrhbT8',
        spotifyId: null,
        deezerId: null,
        designers: ['Pat Elliott Shircore'],
        similarAlbums: [],
        isAGem: false,
    },
    {
        id: 'guns_and_butter_guns_and_butter',
        title: 'Guns & Butter',
        artist: 'Guns & Butter',
        year: 1972,
        country: regions.USA,
        cover: '.jpg',
        criteria: [criteria.JAM, criteria.C_JAZZ, criteria.C_FOLK, criteria.JAZZY_GROOVY],
        selectedTrackTitle: 'The Wanderer',
        selectedTrackYtId: 'EcBm-TXBjM9ts11w',
        spotifyId: null,
        deezerId: null,
        designers: ['James Lienhart'],
        similarAlbums: ['titus_groan_titus_groan'],
        isAGem: false,
    },
]

export default albums