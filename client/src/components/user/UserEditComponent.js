
import React, { Component } from 'react'
import { getUserById, updateUser } from '../../actions/userActions';
import { connect } from 'react-redux';
// import UserList from '../NoItemsComponent';
import {getHistory} from '../../configureStore';
import {UserFormComponent} from './UserFormComponent';

class UserEditComponent extends Component {


    componentDidMount() {
        let { dispatch, routeParams: p} = this.props;
        // let id = this.

        dispatch(getUserById(p.id));
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.sucess != null) {
            alert(nextProps.message);

            if (nextProps.sucess == true) {
                let history = getHistory();
                history.pushState(null, '/');
            }
        }
    }

    render() {
        return (<UserFormComponent user={this.props.result} handSubmit={ user => this.handSubmit(user) } />)
    }

    handSubmit(user) {
        let {dispatch} = this.props;
        dispatch(updateUser(user));
    }

}

function mapStateToProps(state) {
    const {userReducer} = state;
    return userReducer;
}

export default connect(mapStateToProps)(UserEditComponent);