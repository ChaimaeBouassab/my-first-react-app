import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import PropTypes from 'prop-types';
import App from './App.js';
// Create a root for rendering the React application in the 'root' element of the HTML document

 const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<>
  <App/>

</>);





// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
