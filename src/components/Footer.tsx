import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WebIcon from '@mui/icons-material/Web';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/serdarcanb" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/serdarcanbuyukdereli/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
        <a href="https://blog.serdarcanb.dev/" target="_blank" rel="noreferrer"><WebIcon/></a>
      </div>
      <p>A portfolio designed & built by <a href="https://github.com/serdarcanb/react-portfolio-template" target="_blank" rel="noreferrer">Serdarcan Büyükdereli</a> with 💜</p>
    </footer>
  );
}

export default Footer;