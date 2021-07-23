import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { Backdrop } from './components';

ReactDOM.render(
  <>
    <Backdrop />
    <App />
  </>,
  document.getElementById('root')
);
