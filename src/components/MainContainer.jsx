import React, { useState , useEffect } from "react";
import HeroBattleContainer from "./HeroBattleContainer"


function MainContainer() {

    const [characters, setCharacters] = useState([])


    useEffect(()=> {
        fetch ('http://localhost:8001/Characters')
        .then (r => r.json())
        .then ((characterData) => setCharacters(characterData))
      }, []) 
    
    return (
        <>
        <h1>MAINCONTAINER</h1>
        {/* <HeroBattleContainer characterData={characters}/> */}
        </>
    );

}










export default MainContainer;