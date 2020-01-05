import React, {useState } from "react";
import {TimePicker } from "material-ui-pickers";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  stylePadding: {
    display: 'flex',
    justifyContent: 'flex-start',
    maxWidth: '100vw'
  }
})); 

function BasicTimePicker(props) {
  const [selectedDate, handleDateChange] = useState(new Date());
  const classes = useStyles();

  return (
       
    <div className={classes.stylePadding}>
      <TimePicker
        showTodayButton
        todayLabel="now"
        label="Select time"
        value={selectedDate}
        minutesStep={5}
        onChange={handleDateChange}
        fullWidth
      />
    </div>
     
  );
}

export default BasicTimePicker;
