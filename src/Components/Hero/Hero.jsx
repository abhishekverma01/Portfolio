import React from 'react';
import "./Hero.css";
// import profile_img from "../../assets/profile_img.svg";
import photoSec from "../../assets/photoSec.jpg"

const Hero = () => {
  return (
    <div id="home" className="Hero"> 
      <div className="heroImg">
        <img src={photoSec} alt='myImg'/>
      </div>
      <h1><span>I'm Abhishek,</span> React Developer based in India.</h1>
      <p>I am Full Stack developer and honing my skills in React to develop amazing Dynamic Websites and in Problem Solving.</p>
      <div className="action">
        <div className="hero-connect">Connect with me</div>
        <div className="resume">My Resume</div>
      </div>
    </div>
  )
}

export default Hero