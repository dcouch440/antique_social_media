import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './fonts.css';
import { BrowserRouter } from 'react-router-dom';
import { ContextProvider as Provider } from './Context';

ReactDOM.render(
  <BrowserRouter>
    <Provider>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
