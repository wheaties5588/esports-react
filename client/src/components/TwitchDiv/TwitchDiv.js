import React, { useEffect, useState } from "react";
import TwitchAPI from '../../utils/TwitchApi';
import './TwitchDiv.css'

function TwitchDiv (props) {
  const [twitchData, setTwitchData] = useState([])
  const [twitchGame, setTwitchGame] = useState("")
  
  
  useEffect(function effectFunction() {
    async function loadTWitchData() {
      
      TwitchAPI.getStream(props.twitchValue, 8)
      .then( data => {
        
        console.log(data.data.streams);
        setTwitchData(data.data.streams);
        setTwitchGame(data.data.streams[0].game)
          // setPsData(data.data)
          // setMatches(data.data[tourneyNum].matches)
          // setTourneyName(data.data[tourneyNum].serie.full_name)
          // setTourneyGroup(data.data[tourneyNum].name)
          // setTourneyDate(moment(data.data[tourneyNum].serie.begin_at).format('LLL'))
          // setTourneyLogo(data.data[tourneyNum].league.image_url)
      });
    }
    loadTWitchData();
  }, [props.twitchValue])
  
  
    return (
      // Twitch Papa Div Set Up
      <div className="album py-5 bg-light">
        <div className="container">
          
          <h3>{twitchGame + " Twitch Streams"}</h3>
          
          <div className="row">  
            
          {twitchData.map( (el) => (
                                                   
                            <div className="col-md-3" key={"twitch" + el._id} >
                              <div className="card mb-4 box-shadow">
                                {/* Twitch Thumbnail */}
                                <img
                                  className="card-img-top"
                                  src={el.preview.medium}
                                  alt={el.channel.display_name + " live stream image."}
                                />
                                <div className="card-body">
                                {/* Channel info */}
                                <div className="streamNameDiv">
                                  <p className="twitchHeadline">{el.channel.status}</p>
                                  <p className="twitchUser">{el.channel.display_name}</p>
                                  <small className="text-muted">{el.viewers + " viewers"}</small>
                                </div>
                                
                                <div className="streamInfo">
                                  <p className="twitchStreamItem">{"Game: " + el.game}</p>
                                  <p className="twitchStreamItem desc">{ el.channel.description}</p>
                                </div>
                                
                                  <div className="d-flex justify-content-between align-items-center">
                                    {/* Link to channel in A tag in Button? */}
                                    <div className="btn-group">
                                      <a href={el.channel.url} target="_blank" rel="noopener noreferrer">
                                        <button
                                          type="button"
                                          className="btn btn-sm btn-outline-secondary stream-btn"
                                        >
                                          {el.channel.display_name + " Stream"}
                                        </button>
                                      </a>
                                    </div>
                                      
                                  </div>
                                </div>
                              </div>
                            </div>
                                 
                        ))}
            
          </div>
        </div>
      </div>
    );
};

export default TwitchDiv;
