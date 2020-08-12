import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Routes from './routes/Routes';
import Store from './redux/store';

ReactDOM.render(
  <Provider store={Store}>
    <Routes />
  </Provider>,
  document.getElementById('root'),
);
