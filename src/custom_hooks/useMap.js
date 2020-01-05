import {useState, useEffect} from 'react';
import {setCoordinates, setVenueById, setFindMeCoords, updateSelectedPlace} from '../actions/mapActions';
import {  useDispatch } from "react-redux";
import {FlyToInterpolator} from 'react-map-gl';
import { useSelector } from 'react-redux'

const useMap = () =>{

    const findeMeCoords = useSelector(state => state.findMeCoord);
    const placeSelected = useSelector(state => state.place);
    const {latitude, longitude} = findeMeCoords;

    const dispatch = useDispatch();

//sets the view for Mapbox gl init
    const [view, setview] = useState({
        latitude: 51.481583,
        longitude: -3.179090,
        zoom: 12,
        transitionDuration: 1000    

    });

    //remove the popup on ESC press
    useEffect(() =>{
    const listener = e =>{
        if(e.key === 'Escape'){
        dispatch(updateSelectedPlace(null))
        }
    }

    window.addEventListener('keydown', listener);

    return () =>{
        window.removeEventListener('keydown', listener)
    }
    }, []);

    //zoom on marker when geolocation is selected
    useEffect(() =>{
        goToViewPort(latitude, longitude)
    },[findeMeCoords] )

//gets the device position
    const getPosition = () =>{
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(position =>{
        const coord = [position.coords.latitude, position.coords.longitude];
        dispatch(setFindMeCoords({latitude: coord[0], longitude: coord[1]}))
        });
    } else {
        alert('Geolocation not available!');
    }
    }
//test for github
    const getPlaces = async () =>{
    const LL = latitude + ',' + longitude;
        try {
            const response = await fetch(`https://api.foursquare.com/v2/venues/explore?client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET }&v=20190425&limit=30&ll=${LL}&day=sunday&categoryId=${placeSelected}`);
            const data = await response.json();
            console.log(data);
            dispatch(setCoordinates(data.response.groups[0].items));
        } catch (error) {
            console.log(error);
        }

    }


    
    //finds a place by its id
    const callPlaceById = async (id) =>{
        try {
    const resp = await fetch(`https://api.foursquare.com/v2/venues/${id}?client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET }&v=20190425`);
    const data = await resp.json();
    dispatch(setVenueById(data.response.venue));
        } catch (error) {
            console.log(error);
        }
    }

//fly to point function
    const goToViewPort =  (latitude, longitude) =>{
        setview({latitude,
            longitude,
            zoom: 13,
            transitionInterpolator: new FlyToInterpolator({speed: 1}),
            transitionDuration: 1000    
        }); 
    }

    const PopUpCallPlace = (place) =>{
        dispatch(updateSelectedPlace(place));
        callPlaceById(place.id);
    }


    return{
        getPlaces, getPosition, latitude, longitude, 
        view, setview, callPlaceById, 
        goToViewPort, PopUpCallPlace
    }
}

export default useMap;