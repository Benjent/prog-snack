import regions from './regions'
import { criteria } from './criteria'
import albumsA from './albums/A'
import albumsB from './albums/B'
import albumsC from './albums/C'
import albumsD from './albums/D'
import albumsE from './albums/E'
import albumsF from './albums/F'
import albumsG from './albums/G'
import albumsH from './albums/H'
import albumsI from './albums/I'
import albumsJ from './albums/J'
import albumsK from './albums/K'
import albumsL from './albums/L'
import albumsM from './albums/M'
import albumsN from './albums/N'
import albumsO from './albums/O'
import albumsP from './albums/P'
import albumsQ from './albums/Q'
import albumsR from './albums/R'
import albumsS from './albums/S'
import albumsT from './albums/T'
import albumsU from './albums/U'
import albumsV from './albums/V'
import albumsW from './albums/W'
import albumsX from './albums/X'
import albumsY from './albums/Y'
import albumsZ from './albums/Z'
import albums0 from './albums/0'

const albums = [].concat(
    albumsA,
    albumsB,
    albumsC,
    albumsD,
    albumsE,
    albumsF,
    albumsG,
    albumsH,
    albumsI,
    albumsJ,
    albumsK,
    albumsL,
    albumsM,
    albumsN,
    albumsO,
    albumsP,
    albumsQ,
    albumsR,
    albumsS,
    albumsT,
    albumsU,
    albumsV,
    albumsW,
    albumsX,
    albumsY,
    albumsZ,
    albums0,
)

// Below is the list of prog artists that I listened and should be part of this project
// TODO fill some discographies of artists that are already here:
/*  
    Can
    Malicorne
    Premiata Forneria Marconi
    Ralph Lundsten
    Soft Machine
    Triumvirat
    Loggins & Messina pas mal de jam en mode prog + uncommon instrum?
*/

// TODO consider adding criteria:
/*
    prog-core <-- This could be a special attribute actually || in Main genre otherwise
    bluesy
    large asset of instruments
*/

// TODO below is list of things to do:
/*
    parse tout le Prog introuvable et renseigner ici
    DB API : JSON file for albums should be another github app: https://testfairy.com/blog/utilize-github-pages-as-json-api/ + https://towardsdatascience.com/using-github-pages-for-creating-global-api-76b296c4b3b5
    deezer/spotify/discogs should be API + search with title + artist instead of manual ids
    iframes deezer/spotify should be displayed just like in-fb messenger conv, and should be toggleable (so you can listen throughout the app while browsing)
    subgenres should be specified in the album db not manually + a WHOLE NEW WAY to order albums by what I feel (titus groan, fuzzy duck, warhorse and froggie beaver will be in the same group)
    filter by year (range avec input min + max)
    lister instruments
    similar albums should be a standalone logic that generates arrays for both albums
*/

export default albums
