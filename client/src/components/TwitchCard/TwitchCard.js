import React, { useEffect, useState } from 'react';
import psAPI from '../../utils/pandaScoreApi';
import { Dropdown } from 'react-bootstrap'


function TwitchCard() {
    
    const [psData, setPsData] = useState([]);

    useEffect(() => {
        loadPsData() 
    }, [])
    
    function loadPsData() {
        psAPI.getTournament("/dota2/tournaments", 10)
        .then( data => {
            console.log(data);
            setPsData(data.data);
        });
    }
    
    

    
    
    
    
    return (
        <div>
            
            <div id="dotaTournamentDiv">
            {psData.map( (el, index) => (
                <div className="tourney-card" key={index}>{el.slug}</div> 
            )
            )}
        </div>
        
        
        <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown button
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                {psData.map( (el, index) => (
                    <div className="dropdown-item" key={index}>{el.serie.full_name} - {el.name}</div> 
                ))}
            </div>
        </div>
            
        </div>
        
    )
}



export default TwitchCard;