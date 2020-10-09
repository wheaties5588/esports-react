import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import { StoreProvider } from "./utils/GlobalState";


function App() {
  return (
    <Router>
      <div>
        <StoreProvider>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
          </Switch>
        </StoreProvider>
      </div>
    </Router>
  );
}


export default App;
