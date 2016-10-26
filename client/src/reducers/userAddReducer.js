
import actionTypes from '../constants/actionTypes'
const {USER_ADD, LOADING} = actionTypes;

const defState = {
    sucess: null,
    message: ''
}

function userAddReducer(state = defState, action) {
    let { type, value} = action;
    switch (type) {
        case USER_ADD:
            return Object.assign({}, state, {
                sucess: value.sucess,
                message: value.message
            })
        case LOADING:
            return Object.assign({}, state, {
                message: value.message
            });
        default:
            return state;
    }

}

export default userAddReducer;