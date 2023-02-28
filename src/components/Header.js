import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import { BsFillBrightnessAltHighFill } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
function BasicExample() {
    return (
        <Navbar bg="light" expand="lg" className='shadow '>
            <Container>
                <Link to="/"><BsFillBrightnessAltHighFill /></Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <div className="ml-auto"> </div>

                    <Nav className="d-flex justify-content-end">

                        <Link to="/products" className='mx-2'>Products</Link>
                        <Link to="/about" className='mx-2'>About</Link>
                        <Link to="/contact" className='mx-2'>Contact</Link>
                        <Link to="/cart" className='mx-2'>cart <FiShoppingCart /></Link>
                        <Button variant="primary">Login</Button>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default BasicExample;