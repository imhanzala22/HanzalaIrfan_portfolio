import React from 'react';
import './home.css';
import image from '../images/image/user.png'
const Home = () => {
    return (
        
    <div  className='container' >
       <div className='flexuse'>
        <div className='left_box'>
            
        <h3> hey</h3>
        <h2>My name is</h2>
        <h1>HANZALA IRFAN</h1>
        <h3>Mern Stack developer</h3>

        </div>
        <div className='right_Box'>
         <img src={image} alt="no image to show"/>
        </div>
        
        </div>
    </div>
     );
}
 
export default Home;