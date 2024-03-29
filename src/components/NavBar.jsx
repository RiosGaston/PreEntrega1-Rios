import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { CartWidget } from "./CartWidget"

export const NavBar = () => {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">Ecommerce de hamburgueseria</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">INICIO</Nav.Link>
                        <Nav.Link href="#features">HAMBURGUESAS</Nav.Link>
                        <Nav.Link href="#pricing">CONTACTO</Nav.Link>
                        <Nav.Link href="#pricing">NOSOTROS</Nav.Link>
                    </Nav>
                    <CartWidget />
                </Container>
            </Navbar>
            
        </>
    )
}