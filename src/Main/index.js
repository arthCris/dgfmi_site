import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: "100%",
        minHeight: "100vh",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundImage: "url('https://venngage-wordpress.s3.amazonaws.com/uploads/2018/09/Colorful-Geometric-Simple-Background-Image.jpg')",
    }
}))

const Main = () => {
  const classes = useStyles();
    return (
        <div className={classes.root}>
              
        </div>
    )
}

export default Main;
