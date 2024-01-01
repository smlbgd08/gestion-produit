import { Component } from "react";
import PropTypes from 'prop-types'

class Navbar extends Component{
    render(){
        return <h1 className="red"><u>{this.props.title}</u></h1>
    }
}

Navbar.defaultProps = {
    title : "this is espace for title"
}

Navbar.propTypes = {
    title :  PropTypes.string.isRequired
}

export default Navbar;