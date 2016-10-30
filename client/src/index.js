 import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import '../node_modules/flex.css/dist/flex.css';
//\node_modules\flex.css\dist
import './assets/style.scss';

import React from 'react';
import {render} from 'react-dom';
import { configureStore, getHistory} from './configureStore';
import Routers from './routes';
import {Provider} from 'react-redux';

const store = configureStore();
const history = getHistory();

render(
    <Provider store={store}>
        <Routers history={history} />
    </Provider>,
    document.querySelector('#container')
);