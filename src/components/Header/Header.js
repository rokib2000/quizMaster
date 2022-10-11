import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import Logo from '../../image/logo.png'

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
            <Navbar.Brand href="/">
            <img
              alt=""
              src={Logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            quizMaster
          </Navbar.Brand>
            {/* <Navbar.Brand href="/">quizMaster</Navbar.Brand> */}
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ms-auto">
                    <NavLink className='nav-link' to='/'>Home</NavLink>
                    <NavLink className='nav-link' to='/statistics'>Statistics</NavLink>
                    <NavLink className='nav-link' to='/blog'>Blog</NavLink>
                </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    );
};

export default Header;