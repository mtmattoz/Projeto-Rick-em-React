import './App.css';
import Header from './Header';
import Aside from './Aside';
import Main from './Main';
import Footer from './Footer';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useState } from 'react';
import logo from './logo.svg';

function App() {
  const [menu, setMenu] = useState(0)

  return (
    <>
      {/* <> Fragment React - encapsula html */}

      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand> <img className='App-logo' src={logo} width={50} alt=" logo "/> Minha App React  </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link onClick={() => setMenu(1)}>Header</Nav.Link>
              <Nav.Link onClick={() => setMenu(2)}>Aside</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item onClick={() => setMenu(3)}>Main</NavDropdown.Item>
                <NavDropdown.Item onClick={() => setMenu(4)}>Footer</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {menu === 1 && <Header menu="sim"/>}
      {menu === 2 && <Aside/>}
      {menu === 3 && <Main/>}
      {menu === 4 && <Footer   
        insta="@marcosamiguel"
        whats="32 98401-5080"
      />}


    </>
  );
}

export default App;
