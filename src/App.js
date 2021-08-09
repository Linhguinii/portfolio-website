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
              <ul class="navbar-nav mb-2">
								<a class="navbar-brand" href="">
									<Link style={{textDecoration: 'none', color: 'white'}}>Linh</Link>
								</a>
								<li class="nav-item">
									<Link style = {{textDecoration: 'none', color: 'white'}}>Projects</Link>
								</li>
								<li class="nav-item">
									<Link style = {{textDecoration: 'none', color: 'white'}}>Contact</Link>
								</li>
								<li class="nav-item">
									<Link style = {{textDecoration: 'none', color: 'white'}}>Resume</Link>
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
