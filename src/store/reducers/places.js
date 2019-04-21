import {
  ADD_PLACE,
  DELETE_SELECTED_PLACE,
  UNSELECT_PLACE,
  SELECT_PLACE
} from "../actions/actionTypes";

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
          key: Math.random().toString(),
          name: action.placeName,
          image: {
            uri:
              "https://10mosttoday.com/wp-content/uploads/2013/07/Neuschwanstein_Castle-1024x682.jpg"
          }
        })
      };

    case DELETE_SELECTED_PLACE:
      return {
        ...state,
        places: prevState.places.filter(place => {
          return place.key !== this.state.selectedPlace.key;
        }),
        selectedPlace: null
      };

    case SELECT_PLACE:
      return {
        ...state,
        selectedPlace: state.places.find(place => {
          return place.key === action.key;
        })
      };

    case UNSELECT_PLACE:
      return {
        ...state,
        selectedPlace: null
      };

    default:
      return state;
  }
};

export default reducer;
