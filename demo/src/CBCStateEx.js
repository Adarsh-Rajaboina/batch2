import React, {Component} from 'react';
class CBCStateEx extends Component {
    constructor(){
        super();
        this.state={
            University : "MRU"
        };
    }
    changeName=()=>{
        this.setState({university : "Malla Reddy University"});
    }
    render(){
        console.log(this);
        return(
            <div>CBCStateEx
                <h1>{this.state.university}</h1>
                <button onClick={this.changeName}>Change Name</button>
            </div>
        )
    }
}
export default CBCStateEx;