
import actionTypes from '../constants/actionTypes'
const { USER_LIST, USER_LOADING, USER_ADD,
    USER_NOT_EXISTS,
    USER_UPDATE_SUCESS,
    USER_UPDATE_FAIL,
    USER_ADD_SUCESS,
    USER_ADD_FAIL,
    USER_DELETE_FAIL,
    USER_DELETE_SUCESS} = actionTypes;
var defState = {
    list: null,
    isFetching: false,
    sucess: null,
    message: ''
}

function userReducer(state = defState, action) {
    let { type, list, sucess, message} = action;
    switch (action.type) {
        case USER_LIST:
            return Object.assign({}, state, {
                list
            });
        case USER_LOADING:
            return Object.assign({}, state, {
                message, isFetching: true
            })
        case USER_ADD_SUCESS:
        case USER_ADD_FAIL:
        case USER_UPDATE_SUCESS:
        case USER_UPDATE_FAIL:
        case USER_DELETE_SUCESS:
        case USER_DELETE_FAIL:
            return Object.assign({}, state, {
                sucess, message, isFetching: false
            })
        default:
            return state;
    }

}

export default userReducer;