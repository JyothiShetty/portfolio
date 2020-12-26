import React from 'react'
import { Button, Navbar,Nav,Form,FormControl} from 'react-bootstrap';

function Navigation() {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home"></Navbar.Brand>
                <Nav className="ml-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#projects">Projects</Nav.Link>
                    <Nav.Link href="#contact">Contact</Nav.Link>
                    <Nav.Link href="#resume">Resume</Nav.Link>
                </Nav>
            </Navbar>
        </div>
    )
}

export default Navigation
