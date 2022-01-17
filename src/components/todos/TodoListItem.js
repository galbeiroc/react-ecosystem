import React from 'react';

import './TodoListItem.css';

const TodoListItem = ({ todo, onRemoved, onMarkedCompleted }) => (
  <div className="todo-item-container">
    <h3>{todo.text}</h3>
    <div className="buttons-container">
      {!todo.isCompleted && (
        <button className="completed-button" onClick={() => onMarkedCompleted(todo.text)}>
          Mark as Complete
        </button>
      )}
      <button
        className="removed-button"
        onClick={() => onRemoved(todo.text)}
      >
        Remove
      </button>
    </div>
  </div>
)

export default TodoListItem;