import { combineReducers } from 'redux';
import { userReducer, userAddReducer, userEditReducer } from './userReducer';
import { routerReducer } from 'react-router-redux';
// import userAddReducer from './userAddReducer';
// import  from './userEditReducer';
import loadReducer from './loadReducer';

const rootReducer = combineReducers({
    userReducer,
    userAddReducer,
    userEditReducer,
    loadReducer,
    routing: routerReducer
});

export default rootReducer;