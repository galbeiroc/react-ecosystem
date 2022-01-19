import { applyMiddleware, createStore, combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLEvel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { todos } from './reducer';

const reducers = { todos };

const rootReducer = combineReducers(reducers);

const persistConfig = {
  key: 'root',
  storage,
  stateRoconciler: autoMergeLEvel2,
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const configureStore = () => createStore(
    persistedReducer,
    composeWithDevTools(applyMiddleware(thunk)),
  );
