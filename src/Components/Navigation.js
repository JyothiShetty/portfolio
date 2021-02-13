import React from 'react'
import { Button, Navbar,Nav,Form,FormControl} from 'react-bootstrap';
import Logo from '../assests/icons/logo.png';
import '../styles/nav.css';

const Navigation = () => {
    return (
        <div>
            <Navbar fixed="top" expand="md" variant="dark" className="animate-navbar nav-theme justify-content-between" >
            <div>
                <Navbar.Brand href="#home">
                <img classname="logo" src={Logo} alt="My Portfolio Logo" width="30" height="30" />
                </Navbar.Brand>
            </div>
            <div>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#certificates">Certificates</Nav.Link>
                        <Nav.Link href="#projects">Projects</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </div>
            </Navbar>
        </div>
    );
};

export default Navigation;
