import './App.css';
import React from 'react';
import { HashRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import Intro from "./Intro";
import Resume from "./Resume";
import Projects from "./Projects";

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
              <Link class="navbar-brand" to="/" style={{textDecoration: 'none', color: 'white'}}>Linh Hoang</Link>
              <ul class="navbar-nav mb-2">
                <li className="nav-item">
                  <a className="nav-link" href="https://github.com/Linhguinii" target="_blank" rel="noopener noreferrer">
                    <img src={require("./images/GitHub-Mark-Light-32px.png").default} alt="github-logo" style={{ height: '24px', width: '24px' }} />
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://www.linkedin.com/in/hoanglinh99/" target="_blank" rel="noopener noreferrer">
                    <img className="linkedin" style={{ height: '24px', width: '24px' }} src={require("./images/linkedin-3-32.png").default} alt="linkedin-logo" />
                  </a>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" style = {{textDecoration: 'none', color: 'white'}} to="/Projects">Projects</Link>
                </li>
                <li class="nav-item">
                  <a class="nav-link" style = {{textDecoration: 'none', color: 'white'}} href="mailto:linh.hoangtt99@gmail.com">Contact</a>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" style = {{textDecoration: 'none', color: 'white'}} to="/Resume">Resume</Link>
                </li>
              </ul>
            </div>
          </nav>
          <Switch>
            <Route path="/Projects">
              <Projects/>
            </Route>
            <Route path="/Resume">
              <Resume/>
            </Route>
            <Route path="/">
              <Intro/>
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
