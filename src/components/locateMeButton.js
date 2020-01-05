import React from 'react'
import Button from '@material-ui/core/Button';
import CreateIcon from '@material-ui/icons/Create';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";import clsx from 'clsx';
import useMap from '../custom_hooks/useMap';
import GpsFixedIcon from '@material-ui/icons/GpsFixed';


const LocateMeButton = () => {
    const useStyles = makeStyles(theme => ({
        button: {
          margin: theme.spacing(1),
        },
        leftIcon: {
          marginRight: theme.spacing(1),
        },
        rightIcon: {
          marginLeft: theme.spacing(1),
        },
        iconSmall: {
          fontSize: 20,
        },
      }));

      const classes = useStyles();

      const {getPosition } = useMap();
    
    return (
    
            <Button color='primary' variant='contained' onClick={getPosition} fullWidth > 
            <GpsFixedIcon className={clsx(classes.iconSmall)} >create</GpsFixedIcon>
            </Button>
    )
}

export default LocateMeButton;
