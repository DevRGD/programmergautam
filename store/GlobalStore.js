import data from "@/libs/data";

export const initialState = {
  isVisible: false,
  isLoading: true,
  loaded: 0,
  color: data["colors"][0],
  data,
};

const ACTION_TYPES = {
  setIsVisible: "SET_IS_VISIBLE",
  isLoading: "SET_IS_LOADING",
  loaded: "SET_LOADED",
  setColor: "SET_COLOR",
};

export const globalReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.setIsVisible:
      return { ...state, isVisible: action.payload };
    case ACTION_TYPES.isLoading:
      return { ...state, isLoading: action.payload };
    case ACTION_TYPES.loaded:
      return { ...state, loaded: action.payload };
    case ACTION_TYPES.setColor:
      return { ...state, color: action.payload };
    default:
      return state;
  }
};
