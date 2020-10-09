import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import {
  Drawer,
  Button,
  Toolbar,
  AppBar,
  Typography,
  Grid,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Container,
  Fade,
} from '@material-ui/core';
import {FormRow} from '@material-ui/core/FormControl';
import InboxIcon from '@material-ui/icons/Inbox';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme)=>({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  root: {
    flexGrow: 1,
    width: "100%",
    minHeight: "100vh",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundImage: "url("+'https://venngage-wordpress.s3.amazonaws.com/uploads/2018/09/Colorful-Geometric-Simple-Background-Image.jpg'+")",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

export default function AppMenu() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const [value, setValue] = React.useState(0);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // const toggleDrawer = (anchor, open) => (event) => {
  //   if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
  //     return;
  //   }

  //   setState({ ...state, [anchor]: open });
  // };

  // const list = (anchor) => (
  //   <div
  //     className={clsx(classes.list, {
  //       [classes.fullList]: anchor === 'top' || anchor === 'bottom',
  //     })}
  //     role="presentation"
  //     onClick={toggleDrawer(anchor, false)}
  //     onKeyDown={toggleDrawer(anchor, false)}
  //   >
  //      <List>
  //       {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
  //         <ListItem button key={text}>
  //           <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
  //           <ListItemText primary={text} />
  //         </ListItem>
  //       ))}
  //     </List>
  //     <Divider />
  //     <List>
  //       {['All mail', 'Trash', 'Spam'].map((text, index) => (
  //         <ListItem button key={text}>
  //           <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
  //           <ListItemText primary={text} />
  //         </ListItem>
  //       ))}
  //     </List> 
  //   </div>
  // );

  return (
    <div className={classes.root}>
      <Container>
        <Grid
          container
          justify="left"
          alignItems="baseline"
          style={{ padding: '1.5% 0px 0 0', backgroundColor: 'rgba(255, 255, 255, .5)' }}>
          <Grid container item xs={2} justify="center">
            <h1>DGFMI</h1>
          </Grid>
          <Grid container item xs={4} />
          <Grid container item xs={2}>
          <Button aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick}>
            content
          </Button>
          </Grid>
        </Grid>
        <Menu
          id="fade-menu"
          anchorEl={anchorEl}
          keepMounted
          open={open}
          onClose={handleClose}
          TransitionComponent={Fade}
        >
          <MenuItem onClick={handleClose}>Preface</MenuItem>
          <MenuItem onClick={handleClose}>Foreword</MenuItem>
        </Menu>
      </Container>

      {/* <AppBar position="static" style={{backgroundColor: 'rgba(255,255,255, 0.5)'}}>
        <Toolbar> */}
          {/* <IconButton edge="start" className={classes.menuButton} aria-label="menu">
          {['left'].map((anchor) => (
            <React.Fragment key={anchor}>
              <MenuIcon onClick={toggleDrawer(anchor, true)}/>
              <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                {list(anchor)}
              </Drawer>
            </React.Fragment>
          ))}
          </IconButton> */}
          {/* <Typography variant="h6">
            DGFMI
          </Typography> */}
          {/* <Button color="inherit" onClick={handleClick}><MoreVertIcon /></Button> */}
        {/* </Toolbar>
      </AppBar> */}
      {/* <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu> */}
    </div>
  );
}