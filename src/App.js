import React from 'react';
import { hot } from 'react-hot-loader';
import styled from 'styled-components';

import TodoList from './components/todos/TodoList';

const AppContainer = styled.div`
  margin: 1rem;
  font-family: Arial, Helvetica, sans-serif;
  color: #222;
  width: 100vw;
  height: 100vw;
`;

const App = () => {
  return (
    <AppContainer>
      <h2>Hello, world</h2>
      <TodoList />
    </AppContainer>
  )
};

export default hot(module)(App);
