"use client";

import { globalReducer, initialState } from "@/store/GlobalStore";
import { createContext, useReducer } from "react";

export const GlobalContext = createContext();

export const GlobalStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, initialState);
  return <GlobalContext.Provider value={{ state, dispatch }}>{children}</GlobalContext.Provider>;
};
