import React from 'react';
import { GlobalStyle } from './Components/GlobalStyle';
import { NavBar } from './Components/NavBar';
import { Menu } from './Components/Menu';
import { ModalItem } from './Components/ModalItem';

function App() {

  const [openItem, setOpenItem] = React.useState(null);

  return (
    /* jshint ignore:start */
    <>
      <GlobalStyle />
      <NavBar />
      <Menu setOpenItem={setOpenItem}/>
      <ModalItem openItem={openItem} setOpenItem={setOpenItem}/>
    </>
    /* jshint ignore:end */
  );
}

export default App;
