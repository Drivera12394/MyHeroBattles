import React from "react";

function CharacterCard({ heroName, name, quirk, pwrLvl, speedLvl, technique, image, battleImg }) {
    
    return (
        <li className="character-card">
            <img src={image} alt={heroName} />
            <h2>{heroName}</h2>
            <h4>{name}</h4>
            <p>Quirk:{quirk}</p>
            <p>Power:{pwrLvl}</p>
            <p>Speed:{speedLvl}</p>
            <p>Technique:{technique}</p>
        </li>
    );
}




export default CharacterCard;