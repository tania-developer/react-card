import React from 'react';
import { Navbar,Nav } from 'react-bootstrap';
import './HeaderNav.css'

const HeaderNav = () => {
    return (
        <div className="container">
            <Navbar collapseOnSelect expand="lg" bg="" variant="light">
                <Navbar.Brand href="#home" className="ml-auto"><h4>MyChallenge</h4></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="nav-div">
                        <Nav.Link href="/product" className="nav-item">Product</Nav.Link>
                        <Nav.Link href="/download" className="nav-item">Download</Nav.Link>
                        <Nav.Link href="/pricing" className="nav-item">pricing</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default HeaderNav;