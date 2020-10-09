import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
  }));

const AppFooter = () => {
    const classes = useStyles();
    
    return (
        <div className={classes.root}>

        </div>
    )
}

export default AppFooter;
