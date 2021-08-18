import React from 'react';
import TodoContext from '../context/Todo';

const Todos = ({ children }) => {

  const [todos, setTodos] = React.useState([]);

  const add = (todo) => {
    setTodos(todo)
  }

  const clear = () => {
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos)
  }

  const change = (id) => {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.completed = !todo.completed;
    setTodos(newTodos);
  }

  const clearComplete = () => {
    const newTodos = todos.filter((todo) => todo.completed);
    setTodos(newTodos)
  }

  return (
    <TodoContext.Provider
      value={{
        state: {
          todos
        },
        actions: {
          add,
          clear,
          change,
          clearComplete
        }
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default Todos;
