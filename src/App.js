import React from 'react';
import './index.css'; 
import Navbar from './Components/navBar/Navbar';
import Hero from "./Components/Hero/Hero";
import About from "./Components/about/About";
import Services from './Components/Services/Services';
import Work from "./Components/Work/Work";
import Contact from "./Components/contact/Contact";

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Work />
      <Contact />
    </div>
  )
}

export default App;