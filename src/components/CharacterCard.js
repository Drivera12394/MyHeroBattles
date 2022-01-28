import React, {useState} from "react";

function CharacterCard({ data, handleCharClick }) {
    const {heroName, name, quirk, pwrLvl, speedLvl, technique, image, battleImg} = data
    //Listed Character Items for the sides of the page  Villian/Hero Containers.
    return (
        <li className="character-card">
            <img onClick={() => { handleCharClick(data) }} src={null} alt={heroName} />
            <h2>{heroName}</h2>
            <h4>{name}</h4>
        </li>
    );
}




export default CharacterCard;