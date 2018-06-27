import config from '../config';

const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
};

export async function get(rsc, params) {

    return fetch(`${config.api}/${rsc}${"?city=Bréval&activity=Tennis&level=Scolaire"}`, {
        headers,
        method: 'GET',
    })
        .then((response) => response.json())
        .then(res => res);
}

