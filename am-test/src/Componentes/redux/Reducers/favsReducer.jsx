import { ActionTypes } from "../Constants/actionTypes";
const intialState = {
  favorites: [],
};

export const favsReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_FAVORITES:
      return { ...state, favorites: payload };
    default:
      return state;
  }
};

export const selectedFavoritesReducer = (state = {}, { type, payload }) => {
  console.log(type);
  switch (type) {
    case ActionTypes.SELECTED_FAVORITE:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_FAVORITE:
      return {};
    default:
      return state;
  }
};