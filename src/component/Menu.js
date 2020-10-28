import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';

import '../tailwind.output.css';
import logo from '../assets/img/logo.jpg';
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
    marginTop: 20,
  },
  logo: {
    width: "70px",
    height: "90px",
    paddingTop: 5,
    margin: 0,
  }
}))

const Menu = () => {
    const classes = useStyles();
    // const [anchorEl, setAnchorEl] = useState(null);

    // const handleClick = (event) => {
    //     setAnchorEl(event.currentTarget);
    // };

    return (
        <div className='w-full sticky top-0 bg-gradient-to-bl shadow-md bg-green-500'>
          <div className=" grid grid-cols-2">
          <div className="ml-4 mb-2 ">
            <NavLink className="container" to="/dgfmi_site"><img alt="logo" className={classes.logo} src={logo}/></NavLink>
          </div>
          <div className="flex sm:hidden sm:block lg:ml-6 mr-10 justify-end">
            <a href="#s" className="menu">hello</a>
          </div>
          <div className="hidden sm:block sm:ml-6">
            <div className="flex grid grid-cols-4">
              <div />
              <Link className='link text-center' to="/dgfmi_site/dashboard">Dashboard</Link>
              <Link className='link text-center' to="/dgfmi_site/about">About Us</Link>
              <Link className='link text-center mr-20' to="/dgfmi_site/activity">Activity</Link>
            </div>
          </div>
        </div>
        </div>
    )
}

export default Menu;
