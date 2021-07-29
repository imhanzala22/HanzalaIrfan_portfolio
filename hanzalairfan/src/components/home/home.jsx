import React from 'react';
import './home.css';
import image from '../../Assets/image/user.svg'
const Home = () => {
    return (
        
    <div  className='container home' >
            <div className='flexuse'>
                <div className='left_box'>
                    <div className='text1'>hey,  My Name is</div>
                    <div className='text2'> Hanzala Irfan </div>
                    <div className='text3'><span> MERN </span> Stack Developer</div>
            
                        <button className='btn'>Explore more</button>
            

                </div>
               <div className='right_Box'>
                 <img src={image} alt="nothing to show"/>
            </div>
        
           </div>
    </div>
     );
}
 
export default Home;