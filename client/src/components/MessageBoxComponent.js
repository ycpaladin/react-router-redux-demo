import onfire from 'onfire.js'

import React, { Component } from 'react';

export default class MessageBoxComponent extends Component {

    componentDidMount() {
        onfire.on('setMessage', t => {
            this.setState({
                message: t
            });

            this.timeOut = setTimeout(() => {
                this.setState({
                    message: undefined
                });
            }, 5000);//5秒之后自动消失.
        })
    }

    constructor(props) {
        super(props);
        this.state = {
            message: undefined
        }
    }

    render() {
        return (<div className={`message ${this.state.message ? 'show' : 'hide'}`}>{this.state.message}</div>)
    }
}