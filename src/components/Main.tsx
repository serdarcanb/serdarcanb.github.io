import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WebIcon from '@mui/icons-material/Web';
import myImage from '../assets/images/photo.png'; // Adjust the path as necessary

import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={myImage} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/serdarcanb" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/serdarcanbuyukdereli/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="https://blog.serdarcanb.dev/" target="_blank" rel="noreferrer"><WebIcon/></a>
          </div>
          <h1>Serdarcan Büyükdereli</h1>
          <p>Senior DevOps & Cloud Engineer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/serdarcanb" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/serdarcanbuyukdereli/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="https://blog.serdarcanb.dev/" target="_blank" rel="noreferrer"><WebIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;