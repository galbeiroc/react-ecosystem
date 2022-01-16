import React from 'react';
import { hot } from 'react-hot-loader';

import TodoList from './components/todos/TodoList';

import './App.css';

const App = () => {
  return (
    <div className='App'>
      <h2>Hello, world</h2>
      <TodoList />
    </div>
  )
};

export default hot(module)(App);
