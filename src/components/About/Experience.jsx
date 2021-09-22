import React from 'react';
import { Experiences } from './experiences';
import './Experience.css';
const Experience = () => {
    return (
        <div>
            <div className='containers exprt'>
            {
           Experiences.map((Experiences)=>{


             return (
            <div className="card1" key={Experiences.id}>
                <div className="item item1">
                    <div className="contents">
                     {Experiences.working}  
                        <h3>{Experiences.title}</h3>
                    </div>
                </div>
                <div className="item item2">
                    <p>
                    {Experiences.description.substring(0,105)}.....    
                    </p>
                </div>
                <h3 className='contents'>
                    {Experiences.position}
                </h3>
            </div>
            
            )})}

            </div>
        </div>
    );
}
 
export default Experience;