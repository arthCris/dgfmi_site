import React from 'react';
import {NavLink} from 'react-router-dom';
import '../../App.css';
import './index.css';

import Menu from '../../component/Menu';
import Header from '../../component/Header';
import Footer from '../../component/Footer';

const Landing = () => {
    return (
        <>
            <Menu />
            {/* <Header /> */}
            <div style={{backgroundColor: 'rgba(196, 221, 191, 1)', display: 'flex', minHeight: '100vh', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                <center className="header">DIVINE GOVERNMENT FILIPINO MARTIALS INC.</center>
                <center className="link-header"><NavLink className='App-link link' to="/dgfmi_site/dashboard">Get Started</NavLink></center>
            </div>
            <Footer />
        </>
    )
}

export default Landing;
