import React from 'react';
import {NavLink} from 'react-router-dom';
// import {makeStyles} from '@material-ui/core/styles';

import '../../App.css';
import './index.css';

import Menu from '../../component/Menu';
import Footer from '../../component/Footer';
import '../../tailwind.output.css';
// const useStyles = makeStyles((theme) => ({
//     landingTitle: {
//         backgroundColor: 'rgba(196, 221, 191, 1)',
//         display: 'flex',
//         minHeight: '100vh',
//         flexDirection: 'column',
//         alignItems: 'center',
//         justifyContent: 'center',
//         marginTop: 20,
//     }
//   }))

const Landing = () => {
    return (
        <>
            <Menu />
            {/* <Header /> */}
            <div className="w-full justify-center mx-auto flex p-6 bg-gray-100 rounded-lg shadow-xl grid grid-flow-row">
                <p className="flex-no-wrap w-full p-10 mt-1 flex">DIVINE GOVERNMENT FILIPINO MARTIALS INC.</p>
            </div>
            <p className="flex justify-center md:1/12"><NavLink className='App-link link' to="/dgfmi_site/dashboard"><p className="text-green-500">Get Started</p></NavLink></p>
            <Footer />
        </>
    )
}

export default Landing;
