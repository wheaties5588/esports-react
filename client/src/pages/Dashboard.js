import React, { Component } from 'react';
import Nav from '../components/Nav/Nav';
import TwitchCard from '../components/TwitchCard/TwitchCard'


class Dashboard extends Component {
    
   render(){
    return(
        <div>
            <Nav />
            <TwitchCard />
        </div>
        
    )
   } 
    
}



export default Dashboard;