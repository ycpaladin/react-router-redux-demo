

import React, {Component} from 'react';
import {connect} from 'react-redux';

class Load extends Component {
    render() {
        const {isFetching } = this.props;
        if (isFetching) {
            return (
                <div>正在加载..</div>
            );
        } else {
            return null;
        }
    }
}


function mapStateToProps(state) {
    const {loadReducer} = state;
    return loadReducer;
}


export default connect(mapStateToProps)(Load);