import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import Intro from "./Intro";

class App extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/Intro">
              <Intro/>
            </Route>
            <Route path="/">
              <Redirect to="/Intro"/>
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
