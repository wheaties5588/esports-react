import React, { Component } from 'react';
import Nav from '../components/Nav/Nav';
import PSDropdown from '../components/PSDropdown/PSDropdown';
import Footer from "../components/Footer/Footer";
import Comments from "../components/Comments/Comments";



class Dashboard extends Component {
    
   render(){
    return(
        <div>
            <div>
                <Nav />
                <PSDropdown />
                <Comments />
            </div>
            
            <Footer />

        </div>
        
    )
   } 
    
}



export default Dashboard;