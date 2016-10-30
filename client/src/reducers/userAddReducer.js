
import {actionTypes} from '../constants/actionTypes'
const {USER_ADD, USER_ADD_FETCHING} = actionTypes;

let defaultAddState = {
    isFetching: false,
    sucess: null,
    message: ''
}
export default function userAddReducer(state = defaultAddState, action) {
    switch (action.type) {
           
        case USER_ADD:
            let {sucess, message} = action;
            return Object.assign({}, state, {
                isFetching: false,
                sucess,
                message
            });
        case USER_ADD_FETCHING:
        default:
            return Object.assign({}, state, {
                isFetching: false,
                sucess: null,
                message: ''
            });
    }
}
