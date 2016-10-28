
import React, { Component } from 'react'
import { addUser } from '../../actions/userActions';
import { connect } from 'react-redux';
import onfire from 'onfire.js';
import { getHistory } from '../../configureStore';
import { UserFormComponent } from './UserFormComponent';
import LoadComponent from '../LoadComponent';
class UserAddComponent extends Component {


    componentWillReceiveProps(nextProps) {
        if (nextProps.sucess != null) {
            // alert(nextProps.message);

            // this.props.setMessage(nextProps.message);
            onfire.fire('setMessage', nextProps.message);
            if (nextProps.sucess == true) {
                let history = getHistory();
                history.push('/');
            }
        }
    }

    render() {
        return (<div>
            <LoadComponent isFetching={this.props.isFetching} />
            <UserFormComponent handSubmit={user => this.handSubmit(user) } />
        </div>)
    }


    handSubmit(user) {
        console.log(this.a);
        const {dispatch} = this.props;
        dispatch(addUser(user));
    }
}


// export default UserAdd;

function mapStateToProps(state) {
    const {userAddReducer} = state;
    return userAddReducer;
}

export default connect(mapStateToProps)(UserAddComponent);