import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { useSelector } from 'react-redux'
import Typography from '@material-ui/core/Typography';
import {  useDispatch } from "react-redux";
import {setOpen} from '../actions/selectionAction';
import {updateSelectedPlace} from '../actions/mapActions';
import useMap from '../custom_hooks/useMap';


function CardDetails(){
    const {
       callPlaceById
      } = useMap();
    const venue = useSelector(state => state.coords);

    const dispatch = useDispatch();


    const handleClickOpen = ( place) => {
      dispatch(updateSelectedPlace(place));
      callPlaceById(place.id);
      dispatch(setOpen(true));
    };

    
   return(
       <div>
          {venue && venue.map(item =>{
              return(
                  <Card key={item.venue.id} align='center' style={{backgroundColor:'#f7f7f7'}}>
                      <Button onClick={e => {e.preventDefault();
                        handleClickOpen(item.venue)}}>
                      <CardContent key={item.venue.id}>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {item.venue.name + 'test'}
                        </Typography>
                        <Typography variant='caption'>
                          <p>{item.venue.location.address}</p>
                        </Typography>
                      </CardContent>
                      </Button>
                    
                  </Card>
              )
          })}
       </div>
   );
   
 
}

export default CardDetails;