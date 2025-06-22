import { Container, Nav, Navbar } from 'react-bootstrap';
import logox from './logo.png';
import rickLogo from './Rick_and_Morty.webp';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import { RiLogoutCircleRLine } from 'react-icons/ri';
import { useEffect } from 'react';
import emailjs from '@emailjs/browser';

const SERVICE_ID = 'service_luqnkbv';
const TEMPLATE_ID = 'template_fvel4hj';
const USER_ID = '3FzkE4FlUgKmq3F9L';

const Menu = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem('auth');
    alert("Logout realizado com sucesso!");
    navigate('/');
  };
  
  useEffect(() => {
    const userEmail = localStorage.getItem('from_email') || 'usuário desconhecido';
    const now = new Date().toLocaleString();
    const route = location.pathname;

    const templateParams = {
      name: "Notificação de Acesso",
      from_name: "Roteador do Sistema",
      message: `Você acessou a rota ${route} em ${now}.`,
      from_email: userEmail,
    };
    console.log('Enviando e‑mail para rota:', route);
    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID)
      .then(
        (response) => {
          console.log('E‑mail enviado com sucesso!', response.status, response.text);
        },
        (error) => {
          console.error('Erro ao enviar e‑mail', error);
        }
      );
  }, [location]);

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
                <Nav.Link><Link to="/Localizacao">Mapa</Link></Nav.Link>
                <Nav.Link><Link to="/Episodios">Episodios</Link></Nav.Link>
                <Nav.Link><Link to="/Personagens">Personagens</Link></Nav.Link>
                <Nav.Link><Link to="/sobre">Sobre</Link></Nav.Link>
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
              {' '}
              Desenvolvimento Front End
            </a>
          </div>
        </footer>
      </PrivateRoute>
    </>
  );
};

export default Menu;
