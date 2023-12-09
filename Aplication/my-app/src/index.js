import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// const age = 222;
// var sol;
// if(age > 18) {
//   sol = <h1 style={{color:"green"}}>Elegible</h1>;
// }
// else {
//   sol = <h1 style={{color:"red"}}>Not Elegible</h1>;
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(sol);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
