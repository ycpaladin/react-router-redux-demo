

import React, {Component} from 'react';
import {Link} from 'react-router'
import Load from '../components/LoadComponent'
export default class Layout extends Component {

    render() {

        return (

            <div className="contianer-fluid">

                <div className="row">
                    <Link to="/" >User Manager</Link> >
                    <Link to="/add" >Add User</Link>
                </div>
                <div className="row">
                    <div className="col-md-2">

                    </div>
                    <div className="col-md-8">
                        {this.props.children}

                    </div>
                    <div className="col-md-2">

                    </div>
                </div>
                {Load}
            </div>
        )
    }
}