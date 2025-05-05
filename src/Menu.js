import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logox from './logo.svg';
import { Link, useNavigate } from 'react-router-dom';

const Menu = ({ children }) => {

    const navigate = useNavigate();
    const handleFipe = () => {
        navigate('/fipe'); // Redireciona para a página de fipe
    }

    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand> <img className='App-logo' src={logox} width={80} alt=" logo " /> Minha App React  </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link><Link to="/"> Login </Link> </Nav.Link>
                            <Nav.Link> <Link to="/cep"> Cep </Link> </Nav.Link>
                            <Nav.Link onClick={handleFipe}> Fipe</Nav.Link>
                            <Nav.Link> <Link to="/email"> Email </Link> </Nav.Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item> <Link to="/main"> Main </Link> </NavDropdown.Item>
                                <NavDropdown.Item> <Link to="/footer"> Footer </Link></NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {children} {/* Renderiza o conteudo do componente filho*/} 
           
           
            <footer className="bg-light text-center text-lg-start">
                <div className="text-center p-3" style={{ backgroundColor: "lightblue" }}>
                    © 2025 MM:
                    <a className="text-dark" href="https://uniacademia.edu.br" target='_blank' rel="noreferrer" > Desenvolvimento Front End </a>
                </div>
            </footer>
     
        </>
    )
};

export default Menu;