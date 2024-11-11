import React from 'react';
import ReactDOM from 'react-dom/client';
import frontend_app from './frontend_app';
import './index.css'; // Importing global styles

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <frontend_app />
  </React.StrictMode>
);

