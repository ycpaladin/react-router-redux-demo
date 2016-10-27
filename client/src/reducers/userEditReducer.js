
import {actionTypes} from '../constants/actionTypes'
const {
    USER_EDIT_FETCHING, USER_GET, USER_EDIT
} = actionTypes;


let defaultEditState = {
    isFetching: false,
    result: null,
    sucess: null,
    message: ''
};

export default function userEditReducer(state = defaultEditState, action) {
    let {sucess, message, result} = action;
    switch (action.type) {
        case USER_EDIT_FETCHING:
            return Object.assign({}, state, {
                isFetching: true,
                sucess: null,
                message: ''
            });
        case USER_GET:
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