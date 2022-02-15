import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { GlobalStyle } from './Components/GlobalStyle';
import { NavBar } from './Components/NavBar';
import { Menu } from './Components/Menu';

function App() {
  return (
    /* jshint ignore:start */
    <>
      <GlobalStyle />
      <NavBar />
      <Menu />
    </>
    /* jshint ignore:end */
  );
}

export default App;
