import React, { Component } from 'react';
import Nav from '../components/Nav/Nav';
import PSDropdown from '../components/PSDropdown/PSDropdown'


class Dashboard extends Component {
    
   render(){
    return(
        <div>
            <Nav />
            <PSDropdown />
        </div>
        
    )
   } 
    
}



export default Dashboard;