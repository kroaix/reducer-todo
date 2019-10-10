import React, {useState} from "react";
import { Form, Button, Input } from "semantic-ui-react";

const TodoForm = ({dispatch}) => {
  const [newTodo, setNewTodo] = useState("");
  
  const handleChanges = e => {
    setNewTodo(e.target.value);
  };
  
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(
      {
        type: "ADD",
        payload: newTodo
      }
    )
    setNewTodo("");
  };

  const clearCompleted = (e) => {
    e.preventDefault();
    dispatch(
      {
        type: "CLEAR"
      }
    )
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Field>
        <Input
          type="text"
          name="newTodo"
          value={newTodo}
          onChange={handleChanges}
          placeholder="Add Task"
          icon="pencil"
          iconPosition="left"
          required
        />
        <Button positive fluid type="submit" icon="plus" />
      </Form.Field>
      <Button fluid negative onClick={clearCompleted}>
        Clear Completed
      </Button>
    </Form>
  );
}

export default TodoForm;