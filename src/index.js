import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Optional: Import your global CSS file
import App from './App';
import reportWebVitals from './reportWebVitals';

// Render the main App component into the root div
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// Optional: Measure performance and log results or send to an analytics endpoint.
reportWebVitals();
