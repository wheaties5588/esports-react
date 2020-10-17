import React, { useEffect, useState} from 'react';




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