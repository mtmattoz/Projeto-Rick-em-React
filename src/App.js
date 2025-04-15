import './App.css';
import Header from './Header';
import Aside from './Aside';
import Main from './Main';
import Footer from './Footer';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useState } from 'react';
import logox from './logo.svg';
import React  from 'react';
import Fipe from './Fipe';

function App() {
  const [menu, setMenu] = useState(0)

  return (
    <>
     {/* <> Fragment React - encapsula html - Novo */}

      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand> <img className='App-logo' src={logox} width={80} alt=" logo "/> Minha App React  </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              
              <Nav.Link onClick={() => setMenu(2)}>IBGE</Nav.Link>
              <Nav.Link onClick={() => setMenu(5)}>DDD</Nav.Link>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>


      {menu === 1 && <Header menu="1"/>}
      {menu === 2 && <Aside/>}
      {menu === 3 && <Main/>}
      {menu === 4 && <Footer   
        insta="@marcosamiguel"
        whats="32 98401-5080"
      />}
      {menu === 5 && <Fipe/>}
    </>
  );
}

export default App;
