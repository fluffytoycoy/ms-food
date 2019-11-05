import 'react-app-polyfill/ie11';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers  } from 'redux'
import menuReducer from './reducers/menuReducer'
import authReducer from './reducers/authReducer'
import * as serviceWorker from './serviceWorker';
import thunk from 'redux-thunk'

const reducers = combineReducers({
  menuReducer: menuReducer,
  authReducer: authReducer,
})

const store = createStore(
    reducers,
    applyMiddleware(thunk)
)

ReactDOM.render(
  <Provider store={store}>
            <App />
    </Provider>,
    document.getElementById('root')
  );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
