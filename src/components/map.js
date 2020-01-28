import React from "react";
import ReactMapGL, {Marker, NavigationControl, Popup} from 'react-map-gl';
import Locator from './imgs/icon.png';
import Button from '@material-ui/core/Button';
import useMap from '../custom_hooks/useMap';
import { useSelector } from 'react-redux'
import {  useDispatch } from "react-redux";
import {updateSelectedPlace} from '../actions/mapActions';
import {setOpen} from '../actions/selectionAction';
import MarkerReloaded from './markerReloaded';

function Map() {
 
  const {
    latitude, longitude,view, 
    setview, callPlaceById,
  } = useMap();

  //state from redux array
const places = useSelector(state => state.coords);
const dispatch = useDispatch();
const reduxSelectedPlace = useSelector(state => state.selectedPlace);

 return(
    <div>
       <ReactMapGL
        //mapStyle='mapbox://styles/mapbox/satellite-v9'
         mapStyle="mapbox://styles/mapbox/dark-v9"
        // mapStyle='mapbox://styles/mapbox/streets-v9'
        {...view}
        mapboxApiAccessToken={process.env.REACT_APP_TOKEN}
        onViewportChange={view =>{
        setview(view);}}
        width="100%" // It always override the view(viewport) width state.
        height="100vh" // It always override the view(viewport) height state.
      >
     
      <div style={{position: 'absolute', right: 0, margin: 10}}>
          <NavigationControl />
        </div>
        {/* a react memo component is used because react Mapbox rerenders everytime a marker is created, a Geojson should be implemented here */}
        {places && places.map(place =>{
         
          return(
            <MarkerReloaded {...place}>

            </MarkerReloaded>
          )
        })}

        {/* find me marker */}
        <Marker latitude={latitude} longitude={longitude}>
          <img src={Locator} alt='locator' style={{width: '30px', height: '30px'}}/>
        </Marker>

         {reduxSelectedPlace && (
           <Popup closeOnClick={false} latitude={reduxSelectedPlace.location.lat} longitude={reduxSelectedPlace.location.lng}
           onClose={() =>{
            dispatch(updateSelectedPlace(null));
          }}
           >
          <h2>{reduxSelectedPlace.name}</h2>
         <p>{reduxSelectedPlace.location.formattedAddress[0]}</p>
         <Button onClick={() => {
            callPlaceById(reduxSelectedPlace.id);
            dispatch(setOpen(true));
         }}>
           Place Details
         </Button>
           </Popup>
         )}
    </ReactMapGL>
 
    </div>
 ) 
 
}

export default Map;