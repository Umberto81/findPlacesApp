import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {  useDispatch } from "react-redux";
import {setSelectedPlace} from '../actions/selectionAction';


const useStyles = makeStyles(theme => ({

  formControl: {
    margin: theme.spacing(1),
    maxWidth: '100vw',
    display: 'flex',
    justifyContent: 'flex-start',
  },
  label:{
    color: 'white',
  },
  focused: {
    color: 'white'
  },
  select: {
    color: 'white'
  }

}));



export default function FieldComponent() {
  const dispatch = useDispatch();

  const classes = useStyles();
  const [places, setPlaces] = React.useState('');

  const handleChange = event => {
    setPlaces(event.target.value);
    dispatch(setSelectedPlace(event.target.value));
  };


  return (
    <div>
 
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label" className={classes.label}>Select a place</InputLabel>
        <Select className={classes.select}
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          value={places}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={'4deefb944765f83613cdba6e'}>Historic Site</MenuItem>
          <MenuItem value={'4bf58dd8d48988d1fa931735'}>Hotel</MenuItem>
          <MenuItem value={'4d4b7105d754a06374d81259'}>Food</MenuItem>
          <MenuItem value={'4bf58dd8d48988d181941735'}>Museo</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}