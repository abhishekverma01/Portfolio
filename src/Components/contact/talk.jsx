import React from 'react'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_iconn from '../../assets/call_icon.svg'
import './talk.css'

const Talk = () => {
  return (
    <div className='talk touch_left'>
        <h1 className='talk_heading'>Let's talk</h1>
        <p className='touch_leftPara'>
        I'm currently avaliable to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.
        </p>
        <div className="icons">
            <img src={mail_icon} alt='mailImg'/>
            <p>av949542@gmail.com</p>
        </div>
        <div className="icons">
            <img src={call_iconn} alt='mailImg'/>
            <p>+989-389-3453</p>
        </div>
        <div className="icons">
            <img src={location_icon} alt='mailImg'/>
            <p>Madhya pradesh, INDIA</p>
        </div>
    </div>
  )
}

export default Talk