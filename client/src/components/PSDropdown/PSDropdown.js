import React, { useEffect, useState } from 'react';
import psAPI from '../../utils/pandaScoreApi';


function PSDropdown() {
    
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
            
            {/* <div id="dotaTournamentDiv">
                {psData.map( (el, index) => (
                    <div className="tourney-card" key={index}>{el.slug}</div> 
                )
                )}
            </div> */}
        
        
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown button
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    {psData.map( (el, index) => (
                        <div className="dropdown-item" key={index}>{el.serie.full_name} - {el.name}</div> 
                    ))}
                </div>
            </div>
            
        </div>
        
    )
}



export default PSDropdown;