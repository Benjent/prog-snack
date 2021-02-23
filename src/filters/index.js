import Vue from 'vue';
import { criteria } from '../db/criteria.js';

Vue.filter('criterium', (value) => {
    const mapper = {
		[criteria.AMBIENT]: 'Ambient',
		[criteria.ARENA]: 'Arena',
		[criteria.ART_POP]: 'Art Pop',
		[criteria.BAROQUE]: 'Baroque vibes',
		[criteria.BLENDS]: 'Blends many music genres',
		[criteria.C_ELECTRO]: 'Contains electronic elements',
		[criteria.C_FOLK]: 'Contains Folk elements',
		[criteria.C_JAZZ]: 'Contains Jazz elements',
		[criteria.C_PSYCHE]: 'Contains psychedelic elements',
		[criteria.CONCEPT]: 'Concept album',
		[criteria.CRISPY_SIXTIES]: 'Crispy 60s sound',
		[criteria.CROATIAN]: 'Croatian sung',
		[criteria.ELECTRO]: 'Electro-based with a Prog touch',
		[criteria.EXPERIMENTAL]: 'Experimental',
		[criteria.FANFARE]: 'Fanfare',
		[criteria.FANTASY]: 'Fantasy-influenced',
		[criteria.FEMALE]: 'Female vocals or backing vocals',
		[criteria.FOLK]: 'Folk-based with a Prog touch',
		[criteria.FRENCH]: 'French sung',
		[criteria.FUNNY]: 'Funny',
		[criteria.GERMAN]: 'German sung',
		[criteria.GLITTER]: 'Glittering',
		[criteria.GREASY_SEVENTIES]: 'Greasy early 70s sound',
		[criteria.HEAVY]: 'Rather heavy',
		[criteria.HUMBLE]: 'Humble',
		[criteria.IGBO]: 'Igbo sung',
		[criteria.INSTRUMENTAL]: 'Mainly instrumental',
		[criteria.ITALIAN]: 'Italian sung',
		[criteria.JAM]: 'Jam-oriented',
		[criteria.JAZZ]: 'Jazz-based with a Prog touch',
		[criteria.JAZZY_GROOVY]: 'Jazzy groovy',
		[criteria.LATINO]: 'Latino',
		[criteria.LENGTHY_TRACKS]: 'Lengthy tracks',
		[criteria.LIVE]: 'Live',
		[criteria.MEDIEVAL]: 'Medieval-influenced',
		[criteria.NEO_EIGHTIES]: 'Neo 80s sound',
		[criteria.OCCULT]: 'Occult',
		[criteria.ODD_RHYTHM]: 'Odd rhythm signatures',
		[criteria.ORCHESTRAL_PARTS]: 'Orchestral parts',
		[criteria.ORIENTAL]: 'Oriental',
		[criteria.PATCHWORK]: 'Patchwork of tracks',
		[criteria.PIANO]: 'Piano driven',
		[criteria.RENAISSANCE]: 'Renaissance',
		[criteria.ROCK]: 'Rock-based with a Prog touch',
		[criteria.ROCK_OPERA]: 'Rock opera',
		[criteria.SCI_FI]: 'Sci-fi-influenced',
		[criteria.SOCIOPOLITICAL]: 'Sociopolitical',
		[criteria.SOFT]: 'Rather soft',
		[criteria.SOFT_SEVENTIES]: 'Soft late 70s sound',
		[criteria.SOPHISTICATED]: 'Sophisticated',
		[criteria.SOUND_COLLAGES]: 'Uses sound collages',
		[criteria.SOUNDTRACK]: 'Soundtrack album',
		[criteria.SPACY]: 'Spacy',
		[criteria.SPANISH]: 'Spanish sung',
		[criteria.SPECTACULAR]: 'Spectacular',
		[criteria.SPIRITUAL]: 'Spiritual',
		[criteria.STORYLINE]: 'Storyline',
		[criteria.SWEDISH]: 'Swedish sung',
		[criteria.SYMPHONIC]: 'Symphonic',
		[criteria.TECHNICAL]: 'Technical',
		[criteria.TOUCHING_VOCALS]: 'Touching vocals',
		[criteria.TRANSITION]: 'Tracks have transitions',
		[criteria.UNCOMMON_INSTRUMENTS]: 'Uncommon instruments',
		[criteria.ZEUHL]: 'Zeuhl',
    }
    if (!mapper[value]) {
        console.error('Unable to find criteria with value: ', value)
    }
    return mapper[value]
})
