import React, { createContext } from "react";
import todoReducer from "../reducers/todoReducer";
import useLocalStorageReducer from "../hooks/useLocalStorageReducer";

export const TodosContext = createContext();
export const DispatchContext = createContext();

const initialTodos = [
  { id: 0, task: "Clean Fishtank", completed: false },
  { id: 1, task: "Wash Car", completed: false },
  { id: 2, task: "Learning", completed: false },
];

export function TodoProvider(props) {
  const [todos, dispatch] = useLocalStorageReducer(
    "todos",
    initialTodos,
    todoReducer
  );

  return (
    <TodosContext.Provider value={todos}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </TodosContext.Provider>
  );
}
