import React, { useEffect, useRef, useState } from 'react';

const TodoForm = props => {
  const [currentItem, setCurrentItem] = useState( props.edit ? props.edit.value : '');

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, [])

  const handleChange = e => {
    setCurrentItem(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      text: currentItem,
      key: Date.now(),
    });

    setCurrentItem('');
  };

  return (
    <div>
      <form className="todo-form" onSubmit={handleSubmit}>
        {props.edit ? (
          <>
            <input
              type="text"
              placeholder="Update this item"
              value={currentItem}
              name="text"
              className="todo-input edit"
              onChange={handleChange}
              ref={inputRef}
            />
            <button className="todo-button edit">Update</button>
          </>
        ) : (
          <>
            <input
              type="text"
              placeholder="Add a todo"
              value={currentItem}
              name="text"
              className="todo-input"
              onChange={handleChange}
              ref={inputRef}
            />
            <button className="todo-button">Add task</button>
          </>
        )}
      </form>
    </div>
  );
};

export default TodoForm;
