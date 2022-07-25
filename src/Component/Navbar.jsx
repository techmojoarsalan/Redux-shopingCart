import React from 'react'
import { NavLink } from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavBar from 'react-bootstrap/Navbar';

function Navbar() {
    return (
        <>
            <NavBar bg="dark" variant="dark">
                <Container>
                    <NavBar.Brand>Redux Shopping</NavBar.Brand>
                    <Nav className="me-auto">
                            <Nav.Link >
                        <NavLink to="/">
                                Home
                        </NavLink>
                            </Nav.Link>
                            <Nav.Link >
                        <NavLink to="/cart">
                                Cart
                        </NavLink>
                            </Nav.Link>
                    </Nav>
                </Container>
            </NavBar>


        </>
    )
}

export default Navbar