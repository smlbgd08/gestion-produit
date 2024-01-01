import React, { useState } from 'react';
import './GestionEmployer.css';

const GestionEmployer = () => {
    const [employes, setEmployes] = useState([
        { id: 1, nom: 'Nom 1', prenom: 'Prenom 1', fonction: 'Fonction 1' },
        { id: 2, nom: 'Nom 2', prenom: 'Prenom 2', fonction: 'Fonction 2' },
        { id: 3, nom: 'Nom 3', prenom: 'Prenom 3', fonction: 'Fonction 3' },
    ]);

    const addEmploye = (nom, prenom, fonction) => {
        const newEmploye = { id: employes.length + 1, nom, prenom, fonction };
        setEmployes([...employes, newEmploye]);
    };

    const deleteEmploye = (id) => {
        const updatedEmployes = employes.filter((employe) => employe.id !== id);
        setEmployes(updatedEmployes);
    };

    return (
        <div className="container">
            <h1>Gestion des employés</h1>
            <div className="table">
                <div className="header">
                    <div className="cell">Nom</div>
                    <div className="cell">Prénom</div>
                    <div className="cell">Fonction</div>
                    <div className="cell">Actions</div>
                </div>
                <div className="body">
                    {employes.map((employe) => (
                        <div className="row" key={employe.id}>
                            <div className="cell">{employe.nom}</div>
                            <div className="cell">{employe.prenom}</div>
                            <div className="cell">{employe.fonction}</div>
                            <div className="cell">
                                <button onClick={() => deleteEmploye(employe.id)}>Supprimer</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <form onSubmit={(e) => {
                e.preventDefault();
                const nom = e.target.elements['nom'].value;
                const prenom = e.target.elements['prenom'].value;
                const fonction = e.target.elements['fonction'].value;
                addEmploye(nom, prenom, fonction);
                e.target.reset();
            }}>
                <input name="nom" placeholder="Nom" required />
                <input name="prenom" placeholder="Prénom" required />
                <input name="fonction" placeholder="Fonction" required />
                <button type="submit">Ajouter un employé</button>
            </form>
        </div>
    );
};

export default GestionEmployer;