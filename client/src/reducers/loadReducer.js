
import actionTypes  from '../constants/actionTypes'
const { LOADING,LOADED} = actionTypes;
var defState = {
    isFetching: false
}

function loadReducer(state = defState, action) {
    switch (action.type) {
        case LOADING:
            return Object.assign({}, state, {
                isFetching: true
            });
        case LOADED:
            return Object.assign({}, state, {
                isFetching: false
            });
        default:
            return state;
    }

}

export default loadReducer;