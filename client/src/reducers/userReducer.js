
import actionTypes from '../constants/actionTypes'
const { USER_LIST, USER_LOADING, USER_ADD, USER_EDIT,
    USER_NOT_EXISTS,
    USER_UPDATE_SUCESS,
    USER_UPDATE_FAIL,
    USER_ADD_SUCESS,
    USER_ADD_FAIL,
    USER_DELETE_FAIL,
    GET_USER_BY_ID,
    USER_DELETE_SUCESS} = actionTypes;

var defState = {
    result: null,
    isFetching: false,
    sucess: null,
    message: ''
}


export function userReducer(state = defState, action) {
    let { type, result, sucess, message} = action;
    switch (action.type) {
        case USER_LIST:
            return Object.assign({}, state, {
                message,
                isFetching: false,
                sucess,
                result
            });
        case USER_LOADING:
            return Object.assign({}, state, {
                sucess: null,
                message,
                isFetching: true
            })
        default:
            return state;
    }

}


let defaultAddState = {
    isFetching: false,
    sucess: null,
    message: ''
}
export function userAddReducer(state = defaultAddState, action) {
    switch (action.type) {
        case USER_LOADING:
            return Object.assign({}, state, {
                isFetching: true,
                sucess: null,
                message: ''
            });
        case USER_ADD:
            let {sucess, message} = action;
            return Object.assign({}, state, {
                isFetching: false,
                sucess,
                message
            });

        default:
            return state;
    }
}

let defaultEditState = {
    isFetching: false,
    result: null,
    sucess: null,
    message: ''
};

export function userEditReducer(state = defaultEditState, action) {
    let {sucess, message, result} = action;
    switch (action.type) {
        case USER_LOADING:
            return Object.assign({}, state, {
                isFetching: true,
                sucess: null,
                message: ''
            });
        case GET_USER_BY_ID:
            return Object.assign({}, state, {
                isFetching: false,
                result: result,
                sucess,
                message
            });
        case USER_EDIT:
            return Object.assign({}, state, {
                isFetching: false,
                sucess,
                message
            });

        default:
            return state;
    }
}