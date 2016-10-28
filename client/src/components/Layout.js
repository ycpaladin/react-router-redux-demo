import React, { Component } from 'react';
import { Link } from 'react-router'
import Load from './LoadComponent'
import MessageBoxComponent from './MessageBoxComponent';

export default class Layout extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
        // this.props.setMessage = (text) => {
        //     alert(text);
        // <MessageBoxComponent message={this.state.message} />
        // }
        // this.setMessage = (text) => {
        //     // this.setState({
        //     //     message: text
        //     // })
        // }
    }

    render() {
        return (
            <div className="row-fluid">
                <div className="row-fluid">
                    <MessageBoxComponent />
                    <ul className="breadcrumb">
                        <li><Link to="/">User Manager</Link><span className="divider"></span></li>
                        <li><Link to="/add">Add User</Link></li>
                    </ul>
                </div>
                <div className="row-fluid">
                    <div className="col-md-2"></div>
                    {this.props.children && React.cloneElement(this.props.children, { setMessage: t => this.setMessage(t) }) }
                    <div className="col-md-2"></div>
                </div>
                {Load}
            </div>
        )
    }



}