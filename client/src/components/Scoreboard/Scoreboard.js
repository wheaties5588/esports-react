import React, {useEffect, useState} from 'react';
import moment from 'moment';
import './Scoreboard.css';



function Scoreboard(props) {
    //const [matches, setMatches] = useState([]);
    const [tourneyNum, setTourneyNum] = useState(props.tourneyNum);
    
    let test = props.psData;
    
    //console.log(props);
    
    useEffect(() => {
        console.log(tourneyNum)
    }, [tourneyNum])
    
  
    return(

        <div className="scoreboardDiv">
            
            {test.map( (el, index) => (
                
                <div className="matchDiv cardBgrColor" key={index}>
                    <p className="matchName">{el.name}</p>
                    <p className="matchInfo">Match Date: {moment(el.begin_at).format('LL')}</p>
                    <p className="matchInfo">Match Time: {moment(el.begin_at).format('LT')}</p>
                </div>
            ))} 
            
            
        </div>
    )
    
}


export default Scoreboard;