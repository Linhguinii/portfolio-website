import React from 'react';

class Intro extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
        <p>Xin chào, tôi là một sinh viên khoa học máy tính.</p>
        <p>Bonjour, je suis un étudiant d&#39;informatique.</p>
        <p>Hello, I am a Computer Science student.</p>
        <p>안녕, 나는 컴퓨터 공학 학생 이에요.</p>
        <br></br>
        <p>This is who I am.</p>
        <img src={require("./images/bouldering.jpeg").default}/>
      </div>
    )
  }
}

export default Intro;
