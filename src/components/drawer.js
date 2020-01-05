import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { Link } from "react-router-dom";
import CardDetails from './cardDetails';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});
//side menu, is launched by the app bar button
const Drawer = (props) => {
  const classes = useStyles();
  

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={props.toggleDrawer(side, false)}
      onKeyDown={props.toggleDrawer(side, false)}
    >
      <List justify='center'   alignItems="center">
        <Typography  variant='subtitle1' align='center' >
        {'Places Available'}

        </Typography>
      </List>
      <Divider />
      <List justify='center'>
        <CardDetails/>
      </List>
    </div>
  );


  return (
    <div>
      <SwipeableDrawer
        open={props.state.left}
        onClose={props.toggleDrawer('left', false)}
        onOpen={props.toggleDrawer('left', true)}
      >
        {sideList('left')}
      </SwipeableDrawer>
      
    </div>
  );
}

export default Drawer;
