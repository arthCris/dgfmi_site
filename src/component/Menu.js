import React, { useState } from 'react';
import { Grid, Button } from '@material-ui/core';
import {NavLink, Link} from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';

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
  }
}))

const Menu = () => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    return (
        <div style={{position: 'fixed', width: '100%', top: 0}}>
          <Grid
            container
            justify="left"
            alignItems="baseline"
            style={{ backgroundColor: 'rgba(220, 245, 25, 1)' }}>
          <Grid container item xs={2} justify="center">
            <NavLink className={classes.nav} to="/">DGFMI</NavLink>
          </Grid>
          <Grid container item xs={5} />
          <Grid container item xs={1}>
          <Button aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick}>
            <Link to="/dashboard">Dashboard</Link>
          </Button>
          </Grid>
          <Grid container item xs={1}>
          <Button aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick}>
            <Link to="/about">About Us</Link>
          </Button>
          </Grid>
          <Grid container item xs={1}>
          <Button aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick}>
            <Link to="/activity">Activity</Link>
          </Button>
          </Grid>
        </Grid>
        </div>
    )
}

export default Menu;
