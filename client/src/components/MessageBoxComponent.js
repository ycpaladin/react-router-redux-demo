

import React, { Component } from 'react';

export default class MessageBoxComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            message: ''
        }
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     if (nextProps.message && nextProps.message != this.state.message)
    //         return true;
    //     else
    //         return false;
    // }



    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps', nextProps.message, this.props.message)
        this.setState({
            message: nextProps.message
        });

        setTimeout(() => {

        }, 1000);
    }

    render() {



        return (<div className={`message ${this.state.message ? 'show' : ''}`}>{this.state.message}</div>)
    }
}