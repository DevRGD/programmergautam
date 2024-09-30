import { data } from "@/libs/data";

export const initialState = {
  isVisible: false,
  color: data["colors"][0],
  data,
};

const ACTION_TYPES = {
  setIsVisible: "SET_IS_VISIBLE",
  setColor: "SET_COLOR",
};

export const globalReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.setIsVisible:
      return { ...state, isVisible: action.payload };
    case ACTION_TYPES.setColor:
      return { ...state, color: action.payload };
    default:
      return state;
  }
};
