import {compose, createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from './reducers/index'

import { browserHistory} from 'react-router' // 路由
import { syncHistoryWithStore } from 'react-router-redux' //路由使用redux管理

import Routers from './routes'

const loggerMiddleware = createLogger();



// export default function configureStore(reduxReactRouter, getRoutes, createHistory, data) {
//     const createStoreWithMiddleware = applyMiddleware(thunkMiddleware, loggerMiddleware)(createStore);
//     const store = reduxReactRouter({ getRoutes, createHistory })(createStoreWithMiddleware)(rootReducer, data);
//     // return createStoreWithMiddleware(rootReducer, initialState);
//     return store;
// }

//注册store
// const store = createStore(
//     rootReducer,
//     applyMiddleware(thunkMiddleware)
// )

const buildStore = applyMiddleware(
    loggerMiddleware,
    thunkMiddleware
)(createStore);

const store = buildStore(rootReducer, {});

export function configureStore() {
    return store;
}


export function getHistory() {
    //保持历史同步
    const history = syncHistoryWithStore(browserHistory, store)
    return history;
}


// //路由
// render(
// 	<Provider store={store}>
// 	  <Routers history={history}/>
// 	</Provider>, 
// 	document.getElementById('App')
// );