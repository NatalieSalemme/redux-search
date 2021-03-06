import React from 'react';
import ReactDOM from 'react-dom';
import './App.scss';
import { Provider } from 'react-redux';
import history from './history';
import Router from './components/Router';
import App from './App';

import store from './store';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Provider store={store}>
      <Router history={history}>
        <App />
        </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
