import React from "react";
import { TodoItem } from "./TodoItem";
import TodoContext from "../context/Todo";
import { v4 as uuidv4 } from "uuid";


export function TodoList() {

  const contextTodo = React.useContext(TodoContext);

  const todoTaskRef = React.useRef();

  const handleTodoAdd = (event) => {
    const task = todoTaskRef.current.value;
    if (task === "") return;

    contextTodo.actions.add((prevTodos) => {
      return [...prevTodos, { id: uuidv4(), task, completed: false }];
    })

    todoTaskRef.current.value = null;
  };

  const handleClearAll = () => {
    contextTodo.actions.clear()
  };

  const handleClearAll2 = () => {
    contextTodo.actions.clearComplete()
  };


  return (
    <ul>
      {contextTodo.state.todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}

      <input ref={todoTaskRef} type="text" placeholder="Nueva tarea" />
      
      <button onClick={handleTodoAdd}>Añadir</button>
      <button onClick={handleClearAll}>Eliminar</button>
      <button onClick={handleClearAll2}>Eliminar 2</button>
      <div>
        Te quedan {contextTodo.state.todos.filter((todo) => !todo.completed).length} tareas por
        terminar
      </div>
    </ul>
  );
}