import React from 'react'
import './Portfolio.css';
import { projects } from './projects';

const PortfolioCard = ({project}) => {
    return (
        <div key={project.id} className={`portfolio_card ${project.alignment}`}>
            <div className='port_card'>
               <img src={project.img} alt="bolna nahi" /> 
            </div>
            <div className={`port_texts ${project.alignment}`}>
                <h1>{project.title}</h1>
                <div id="line"></div>
                <h3>Description</h3>
                <p> {project.desc}</p>
            </div>
        </div>
    )
}

const Portfolio = () => {

    return (
        <div className='container'>
            <h1 id="center"> My recent work</h1>
            <div id="line"></div>
            {projects.map((project)=>{
                return(
                    <PortfolioCard project={project} />   
                )

            })}

            
        </div>
    )
}

export default Portfolio;
