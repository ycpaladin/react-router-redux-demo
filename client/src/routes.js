import React, { Component}from 'react';
import { IndexRoute, Route, Router } from 'react-router';
import Layout from './components/Layout'
import UserAdd from './components/user/UserAddComponent'
import UserList from './components/user/UserListComponent'

export default class Routers extends Component {

    render() {
        return (
            <Router history={this.props.history}>
                <Route path="/" component={Layout }>
                    <IndexRoute component={UserList} />
                    <Route path="add" component={UserAdd} />
                </Route>
            </Router>
        )

    }
}