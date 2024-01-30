/**
 * Get the YouTube video URL of a track.
 * @param {string} trackId - The YouTube video ID of the track.
 * @return {string} The URL of the YouTube video.
 */
const getYouTubeUrl = (trackId) => trackId && `https://www.youtube.com/watch?v=${trackId}`

/**
 * Get the Deezer URL of an album.
 * @param {string} albumId - The Deezer ID of the album.
 * @return {string} The URL of the Deezer album.
 */
const getDeezerUrl = (albumId) =>
    albumId && `https://widget.deezer.com/widget/dark/album/${albumId}`

/**
 * Get the Spotify URL of an album.
 * @param {string} albumId - The Spotify ID of the album.
 * @return {string} The URL of the Spotify album.
 */
const getSpotifyUrl = (albumId) => albumId && `https://open.spotify.com/embed/album/${albumId}`

export { getDeezerUrl, getSpotifyUrl, getYouTubeUrl }
