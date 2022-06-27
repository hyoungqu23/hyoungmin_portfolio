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

  & .flex {
    display: flex;
    width: 100%;
    height: 100%;
  }
  
  & .center {
    justify-content: center;
    align-items: center;
  }

  &::selection {
    background-color: #8af;
  }
`;

export default GlobalStyle;
