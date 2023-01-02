import React from 'react';
import ReactDOM from 'react-dom/client';

import { globalStyles } from 'styles/globalStyle';
import App from './App';

globalStyles();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
