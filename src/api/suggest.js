const API = 'https://api.lyrics.ovh';


export function suggest(term) {
    return fetch(`${API}/suggest/${term}`);
}
