import { useState } from "react";

const Employes = ()=>{

    const  [employes,setEmployes] = useState([
        {id : 1, nom : "zhari", prenom : "youness", fonction : "Ingenieur"},
        {id : 2, nom : "Ajabli", prenom : "sami", fonction : "Ingenieur"},
        {id : 3, nom : "kourrich", prenom : "Ihssane", fonction : "Ingenieur"}
    ])


    function handleSubmit(event){
        event.preventDefault();
        const lastName = event.target.elements["nom"].value ;
        const firstName = event.target.elements["prenom"].value ; 
        const fnc = event.target.elements["fonction"].value ; 
        
        const newEmployer = {id : employes.length+1, nom : lastName, prenom : firstName, fonction : fnc}
        setEmployes([...employes , newEmployer])
    }

    const deleteEmplyer = (id)=>{
        
        const newEmployes = employes.filter((emp) => emp.id !== id);
        setEmployes(newEmployes);
    }

    return (
        <div className="container">
            <h1>Gestion des employes</h1>
            <table className="table" border={2}>
                <thead>
                <tr>
                    <th>Nom</th>
                    <th>Prenom</th>
                    <th>Fonction</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {employes.map((emp) =>(
                    <tr key={emp.id}>
                    <td>{emp.nom} </td>
                    <td>{emp.prenom} </td>
                    <td>{emp.fonction} </td>
                    <td><button onClick={() => deleteEmplyer(emp.id)} className="btn btn-danger m-1">Supprimer</button> 
                    <button className="btn btn-primary">Modifier</button>
                    </td>
                </tr>
                ))}
                </tbody>
            </table>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="nom" name="nom"/>
                <input type="text" placeholder="prenom" name="prenom" />
                <input type="text" placeholder="fonction" name="fonction" />
                <input type="submit"  className="btn btn-success m-1"/>
            </form>
        </div>
    );
}

export default Employes ;