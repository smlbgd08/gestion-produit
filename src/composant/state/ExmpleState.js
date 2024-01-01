import { Component } from "react";

class ExmpleState extends Component{

    constructor(){
        super();
        this.state={message:"Bien venu visiteur a sefrou",btnMessage:"inscription"}
    }

    inscription = ()=>{
        this.setState({message:"Votre iscription est effuctuer",btnMessage:"inscription"})
    }

    render(){
        return <div>
        <p>{this.state.message}</p>
        <button onClick={this.inscription}>inscription</button>
        <p>0</p>
        <button onClick={this.inscription}>Increment</button>
        <button onClick={this.inscription}>descimente</button>
    </div>
    }


}

export default ExmpleState;

