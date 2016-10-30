


import React, { Component } from 'react';


export class UserFormComponent extends Component {

    componentWillReceiveProps(nextPrors) {
        let { user } = nextPrors;
        this.setState(user || { id: 0, name: '', age: 18 });
    }

    constructor(props) {
        super(props);
        this.state = props.user || { id: 0, name: '', age: 18 };

        this.handChange = () => {
            let { userId, userName, userAge} = this.refs;
            this.setState({
                id: userId.value,
                name: userName.value,
                age: userAge.value
            })
        }
    }

    render() {
        let { handSubmit} = this.props;
        return (
            <div className="col-md-8">

                <form className="form-horizontal">
                    <input type="hidden" value={this.state.id} ref="userId" />
                    <div className="form-group">
                        <label htmlFor="inputEmail3" className="col-sm-2 control-label">User Name</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" placeholder="User Name" value={this.state.name} onChange={e => this.handChange(e) } ref="userName" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputPassword3" className="col-sm-2 control-label">Age</label>
                        <div className="col-sm-10">
                            <input type="number" className="form-control" placeholder="Age" value={this.state.age} onChange={e => this.handChange(e) } ref="userAge" />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <button type="button" className="btn btn-default" onClick={e => handSubmit(this.state) }>Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }

   
}