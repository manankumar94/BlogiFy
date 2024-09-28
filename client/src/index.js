import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import {BrowserRouter} from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* BrowserRouter So that out react application connected with browser */}
    
    <BrowserRouter>  
    <App />
    </BrowserRouter>
  </React.StrictMode>
);


