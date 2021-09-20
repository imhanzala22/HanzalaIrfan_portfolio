import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './contactform.css';
const Contactform = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_5rs1gmd', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
    };
    return (
        
         <div>
              
                    <div className='container cform' >
                        <input type="text" id='Name' placeholder='Name' />
                        <input type="text" id='Name' placeholder='Email' />
                        <input type="text" id='Name' placeholder='Contact no' />
                        <textarea name="subject" id="subject" cols="30" rows="10" placeholder='tell something about your project'></textarea>
                        <button className='btn'>submit</button>
                   </div>

        </div> 
    );
}
 
export default Contactform;