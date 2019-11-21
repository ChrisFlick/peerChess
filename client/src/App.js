import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import { ReversiState } from "./utils/GlobalState";

function App() {
  return (
    <Router>
      <div>
        <ReversiState>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route component={NoMatch} />
          </Switch>
        </ReversiState>
      </div>
    </Router>
  );
}

export default App;
