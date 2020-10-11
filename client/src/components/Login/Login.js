import React, { useState } from "react";
import { Button,  Form } from "react-bootstrap";
import NewUser from "../NewUser/NewUser";
import ForgotPassword from "../ForgotPassword/ForgotPassword";
import "./Login.css";
import API from "../../utils/userAPI"

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleLoginSubmit(event) {
    event.preventDefault();   

    let userInfo = {
      email: email,
      password: password
    }
    API.postUser(userInfo).then(result =>{
      console.log("I have recieved the data from the data base")
      console.log(result.data)
      let Email = email.toLowerCase();
      if (Email === result.data.email.toLowerCase() && password === result.data.password) {
        console.log("The email and password are in the database")
      } else {
        console.log("the email and password don't exist ")
      }
    }).catch(err => console.log(err))
     
    };

  


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
        <Button block disabled={!validateForm()} type="submit">
          Login
        </Button>
        <div className="margin-top">
            <span className="margin"><NewUser/></span>
            <span className=""><ForgotPassword/></span>
        
        

        </div>

      </form>
    
    </div>
  );
}

export default Login