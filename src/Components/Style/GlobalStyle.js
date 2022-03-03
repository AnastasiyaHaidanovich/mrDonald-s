import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
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

  button {
    cursor: pointer;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`;
