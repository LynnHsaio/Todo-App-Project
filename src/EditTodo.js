import React, { useContext } from "react";
import useInputState from "./hooks/useInputState";
import TextField from "@material-ui/core/TextField";
import { DispatchContext } from "./contexts/TodosContext";

function EditTodo({ id, task, toggleEditForm }) {
  const dispatch = useContext(DispatchContext);
  const [editedTask, handleChange, reset] = useInputState(task);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "EDIT", id, newTask: editedTask });
    reset();
    toggleEditForm();
  };

  console.log("Edit Todo");

  return (
    <form onSubmit={handleSubmit} style={{ marginLeft: "15px" }}>
      <TextField
        id="standard-basic"
        value={editedTask}
        onChange={handleChange}
        autoFocus
      />
    </form>
  );
}

export default EditTodo;
