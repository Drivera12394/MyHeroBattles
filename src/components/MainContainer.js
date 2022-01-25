import React, { useState , useEffect } from "react";
import HeroBattleContainer from "./HeroBattleContainer"
import HeroList from "./HeroList"


function MainContainer() {

    const [characters, setCharacters] = useState([])


    useEffect(()=> {
        fetch ('http://localhost:8001/Characters')
        .then (r => r.json())
        .then ((characterData) => setCharacters(characterData))
      }, []) 
    
function villainsList () {
   const villainArray = characters.filter(char => char.alignment === "Villain")
   
}
villainsList()

function HeroesList () {
    const HeroArray = characters.filter(char => char.alignment === "Hero")
    

 }
 
HeroesList()

    return (
        <main>
        <h1>MAINCONTAINER</h1>
        <HeroList characterData={characters}/>
        </main>
    );
    
}




export default MainContainer;