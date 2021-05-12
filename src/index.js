import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import imageReducer from './redux/reducer';
import { applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import {watcherImage} from './redux/saga';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(imageReducer,
    composeEnhancers(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(watcherImage);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
    ,document.getElementById('root'));