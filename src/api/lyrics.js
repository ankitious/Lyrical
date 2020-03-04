const API = 'https://api.lyrics.ovh/v1'

export function lyrics(artist, song) {
    return fetch(`${API}/${artist}/${song}`)
}