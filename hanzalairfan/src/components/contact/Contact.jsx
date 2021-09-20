import React from 'react';
import {Contacts} from './Contacts';
import './Contact.css';
import Contactform from './contactform';
const Contact = () => {
    return (
         <div className='contact'>
             
             <h2 className='head2'>Contact</h2>
             <h1 className='head1'>Get In touch</h1>
            
             <div className="container cards" >
            {
                Contacts.map( (contact)=>{
                return(
            
           <div class="card card__1 key={Contact.id}">
              <div className='cicon'>{contact.icon}</div> 
            <h3 class="pricing__name ">{contact.title}</h3>
            <p className='pricing__name'>{contact.description}</p>
        </div>
        
        )})}
        </div>
                    
                    <Contactform/>
        </div>

        
        );
}
 
export default Contact;