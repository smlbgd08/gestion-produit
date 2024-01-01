import PropTypes from 'prop-types'
function Ajouter(props){

    return <div>
        <h1>Conatct : {props.contact}</h1>
        <ul>
            <li>Tel :  {props.tele}</li>
            <li>Email :  {props.email}</li>
            <li>Adress :  {props.adress}</li>
        </ul>
    </div>
}

Ajouter.defaultProps = {
    contact : "Test Test" ,
    tele : "06..........." ,
    email : "test@gmail.com",
    adress : "Sefrouu"

}

Ajouter.propTypes = {
    contact : PropTypes.string , 
    tele : PropTypes.string
}



export default Ajouter;