import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import Main from '../Dialog';
import { store } from './store';

ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById('root')
);
