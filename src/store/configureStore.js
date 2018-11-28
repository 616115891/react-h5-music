import React from 'react';
import {createStore, applyMiddleware, compose} from 'redux';
import rootReducers from '../reducers/index';
import thunkMiddleware from 'redux-thunk';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = createStore(
    rootReducers,
    // compose(applyMiddleware(thunkMiddleware), window.devToolsExtension && window.devToolsExtension())
    composeEnhancers(applyMiddleware(thunkMiddleware))
);

export default configureStore;