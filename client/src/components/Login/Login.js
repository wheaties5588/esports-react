import React, { useState } from "react";
import { Button,  Form } from "react-bootstrap";
import NewUser from "../NewUser/NewUser";
import ForgotPassword from "../ForgotPassword/ForgotPassword";
import {Redirect, Route, useHistory } from "react-router-dom"
import "./Login.css";
import API from "../../utils/userAPI"



function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //let [confirmed, setConfirmed] = useState(false);
  const history = useHistory();
  let isConfirmed = false;

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }


  function handleLoginSubmit(event) {
    event.preventDefault();   

    let userInfo = {
      email: email,
      password: password
    }
    API.getUserEmail(userInfo).then(result =>{
      console.log("I have recieved the data from the data base")
      console.log(result)
      let Email = email.toLowerCase();
      if (Email === result.data[0].email.toLowerCase() && password === result.data[0].password) {
        console.log("The email and password are in the database")
        isConfirmed = true;
        console.log(isConfirmed)
        history.push("/dashboard")
      } else {
        console.log("the email or password don't exist ")
      }
    }).catch(err => console.log(err))
     
    };



    /// we can use function like this in th logout and that's why it's not deleted so we can refrence to it
    //  function handleClick(){
    //    console.log(confirmed)
    //   if(confirmed) {
    //     console.log(confirmed)
    //    history.push("/dashboard")
    //   }
    // }

  return (
    <div className="Login container">
      
      
      <form onSubmit={handleLoginSubmit}>
        <Form.Group controlId="email" >
          <Form.Label>Email:</Form.Label>
  
          <Form.Control
            autoFocus
            placeholder="Enter email" 
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="password" >
          <Form.Label>Password:</Form.Label>
          <Form.Control
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
            placeholder="Password" 
          />
        </Form.Group>
  <Button block disabled={!validateForm()} type="submit" >
     Login 
     </Button>
       
      </form>
      
      
      <div className="margin-top center">
        
            <span className="margin"><NewUser/></span>
            <span className=""><ForgotPassword/></span>
        
        

        </div>
    
    </div>
  );
}

export default Login
