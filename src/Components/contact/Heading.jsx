import React from 'react';
import "./heading.css"
import theme_pattern from "../../assets/theme_pattern.svg";

const Heading = () => {
  return (
    <div className='touch_heading'>
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt='theme'/>
    </div>
  )
}

export default Heading