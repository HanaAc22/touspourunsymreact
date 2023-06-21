import React from 'react';

const AssoForm = () => {

    return (
        <div>
            <div className="step-title">Information liées à l'association</div>
            <div className="groupformName">
                <label htmlFor="firstname">Nom de l'association :</label>
                <input
                type="text"
                placeholder="Nom de l'association"/>
            </div>

            <div className="actionBtn">
                <a href='#'>Retour</a>
                <a href='#'>Suivant</a>
            </div>
        </div>
    );
};

export default AssoForm;