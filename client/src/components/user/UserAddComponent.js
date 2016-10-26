
import React, { Component } from 'react'
import { addUser } from '../../actions/userActions';
import { connect } from 'react-redux';
// import UserList from '../NoItemsComponent';
import {getHistory} from '../../configureStore';
import {UserFormComponent} from './UserFormComponent';

class UserAddComponent extends Component {


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
        return (<UserFormComponent handSubmit={ user => this.handSubmit(user) } />)
    }


    handSubmit(user) {
        console.log(this.a);
        const {dispatch} = this.props;
        dispatch(addUser(user));
    }
}


// export default UserAdd;

function mapStateToProps(state) {
    const {userReducer} = state;
    return userReducer;
}

export default connect(mapStateToProps)(UserAddComponent);