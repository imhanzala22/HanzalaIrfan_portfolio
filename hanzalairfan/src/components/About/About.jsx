import React from 'react';
import {AiFillTwitterCircle,AiFillFacebook,AiFillLinkedin,AiFillGithub} from 'react-icons/ai';
import './about.css';
import image from '../../Assets/svg/profile.svg';
const About = () => {
    return (
        <div >
            <div>
                <h2 className='head2'>Main Info</h2>
                <h1 className='head1'>About Me</h1>
            </div>
            <div className='Aflex'>           
             <div className='asvg'>
                <img src={image} alt="resolve your error" />
                <div className='socialsvg'>
                    <ul >
                        <li > <a href="#"><AiFillTwitterCircle/> </a></li>
                        <li > <a href="#"><AiFillFacebook/></a></li>
                        <li > <a href='#'><AiFillLinkedin/> </a></li>
                        <li > <a href="#"><AiFillGithub/></a></li>
                    </ul>
                </div>
                </div>
                <div className='adescription'>
                    <p> Hey, Hope you are having great time!</p><p> My name is <span> Hanzala Irfan </span> and I am a MERN stack developer
                        i have been working in <span> MERN Stack </span> from more than year along with i have experince of more than years
                        in differnet languages including C ,Java and SQL. 
                        My Hobbies are to explore new tech technique and implement them for the ease of people.
                    </p>
                    <button className='btn'>Hire Me</button>
                    <button className='btn'>Download Cv</button>
                </div>
            </div>

            <div className='lowerbtn'>
                <button className='btn'>Skills</button>
                <button className='btn'>Expernience</button>
                <button className='btn'>Education</button>
            </div>

        </div>
     );
}
 
export default About;