import React, { Fragment, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TodoItem from "./TodoItem";
import List from "@material-ui/core/List";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import { TodosContext } from "./contexts/TodosContext";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 430,
  },
}));

function TodoList() {
  const classes = useStyles();
  const todos = useContext(TodosContext);

  return (
    <>
      {todos.length > 0 && (
        <Paper className={classes.root}>
          <List>
            {todos.map((todo, index) => (
              <Fragment key={todo.id}>
                <TodoItem {...todo} />
                {index < todos.length - 1 && <Divider />}
              </Fragment>
            ))}
          </List>
        </Paper>
      )}
    </>
  );
}

export default TodoList;
