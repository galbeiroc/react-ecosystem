import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { completeTodo, removeTodo } from '../../redux/actions';
import { loadTodos } from '../../redux/thunk';

import NewTodoForm from './NewTodoForm';
import TodoListItem from "./TodoListItem";

import './TodoList.css';

const TodoList = ({
    todos,
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
      {
        todos.map((todo) => (
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
}

const mapStateToProps = state => ({
  isLoading: state.isLoading,
  todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
  onRemoved: text => dispatch(removeTodo(text)),
  onMarkedCompleted: text => dispatch(completeTodo(text)),
  startLaodingTodos: () => dispatch(loadTodos()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
