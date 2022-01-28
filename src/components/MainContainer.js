import React, { useState , useEffect } from "react";
import HeroBattleContainer from "./HeroBattleContainer"
import HeroContainer from "./HeroContainer";
import CharList from "./HeroList"
import CharacterCard from "./CharacterCard";



function MainContainer() {

    const [characters, setCharacters] = useState([])
    const [battleList, setBattleList]= useState([])
    
    

    useEffect(()=> {
        fetch ('http://localhost:8001/Characters')
        .then (r => r.json())
        .then ((characterData) => setCharacters(characterData))
      }, []) 
    

//If characters are clicked it places them on their respective sides. 

function handleCharClick(char){

    // check the battlelist for "data"
    // if it's not there we can set state
    // else console.log("already fighting")

    // 1.) if char is NOT in the battlelist
    // 2.) we only two chars, check the array to see if it has two chars
  
    if (!battleList.includes(char) && battleList.length < 2){
        setBattleList([...battleList, char])
    }else {
        console.log("already fighting")
    }
  
}

function handleRemove(oldCharId){

    // create a new array where we filter out the old char
    const newBattleList = battleList.filter(chr => chr.id !== oldCharId)
    // use that array to "setBattleList"
    setBattleList(newBattleList)

}


//Villains list seperated
function villainsList () {
    return characters.filter(char => char.alignment === "Villain")
   
}

//Heroes list seperated
function heroesList () {
    return characters.filter(char => char.alignment === "Hero")
    
 }
 


    return (
        <main>
        <h1>MAINCONTAINER</h1>
        {/* <CharacterCard handleCharClick={handleCharClick}/> */}
        <HeroBattleContainer handleRemove={handleRemove} characterData={battleList}/>
        <CharList handleCharClick={handleCharClick} className="heroList" characterData={heroesList()}/>
        <CharList handleCharClick={handleCharClick} className="villainList" characterData={villainsList()}/>
        </main>
    );
    
}




export default MainContainer;