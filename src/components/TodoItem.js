import React from "react";
import TodoContext from "../context/Todo";

export function TodoItem({ todo }) {

  const contextTodo = React.useContext(TodoContext);
    
  const { id, task, completed } = todo;

  const handleTodoClick = () => {
    contextTodo.actions.change(id);
  };

  return (
    <li>
      <input type="checkbox" checked={completed} onChange={handleTodoClick} />
      {task}
    </li>
  );
}