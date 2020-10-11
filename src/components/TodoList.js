import React, { useState } from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';

const TodoList = props => {
  const [tasks, setTasks] = useState([]);

  const addTask = task => {
    if (!task.text || /^\s*S/.test(task.text)) {
      return;
    }

    const newTasks = [...tasks, task];

    setTasks(newTasks);
  };

  const updateTask = (key, newValue) => {
    if (!newValue.text || /^\s*S/.test(newValue.text)) {
      return;
    }

    setTasks(tasks => tasks.map(item => (item.key === key ? newValue : item)));
  };

  const completeTask = key => {
    const updatedTasks = tasks.map(task => {
      if (task.key === key) {
        task.isComplete = !task.isComplete;
      }
      return task;
    });

    setTasks(updatedTasks);
  };

  const removeTask = key => {
    const removedTask = [...tasks].filter(todo => todo.key !== key);

    setTasks(removedTask);
  };

  return (
    <div>
      <h1>Quais são seus planos para hoje?</h1>
      <TodoForm onSubmit={addTask} />
      <Todo
        tasks={tasks}
        completeTask={completeTask}
        removeTask={removeTask}
        updateTask={updateTask}
      />
    </div>
  );
};

export default TodoList;
