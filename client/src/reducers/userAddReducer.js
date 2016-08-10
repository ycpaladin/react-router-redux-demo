
import actionTypes  from '../constants/actionTypes'
const {USER_ADD, LOADING} = actionTypes;

const defState = {
    sucess: false,
    message: ''
}

function userAddReducer(state = defState, action) {
    switch (action.type) {
        case USER_ADD:
            return Object.assign({}, state, {
                sucess: action.sucess,
                message: action.message
            })
        default:
            return state;
    }

}

export default userAddReducer;