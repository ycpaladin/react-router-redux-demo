
import React, { Component } from 'react'
import { addUser } from '../../actions/userActions';
import { connect } from 'react-redux';
// import UserList from '../NoItemsComponent';
import {getHistory} from '../../configureStore';

class UserAdd extends Component {


    componentWillReceiveProps(nextProps) {
        if (nextProps.sucess != null) {
            alert(nextProps.message);

            if(nextProps.sucess == true){
                let history = getHistory();
                history.pushState(null, '/');
            }
        }
    }

    render() {
        return (
            <div className="col-md-8">
                <form className="form-horizontal">
                    <div className="form-group">
                        <label htmlFor="inputEmail3" className="col-sm-2 control-label">User Name</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" placeholder="User Name" ref="name" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputPassword3" className="col-sm-2 control-label">Age</label>
                        <div className="col-sm-10">
                            <input type="number" className="form-control" placeholder="Age" ref="age" />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <button type="button" className="btn btn-default" onClick={e => this.handSubmit(e)}>Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }


    handSubmit() {

        const {dispatch} = this.props;
        var name = this.refs.name.value;
        var age = this.refs.age.value;
        var user = {
            id: 4,
            name,
            age
        };
        dispatch(addUser(user));
    }
}

function mapStateToProps(state) {
    const {userReducer} = state;
    return userReducer;
}

export default connect(mapStateToProps)(UserAdd);