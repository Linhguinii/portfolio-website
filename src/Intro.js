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
          <div id="introduction" class="d-flex flex-column align-items-start">
            <div>
              <p>Hello! name's Linh. I am currently a Software Engineer @AWS working on Vpc Lattice, a networking service that allows customers to easily connect their services without any prior expertise.
                Outside of work, I enjoy playing volleyball, exploring new cafes/restaurants and learning new skills. Recently, I really like learning new languages. I've been learning Korean for about 2 years 
                and went on a solo trip to South Korea to explore the city and meet the locals. (Does that make me a polyglot? French, English, Vietnamese, Korean)
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Intro;
