import React, { useRef,useState } from 'react';
import emailjs from 'emailjs-com';
import './contactform.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contactform = () => {
    const [loading,setloading]=useState(false);
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        if(form.current.name.value && form.current.email.value && form.current.message.value){
            setloading(true)
            emailjs.sendForm('service_5rs1gmd', 'template_796qrgt', form.current, 'user_hnjcxnfy7CFLq2XRP84Bf')
            .then((result) => {
                toast.success("Email sent successfully");
                setloading(false)
                form.current.name.value = ""
                form.current.email.value = ""
                form.current.contactNo.value = ""
                form.current.message.value = ""
            }, (error) => {
                console.log(error.text);
                toast.warn("Error while sending email");
                setloading(false)
            });
        }
        else {
            toast.warn("Fill all the fields");
        }
    };
    
    return (
        
         <div>
                <form className='container cform' ref={form} onSubmit={sendEmail} >
                <input type="text" placeholder='Name' name="name" required />
                <input type="email" name="email" placeholder='Email' required />
                <input type="text" placeholder='Contact No' name="contactNo"  />
                <textarea name="subject" id="subject" cols="30" rows="10" placeholder='Tell something about your project' name='message' required></textarea>
                
                <button className='btn' onClick={sendEmail} disabled={loading}>{loading?  "sending":"Submit"}</button>
                <ToastContainer />
                </form>
        </div> 
    );
}
 
export default Contactform;