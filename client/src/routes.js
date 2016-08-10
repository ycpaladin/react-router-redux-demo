import React, { Component}from 'react';
import { IndexRoute, Route, Router } from 'react-router';

// import UserList from './components/UserListComponent'

import Root from './containers/Root'

import Layout from './containers/Layout'

import UserAdd from './components/user/UserAddComponent'

// export default () => {

//     <Router>
//         <Route path="/" component={Root }>
//             <IndexRoute component={Root} />
//         </Route>
//     </Router>
// }


export default class Routers extends Component {

    render() {
        return (
            <Router history={this.props.history}>
                <Route path="/" component={Layout }>
                    <IndexRoute component={Root} />
                    <Route path="add" component={UserAdd} />
                </Route>
            </Router>
        )

    }
}