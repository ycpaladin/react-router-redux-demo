import actionTypes from '../constants/actionTypes'
import fetch from 'isomorphic-fetch';
const { USER_LIST, USER_ADD, USER_UPDATE, USER_DELETE, LOADING, LOADED} = actionTypes;

export function getUserList() {

    return dispatch => {
        dispatch(loading());
        return fetch('http://localhost:5000/User/GetUserList')
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
                "Content-Type": "application/json",
                "Accept": "application/json"
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