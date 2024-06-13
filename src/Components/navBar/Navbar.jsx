import React from 'react';
import "./Navbar.css";
import "../../assets/portfolioi1.png"

const Navbar = () => {
  return (
    <nav className="navbar">
        <div className="logo">
            <a href='https://cdn-icons-png.flaticon.com/512/726/726056.png'>Abhishek</a>
        </div>
        <div className='navlist_container'>
            <ul className="list">
                <li>Home</li>
                <li>AboutMe</li>
                <li>Services</li>
                <li>Portfolio</li>
                <li>Contact</li>
            </ul>
        </div>
        <div className="connect">Connect With Me</div>
    </nav>
  )
}

export default Navbar
