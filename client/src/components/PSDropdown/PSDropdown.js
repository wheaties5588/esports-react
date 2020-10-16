import React, { useEffect, useState } from 'react';
import psAPI from '../../utils/pandaScoreApi';
import Scoreboard from '../../components/Scoreboard/Scoreboard'


function PSDropdown() {
    
    const [psData, setPsData] = useState([]);
    const [tourneyNum, setTourneyNum] = useState(0);

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
    
    
    function handleDropdownClick(ev) {
        ev.preventDefault();
        var target = ev.target;
        
        if (target.classList.contains("dropdown-item")){
            console.log(target.getAttribute("tourneyval"))
            setTourneyNum(target.getAttribute("tourneyval"))
            console.log("TourneyNum:" + tourneyNum)
       }
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
                    <div onClick={handleDropdownClick}>
                        {psData.map( (el, index) => (
                            <div className="dropdown-item" key={index} tourneyval={index}>{el.serie.full_name} - {el.name}</div> 
                        ))}
                    </div>
                    
                </div>
            </div>
            
            <Scoreboard tourneyNum={tourneyNum} psData={psData}/>
            
        </div>
        
        
        
    )
}



export default PSDropdown;