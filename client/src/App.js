import React, { useState, useEffect} from 'react';
//import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from './components/Home/Home';
import Login from './components/Authentication/Login';
import Register from './components/Authentication/Register';
import Header from "./components/Header/Header";
import UserContext from "./context/UserContext";
import Axios from "axios";
import './Styling.css'

function App() {
  
  console.log("baseUrl #################")
  console.log(process.env.baseUrl)
  console.log("baseURL #################")
  console.log(process.env.baseURL)
  console.log("BASE_URL #################")
  console.log(process.env.BASE_URL)
  console.log("NODE_ENV #################")
  console.log(process.env.NODE_ENV)

  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });
  
  let baseUrl;
    
    if (process.env.NODE_ENV === "production") {
        baseUrl = "https://cryptic-falls-26682.herokuapp.com"
      } else {
        baseUrl = "http://localhost:5000"
      }

  useEffect(() => {
      const checkLoggedIn = async () => {
        let token = localStorage.getItem("auth-token");
        if (token === null) {
          localStorage.setItem("auth-token", "");
          token = "";
        }
        const tokenRes = await Axios.post(baseUrl + "/users/tokenIsValid", 
        null,
        { headers: { "x-auth-token": token } 
      });
      console.log(tokenRes.data);

      if (tokenRes.data) {
        const userRes = await Axios.get(baseUrl + "/users/", { 
          headers: { "x-auth-token": token},
        });
        setUserData({
          token,
          user: userRes.data,
        });
      }
      console.log(token)
      }

      ;
      checkLoggedIn();
  }, [baseUrl]);
  return (
    <>
      <BrowserRouter>
      <UserContext.Provider value={{ userData, setUserData }}>
      <Header/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route  path="/login" component={Login}/>
        <Route  path="/register" component={Register}/>
      </Switch>
      </UserContext.Provider>
      </BrowserRouter>
      
    </>
  );
}

export default App;
