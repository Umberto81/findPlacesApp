
const initState = {
    findMeCoord: {
        latitude: 51.481583,
        longitude: -3.179090
    },
    selectedPlace: null,
    coords: [],
    venue: {},
    place: '',
    cardBoolean : false
};


const rootReducer = (state = initState, action) => {
    console.log(state);

    switch(action.type){
        case 'SET_COORDS':
            return{
                ...state,
                coords: action.payload
            };

        case 'SELECTED_PLACE':
            return{
                ...state,
                selectedPlace: action.payload
            };
        case 'SET_FINDMECOORDS':
            return{
                ...state,
                findMeCoord: action.payload
            }

        case 'SET_VENUE':
            return{
                ...state,
                venue: action.payload
            };

        case 'SET_PLACE':
            return{
                ...state,
                place: action.payload
            };

        case 'SET_TIME':
            return{
                ...state,
                time: action.payload
            };
            
        case 'SET_BOOLEAN':
            return{
                ...state,
                cardBoolean: action.payload
            }

        default:
            return state;
    }
}

export default rootReducer;