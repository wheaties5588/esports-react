import React, { useEffect, useState } from 'react';
import psAPI from '../../utils/pandaScoreApi';


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
        
        <div className="column">
            <div className="dropdown">
                <div className="dropdown-trigger">
                    <button className="button"  aria-haspopup="true" aria-controls="dropdown-menu">
                    <span>Select a Series</span>
                    <span className="icon is-small">
                        <i className="fas fa-angle-down" aria-hidden="true"></i>
                    </span>
                    </button>
                </div>
                <div className="dropdown-menu" id="dropdown-menu" role="menu">
                    <div id="dropdownContent" class="dropdown-content">
                        {psData.map( (el, index) => (
                            <div className="dropdown-item" key={index}>{el.slug}</div> 
                        )
                        )}
                    </div>
                </div>
            </div>
        </div>
            
        </div>
        
    )
}



export default TwitchCard;