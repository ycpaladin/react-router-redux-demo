import React, {Component} from 'react';
import { getUserList } from '../../actions/userActions';
import UserListItem from './UesrListItemComponent';
import NoItems from '../NoItemsComponent'
import {connect} from 'react-redux';

class UserList extends Component {

    componentDidMount() {
        const {dispatch} = this.props;
        dispatch(getUserList());
    }

    render() {
        var content = null;
        const {list, isFetching} = this.props;
        if (list.length) {
            content = list.map((item, index) => {
                return (<UserListItem item={item} key={index} />)
            })
        } else if (!isFetching) {
            content = <NoItems />
        }
        return (
            <div className="col-md-8">
                <table className="table  table-hover table-condensed">
                    <tbody>
                        <tr>
                            <th>ID</th>
                            <th>姓名</th>
                            <th>年龄</th>
                            <th>操作</th>
                        </tr>
                        {content}
                    </tbody>
                </table>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const {userReducer} = state;
    return userReducer;
}

export default connect(mapStateToProps)(UserList);