import React, { useState } from 'react';

const MyForm = () => {
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [dateNaissance, setDateNaissance] = useState('');
    const [sexe, setSexe] = useState('');
    const [sport, setSport] = useState(false);
    const [coding, setCoding] = useState(false);
    const [description, setDescription] = useState('');
    const [ville, setVille] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        // Utilisation des valeurs stockées dans les états
        const formData = {
            nom,
            prenom,
            dateNaissance,
            sexe,
            loisirs: {
                sport,
                coding,
            },
            description,
        };
        console.log(formData);
    };

    return (
        <form className='' onSubmit={handleSubmit}>
            <div className='form-control'>
                <label htmlFor="nom">Nom:</label>
                <input className=''
                    type="text"
                    id="nom"
                    value={nom}
                    onChange={(e) => setNom(e.target.value)}
                />
            </div>
            <div >
                <label htmlFor="prenom">Prénom:</label>
                <input className='form-control'
                    type="text"
                    id="prenom"
                    value={prenom}
                    onChange={(e) => setPrenom(e.target.value)}
                />
            </div>
            <div className='form-group'>
                <label htmlFor="dateNaissance">Date de naissance:</label>
                <input className='form-control'
                    type="date"
                    id="dateNaissance"
                    value={dateNaissance}
                    onChange={(e) => setDateNaissance(e.target.value)}
                />
            </div>
            <div>
                <label>Sexe:</label>
                <label>
                    <input
                        type="radio"
                        value="homme"
                        checked={sexe === 'homme'}
                        onChange={(e) => setSexe(e.target.value)}
                    />{' '}
                    Homme
                </label>
                <label>
                    <input
                        type="radio"
                        value="femme"
                        checked={sexe === 'femme'}
                        onChange={(e) => setSexe(e.target.value)}
                    />{' '}
                    Femme
                </label>
            </div>
            <div>
                <label>
                    <input
                        type="checkbox"
                        value="sport"
                        checked={sport}
                        onChange={(e) => setSport(e.target.checked)}
                    />{' '}
                    Sport
                </label>
                <label>
                    <input
                        type="checkbox"
                        value="coding"
                        checked={coding}
                        onChange={(e) => setCoding(e.target.checked)}
                    />{' '}
                    Coding
                </label>
            </div>
            <div>
                <label htmlFor="description">Description:</label>
                <textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            <button type="submit">Envoyer</button>
        </form>
    );
};
export default MyForm;