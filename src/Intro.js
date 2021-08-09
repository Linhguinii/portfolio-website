import React from 'react';
import './Intro.css';
import 'bootstrap/dist/css/bootstrap.css';

class Intro extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
        <div id="introduction" class="d-flex flex-column align-items-start">
          <div>
            <p>Xin chào, tôi là một sinh viên khoa học máy tính.</p>
          </div>
          <div>
            <p>Bonjour, je suis un étudiant d&#39;informatique.</p>
          </div>
          <div>
            <p>Hello, I am a Computer Science student.</p>
          </div>
          <div>
            <p>안녕하세요, 저는 컴퓨터 공학 학생 이에요.</p>
          </div>
        </div>
        <br></br>
        <p>This is who I am currently.</p>
        <div class="d-flex justify-content-around">
          <div class="p">
            <img id="code" src={require("./images/kid_computer.jpeg").default}/>
          </div>
          <div class="p">
            <img id="bouldering" src={require("./images/bouldering.jpeg").default} style={{height: '450px'}}/>
          </div>
          <div class="p">
            <img id="dancing" src={require("./images/dancing4.jpg").default}/>
          </div>
        </div>
        <br></br>
        <br></br>
        <a href="https://github.com/Linhguinii" target="__blank">
          <img src={require("./images/GitHub-Mark-Light-32px.png").default} alt="github-logo"></img>
        </a>
        <a href="https://www.linkedin.com/in/hoanglinh99/" target="__blank">
          <img class="linkedin" style={{height: '32px', width: '32px'}} src={require("./images/linkedin-3-32.png").default} alt="linkedin-logo"></img>
        </a>
      </div>
    )
  }
}

export default Intro;
