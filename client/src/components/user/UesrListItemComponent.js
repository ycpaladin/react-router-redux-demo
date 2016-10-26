import React, {Component} from 'react'
import {Link} from 'react-router';
export default class UserListItem extends Component {

    render() {
        var {item} = this.props;
        return (
            <tr>
                <td>
                    { item.id}
                </td>
                <td>
                    {item.name}
                </td>
                <td>
                    {item.age}
                </td>
                <td>
                    <Link className="btn btn-sm btn-info" to={`edit/${item.id}`}>编辑</Link>
                    <input  type="button" className="btn btn-sm btn-info" value="删除" onClick={e => this.deleteClick(e) }/>
                </td>
            </tr>
        )
    }

    deleteClick(e) {
        alert(this.props.item.id)
    }
}