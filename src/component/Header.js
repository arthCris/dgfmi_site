import React from 'react';
import {makeStyles} from '@material-ui/core/styles';

import HImage from '../assets/img/network.jpg';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: "100%",
        height: '60vh',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url(${HImage})`,
    }
}))

const Header = () => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <div className={classes.root} />
        </React.Fragment>
    )
}

export default Header;
