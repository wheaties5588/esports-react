import React, { useEffect, useState } from "react";
import TwitchAPI from '../../utils/TwitchApi'

function TwitchDiv () {
  
  
  
  useEffect(() => {
    loadTwitchData() 
}, [])


function loadTwitchData() {
  TwitchAPI.getStream("Dota 2", 10)
  .then( data => {
    
    console.log(data);
      // setPsData(data.data)
      // setMatches(data.data[tourneyNum].matches)
      // setTourneyName(data.data[tourneyNum].serie.full_name)
      // setTourneyGroup(data.data[tourneyNum].name)
      // setTourneyDate(moment(data.data[tourneyNum].serie.begin_at).format('LLL'))
      // setTourneyLogo(data.data[tourneyNum].league.image_url)
  });
}
  
  
  
    return (
      // Twitch Papa Div Set Up
      <div className="album py-5 bg-light">
        <div className="container">
          <div className="row">
            
            {/* Twitch Card Here */}
            <div className="col-md-4">
              <div className="card mb-4 box-shadow">
                {/* Twitch Thumbnail */}
                <img
                  className="card-img-top"
                  data-src="holder.js/100px225?theme=thumb&bg=55595c&fg=eceeef&text=Thumbnail"
                  alt="Card image cap"
                />
                <div className="card-body">
                {/* Channel info */}
                  <ul className="">
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                  <div className="d-flex justify-content-between align-items-center">
                    {/* Link to channel in A tag in Button? */}
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        Link
                      </button>
                    </div>
                    <small className="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    );
};

export default TwitchDiv;
