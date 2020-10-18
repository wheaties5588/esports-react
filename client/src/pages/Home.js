import React from 'react';
import Login from  "../components/Login/Login"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer";

function Home() {
  return (
    <div>
     <Header/>
      <Login/>
     {/* <Footer/> */}
    </div>
  );
}

export default Home;