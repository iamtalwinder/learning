import { useReducer, useEffect } from "react";

function getSavedValue<StateType>(
  key: string,
  initialState: StateType,
  init: (arg: StateType) => StateType
): StateType {
  const savedValue: StateType | null = JSON.parse(
    localStorage.getItem(key) as string
  );

  if (savedValue) {
    return savedValue;
  }

  if (init) {
    return init(initialState);
  }

  return initialState;
}

export default function usePersistedState<StateType>(
  key: string,
  reducer: React.ReducerWithoutAction<any>,
  initialState: StateType,
  init: (arg: StateType) => StateType
): any {
  const [state, dispatch] = useReducer(reducer, initialState, () => {
    return getSavedValue<StateType>(key, initialState, init);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, dispatch];
}
