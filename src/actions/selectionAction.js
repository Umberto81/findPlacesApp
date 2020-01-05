
export const setSelectedPlace = (place) =>({
    type: 'SET_PLACE',
    payload: place 
});

export const setPlaceTime = (time) =>({
    type: 'SET_TIME',
    payload: time
});

export const setOpen = (itIsOpen) =>({
    type: 'SET_BOOLEAN',
    payload: itIsOpen
});