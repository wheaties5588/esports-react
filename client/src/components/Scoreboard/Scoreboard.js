<<<<<<< HEAD
import React, { Component, useEffect, useState } from 'react';
=======
import React, { useEffect, useState} from 'react';

>>>>>>> 0fae0f3b4a163699546ff05e2f93ca72381486a3



function Scoreboard(props) {
    const [matches, setMatches] = useState([]);
    // const [tourneyNum, setTourneyNum] = useState(0);
    
    let test = props.psData;
    
    console.log(props);
    console.log(matches);
    
    
    useEffect(() => {
        loadMatches()
    }, [])
    
    function loadMatches() {
        setMatches(props.psData);
    }
  
    return(
        <div>
            <p>TourneyNum = {props.tourneyNum}</p>
            
            {test.map( (el, index) => (
                <div key={index}>{el.name}</div>
            ))}
            
            
        </div>
    )
    
}


export default Scoreboard;