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

const TodoItemContainerWithWarning = styled(TodoListContainer)`
  border-bottom: ${props => (new Date(props.createdAt) > new Date(Date.now() - 8640000 * 5)
    ? 'none'
    : '2px solid red'
  )}
`;

const ButtonsContainer = styled.div`
  position: absolute;
  right: 12px;
  bottom: 12px; 
`;

const Button = styled.button`
  font-size: 14px;
  padding: 8px;
  border: none;
  outline: none;
  border-radius: 8px;
  cursor: pointer;
`;

const CompleteButton = styled(Button)`
  display: inline-block;
  background-color: lime;
`;

const RemoveButton = styled(Button)`
  background-color: red;
  margin-left: 8px;
`;


const TodoListItem = ({ todo, onRemoved, onMarkedCompleted }) => {
  const Container = todo.isCompleted ? TodoListContainer : TodoItemContainerWithWarning;

  return (
    <Container createdAt={todo.createdAt}>
      <h3>{todo.text}</h3>
      <p>
        Created at: &nbsp;
        {new Date(todo.createdAt).toLocaleDateString()}
      </p>
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
    </Container>
  )
}

export default TodoListItem;