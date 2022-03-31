import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { BrowserRouter } from "react-router-dom";

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html,
  body{
     height: 100%;
     overflow-x: hidden;
  }
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: #4b4b4b;
  }

  a{
    text-decoration: none;
  }

  *{
    box-sizing:border-box;
    padding: 0;
    margin:0; 
    font-family: 'Inter', 'sans-serif';
  }

  @font-face {
    font-family: 'Rany'; 
    src: url(${require('./fonts/Rany-Bold.otf')});
    font-weight: 700;
   }
   @font-face {
    font-family: 'Rany'; 
    src: url(${require('./fonts/Rany-Medium.otf')});
    font-weight: 500;
   }
   @font-face {
    font-family: 'Rany'; 
    src: url(${require('./fonts/Rany 400.otf')});
    font-weight: 400;
   }
`

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <GlobalStyle />
    <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
