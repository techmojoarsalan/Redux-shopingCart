import React from 'react'
import { NavLink } from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavBar from 'react-bootstrap/Navbar';
import { useSelector, useDispatch } from 'react-redux' 
import { FaStore } from "react-icons/fa";

function Navbar() {
    const dispatch = useDispatch();

    const { cart } = useSelector((state) => state.shop)
    return (
        <>
            <NavBar bg="dark" variant="dark">
                <Container>
                    <NavBar.Brand>Redux Shopping</NavBar.Brand>
                    <Nav className="me-auto d-flex gap-3 ">
                        
                        <NavLink to="/">
                                Home
                        </NavLink>
                            {/* </Nav.Link> */}
                            {/* <Nav.Link > */}
                            {/* </Nav.Link> */}
                            <NavLink to="/products">
                                Products
                        </NavLink>
                        <NavLink to="/cart">
                                Cart <FaStore /> {cart.length}
                        </NavLink>

                        
                    </Nav>
                </Container>
            </NavBar>


        </>
    )
}

export default Navbar