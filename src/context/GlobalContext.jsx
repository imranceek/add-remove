import { createContext, useReducer } from "react";

export const GlobalContext = createContext();

const reduser = (state, action)=>{
  const {type, payload} = action

  switch (type){
  case 'ADD':
    return state +=1
    case 'REMOVE':
    return state -=1
    default:
      return state
  }
}

export function GlobalContextProvider({ children }) {

  const [count, dispatch ]= useReducer(reduser, 0)

  return (
    <GlobalContext.Provider value={{count,dispatch}}>
      {children}
    </GlobalContext.Provider>
  );
}
