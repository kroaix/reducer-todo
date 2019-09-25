import React from "react";
import Todo from "./Todo";

const TodoList = ({state, dispatch}) => {
  
  const emptyTodo = state.length ? (
    state.map(todo => {
      return (
        <Todo todo={todo} key={todo.id} dispatch={dispatch} />
      );
    })
  ) : (
    <div className="empty">
      <p>You have nothing to do!</p>
    </div>
    
  );
  
  return <div align="center">{emptyTodo}</div>;
};

export default TodoList;