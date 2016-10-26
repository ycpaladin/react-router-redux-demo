import actionTypes from '../constants/actionTypes'
import fetch from 'isomorphic-fetch';
// const= actionTypes;
let {
    USER_LIST,
    USER_ADD_SUCESS,
    USER_ADD_FAIL,
    USER_NOT_EXISTS,
    USER_UPDATE_SUCESS,
    USER_UPDATE_FAIL,
    USER_LOADING,
    USER_LOADED,
    USER_DELETE_FAIL,
    USER_DELETE_SUCESS,
    GET_USER_BY_ID
} = actionTypes;

// console.log(actionTypes);
let list = [{
    id: 1,
    name: 'kevin',
    age: 30
}]


export function getUserList() {
    return dispatch => {
        dispatch(loading());
        setTimeout(() => {
            dispatch({ type: USER_LIST, result: list });
        }, 200);
    }
}


export function addUser(user) {
    return dispatch => {
        dispatch(loading());
        setTimeout(() => {
            let idArray = list.map(t => t.id);
            let maxId = Math.max.apply(Math, idArray);
            user.id = maxId + 1;
            list.push(user);
            dispatch({
                type: USER_ADD_SUCESS,
                sucess: true,
                message: '增加成功！'
            })

        }, 200);
    }
}

export function getUserById(id) {
    return dispatch => {
        dispatch({ type: USER_LOADING, message: '正在加载' });
        setTimeout(() => {
            let user = _getUserById(id)
            if (user) {
                dispatch({
                    type: GET_USER_BY_ID,
                    sucess: true,
                    message: '',
                    result: user
                });
            } else {
                dispatch({
                    type: USER_NOT_EXISTS,
                    sucess: false,
                    message: '没有找到这个用户！'
                })
            }
        }, 200);
    }
}

function _getUserById(id) {
    return list.find(t => t.id == id);
}


export function updateUser(user) {
    return dispatch => {
        dispatch({ type: USER_LOADING, message: '正在加载' });
        setTimeout(() => {
            let _u = _getUserById(user.id);
            _u.name = user.name;
            _u.age = user.age;

            dispatch({
                type: USER_UPDATE_SUCESS,
                sucess: true,
                message: '更新成功！'
            });
        }, 200);


    }

}


function loading() {
    return {
        type: USER_LOADING,
        message: '正在加载'
    }

}

function loaded() {
    return {
        type: USER_LOADED
    }
}