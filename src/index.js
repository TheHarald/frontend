import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './FirstApp/App';
import reportWebVitals from './reportWebVitals';
import Application from './otherEdu/Application'
import AppVk from "./otherEdu/AppVk";
import AppHooks from './Hooks/AppHooks'
import Calculator from "./Hooks/Calculator";

ReactDOM.render(
  <React.StrictMode>
    <Calculator/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
