import React from 'react';
import { connect } from 'react-redux';

import { removeTodo } from '../../redux/actions';

import NewTodoForm from './NewTodoForm';
import TodoListItem from "./TodoListItem";

import './TodoList.css';

const TodoList = ({ todos, onRemoved }) => (
  <div className="list-wrapper">
    <NewTodoForm />
    {
      todos.map((todo) => <TodoListItem todo={todo} onRemoved={onRemoved} />)
    }
  </div>
);

const mapStateToProps = state => ({
  todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
  onRemoved: text => dispatch(removeTodo(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
