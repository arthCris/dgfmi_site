import React, { useState } from 'react';
import { Grid, Button } from '@material-ui/core';
import {NavLink, Link} from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';
import './index.css';

const useStyles = makeStyles((theme) => ({
  root: {
      flexGrow: 1,
      width: "100%",
      minHeight: "100vh",
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundImage: "url('https://venngage-wordpress.s3.amazonaws.com/uploads/2018/09/Colorful-Geometric-Simple-Background-Image.jpg')",
  },
  nav: {
    textDecoration: "none",
    fontSize: 25,
    padding: 20,
  },
}))

const Menu = () => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    return (
        <div className='menuContainer'>
          <Grid
            container
            justify="left"
            alignItems="baseline"
            style={{ backgroundColor: 'rgba(115, 164, 83, 1)' }}>
          <Grid container item xs={2} justify="center">
            <NavLink className={classes.nav} to="/">DGFMI</NavLink>
          </Grid>
          <Grid container item xs={4} />
          <Grid container item xs={1}>
          <Button aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick}>
            <Link className='link' to="/dashboard">Dashboard</Link>
          </Button>
          </Grid>
          <Grid container item xs={1}>
          <Button aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick}>
            <Link className='link' to="/about">About Us</Link>
          </Button>
          </Grid>
          <Grid container item xs={1}>
          <Button aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick}>
            <Link className='link' to="/activity">Activity</Link>
          </Button>
          </Grid>
        </Grid>
        </div>
    )
}

export default Menu;
