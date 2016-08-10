import React, {Component} from 'react';
import {connect} from 'react-redux';
import UserList from '../components/user/UserListComponent'

class Root extends Component {

    render() {
        return (
            <div className="col-md-12">
                <UserList {...this.props}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const {userReducer} = state;
    return userReducer;
}

export default connect(mapStateToProps)(Root);