import React from 'react';
import Heading from './Heading';
import Talk from './talk';
import Form from './form';

import "./Contact.css"
const Contact = () => {
  return (
    <div className='Contact'>
      <Heading />
       <div className="bottom">
       <Talk />
       <Form />
       </div>
    </div>
  )
}

export default Contact;