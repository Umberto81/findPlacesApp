export const setCoordinates = (coords) => ({
    type:'SET_COORDS',
    payload: coords
});

export const setVenueById = (venueId) =>({
    type: 'SET_VENUE',  
    payload: venueId
});

export const setFindMeCoords = (findMeCoords) =>({
    type: 'SET_FINDMECOORDS',
    payload: findMeCoords
});

export const updateSelectedPlace = (place) =>({
    type: 'SELECTED_PLACE',
    payload: place
});