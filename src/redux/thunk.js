import {
  loadTodosInProgress,
  loadTodosSuccess,
  loadTodosFailure,
  createTodo,
  removeTodo,
} from './actions';

const API_URL = 'http://localhost:8080';

export const loadTodos = () => async (dispatch, getState) => {
  try {
    dispatch(loadTodosInProgress());

    const response = await fetch(`${API_URL}/todos`);
    const todos = await response.json();

    dispatch(loadTodosSuccess(todos));
  } catch (error) {
    dispatch(loadTodosFailure());
    dispatch(displayAlert(error));
  }
};

export const addTodoRequest = text => async dispatch => {
  try {
    const body = JSON.stringify({ text });
    const response = await fetch(`${API_URL}/todos`, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'post',
      body
    });
    const todo = await response.json();
    dispatch(createTodo(todo));
  } catch (error) {
    dispatch(loadTodosFailure());
    dispatch(displayAlert(error));
  }
}

export const removeTodoRequest = id => async dispatch =>{
  try {
    const response = await fetch(`${API_URL}/todos/${id}`, {
      method: 'delete'
    });
    const todo =  await response.json();
    dispatch(removeTodo(todo))
  } catch (error) {
    dispatch(loadTodosFailure());
    dispatch(displayAlert(error));
  }
};

export const displayAlert = text => () => {
  alert(text);
};
