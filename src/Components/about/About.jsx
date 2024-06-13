import React from 'react'
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import photoThird from "../../assets/photoThird.jpg";


const About = () => {
  return (
    <div className='about'>
      <div className="heading">
        <h1>About me</h1>
        <img className="theme" src={theme_pattern} alt='themeImg'/>
      </div>
      <div className="aboutSection">
        <div className="aboutLeft">
          <img src={photoThird} alt='myImage'/>
        </div>
        <div className="aboutRight">
          <div className="above">
            <p className="para1">I am an experienced Frontend Developer with over a decade of professional expertise in the field. Throughout my career, I have had the privilege of collaborating with prestigious organizations, contributing to their success and growth.
            </p>
            <p className="para2">My passion for frontend development is not only reflected in my extensive experience but also in the enthusiasm and dedication I bring to each project.
            </p>
           </div>
          <div className="below">
            <div className="skills skill1">
            <p>HTML & CSS</p>
            <hr></hr>
            </div>
            <div className="skills skill2">
            <p>React.js</p>
            <hr></hr>
            </div>
            <div className="skills skill3">
            <p>Javascript</p>
            <hr></hr>
            </div>
            <div className="skills skill4">
            <p>Next.js</p>
            <hr></hr>
            </div>
          </div>
        </div>
      </div>
      <div className="aboutBottom">
        <div className="exp">
          <h1>10+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <div className="project">
          <h1>90+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <div className="client">
          <h1>50+</h1>
          <p>HAPPY CLIENTS</p>
        </div>

      </div>
    </div>
  )
}

export default About