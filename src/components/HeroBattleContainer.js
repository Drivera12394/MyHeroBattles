import React from "react";
import BattleCard from "./BattleCards";

function HeroBattleContainer({characterData, handleRemove}) {

    return (
        <div>
            {characterData.map(char => <BattleCard handleRemove={handleRemove}  {...char}/>)} 
        </div>
       
    )
}





export default HeroBattleContainer;