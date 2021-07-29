import React from 'react';
import './about.css';
import image from '../../Assets/svg/profile.svg'
const About = () => {
    return (
        <div >
            <div className='Aflex'>           
             <div className='asvg'>
                <img src={image} alt="resolve your error" />
                </div>
                <div className='adescription'>
                    <p> Hey, Hope you are having great time!</p><p> My name is <span> Hanzala Irfan </span> and I am a MERN stack developer
                        i have been working in <span> MERN Stack </span> from more than year along with i have experince of more than years
                        in differnet languages including C ,Java and SQL. 
                        My Hobbies are to explore new tech technique and implement them for the ease of people.
                    </p>
                </div>
            
            </div>

        </div>
     );
}
 
export default About;