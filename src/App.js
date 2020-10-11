import React from 'react';
import TodoList from './components/TodoList';
import './App.css';

const App = () => {
  return (
    <div className="content">
      <div className="todo-app">
        <TodoList />
      </div>
    </div>
  );
};

export default App;
