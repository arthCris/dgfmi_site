import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';

import '../tailwind.output.css';
import './index.css';
// const useStyles = makeStyles((theme) => ({
//     root: {
//       position: 'fixed',
//       display: 'flex',
//       flexWrap: 'wrap',
//       overflow: 'hidden',
//       bottom: 0,
//       backgroundColor: theme.palette.background.paper,
//     },
//   }));

const Footer = () => {
    return (
        <div className='w-full fixed bottom-0 bg-gradient-to-bl bg-green-500'>
          <center>footer</center>
        </div>
    )
}

export default Footer;
