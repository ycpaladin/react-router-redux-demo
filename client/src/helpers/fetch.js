import fetch from 'isomorphic-fetch';

export function get(url, params) {
    return fetch(url);
}

export function post(url, data) {
    return fetch(url, {
        method: 'POST',
        headers: {
            // "Content-Type": "application/x-www-form-urlencoded",
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });
}