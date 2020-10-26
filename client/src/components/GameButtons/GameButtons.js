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
        }
    }
    
    
    
    
    return (
        <div>
            
            <button type="button" className="btn btn-danger" game="dota2" onClick={handleGameClick}>Dota 2</button>
            <button type="button" className="btn btn-warning" game="overwatch" onClick={handleGameClick}>Overwatch</button>
            <button type="button" className="btn btn-info" game="lol" onClick={handleGameClick}>League of Legends</button>
            <button type="button" class="btn btn-dark" game="csgo" onClick={handleGameClick}>Counter Strike: GO</button>
            
            
            <PSDropdown psURL={psURL} twitchValue={twitchValue} />
            <TwitchDiv twitchValue={twitchValue} />
        </div>
    )
}


export default GameButtons




// // Parse out by URL to run functions
// var loc = window.location.href;
// var locArr = loc.split("/");

// if (locArr[locArr.length - 1] == "overwatch.html"){
    
//     console.log("RU4 overwatch!!!");
//     getTournaments("/ow/tournaments", 10, $("#owTournamentDiv"));
//     getTwitchStreams("Overwatch", 8, $("#overwatchTwitchDiv"));
    
    
// } else if (locArr[locArr.length - 1] == "dota2.html") {
    
//     console.log("RU4 DOTAAAAA!!!");
//     getTournaments("/dota2/tournaments", 10, $("#dotaTournamentDiv"));
//     getTwitchStreams("Dota 2", 8, $("#dotaTwitchDiv"));

    
// } else if (locArr[locArr.length - 1] == "leagueoflegends.html") {
    
//     console.log("RU4 LOLLLLLL!!!");
//     getTournaments("/lol/tournaments", 10, $("#lolTournamentDiv"));
//     getTwitchStreams("League of Legends", 8, $("#lolTwitchDiv"));
    
    
// } else if ((locArr[locArr.length - 1] == "CSGO.html") || (locArr[locArr.length - 1] == "csgo.html")){
//     console.log("RU4 CSGO");
//     getTournaments("/csgo/tournaments", 10, $("#csgoTournamentDiv"));
//     getTwitchStreams("Counter-Strike: Global Offensive", 8, $("#csgoTwitchDiv"));
// } else {}