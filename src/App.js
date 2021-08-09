import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import Intro from "./Intro";

class App extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div className="App">
        <Router>
          <nav class="navbar navbar-expand">
            <div class ="container-fluid">
							<a class="navbar-brand" href="" style={{textDecoration: 'none', color: 'white'}}>Linh</a>
              <ul class="navbar-nav mb-2">
								<li class="nav-item">
									<a class="nav-link" style = {{textDecoration: 'none', color: 'white'}}>Projects</a>
								</li>
								<li class="nav-item">
									<a class="nav-link" style = {{textDecoration: 'none', color: 'white'}}>Contact</a>
								</li>
								<li class="nav-item">
									<a class="nav-link" style = {{textDecoration: 'none', color: 'white'}}>Resume</a>
								</li>
              </ul>
            </div>
          </nav>
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
