import { createStore, applyMiddleware, combineReducers } from 'redux';
import middleware from 'redux-promise-middleware';
import tasksReducer from './reducer';

const reducer = combineReducers({ tasks: tasksReducer }) 

export default createStore(
  reducer,
  applyMiddleware(middleware())
);
