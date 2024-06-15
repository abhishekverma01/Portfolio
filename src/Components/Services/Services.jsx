import React from 'react';
import "./Services.css";
import Skill from './Skill';
import theme_pattern from "../../assets/theme_pattern.svg";
import services_data from '../../assets/services_data';
const Services = () => {
  return (
    <div id="Services" className='Services'>
        <div className="servicTitle">
            <h1>My Services</h1>
            <img src={theme_pattern} alt='theme' />
        </div>
        <div className="servicesBox">
        {services_data.map((service, idx) => {
           return (<Skill 
                key={idx}
                s_no={service.s_no}
                s_name={service.s_name}
                s_desc={service.s_desc}
            />)
        })}
        </div>
    </div>
  )
}

export default Services