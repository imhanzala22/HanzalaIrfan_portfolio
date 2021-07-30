import React from 'react';
import './contactform.css';
const Contactform = () => {
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