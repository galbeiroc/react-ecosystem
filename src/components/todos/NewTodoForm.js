import React, { useState } from "react";
import { connect } from 'react-redux';

import { createTodo } from '../../redux/actions'

import './NewTodoForm.css';

const NewTodoForm = ({ todos, onCreatePressed }) => {
  const [inputValue, setInputValue] = useState('');

  const handleNewTodo = () => {
    const isDuplicate = todos.some(todo => todo.text === inputValue);
    if (!isDuplicate) {
      onCreatePressed(inputValue);
      setInputValue('');
    }
  }
  return (
    <div className="new-todo-form">
      <input
        className="new-todo-input"
        type="text"
        value={inputValue}
        placeholder="Type your new todo"
        onChange={e => setInputValue(e.target.value)}
      />
      <button
        className="new-todo-button"
        onClick={handleNewTodo}
      >
        Create Todo
      </button>
    </div>
  )
}

const mapStateToProps = state => ({
  todos: state.todos
});

const mapDispatchToProps = dispatch => ({
  onCreatePressed: text => dispatch(createTodo(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);
