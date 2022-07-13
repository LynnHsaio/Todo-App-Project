import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import { TodoProvider } from "./contexts/TodosContext";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#FAFAFA",
    height: "100vh",
  },
  main: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "30px auto",
  },
}));

function TodoApp() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ height: "4rem" }}>
        <Toolbar>
          <Typography variant="h6">TODOS WITH HOOKS</Typography>
        </Toolbar>
      </AppBar>

      <main className={classes.main}>
        <TodoProvider>
          <TodoForm />
          <TodoList />
        </TodoProvider>
      </main>
    </div>
  );
}

export default TodoApp;
