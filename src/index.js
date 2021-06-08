import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./index.css"
import {BrowserRouter as Router} from 'react-router-dom'
import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import postsReducer from './reducers/postsReducer'
import {composeWithDevTools} from 'redux-devtools-extension'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'


const initialState = {posts: []}



const store = createStore(postsReducer, initialState, compose(applyMiddleware(thunk), composeWithDevTools()))

console.log(store)
ReactDOM.render(
  <Router >
    <Provider store={store}>
        <App/>
    </Provider>
  </Router>
  ,
  document.getElementById('root')
);

