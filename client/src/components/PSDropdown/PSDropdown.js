import React, { useEffect, useState } from 'react';
import psAPI from '../../utils/pandaScoreApi';
import Scoreboard from '../Scoreboard/Scoreboard'
import moment from 'moment';
import './PSDropdown.css'


function PSDropdown() {
    
    // var str = response[index].matches[i].begin_at;
    // var date = moment(str).date.utc().format('MM-DD-YYYY')
    
    const [psData, setPsData] = useState([])
    const [tourneyNum, setTourneyNum] = useState(0)
    const [matches, setMatches] = useState([])
    const [tourneyName, setTourneyName] = useState("")
    const [tourneyGroup, setTourneyGroup] = useState("")
    const [tourneyDate, setTourneyDate] = useState("")
    const [tourneyLogo, setTourneyLogo] = useState("")

    useEffect(() => {
        loadPsData() 
    }, [])
    
    
    useEffect(() => {
        console.log(psData)
    }, [psData])
    
    
    function loadPsData() {
        psAPI.getTournament("/dota2/tournaments", 10)
        .then( data => {
            setPsData(data.data)
            setMatches(data.data[tourneyNum].matches)
            setTourneyName(data.data[tourneyNum].serie.full_name)
            setTourneyGroup(data.data[tourneyNum].name)
            setTourneyDate(moment(data.data[tourneyNum].serie.begin_at).format('LLL'))
            setTourneyLogo(data.data[tourneyNum].league.image_url)
        });
    }
    
    
    function handleDropdownClick(ev) {
        ev.preventDefault();
        var target = ev.target;
        
        if (target.classList.contains("dropdown-item")){
            setTourneyNum(target.getAttribute("tourneyval"))
            setMatches(psData[tourneyNum].matches)
            setTourneyName(psData[tourneyNum].serie.full_name)
            setTourneyGroup(psData[tourneyNum].name)
            setTourneyDate(moment(psData[tourneyNum].serie.begin_at).format('LLL'))
            setTourneyLogo(psData[tourneyNum].league.image_url)
            //console.log(matches)
       }
    }
    
    
    
    //console.log(psData);

    
    
    return (
        <div className="dropdown-container">  
        
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle btn-block" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Select Tournament
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <div onClick={handleDropdownClick}>
                        {psData.map( (el, index) => (
                            <div className="dropdown-item" key={index} tourneyval={index}>{el.serie.full_name} - {el.name}</div>
                        ))}
                    </div>
                    
                </div>
            </div>
            
            <div className="tourneyDiv">
                <img className="tourneyLogo" src={tourneyLogo} />
                <div>
                    <h2>{tourneyName} {tourneyGroup} </h2>
                    <h3>{tourneyDate}</h3>
                </div>
                
            </div>
                        
            
            <Scoreboard
                tourneyNum={tourneyNum}
                psData={matches}
                fullData={psData}
            />
            
        </div>
        
        
        
    )
}



export default PSDropdown;