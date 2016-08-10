
import actionTypes  from '../constants/actionTypes'
const { USER_LIST, LOADING} = actionTypes;
var defState = {
    list: [],
    sucess: false,
    message: ''
}

function userReducer(state = defState, action) {
    switch (action.type) {
        case USER_LIST:
            return Object.assign({}, state, {
                list: action.list
            })
        default:
            return state;
    }

}

export default userReducer;