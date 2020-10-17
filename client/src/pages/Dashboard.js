import React, { Component } from 'react';
import Nav from '../components/Nav/Nav';
import PSDropdown from '../components/PSDropdown/PSDropdown'
import Footer from "../components/Footer/Footer"



class Dashboard extends Component {
    
   render(){
    return(
        <div>
            <Nav />
            <PSDropdown />
            <Footer />

        </div>
        
    )
   } 
    
}



export default Dashboard;