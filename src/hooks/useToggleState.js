import { useState } from "react";

function useToggleState(initialVal = false) {
  const [state, setState] = useState(initialVal);

  const handleToggle = () => {
    setState((curState) => !curState);
  };

  return [state, handleToggle];
}

export default useToggleState;
