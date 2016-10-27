
import {actionTypes} from '../constants/actionTypes'

let {
    USER_LIST, USER_LIST_FETCHING,
    USER_DELETE_FETCHING,USER_DELETE
} = actionTypes;

var defState = {
    result: null,
    isFetching: false,
    sucess: null,
    message: ''
}


export default function userReducer(state = defState, action) {
    let { type, result, sucess, message} = action;
    switch (action.type) {
        case USER_LIST:
            return Object.assign({}, state, {
                message,
                isFetching: false,
                sucess,
                result
            });

        case USER_DELETE:
            return Object.assign({}, state, {
                message,
                isFetching: false,
                sucess
            });
        case USER_LIST_FETCHING:
        case USER_DELETE_FETCHING:
            return Object.assign({}, state, {
                sucess,
                message,
                isFetching: true
            })
        default:
            return state;
    }

}


