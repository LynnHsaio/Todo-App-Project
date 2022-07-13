import { useEffect, useReducer } from "react";

function useLocalStorageState(key, initialVal, reducer) {
  const [state, dispatch] = useReducer(reducer, initialVal, () => {
    let value;
    try {
      value = JSON.parse(localStorage.getItem(key) || String(initialVal));
    } catch {
      value = initialVal;
    }

    return value;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, dispatch];
}

export default useLocalStorageState;
