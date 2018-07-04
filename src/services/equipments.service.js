import config from '../config';

const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
};

export async function get(rsc) {
    return fetch(`${config.api}/${rsc}`, {
        headers,
        method: 'GET',
    })
        .then((response) => response.json())
        .then(res => res);
}

export async function createMarker(data) {
    return fetch(`${config.api}/gymnasium`, {
        headers,
        method: 'POST',
        body: JSON.stringify(data)
    })
        .then(res => res);
}

export async function getMarkers(rsc, params) {
    let filter = "";
    if(params.city !== null) filter += "city=" + params.city + "&";
    if(params.activity !== null) filter += "activity=" + params.activity + "&";
    if(params.level !== null) filter += "level=" + params.level;

    return fetch(`${config.api}/${rsc}?${filter}`, {
        headers,
        method: 'GET',
    })
        .then((response) => response.json())
        .then(res => res);
}
