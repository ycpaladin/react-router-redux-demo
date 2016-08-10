
import React, {Component} from 'react';
import {Provider} from 'react-redux';
// import configureStore from '../configureStore';
import Root from './Root'
import createHistory from 'history/lib/createBrowserHistory';
import {reduxReactRouter, ReduxRouter} from 'redux-router';
// import getRoutes from '../routes';

// import makeRouteHooksSafe from '../helpers/makeRouteHooksSafe'

// const store = configureStore(reduxReactRouter,makeRouteHooksSafe(getRoutes),createHistory);

// const component = (
//     <ReduxRouter routes={getRoutes(store)} />
// );

import { configureStore, getHistory} from '../configureStore'
import Routers from '../routes'

export default class App extends Component {

    render() {
        var store = configureStore();
        var history = getHistory();
        return (
            <Provider store={store}>
                <Routers history={history} />
            </Provider>
        )
    }
}
