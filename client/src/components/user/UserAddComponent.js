import React, {Component} from 'react';
import { addUser } from '../../actions/userActions';
import {connect} from 'react-redux'
// import {connect} from 'react-redux';

class UserAddComponent extends Component {
    render() {
        return (
            <form className="form-horizontal">
            <div className="form-group">
                <label htmlFor="inputEmail3" className="col-sm-2 control-label">User Name</label>
                <div className="col-sm-10">
                    <input type="email" className="form-control" ref="name" placeholder="User Name"/>
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="inputPassword3" className="col-sm-2 control-label">Age</label>
                <div className="col-sm-10">
                    <input type="number" className="form-control" ref="age" placeholder="Age"/>
                </div>
            </div>
            <div className="form-group">
                <div className="col-sm-offset-2 col-sm-10">
                    <button type="button" className="btn btn-default" onClick={e => this.handClick(e) }>Submit</button>
                </div>
            </div>
        </form>
        )
    }


    handClick(e) {

        const {dispatch} = this.props; 
        const name = this.refs.name.value;
        const age = this.refs.age.value;

        dispatch(addUser({
            id: 4,
            name,
            age
        }))

    }
}

function mapStateToProps(state) {
    const {userAddReducer} = state;
    return userAddReducer;;
}

export default connect(mapStateToProps)(UserAddComponent);