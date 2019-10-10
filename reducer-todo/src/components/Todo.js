import React from "react";
import { Segment, Icon } from "semantic-ui-react";

const Todo = ({todo, dispatch}) => {
  const handleToggle = () => {
    dispatch(
      {
        type: "TOGGLE",
        payload: todo.id
      }
    )
  }

  const handleDelete = () => {
    dispatch(
      {
        type: "DELETE",
        payload: todo.id
      }
    )
  }

  return (
    <div>
      <div className={"todo-items"}>
        <Segment>
          <div
            className={`todo${todo.completed ? " completed" : "-flex"}`}
            onClick={handleToggle}
          >
            <Icon name="check square" />
            <p>{todo.task}</p>
          </div>
          <div className="todo delete" onClick={handleDelete}>
            <Icon name="trash alternate" color="red" />
          </div>
        </Segment>
      </div>
    </div>
  );
};

export default Todo;
