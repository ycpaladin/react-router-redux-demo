import React, {Component} from 'react';
import { getUserList } from '../../actions/userActions';
import UserListItem from './UesrListItemComponent';
import NoItems from '../NoItemsComponent'

export default class UserList extends Component {

    componentDidMount() {
        this.props.dispatch(getUserList());
    }

    render() {
        var content = null;
        if (this.props.list.length) {
            content = this.props.list.map((item, index) => {
                return (<UserListItem item={item} key={index} />)
            })
        } else if (!this.props.isFetching) {
            content = <NoItems />
        }
        return (
            <div className="table-responsive">
                <table className="table  table-hover">
                    <tbody>
                        <tr>
                            <th>ID</th>
                            <th> 姓名</th>
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