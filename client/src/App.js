import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard"
import { StoreProvider } from "./utils/GlobalState";



function App() {
  return (
    <Router>
      <div>
        <StoreProvider>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/login" component={Home} />
            <Route exact path="/dashboard" component={Dashboard} />
          </Switch>
        </StoreProvider>
      </div>
    </Router>
  );
}


export default App;
