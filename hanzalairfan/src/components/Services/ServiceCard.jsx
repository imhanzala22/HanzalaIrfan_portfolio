import React from 'react';
import { Services } from './services';
import './ServiceCard.css';
const ServiceCard = () => {
    return (
    
    <div>
      
      <h2 className='head2'> Services</h2>
      <h1 className='head1'>What I Do</h1>
      
	<div className="containers">

        
          {
           Services.map((Service)=>{


             return (
            <div className="card1" key={Service.id}>
                <div className="item item1">
                    <div className="content">
                     {Service.icon}  
                        <h3>{Service.title}</h3>
                    </div>
                </div>
                <div className="item item2">
                    <p>
                    {Service.description.substring(0,105)}.....    
                    </p>
                </div>
            </div>
            
            )})}
</div>
 
</div>
     );
}
 
export default ServiceCard;