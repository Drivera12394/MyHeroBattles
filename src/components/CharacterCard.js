import React from "react";

function CharacterCard({heroName, name, quirk, pwrLvl, speedLvl, technique}) {
    
    return (
        <li className="character-card">
            <img src="{image}" alt={heroName} />
            <h4>{heroName}</h4>
            <h2>{name}</h2>
            <p>{quirk}</p>
            <p>{pwrLvl}</p>
            <p>{speedLvl}</p>
            <p>{technique}</p>
        </li>
    );
}




export default CharacterCard;