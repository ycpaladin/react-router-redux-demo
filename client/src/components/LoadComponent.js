import React, {Component} from 'react';

import {connect} from 'react-redux';

class LoadComponent extends Component {

    render() {

        const {isFetching} = this.props;

        if (isFetching) {
            return (
                <div>Loading...</div>
            )
        } else {
            return null;
        }

    }
}

export default connect(state => state.loadReducer)(LoadComponent)