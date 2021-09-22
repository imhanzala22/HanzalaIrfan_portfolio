import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { navData } from './nav';
 
const Navbar = () => {
    const [nav,setnav] = useState('closeNav');
    const openNav = () => {
        setnav('openNav');
        document.body.style.overflowY = "hidden";
    }
    const closeNav = () => {
        setnav('closenav');
        document.body.style.overflowY = "auto";
    }
    
    return (
        <div className='overlay-content'>
                <div id={`myNav`} className={`overlay ${nav}`}>
                    <a className="closebtn" onClick={closeNav}>&times;</a>
                    <div className="overlay-content">
                        {navData.map((nav, index) => {
                            return (
                                <Link key={nav.id} to={nav.path} onClick={closeNav}>{nav.title}</Link>
                            )
                        })}
                    </div>
                </div>


           <span className="tool" onClick={openNav}>&#9776;</span>

        </div>
    )
}

export default Navbar
