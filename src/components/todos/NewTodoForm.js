import React, { useState } from "react";
import { connect } from 'react-redux';
import styled from "styled-components";

import { addTodoRequest } from "../../redux/thunk";

import { getTodos } from "../../redux/selector";

const FormContent = styled.div`
  border-radius: 8px;
  padding: 16px;
  text-align: center;
  box-shadow: 0 4px 8px grey;
`;

const NewTodoInput = styled.input`
  font-size: 14px;
  width: 70%;
  border: none;
  border-bottom: 1px solid #ddd;
  outline: none;
  border-radius: 8px;
`;

const NewTodoButton = styled.button`
  font-size: 14px;
  background-color: lime;
  border-radius: 10px;
  outline: none;
  border: none;
  width: 20%;
  padding: 8px;
  cursor: pointer;
  margin-left: 20px;
`;

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
    <FormContent>
      <NewTodoInput
        type="text"
        value={inputValue}
        placeholder="Type your new todo"
        onChange={e => setInputValue(e.target.value)}
      />
      <NewTodoButton onClick={handleNewTodo}>
        Create Todo
      </NewTodoButton>
    </FormContent>
  )
}

const mapStateToProps = state => ({
  todos: getTodos(state),
});

const mapDispatchToProps = dispatch => ({
  onCreatePressed: todo => dispatch(addTodoRequest(todo)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);
