import actionTypes from '../constants/actionTypes'
// import fetch from 'isomorphic-fetch';
const { USER_LIST, USER_ADD, USER_UPDATE, USER_DELETE, LOADING, LOADED} = actionTypes;

import {get, post} from '../helpers/fetch';

export function getUserList() {

    return dispatch => {
        dispatch(loading());
        return get('http://localhost:5000/User/GetUserList')
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

        return post('http://localhost:5000/User/AddUser', user).then(response => response.json())
            .then(json => {
                dispatch(loaded());
                dispatch({ type: USER_ADD, list: json });
            })
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