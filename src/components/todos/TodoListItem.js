import React from 'react';
import styled from 'styled-components';

const TodoListContainer = styled.div`
  background: #fff;
  position: relative;
  margin-top: 8px;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 4px 8px grey;
`;

const ButtonsContainer = styled.div`
  position: absolute;
  right: 12px;
  bottom: 12px; 
`;

const CompleteButton = styled.div`
  font-size: 14px;
  padding: 8px;
  border: none;
  outline: none;
  border-radius: 8px;
  cursor: pointer;
  display: inline-block;
  background-color: lime;
`;

const RemoveButton = styled.div`
  font-size: 14px;
  padding: 8px;
  border: none;
  outline: none;
  border-radius: 8px;
  cursor: pointer;
  display: inline-block;
  background-color: red;
  margin-left: 8px;
`;


const TodoListItem = ({ todo, onRemoved, onMarkedCompleted }) => (
  <TodoListContainer>
    <h3>{todo.text}</h3>
    <ButtonsContainer>
      {!todo.isCompleted && (
        <CompleteButton onClick={() => onMarkedCompleted(todo.id)}>
          Mark as Complete
        </CompleteButton>
      )}
      <RemoveButton onClick={() => onRemoved(todo.id)}>
        Remove
      </RemoveButton>
    </ButtonsContainer>
  </TodoListContainer>
)

export default TodoListItem;