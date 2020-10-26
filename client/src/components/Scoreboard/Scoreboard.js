import React from 'react';
import moment from 'moment';
import './Scoreboard.css';

function Scoreboard(props) {
    
    let matches = props.matches; 
  
    return(

        <div className="scoreboardDiv">
            
            {matches.map( (el, index) => (
                
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