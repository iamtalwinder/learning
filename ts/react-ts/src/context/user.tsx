import React, { createContext } from "react";
import usePersistedReducer from "../hooks/usePersistedReducer";

type Props = {
  children: React.ReactNode;
};

type State = {
  authToken: string;
  dpPath: string | null;
};

type ACTIONTYPE =
  | { type: "SET_USER"; payload: State }
  | { type: "CHANGE_DP"; payload: { dpPath: string } }
  | { type: "REMOVE_DP" };

const initialState: State = { authToken: "", dpPath: null };

export const Context = createContext<{
  state: State;
  dispatch: React.Dispatch<any>;
}>({ state: initialState, dispatch: () => null });

export function ContextProvider({ children }: Props) {
  function reducer(state: State, action: ACTIONTYPE): State {
    switch (action.type) {
      case "SET_USER":
        return action.payload;

      case "CHANGE_DP":
        return { ...state, dpPath: action.payload.dpPath };

      case "REMOVE_DP":
        return { ...state, dpPath: null };

      default:
        return state;
    }
  }
  const [state, dispatch] = usePersistedReducer<State, ACTIONTYPE>(
    "loggedInUser",
    reducer,
    initialState
  );

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
}
