# react-ecosystem
* Redux and React-Redux

### What do we need for react?
1. index.html
2. Support for ES6
3. Webpack
4. Root component
5. React-hot-loader

### Redux
Redux is an open source JavaScript library for application state management. It is commonly used with other libraries such as React or Angular for building User Interfaces.
#### Actions creators
An action creator is merely a function that returns an action object.

```js
export const CREATE_TODO = 'CREATE_TODO';

export const createTodo = text => ({
  type: CREATE_TODO,
  payload: { text },
});
```

#### Reducers
The reducer is simply that, a function that receives two parameters, the initial state and an action, and depending on the type of action it will perform one operation or another on the state. Always in an immutable way, we can not modify the state, but create a copy from the previous one.

```js
import { CREATE_TODO } from "./actions";

export const todos = (state = [], action) => {
  const { type, payload } = action;
  switch(type) {
    case CREATE_TODO: {
      const { text } = payload;
      const newTodo = {
        text,
        isCompleted: false
      }
      return state.concat(newTodo);
    }
  }
}
```

* The `connect()` function connects a React component to a Redux store.
```js
export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);
```

* `mapStateToProps`: As the first argument passed in to `connect`, `mapStateToProps` is used for selecting the part of the data from the store that the connected component needs.
```js
const mapStateToProps = state => ({
  todos: state.todos,
});
```

* `mapDispatchToProps`: As the second argument passed in to `connect`, `mapDispatchToProps` is used for dispatching actions to the store.
`dispatch` is a function of the Redux store. You call `store.dispatch` to dispatch an action. This is the only way to trigger a state change.
```js
const mapDispatchToProps = dispatch => ({
  onCreatePressed: text => dispatch(createTodo(text)),
});
```

#### redux-thunk
Redux-thunk in redux is a function that return another function, which contains the actual logic that we want to perform when it's triggered.

```js
export const displayAlert = text => () => {
  alert(`Hello! ${text}`)
};
```

```js
const mapDispatchToProps = dispatch => ({
  onDisplayedAlert: text => dispatch(displayAlert(text)),
});
```