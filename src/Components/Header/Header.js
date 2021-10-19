import React from 'react';
import './Header.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from './logo.jpg';
import useAuth from '../../hook/useAuth';


const Header = () => {
    const { user, logout } = useAuth();
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <img
                        src={logo}
                        className="d-inline-block align-top logo-img"
                        alt="Logo"
                    />
                    <Navbar.Brand className="brand-name" href="#home">Dhanmondi Diagnostic  and Consultation Centre</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-2">
                            <NavLink to="/" className="mx-1 home-link">Home</NavLink>
                            <NavLink to="/services" className="mx-2 services-link">Services</NavLink>
                            <NavLink to="/doctors" className="mx-2 find-doc-link">Doctors</NavLink>
                            <NavLink to="/about" className="mx-2 about-link">About</NavLink>
                            <NavLink to="/register" className="mx-2 about-link">Register</NavLink>
                            <NavLink to="/login" className="mx-3  about-link">Login</NavLink>
                            <span>{user.displayName} </span>
                            {user?.email && < button onClick={logout} className="mx-3 my-2"> Logout</button>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar >
        </div >
    );
};

export default Header;