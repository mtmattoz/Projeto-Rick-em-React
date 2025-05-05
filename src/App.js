import './App.css';
import Login from './Login';
import Aside from './Aside';
import Main from './Main';
import Footer from './Footer';
import React from 'react';
import Fipe from './Fipe';
import Email from './Email';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Menu from './Menu';

function App() {
  return (
    <>
      {/* <> Fragment React - encapsula html - Novo*/}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Menu> <Login/> </Menu>} />
          <Route path="/main" element={<Menu> <Main/> </Menu>} />
          <Route path="/footer" element={<Menu> <Footer
            insta="@marcosamiguel"
            whats="32 98401-5080" /> </Menu>} />
          <Route path="/fipe" element={<Menu> <Fipe /> </Menu>} />
          <Route path="/email" element={<Menu> <Email /> </Menu>} />
          <Route path="/cep" element={<Menu><Aside /> </Menu>} />
          <Route path="*" element={<Menu>  <h1> 404 </h1> </Menu>} />

        </Routes>
      </BrowserRouter>

    </>

  );
}

export default App;
