import React from 'react';
import CharacterCard from './CharacterCard';

function CharList({characterData, handleCharClick}) {
    
    return (
        <ul>
            {characterData.map((characterObj) => <CharacterCard handleCharClick={handleCharClick} key={characterObj.id} data={characterObj}/>)}
        </ul>
    );
    
}




export default CharList;