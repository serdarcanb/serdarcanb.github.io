import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src="https://serdarcanb.github.io/assets/images/bio-photo.png" alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/serdarcanb" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/serdarcanbuyukdereli/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Serdarcan Büyükdereli</h1>
          <p>Senior DevOps & Cloud Engineer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/serdarcanb" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/serdarcanbuyukdereli/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;