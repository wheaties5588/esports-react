import React, { Component, useEffect, useState } from 'react';



function Scoreboard(props) {
    console.log(props);
    
    return(
        <div>
            TourneyNum = {props.tourneyNum}
        </div>
    )
}


export default Scoreboard;