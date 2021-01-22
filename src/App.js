import React from "react";
//import "./App.css";
import Sort from "./pages/Sort";
import Home from "./pages/Home";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/sort" component={Sort} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
