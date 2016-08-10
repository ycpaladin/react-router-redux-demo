import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './assets/style.scss'

// import getRoutes from './routes';

import React from 'react'
import {render} from 'react-dom'
import App from './containers/App'

render(
    <App/>,
    document.querySelector('#container')
)