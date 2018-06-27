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

export async function getMarkers(rsc, params) {
    return fetch(`${config.api}/${rsc}?city=${params.city}&activity=${params.activity}&level=${params.level}`, {
        headers,
        method: 'GET',
    })
        .then((response) => response.json())
        .then(res => res);
}
