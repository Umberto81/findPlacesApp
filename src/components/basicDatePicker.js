import React, {useState } from "react";
import { DatePicker } from "material-ui-pickers";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  stylePadding: {
    display: 'flex',
    justifyContent: 'flex-start'
  }
})); 


function BasicDatePicker(props) {
  const [selectedDate, handleDateChange] = useState(new Date());
  const classes = useStyles();
  return (
       
      <div className={classes.stylePadding}>
        <DatePicker
          autoOk
          label="select date"
          clearable
          disableFuture
          value={selectedDate}
          onChange={handleDateChange}
          fullWidth
        />
      </div>    
     
  );
}

export default BasicDatePicker;
