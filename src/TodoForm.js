import React, { useContext } from "react";
import useInputState from "./hooks/useInputState";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import { DispatchContext } from "./contexts/TodosContext";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "5px 15px",
    width: 400,
    marginBottom: "15px",
  },
}));

function TodoForm() {
  const classes = useStyles();
  const [value, handleChange, reset] = useInputState("");
  const dispatch = useContext(DispatchContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD", task: value });
    reset();
  };

  return (
    <Paper className={classes.root}>
      <form onSubmit={handleSubmit}>
        <TextField
          id="standard-basic"
          label="ADD TODO"
          value={value}
          onChange={handleChange}
          fullWidth
        />
      </form>
    </Paper>
  );
}

export default TodoForm;
