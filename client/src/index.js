import './fonts.css';

import App from './App';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import { RoomProvider } from './context/Room';
import { SessionProvider } from './context/Session';
import { UIProvider } from './context/UI';

ReactDOM.render(
  <BrowserRouter>
    <SessionProvider>
      <UIProvider>
        <RoomProvider>
          <App />
        </RoomProvider>
      </UIProvider>
    </SessionProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
