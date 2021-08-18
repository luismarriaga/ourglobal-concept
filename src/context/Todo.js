import React from 'react';

const TodoContext = React.createContext({
  state: {
    todos: []
  },
  actions: {
    add(todos) { },
    clear(){ },
    change(todo){ },
    clearComplete(){ }
  }
});

export default TodoContext;
