import React from 'react';
import moment from 'moment';
import './Scoreboard.css';



function Scoreboard(props) {
    //const [matches, setMatches] = useState([]);
    // const [tourneyNum, setTourneyNum] = useState(0);
    
    let test = props.psData;
    
    console.log(props);
    
    
    // useEffect(() => {
    //     loadMatches()
    // }, [])
    
    // function loadMatches() {
    //     setMatches(props.psData);
    // }
  
    return(
        <div className="scoreboardDiv">
            
            {test.map( (el, index) => (
                <div className="matchDiv" key={index}>
                    <p>{el.name}</p>
                    <p>{moment(el.begin_at).format('LLL')}</p>
                </div>
            ))}
            
            
        </div>
    )
    
}


export default Scoreboard;