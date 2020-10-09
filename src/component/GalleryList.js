import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { GridList, GridListTile, GridListTileBar, IconButton} from '@material-ui/core';
import StarBorderIcon from '@material-ui/icons/StarBorder';

import {tileData} from '../services/tileData';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      height: 560,
    },
    icon: {
      color: 'rgba(255, 255, 255, 0.54)',
    },
  }));

const GalleryList = () => {
    const classes = useStyles();
    return (
        <>
          <div className={classes.root}>
            <GridList cellHeight={250} cols={5} className={classes.gridList}>
              {tileData.map((tile) => (
                <GridListTile key={tile.img}>
                  <img src={tile.img} alt={tile.title} />
                  {/* <GridListTileBar
                    title={tile.title}
                  /> */}
                </GridListTile>
              ))}
            </GridList>
          </div>
        </>
    )
}

export default GalleryList;
