import React from "react";
import Todo from "./Todo";

const TodoList = ({state, dispatch}) => {
  return (
    <div align="center">
      {
      state.map(todo =>
        <Todo todo={todo} key={todo.id} dispatch={dispatch} />
      )
    }
    </div>
  );
};

export default TodoList;