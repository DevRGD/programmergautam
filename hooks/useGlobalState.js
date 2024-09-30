"use client";
import { GlobalContext } from "@/contexts/GlobalContext";
import { useContext } from "react";

// Custom hook to use global state and dispatch
export default function useGlobalState() {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobalContext must be used within a GlobalStateProvider");
  }
  return context;
}
