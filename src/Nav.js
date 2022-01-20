import React from "react";
import {Navbar, Nav, Container} from "react-bootstrap";
import {Link} from "react-router-dom"
// import Container from "react-bootstrap/Container";
// import NavDropdown from "react-bootstrap/NavDropdown";

function myNavbar(props) {
  return (
    <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Link to="/" className="nav-link">Movies</Link>
        <Link to="/favorites" className="nav-link">favorites</Link>
        <Link to="/login" className="nav-link">Login</Link>
        <Link to="/register" className="nav-link">Register</Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
  );
}

export default myNavbar;
