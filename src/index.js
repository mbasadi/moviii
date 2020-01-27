import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import App from './components/app';
import reducers from './reducers';
import * as serviceWorker from './serviceWorker';
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
ReactDOM.render(<Provider store={createStoreWithMiddleware(reducers)}>
<App />
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
