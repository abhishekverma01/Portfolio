import React from 'react'
import "./form.css";

const Form = () => {
  return (
    <div className='form touch_right'>
        <form >
            <div className="container">
                <label htmlFor="name">Your Name</label>
                <input type="text" id='name' name='user_name' placeholder='Enter Your Name'/>
            </div>
            <div className="container">
                <label htmlFor="mail">Your Email</label>
                <input type="text" id='mail' name='email' placeholder='Enter Your Email'/>
            </div>
            <div className="container text_area">
                <label htmlFor="message">Write Your Message here</label>
                <textarea name="message" id="message" rows={8} placeholder='Enter Your Message'></textarea>
            </div>
            <div className="formSubmit">
                    Submit now
            </div>
        </form>
    </div>
  )
}

export default Form;