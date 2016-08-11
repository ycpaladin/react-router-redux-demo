

import React, {Component} from 'react';
import {Link} from 'react-router'
import Load from './LoadComponent'
export default class Layout extends Component {

    render() {

        return (

            <div className="row-fluid">

                <div className="row-fluid">
                    <Link to="/" >User Manager</Link> >
                    <Link to="/add" >Add User</Link>
                </div>
                <div className="row-fluid">
                    <div className="col-md-2">

                    </div>
                    {this.props.children}
                    <div className="col-md-2">

                    </div>
                </div>
                {Load}
            </div>
        )
    }
}