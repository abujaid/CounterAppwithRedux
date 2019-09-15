import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import counterReducer from './components/counterReducer'
import { createStore } from 'redux';

const store = createStore(counterReducer)

ReactDOM.render(
    <Provider store={store}><App /></Provider>,
    document.getElementById('root'));

