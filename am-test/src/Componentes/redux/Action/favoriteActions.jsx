import { ActionTypes } from "../Constants/actionTypes";

export const setFavorite = (favorites) => {
  return {
    type: ActionTypes.SET_FAVORITES,
    payload: favorites,
  };
};

export const selectedFavorite = (favorite) => {
  return {
    type: ActionTypes.SELECTED_FAVORITE,
    payload: favorite,
  };
};
export const removeSelectedFavorite = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_FAVORITE,
  };
}
