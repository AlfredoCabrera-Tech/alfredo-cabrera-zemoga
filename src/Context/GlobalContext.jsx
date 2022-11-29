import { createContext, useState } from "react";

export const GlobalContext = createContext()

export const GlobalContextProvider = ({ children }) => {
  const [displayMode, setDisplayMode] = useState('List')
  const [celebsToStore, setCelebsToStore] = useState({})
  const [celebFromCard, setCelebFromCard] = useState({}) 

  const globalContextValue = {
    displayMode,
    setDisplayMode,
    celebsToStore,
    setCelebsToStore,
    celebFromCard,
    setCelebFromCard
  } 

  return (
    <GlobalContext.Provider value={globalContextValue}>
      { children }
    </GlobalContext.Provider>
  )
}