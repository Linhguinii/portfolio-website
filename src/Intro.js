import React from 'react';
import './Intro.css';
import 'bootstrap/dist/css/bootstrap.css';

class Intro extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div id="main-container">
        <div id="intro-container">
          <div id="introduction">
            <h1>Linh Hoang</h1>
            <div className="role">Software Engineer</div>
            <p>
              After graduating from Mcgill, I moved to Vancouver, and worked on VPC Lattice (AWS), a networking proxy that simplifies connectivity between services, for 4 years.
              Outside of work, I play volleyball, read books, hunt for good cafes, and learn new skills (e.g. languages and music).
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default Intro;
