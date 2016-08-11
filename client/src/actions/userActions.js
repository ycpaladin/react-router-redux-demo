import actionTypes from '../constants/actionTypes'
import fetch from 'isomorphic-fetch';
const { USER_LIST, USER_ADD, USER_UPDATE, USER_DELETE, LOADING, LOADED} = actionTypes;

export function getUserList() {

    return dispatch => {
        dispatch(loading());
        return fetch('http://localhost:5000/User/GetUserList',
            {
                method: 'GET',
                headers: {
                    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJURVNUIiwianRpIjoiOWRmMjliZDMtNjA2ZS00M2ZkLWIxODQtOTc4N2M1NzZjYTNmIiwiaWF0IjoxNDcwOTA4MzgxLCJuYmYiOjE0NzA5MDgzODEsImV4cCI6MTQ3MDk5NDc4MSwiaXNzIjoiRXhhbXBsZUlzc3VlciIsImF1ZCI6IkV4YW1wbGVBdWRpZW5jZSJ9.VlJWfzqCXclrrFKlQC1101nyKlT8_TOXvOu4yNp-OrY"
                }
            })
            .then(response => response.json())
            .then(json => {
                dispatch(loaded());
                dispatch({ type: USER_LIST, list: json });
            });
    }
}


export function addUser(user) {
    return dispatch => {
        dispatch(loading());

        //var data = new FormData();
        //data.append('json', JSON.stringify(user));
        return fetch('http://localhost:5000/User/AddUser', {
            method: 'POST',
            headers: {
                Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJURVNUIiwianRpIjoiOWRmMjliZDMtNjA2ZS00M2ZkLWIxODQtOTc4N2M1NzZjYTNmIiwiaWF0IjoxNDcwOTA4MzgxLCJuYmYiOjE0NzA5MDgzODEsImV4cCI6MTQ3MDk5NDc4MSwiaXNzIjoiRXhhbXBsZUlzc3VlciIsImF1ZCI6IkV4YW1wbGVBdWRpZW5jZSJ9.VlJWfzqCXclrrFKlQC1101nyKlT8_TOXvOu4yNp-OrY",
                'Content-Type': "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(user)
        }).then(response => response.json())
            .then(json => {
                if (json.scuess) {
                    dispatch(loaded());
                    dispatch({
                        type: USER_ADD,
                        value: json
                    });
                } else {

                }
            });
    }
}

function loading() {
    return {
        type: LOADING
    }

}

function loaded() {
    return {
        type: LOADED
    }
}