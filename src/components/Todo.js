import React, { useState } from 'react';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import { ImCheckboxChecked, ImCheckboxUnchecked } from 'react-icons/im';
import TodoForm from './TodoForm';

const Todo = ({ tasks, completeTask, removeTask, updateTask }) => {
  const [edit, setEdit] = useState({
    key: null,
    value: '',
  });

  const submitUpdate = value => {
    updateTask(edit.key, value);
    setEdit({
      id: null,
      value: '',
    });
  };

  if (edit.key) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return tasks.map((task, index) => (
    <div
      className={task.isComplete ? 'task-row complete' : 'task-row'}
      key={index}
    >
      <div
        className="icons"
        key={task.key}
        onClick={() => completeTask(task.key)}
      >
        {task.isComplete ? <ImCheckboxChecked /> : <ImCheckboxUnchecked />}
      </div>
      <div className="todo-text">
        {task.text}
      </div>
      <div className="icons">
        <RiCloseCircleLine
          onClick={() => removeTask(task.key)}
          className="delete-icon"
        />
        <TiEdit
          onClick={() => setEdit({ key: task.key, value: task.text })}
          className="edit-icon"
        />
      </div>
    </div>
  ));
};

export default Todo;
