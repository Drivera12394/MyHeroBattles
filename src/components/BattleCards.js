import React from "react";


function BattleCards({ id, heroName, name, quirk, pwrLvl, speedLvl, technique, image, battleImg, handleRemove }) {
    //Listed info for the battle cards when characters are selected. 
    return (
        <li onClick={() => handleRemove(id)}  className="character-card">
            <img src={battleImg} alt={heroName} />
            <h2>{heroName}</h2>
            <h4>{name}</h4>
            <p>Quirk:{quirk}</p>
            <p>Power:{pwrLvl}</p>
            <p>Speed:{speedLvl}</p>
            <p>Technique:{technique}</p>
        </li>
    );
}





export default BattleCards;