import { loadTodosInProgress, loadTodosSuccess, loadTodosFailure } from './actions';

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
}

export const displayAlert = text => () => {
  alert(text);
};
