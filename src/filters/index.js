import Vue from 'vue';
import { criteria, categories } from '../db/criteria.js';

Vue.filter('criterium', (value) => {
    const mapper = {
		[criteria.AFROBEAT]: 'Afrobeat',
		[criteria.AMBIENT]: 'Ambient',
		[criteria.ARENA]: 'Arena',
		[criteria.ART_POP]: 'Art Pop',
		[criteria.BAROQUE]: 'Baroque vibes',
		[criteria.BELARUSIAN]: 'Belarusian sung',
		[criteria.BLENDS]: 'Blends many music genres',
        [criteria.BLUESY]: 'Bluesy',
        [criteria.BRETON]: 'Breton sung',
        [criteria.BULGARIAN]: 'Bulgarian sung',
		[criteria.C_ELECTRO]: 'Contains electronic elements',
		[criteria.C_FOLK]: 'Contains Folk elements',
		[criteria.C_JAZZ]: 'Contains Jazz elements',
		[criteria.C_PSYCHE]: 'Contains psychedelic elements',
		[criteria.CELTIC]: 'Celtic',
		[criteria.CONCEPT]: 'Concept album',
		[criteria.CREOLE]: 'Creole sung',
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
		[criteria.GREEK]: 'Greek sung',
		[criteria.HEAVY]: 'Rather heavy',
		[criteria.HEBREW]: 'Hebrew sung',
		[criteria.HINDI]: 'Hindi sung',
		[criteria.HISTORICAL]: 'Historical',
		[criteria.HUMBLE]: 'Humble',
		[criteria.HUNGARIAN]: 'Hungarian sung',
		[criteria.IGBO]: 'Igbo sung',
		[criteria.INSTRUMENTAL]: 'Mainly instrumental',
		[criteria.ITALIAN]: 'Italian sung',
		[criteria.JAM]: 'Jam-oriented',
		[criteria.JAPANESE]: 'Japanese sung',
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
		[criteria.PORTUGUESE]: 'Portuguese sung',
		[criteria.RENAISSANCE]: 'Renaissance',
		[criteria.ROCK]: 'Rock-based with a Prog touch',
		[criteria.ROCK_OPERA]: 'Rock opera',
		[criteria.RUSSIAN]: 'Russian sung',
		[criteria.SANSKRIT]: 'Sanskrit sung',
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
		[criteria.TIBETAN]: 'Tibetan sung',
		[criteria.TOUCHING_VOCALS]: 'Touching vocals',
		[criteria.TRANSITION]: 'Tracks have transitions',
		[criteria.UNCOMMON_INSTRUMENTS]: 'Uncommon instruments',
		[criteria.ZEUHL]: 'Zeuhl',
    }
    if (!mapper[value]) {
        console.error(`Unable to find criteria with value: ${value}`)
    }
    return mapper[value]
})

Vue.filter('criteriumCategory', (value) => {
    const mapper = {
		[categories.ARRANGEMENT]: 'Arrangement',
		[categories.CONTAINS]: 'Contains elements of',
		[categories.ERA]: 'Era sound',
		[categories.GENRE]: 'Main genre',
		[categories.LANGUAGE]: 'Language',
		[categories.LOUDNESS]: 'Loudness',
		[categories.STRUCTURE]: 'Album structuration',
		[categories.STYLE]: 'Style',
		[categories.TEMPER]: 'Temper',
		[categories.THEME]: 'Theme',
		[categories.TYPE]: 'Type',
    }
    if (!mapper[value]) {
        console.error(`Unable to find criteria category with value: ${value}`)
    }
    return mapper[value]
})

export default {}
