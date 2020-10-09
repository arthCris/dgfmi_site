import React from 'react';
import {NavLink} from 'react-router-dom';
import '../../App.css';
import './index.css';

const Landing = () => {
    return (
        <>
            <div className='App-header'>
                <center className="header">DIVINE GOVERNMENT FILIPINO MARTIALS INC.</center>
                <center className="link-header"><NavLink className='App-link link' to="/dashboard">Get Started</NavLink></center>
            </div>
        </>
    )
}

export default Landing;
