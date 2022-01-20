import React, { useState } from "react";
import { connect } from 'react-redux';

import { addTodoRequest } from "../../redux/thunk";

import { getTodos } from "../../redux/selector";

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
  todos: getTodos(state),
});

const mapDispatchToProps = dispatch => ({
  onCreatePressed: todo => dispatch(addTodoRequest(todo)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);
