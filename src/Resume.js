import React from 'react';

class Resume extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
        <img src={require("./images/Resume.jpg").default} alt="Resume" style={{height: '70vw'}} />
      </div>
    )
  }
}

export default Resume;
