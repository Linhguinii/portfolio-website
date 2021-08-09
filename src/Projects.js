import React from 'react';

class Projects extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
        <p>There is currently no published projects.</p>
        <p>Currently working on <a href="https://github.com/Linhguinii/Mastery" target="_blank">Mastery</a>.</p>
        <p>Check out my <a href="https://github.com/Linhguinii" target="_blank">GitHub</a> for my previous projects.</p>
      </div>
    )
  }
}

export default Projects;
