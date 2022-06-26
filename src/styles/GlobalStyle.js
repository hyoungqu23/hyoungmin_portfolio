// GlobalStyle.js

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
  }

  body {
    font-family: "Noto Sans", "Arial", sans-serif;
  }

  & section#projects {
    height: 100%;
  }

  & section {
    height: calc(100vh - 59px);
  }


  & .flex {
    display: flex;
    width: 100%;
    height: 100%;
  }
  
  & .center {
    justify-content: center;
    align-items: center;
  }
`;

export default GlobalStyle;
