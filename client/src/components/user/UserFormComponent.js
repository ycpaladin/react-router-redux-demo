


import React, {Component} from 'react';

export class UserFormComponent extends Component {

    // constructor(props) {
    //     super(props);

    //     this.state = this.props.user || { name: '', age: 18 };

    // }

    render() {
        //let user = this.props.entity || { name: '', age: 18 };
        // let { user = { name: "", age: 18 }, handSubmit } = this.props
        let { handSubmit} = this.props;
        this.user = this.props.user || { name: '', age: 18 };
        this.a = 'kevin';
        return (
            <div className="col-md-8">
                <form className="form-horizontal">
                    <div className="form-group">
                        <label htmlFor="inputEmail3" className="col-sm-2 control-label">User Name</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" placeholder="User Name" value={ this.user.name} onChange={e => this.handChange(e, 'name') } />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputPassword3" className="col-sm-2 control-label">Age</label>
                        <div className="col-sm-10">
                            <input type="number" className="form-control" placeholder="Age"  value={this.user.age}  onChange={e => this.handChange(e, 'age') } />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <button type="button" className="btn btn-default" onClick={e => handSubmit(this.user) }>Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }

    handChange(e, key) {
        this.user[key] = e.target.value;
    }
}