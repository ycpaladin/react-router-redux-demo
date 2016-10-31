import { actionTypes } from '../constants/actionTypes'
import fetch from 'isomorphic-fetch';

let {
    USER_LIST, USER_LIST_FETCHING,
    USER_ADD, USER_ADD_FETCHING,
    USER_EDIT, USER_EDIT_FETCHING,
    USER_GET, USER_GET_FETCHING,
    USER_DELETE_FETCHING, USER_DELETE
} = actionTypes;

let list = [{
    id: 1,
    name: 'kevin',
    age: 30
}]


export function getUserList() {
    return dispatch => {
        dispatch({ type: USER_LIST_FETCHING });
        setTimeout(() => {
            dispatch({ type: USER_LIST, result: list });
        }, 500);
    }
}


export function addUser(user) {
    return dispatch => {
        dispatch({ type: USER_ADD_FETCHING });
        setTimeout(() => {
            let idArray = list.map(t => t.id);
            let maxId = idArray.length > 0 ? Math.max.apply(Math, idArray) : 0;

            user.id = maxId + 1;
            list.push(user);
            dispatch({
                type: USER_ADD,
                sucess: true,
                message: '增加成功！'
            })

        }, 200);
    }
}

export function getUserById(id) {
    return dispatch => {
        dispatch({ type: USER_GET_FETCHING });
        setTimeout(() => {
            let user = _getUserById(id)
            if (user) {
                dispatch({
                    type: USER_GET,
                    sucess: null,
                    message: '',
                    result: user
                });
            } else {
                dispatch({
                    type: USER_GET,
                    sucess: false,
                    message: '没有找到这个用户！'
                })
            }
        }, 500);
    }
}

function _getUserById(id) {
    return list.find(t => t.id == id);
}


export function updateUser(user) {
    return dispatch => {
        dispatch({ type: USER_EDIT_FETCHING, message: '正在加载' });
        setTimeout(() => {
            let _u = _getUserById(user.id);
            _u.name = user.name;
            _u.age = user.age;

            dispatch({
                type: USER_EDIT,
                sucess: true,
                message: '更新成功！'
            });
        }, 200);
    }
}

export function deleteUser(id) {
    return dispatch => {
        dispatch({ type: USER_DELETE_FETCHING })

        setTimeout(() => {
            let index = list.findIndex(t => t.id == id);
            list.splice(index, 1);
            dispatch({
                type: USER_DELETE,
                sucess: true,
                message: '删除成功'
            })
        }, 200);
    }
}


export function Test() {

    return dispatch => {

        fetch('http://cnodejs.org/api/v1/topics').then(response => {
            return response.json();
        }).then(data => {
            dispatch({
                type: USER_LIST,
                data: data
            })
        });
    }

}

