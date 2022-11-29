import { GlobalContext } from "../Context/GlobalContext";
import { useContext } from "react";

export const useGlobalContext = () => {
  const context = useContext(GlobalContext)

  if(!context) {
    throw Error('useGlobalContext must be used inside a GlobalContextProvider')
  }

  return context
}