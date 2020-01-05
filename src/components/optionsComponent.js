import React from 'react'
import LocateMeButton from './locateMeButton';
import BasicDatePicker from './basicDatePicker';
import BasicTimePicker from './basicTimePicker';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';
import FieldComponent from './fieldComponent';
import Box from '@material-ui/core/Box';
import useMap from '../custom_hooks/useMap';


const OptionsComponent = () => {

    const {
        getPlaces
      } = useMap();
    return (
        <Grid container spacing={1} display="flex" alignItems="center">
            <Grid item xs={10} md={6}>
                    <FieldComponent />
            </Grid>
            <Grid item xs={2} md={4}>
                <Box m={2} >
                    <LocateMeButton />
                </Box>
            </Grid>
            <Grid item xs='6'>
                    <BasicDatePicker />
            </Grid>
            <Grid item xs='6'>
                    <BasicTimePicker />
            </Grid>
            <Grid item xs='12'>
            <Box m={2}>
                <Button color='primary' variant='contained' size='large' fullWidth onClick={getPlaces}>Find</Button>
            </Box>
            </Grid>
        </Grid>
    )
}

export default OptionsComponent
