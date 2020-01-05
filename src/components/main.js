import React from 'react'
import Grid from '@material-ui/core/Grid';
import NavBar from './navBar';
import Box from '@material-ui/core/Box';
import OptionsComponent from './optionsComponent';
import Map from './map';
import Typography from '@material-ui/core/Typography';
import DialogPopUp from './dialog';

const Main = () =>{

    return(
      <div className='test'>
    <Grid container spacing={1} className='bg'>
      <Grid item xs={12}>
          <NavBar />
        </Grid>
        <Grid item xs={1} sm={1} lg={1} md={1}>
        </Grid>
        <Grid item xs={12} sm={12} md={5} lg={5}>
          <Box
            color='white'
            fontFamily="h6.fontFamily"
            fontSize={{ xs: 'h6.fontSize', sm: 'h4.fontSize', md: 'h3.fontSize' }}
            p={{ xs: 2, sm: 3, md: 4 }}
          >
            <Typography  variant="h2" component="h2" gutterBottom={true} >
            Find a place in seconds
            </Typography>
            <Typography variant='h4' component='h4'>
            Choose from million of different places
            </Typography>
          </Box>
          <OptionsComponent />
          <DialogPopUp />
        </Grid>
        <Grid item xs={12} sm={12}  md={6} lg={6}>
          <Map />
        </Grid>

        
      </Grid>
      </div>


    );
}

export default Main;