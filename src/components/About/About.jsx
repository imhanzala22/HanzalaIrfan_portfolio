import React ,{useState} from 'react';
import { Link } from 'react-router-dom';
import {AiFillTwitterCircle,AiFillFacebook,AiFillLinkedin,AiFillGithub} from 'react-icons/ai';
import './about.css';
import image from '../../Assets/svg/profile.svg';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';
import CV from '../../Assets/Cv/cv.pdf'
const About = () => {
    const [check,setcheck]=useState('skill');
    return (
        <div >
            <div>
                <h2 className='head2'>Main Info</h2>
                <h1 className='head1'>About Me</h1>
            </div>

            <div className='maintheme'>
                <div className='svgbox'>
                <img className='svg_allignment' src={image} alt="resolve your error" />
                <div className='socialsvg'>
                <ul >
                        <li > <a href="#"><AiFillTwitterCircle/> </a></li>
                        <li > <a href="#"><AiFillFacebook/></a></li>
                        <li > <a href='https://www.linkedin.com/in/hanzala-irfan-05bba6208'><AiFillLinkedin/> </a></li>
                        <li > <a href="https://github.com/imhanzala22"><AiFillGithub/></a></li>
                    </ul>
                </div>
                </div>
                <div className='text_box'>
                    <div className='text_setting'>
                    <p> Hey, Hope you are having great time!</p><p> My name is <span> Hanzala Irfan </span> and I am a MERN stack developer
                        i have been working in <span> MERN Stack </span> from more than year along with i have experince of more than years
                        in differnet languages including C ,Java and MySQL. 
                        My Hobbies are to explore new tech technique and implement them for the ease of people.
                    </p>

                    </div>
                   
                    <div className='about_btn_allignment'>
                    <button className='btn'><Link to="/contact">Hire Me here</Link></button>
                    <button className='btn'><a href={CV} download="Hanzala Irfan">Download Cv</a></button>
                    </div>
                </div>

            </div>
            
            <div className='lowerbtn'>
                <button className='btn' onClick={() => setcheck('skill')}>Skills</button>
                <button className='btn' onClick={()=>setcheck('experience')}>Expernience</button>
                <button className='btn' onClick={()=>setcheck('education')}>Education</button>
            </div>
                <div>
                    {check === 'education' ? <Education/> : null}
                    {check === 'experience' ? <Experience/> : null}
                    {check === 'skill' ? <Skills /> : null}
                </div>
        </div>
     );
}
 
export default About;  