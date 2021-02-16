import React, { createContext, useReducer } from "react";

export const Context = createContext({});

export const actionTypes = {
  SET_USER: "SET_USER",
};

export function ContextProvider({ children }) {
  const reducer = (state, action) => {
    switch (action.type) {
      case actionTypes.SET_USER:
        return action.user;

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, {});

  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
}
