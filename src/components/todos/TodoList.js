import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import {
  completeTodoRequest,
  loadTodos,
  removeTodoRequest,
} from '../../redux/thunk';

import { getTodos, getTodosLoading, getCompleteTodos, getIncompleteTodos } from '../../redux/selector';

import NewTodoForm from './NewTodoForm';
import TodoListItem from "./TodoListItem";

import './TodoList.css';

const TodoList = ({
    completeTodos,
    inCompleteTodos,
    onRemoved,
    onMarkedCompleted,
    isLoading,
    startLaodingTodos,
}) => {
  useEffect(() => {
    startLaodingTodos();
  }, []);

  const isLoadingContent = <div>Loading...</div>;
  const content = (
    <div className="list-wrapper">
      <NewTodoForm />
      <h3>Incomplete Todos</h3>
      {
        inCompleteTodos.map((todo) => (
          <TodoListItem
            todo={todo}
            onRemoved={onRemoved}
            onMarkedCompleted={onMarkedCompleted}
          />
        ))
      }
      <h3>Complete Todos</h3>
      {
        completeTodos.map((todo) => (
          <TodoListItem
            todo={todo}
            onRemoved={onRemoved}
            onMarkedCompleted={onMarkedCompleted}
          />
        ))
      }
    </div>
  );

  return isLoading ? isLoadingContent : content;
};

const mapStateToProps = state => ({
  isLoading: getTodosLoading(state),
  completeTodos: getCompleteTodos(state),
  inCompleteTodos: getIncompleteTodos(state)
});

const mapDispatchToProps = dispatch => ({
  onRemoved: id => dispatch(removeTodoRequest(id)),
  onMarkedCompleted: id => dispatch(completeTodoRequest(id)),
  startLaodingTodos: () => dispatch(loadTodos()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
