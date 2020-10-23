import React from "react";
import "./Header.css";
import {Link} from "react-router-dom";
import AuthOptions from '../Authentication/AuthOptions';

export default function  Header() {
    return (
    <div className="heading" >
            <header className="container-fluid" id="header">
        
               <Link className = "textDec" to ="/"><h1 className="text-left ">ESPORTS</h1></Link> 
               <AuthOptions/>
            </header>
        
    </div>

    )
}

