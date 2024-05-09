import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { YoutubeProvider } from './context/youtubeContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <YoutubeProvider>
    <App />
  </YoutubeProvider>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

