import { ADD_PLACE, DELETE_PLACE } from '../actions/actionTypes';

const initialState = {
  places: [],
  selectedPlace: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLACE:
      return {
        ...state,
        places: state.places.concat({
          key: Math.random().toString(), //or not using toString()
          name: action.placeName,
          image: { uri: 'https://media-cdn.tripadvisor.com/media/photo-s/0d/f4/e4/8d/munich-super-saver-brewery.jpg' }
        })
      };
    case DELETE_PLACE:
      return {
        ...state,
        places: state.places.filter((place) => {
          return place.key !== state.selectedPlace.key;
        }),
        //to close the modalContent
        selectedPlace: null
      };
    // case SELECT_PLACE:
    //   return {
    //     ...state,
    //     selectedPlace: state.places.find((place) => {
    //       return place.key === action.placeKey;
    //     })
    //   };
    // case DESELECT_PLACE:
    //   return {
    //     ...state,
    //     selectedPlace: null
    //   };
    default:
      return state;

  }
};

export default reducer;
