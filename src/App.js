import React from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { GlobalStyle } from './Components/Style/GlobalStyle';
import { NavBar } from './Components/Navbar/NavBar';
import { Menu } from './Components/Menu/Menu';
import { ModalItem } from './Components/Modal/ModalItem';
import { Order } from './Components/Order/Order';
import { useOpenItem } from './Components/Hooks/useOpenItem';
import { useOrders } from './Components/Hooks/useOrders';
import { useAuth } from './Components/Hooks/useAuth';

const firebaseConfig = {
  apiKey: "AIzaSyDZGhiroz5s26O3I6FY2gnNY0iAojnn-WE",
  authDomain: "mrdonalds-45a73.firebaseapp.com",
  projectId: "mrdonalds-45a73",
  storageBucket: "mrdonalds-45a73.appspot.com",
  messagingSenderId: "863841443698",
  appId: "1:863841443698:web:d3b19d34635593515ac7eb"
};

firebase.initializeApp(firebaseConfig);

function App() {
  const auth = useAuth(firebase.auth);

  const openItem = useOpenItem();
  const orders = useOrders();

  return (
    /* jshint ignore:start */
    <>
      <GlobalStyle />
      <NavBar {...auth}/>
      <Order {...orders} {...openItem} {...auth}/>
      <Menu {...openItem} />
      { openItem.openItem && <ModalItem {...openItem} {...orders} />}
    </>
    /* jshint ignore:end */
  );
}

export default App;
