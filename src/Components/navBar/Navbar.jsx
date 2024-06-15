import React from 'react';
import "./Navbar.css";
import "../../assets/portfolioi1.png"
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Navbar = () => {
  return (
    <nav className="navbar">
        <div className="logo">
            <a href='https://cdn-icons-png.flaticon.com/512/726/726056.png'>Abhishek</a>
        </div>
        <div className='navlist_container'>
            <ul className="list">
                <li><AnchorLink href='#home' className='anchorLinks'>Home</AnchorLink></li>
                <li><AnchorLink href='#aboutMe' className='anchorLinks'>AboutMe</AnchorLink></li>
                <li><AnchorLink href='#Services' className='anchorLinks'>Services</AnchorLink></li>
                <li><AnchorLink href='#Portfolio' className='anchorLinks'>Portfolio</AnchorLink></li>
                <li><AnchorLink href='#Contact' className='anchorLinks'>Contact</AnchorLink></li>
            </ul>
        </div>
        <div className="connect"><AnchorLink href='#Contact' className='anchorLinks'>Connect with me</AnchorLink></div>
    </nav>
  )
}

export default Navbar
