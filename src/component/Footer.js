import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './index.css';
const useStyles = makeStyles((theme) => ({
    root: {
      position: 'fixed',
      display: 'flex',
      flexWrap: 'wrap',
      overflow: 'hidden',
      bottom: 0,
      backgroundColor: theme.palette.background.paper,
    },
  }));

const Footer = () => {
    const classes = useStyles();
    
    return (
        <div className='footerContainer'>
          <center>footer</center>
        </div>
    )
}

export default Footer;
