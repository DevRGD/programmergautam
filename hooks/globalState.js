"use client";
import React, { createContext, useReducer, useContext } from "react";

// Initial state
const initialState = {
  isVisible: false,
  colors: {
    "text-color": "text-tealwave",
    "bg-color": "bg-tealwave",
    gradient: "bg-gradient-teal",
    "text-light": "text-teal-50",
    "bg-light": "bg-teal-50",
  },
};

// Define action types
const ACTION_TYPES = {
  setIsVisible: "SET_IS_VISIBLE",
  setColors: "SET_COLORS",
};

// Reducer function to handle state changes
const globalReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.setIsVisible:
      return { ...state, isVisible: action.payload };
    case ACTION_TYPES.setColors:
      return { ...state, colors: action.payload };
    default:
      return state;
  }
};

// Create global context
const GlobalContext = createContext();

// GlobalStateProvider component
export const GlobalStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, initialState);
  return <GlobalContext.Provider value={{ state, dispatch }}>{children}</GlobalContext.Provider>;
};

// Custom hook to use global state and dispatch
export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobalContext must be used within a GlobalStateProvider");
  }
  return context;
};
