import React, { useEffect, useLayoutEffect, useState } from 'react';
import psAPI from '../../utils/pandaScoreApi';
import Scoreboard from '../Scoreboard/Scoreboard'
import moment from 'moment';
import './PSDropdown.css'


function PSDropdown(props) {
    
    const psURL = props.psURL
    const [psData, setPsData] = useState([])
    const [tourneyNum, setTourneyNum] = useState(0)
    const [matches, setMatches] = useState([])
    const [tourneyName, setTourneyName] = useState("")
    const [tourneyGroup, setTourneyGroup] = useState("")
    const [tourneyDate, setTourneyDate] = useState("")
    const [tourneyLogo, setTourneyLogo] = useState("")

    
    useEffect(function effectFunction() {
        console.log(psURL)
        async function loadPsData() {
            psAPI.getTournament(psURL, 10)
            .then( data => {
                console.log(data)
                setPsData(data.data)
                setMatches(data.data[tourneyNum].matches)
                setTourneyName(data.data[tourneyNum].serie.full_name)
                setTourneyGroup(data.data[tourneyNum].name)
                setTourneyDate(moment(data.data[tourneyNum].serie.begin_at).format('LLL'))
                setTourneyLogo(data.data[tourneyNum].league.image_url)
            });
        }
        loadPsData()
        
    }, [psURL])
    
    
    useLayoutEffect(() => {
        
        async function loadMatches() {
            if (psData[tourneyNum] === undefined) {
                console.log("useLayout running undefined");
            } else {
                console.log("useLayout running");
                console.log(psData[tourneyNum].matches)
                setMatches(psData[tourneyNum].matches)
                setTourneyName(psData[tourneyNum].serie.full_name)
                setTourneyGroup(psData[tourneyNum].name)
                setTourneyDate(moment(psData[tourneyNum].serie.begin_at).format('LLL'))
                setTourneyLogo(psData[tourneyNum].league.image_url)
            }
            
        }
        loadMatches()
    }, [tourneyNum])
    
    
    function handleDropdownClick(ev) {
        ev.preventDefault();
        var target = ev.target;
        console.log(target)
        
        if (target.classList.contains("dropdown-item")){
            setTourneyNum(target.getAttribute("tourneyval"))
       }
    }  
    
    return (
        <div className="dropdown-container">  
        
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle btn-block" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Select {props.twitchValue} Tournament
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <div onMouseUp={handleDropdownClick}>
                        
                        {psData.map( (el, index) => (
                            <div className="dropdown-item" key={index} tourneyval={index}>{el.serie.full_name} - {el.name}</div>
                        ))}
                    </div>
                  
                </div>
            </div>
            
            <div className="tourneyDiv">
                <img className="tourneyLogo" src={tourneyLogo} alt="" />
                <div>
                    <h2>{tourneyName} {tourneyGroup} </h2>
                    <h3>{tourneyDate}</h3>
                </div>
                
            </div>
            
            
            <Scoreboard tourneyNum={tourneyNum} matches={matches} />
                        
          
        </div>  
        
    )
}

export default PSDropdown;