import { Component } from "react";

class Face extends Component{

    constructor(){
        super()
        this.state = {face : null , cpt : 0 , display : false}
    }

    joue = ()=>{
        let randomFace= Math.floor(Math.random()*6+1);
        this.setState({face : randomFace , cpt : this.state.cpt+1 })
        if(randomFace==this.props.objectif)
            this.setState({display : true})
    }

    init = ()=>{
        this.setState({face : null , cpt : 0 , display : false})
    }

    render(){
        return <div>
            <img className="imgFace"  
            src={ this.state.face == null ?
                "/pictures/face/init.png" :
                `/pictures/face/face${this.state.face}.png`
            }
             />
            <h1>Jeu de Dé....</h1>
            <p>Face : {this.state.face}</p>
            <p>nombre d'essaye : {this.state.cpt}</p>
            {
                this.state.display==false ? 
                <button onClick={this.joue}>Joue</button> :
                <div>
                    <p>Bravo vous avez trouvez la face cachée…..</p>
                    <button onClick={this.init}>Initialiser</button>
                </div>

            }
        </div>
    }
}

export default Face;