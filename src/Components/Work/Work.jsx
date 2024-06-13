import React from 'react'
import theme_pattern from "../../assets/theme_pattern.svg";
import mywork_data from "../../assets/mywork_data";
import arrow_icon from "../../assets/arrow_icon.svg"
import "./Work.css";

const Work = () => {
  return (
    <div className='work'>
        <div className="workTitle">
            <h1>My Services</h1>
            <img src={theme_pattern} alt='theme' />
        </div>
        <div className="workDone">
           {mywork_data.map(data => {
            return (<img className="workdata" src={data.w_img} alt='workImg' />)
           })
          }
        </div>
        <div className="showMore">
            <p>Show More</p>
            <img src={arrow_icon} alt='arrow'/>
        </div>
    </div>
  )
}

export default Work;