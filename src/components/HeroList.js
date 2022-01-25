import React from 'react';
import CharacterCard from './CharacterCard';

function HeroList({characterData}) {
    
    return (
        <ul>
            {characterData.map((characterObj) => <CharacterCard key={characterObj.id} {...characterObj}/>)}
        </ul>
    );
    
}




export default HeroList;