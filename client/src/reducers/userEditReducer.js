
import actionTypes from '../constants/actionTypes'
const { USER_LIST, USER_LOADING, USER_ADD,
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

function userReducer(state = defState, action) {
    let { type, result, sucess, message} = action;
    switch (action.type) {
       
        case USER_LOADING:
            return Object.assign({}, state, {
                sucess: null,
                message, isFetching: true, result: null
            })
        case GET_USER_BY_ID:
            return Object.assign({}, state, {
                message, isFetching: false,
                result: result
            });
       
        case USER_UPDATE_SUCESS:
        case USER_UPDATE_FAIL:
            return Object.assign({}, state, {
                sucess, message, isFetching: false, result: null
            })
        default:
            return state;
    }

}

export default userReducer;