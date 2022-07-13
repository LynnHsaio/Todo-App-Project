import React, { useContext, memo } from "react";
import EditTodo from "./EditTodo";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import useToggleState from "./hooks/useToggleState";
import { DispatchContext } from "./contexts/TodosContext";

function TodoItem({ id, task, completed }) {
  const dispatch = useContext(DispatchContext);
  const [isEditing, toggleEditForm] = useToggleState(false);

  return (
    <div>
      <ListItem style={{ height: "70px" }}>
        {isEditing ? (
          <EditTodo task={task} id={id} toggleEditForm={toggleEditForm} />
        ) : (
          <>
            <Checkbox
              checked={completed}
              onChange={() => {
                dispatch({ type: "TOGGLE", id });
              }}
              inputProps={{ "aria-label": "primary checkbox" }}
            />
            <ListItemText
              primary={task}
              style={{ textDecoration: completed ? "line-through" : "" }}
            />
            <ListItemSecondaryAction>
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => {
                  dispatch({ type: "DELETE", id });
                }}
              >
                <DeleteIcon />
              </IconButton>
              <IconButton edge="end" aria-label="edit" onClick={toggleEditForm}>
                <EditIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </>
        )}
      </ListItem>
    </div>
  );
}
export default memo(TodoItem);
