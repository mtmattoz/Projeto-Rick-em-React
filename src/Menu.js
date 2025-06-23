import { Container, Nav, Navbar } from 'react-bootstrap';
import logox from './logo.png';
import rickLogo from './Rick_and_Morty.webp';
import { Link, useNavigate } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import { RiLogoutCircleRLine } from 'react-icons/ri';

const Menu = ({ children }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('auth');
    alert("Logout realizado com sucesso!");
    navigate('/');
  };

  return (
    <>
      <PrivateRoute>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand>
              <img className="App-logo" src={logox} width={80} alt="logo" />
            </Navbar.Brand>
            <img src={rickLogo} width={150} alt="Rick and Morty Logo" />
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/localizacao">Mapa</Nav.Link>
                <Nav.Link as={Link} to="/episodios">Episódios</Nav.Link>
                <Nav.Link as={Link} to="/personagens">Personagens</Nav.Link>
                <Nav.Link as={Link} to="/sobre">Sobre</Nav.Link>
                <Nav.Link onClick={handleLogout}>
                  <RiLogoutCircleRLine color={'#3c44b1'} size={24} />
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {children}

        <footer className="bg-light text-center text-lg-start">
          <div className="text-center p-3" style={{ backgroundColor: 'lightblue' }}>
            © 2025 MM:
            <a
              className="text-dark"
              href="https://www.instagram.com/lucas_dinizzx/"
              target="_blank"
              rel="noreferrer"
            >
              {' '}Desenvolvimento Front End
            </a>
          </div>
        </footer>
      </PrivateRoute>
    </>
  );
};

export default Menu;
