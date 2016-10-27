import { combineReducers } from 'redux';
import  userReducer  from './userReducer';
import { routerReducer } from 'react-router-redux';
import userAddReducer from './userAddReducer';
import userEditReducer from './userEditReducer';

const rootReducer = combineReducers({
    userReducer,
    userAddReducer,
    userEditReducer,
    routing: routerReducer
});

export default rootReducer;