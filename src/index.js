import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import CounterApp from './CounterApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <CounterApp/>
  </React.StrictMode>
);


