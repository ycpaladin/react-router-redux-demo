
import React, { Component } from 'react'
import { getUserById, updateUser } from '../../actions/userActions';
import { connect } from 'react-redux';
// import UserList from '../NoItemsComponent';
import {getHistory} from '../../configureStore';
import {UserFormComponent} from './UserFormComponent';
import LoadComponent from '../LoadComponent';
class UserEditComponent extends Component {


    componentDidMount() {
        let { dispatch, routeParams: p} = this.props;
        // let id = this.

        dispatch(getUserById(p.id));
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.sucess != null) {
            // alert(nextProps.message);
            this.props.setMessage(nextProps.message);
            if (nextProps.sucess == true) {
                let history = getHistory();
                history.push('/');
            }
        }
    }

    render() {
        return (
            <div>
                <LoadComponent isFetching={this.props.isFetching} />
                 <UserFormComponent user={this.props.result} handSubmit={ user => this.handSubmit(user) } />
            </div>
           )
    }

    handSubmit(user) {
        let {dispatch} = this.props;
        dispatch(updateUser(user));
    }

}

function mapStateToProps(state) {
    const {userEditReducer} = state;
    return userEditReducer;
}

export default connect(mapStateToProps)(UserEditComponent);