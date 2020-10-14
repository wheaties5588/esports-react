import React from 'react';
import psAPI from '../../utils/pandaScoreApi';


function TwitchCard() {
    
    // const psTournydata = await psAPI.getTournament("/dota2/tournaments", 10).then( data => {return data})

    
    // console.log(psTournydata);
    
    
    
    return (
        <div id="dotaTournamentDiv">
            {/* {psTournydata.map( (el) => (
                <div className="image-type">{el.slug}</div> 
            )
            )} */}
        </div>
    )
}



export default TwitchCard;