import React, {useEffect, useState} from 'react'
import PSDropdown from "../PSDropdown/PSDropdown";
import TwitchDiv from "../TwitchDiv/TwitchDiv";


function GameButtons() {
    const [game, setGame] = useState("dota2");
    const [psURL, setPsURL] = useState("/dota2/tournaments");
    const [twitchValue, setTwitchValue] = useState("Dota 2");
      
    useEffect( () => {  
        setGame(game);
        setGameURL(game);  
    }, [game])
    
    
    
    function handleGameClick(ev) {
        ev.preventDefault();
        console.log(ev.target.getAttribute("game"));
        setGame(ev.target.getAttribute("game"));
    }
    
    
    
    function setGameURL(game) {
        switch (game) {
            case "dota2":
                setPsURL("/dota2/tournaments");
                setTwitchValue("Dota 2");
                break;
            case "overwatch":
                setPsURL("/ow/tournaments");
                setTwitchValue("Overwatch");
                break;
            case "lol":
                setPsURL("/lol/tournaments");
                setTwitchValue("League of Legends");
                break;
            case "csgo":
                setPsURL("/csgo/tournaments");
                setTwitchValue("Counter-Strike: Global Offensive");
                break;
            default:
                setPsURL("/dota2/tournaments");
                setTwitchValue("Dota 2");
        }
    }
    
    
    
    
    return (
        <div>
            
            <button type="button" className="btn btn-danger" game="dota2" onClick={handleGameClick}>Dota 2</button>
            <button type="button" className="btn btn-warning" game="overwatch" onClick={handleGameClick}>Overwatch</button>
            <button type="button" className="btn btn-info" game="lol" onClick={handleGameClick}>League of Legends</button>
            <button type="button" className="btn btn-dark" game="csgo" onClick={handleGameClick}>Counter Strike: GO</button>
            
            
            <PSDropdown psURL={psURL} twitchValue={twitchValue} />
            <TwitchDiv twitchValue={twitchValue} />
        </div>
    )
}


export default GameButtons
