import React, {Component} from 'react'

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
                    <input  type="button" className="btn" value="编辑"  />
                    <input  type="button" className="btn" value="删除" onClick={e => this.deleteClick(e) }/>
                </td>
            </tr>
        )
    }

    deleteClick(e) {
        alert(this.props.item.id)
    }
}