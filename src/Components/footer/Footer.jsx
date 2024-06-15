import React from 'react';
import theme_pattern from "../../assets/theme_pattern.svg";
import personIcon from "../../assets/user_icon.svg";
import "./Footer.css";

const Footer = () => {
  return (
    <div className='Footer'>
        <div className="footerUp">
            <div className="footerUpLeft">
                <h1>Abhi</h1>
                <img src={theme_pattern} alt='themeImg'/>
                <p>I am a frontend developer from, USA with 10 years of experience in companies like Microsoft, Tesla and Apple.</p>
            </div>
            <div className="footerUpRight">
                <img src={personIcon} alt='personIcon'/>
                <input type="text" placeholder='Enter Your email'/>
                <button>Subscribe</button>
            </div>
        </div>
        <hr />
        <div className="footerDown">
            <div className="footerDownLeft">
                <p>© 2023 Abhi verma, All Rights Reserved.</p>
            </div>
            <div className="footerDownRight">
                <p>Term of Services</p>
                <p>Privacy Policy</p>
                <p>Connect with me</p>
            </div>
        </div>
    </div>
  )
}

export default Footer