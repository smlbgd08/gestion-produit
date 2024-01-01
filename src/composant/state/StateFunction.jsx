import { useState } from "react";

function StateFunction(){

    const [nom , setNom] = useState('le nom et vide ....')
    const [prenom , setPrenom] = useState('le prenom et vide ....')

    function handleName(event){
        setNom(event.target.value)
     }

     function handlePrenom(event){
        setPrenom(event.target.value)
     }

    return (
<div>

        <h1>Nom : </h1> <input type="text"  onChange={handleName} />
        <h1>prenom : </h1> <input type="text" onChange={handlePrenom} />
        <p>nom :  {nom}  prenom : {prenom}</p>
</div>

    )

}

export default StateFunction;