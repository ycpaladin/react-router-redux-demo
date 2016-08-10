import {combineReducers} from 'redux';
import userReducer from './userReducer';
import { routerReducer } from 'react-router-redux';
import userAddReducer from './userAddReducer';
import loadReducer from './loadReducer';

const rootReducer = combineReducers({
    userReducer,
    userAddReducer,
    loadReducer,
    routing: routerReducer
});

export default rootReducer;