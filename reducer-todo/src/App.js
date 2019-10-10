import React, { useReducer } from "react";

import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import { todoReducer, initialState } from './reducers/TodoReducer';

import { Card, Header } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import "./App.css";


const App = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  return (
    <div className="MainContent">
      <Card>
        <Card.Content>
          <Header align="center">Todo List</Header>
          <TodoForm dispatch={dispatch} />
          <TodoList state={state} dispatch={dispatch} />
        </Card.Content>
      </Card>
    </div>
  );
}

export default App;