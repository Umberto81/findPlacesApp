import React from 'react'
import {Marker} from 'react-map-gl';
import Button from '@material-ui/core/Button';
import {  useDispatch } from "react-redux";
import Locator from './imgs/icon.png';
import useMap from '../custom_hooks/useMap';
import {updateSelectedPlace} from '../actions/mapActions';

const MarkerReloaded = React.memo(({...props}) => {
    console.log(props);
    const dispatch = useDispatch();
    const { callPlaceById, goToViewPort
      } = useMap();
    
    return (

      //test

        <Marker key={props.id} latitude={props.venue.location.lat} longitude={props.venue.location.lng}>
              <Button className={'btn-locator'} 
              onClick={e => {
                e.preventDefault();
                dispatch(updateSelectedPlace(props.venue));

                goToViewPort(props.venue.location.lat, props.venue.location.lng);
              }}>
            <img src={Locator} alt='locator' style={{width: '30px', height: '30px'}}
              onClick={id => callPlaceById(props.venue.id)}
            />
              </Button>

            </Marker>
    )
});

export default MarkerReloaded
