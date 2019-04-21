import {
  ADD_PLACE,
  SELECT_PLACE,
  UNSELECT_PLACE,
  DELETE_SELECTED_PLACE
} from "./actionTypes";

export const addPlace = placeName => {
  return {
    type: ADD_PLACE,
    placeName: placeName
  };
};

export const deleteSelectedPlace = () => {
  return {
    type: DELETE_SELECTED_PLACE
  };
};

export const selectPlace = key => {
  return {
    type: SELECT_PLACE,
    placeKey: key
  };
};

export const unselectPlace = () => {
  return {
    type: UNSELECT_PLACE
  };
};
