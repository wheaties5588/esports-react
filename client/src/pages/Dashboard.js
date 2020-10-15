import React, { Component } from 'react';
import Nav from '../components/Nav/Nav';
import TwitchCard from '../components/TwitchCard/TwitchCard'
import Carousel from '../components/Carousel'


class Dashboard extends Component {
    
   render(){
    return(
        <div>
            <Nav />
            <TwitchCard />
            <Carousel />
        </div>
        
    )
   } 
    
}



export default Dashboard;