import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    background-color: #f0f0f0;
    font-family: 'Roboto', sans-serif;
    font-family: Arial, sans-serif;
    font-size: 20px;
    color: black;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  img {
    max-width: 100%;
    height: auto;
  }
  ul {
    list-style: none; 
    padding: 0;
    margin: 0;
  }
  h1, h2, h3 {
    font-family: 'Pacifico', cursive;
  }
`;
