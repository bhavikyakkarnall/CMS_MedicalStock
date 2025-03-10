import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useAuthenticator } from '@aws-amplify/ui-react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function Navigation() {

    const { user, signOut } = useAuthenticator((context) => [context.user]);

    return (
        <>
            <Navbar bg="primary" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">ADT Care</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/Inventory">Inventory</Nav.Link>
                            <Nav.Link as={Link} to="/DispatchForm">DispatchForm</Nav.Link>
                            <Nav.Link as={Link} to="/StockOrder">Order</Nav.Link>
                            <Nav.Link as={Link} to="/Returns">Returns</Nav.Link>
                            <Nav.Link as={Link} to="/Orders">Orders</Nav.Link>
                            <Nav.Link as={Link} to="/Users">Users</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <Navbar.Collapse className='justify-content-end'>
                        <NavDropdown title={<><AccountCircleIcon></AccountCircleIcon></>} id="basic-nav-dropdown">
                            <NavDropdown.Item onClick={signOut}>Logout</NavDropdown.Item>
                        </NavDropdown>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}