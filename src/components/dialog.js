import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import { useSelector } from 'react-redux'
import {  useDispatch } from "react-redux";
import {setOpen} from '../actions/selectionAction';

const styles = theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)(props => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function DialogPopUp() {
  const venueSelected = useSelector(state => state.venue);
  const open = useSelector(state => state.cardBoolean);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(setOpen(false));
  };

    return (
        <div>

      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
        {venueSelected && venueSelected.name}
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom align='justify'>
          {/* {venueSelected && venueSelected.description || 'no description for this site'} */}
          {venueSelected.hasOwnProperty('description')  ? venueSelected.description : 'no description for this site'}
          </Typography>
          <Typography gutterBottom>
           <p><a href={venueSelected.hasOwnProperty('url') ?  venueSelected.url : '#'}>Go to website</a></p>
          </Typography>
          <Typography gutterBottom>
             <p>Rating: {venueSelected.hasOwnProperty('rating') ? venueSelected.rating : 'no rating for this place'}</p>
          </Typography>
          <Typography>
            <img src={venueSelected.hasOwnProperty('bestPhoto') ? venueSelected.bestPhoto.prefix+'500x300'+venueSelected.bestPhoto.suffix : ''} alt='' />
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
      </div>
    );


}