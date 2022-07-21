import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavbarComponent() {
  return (
    <NavbarComponent collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <NavbarComponent.Brand href="#home">Hewa</Navbar.Brand>
        <NavbarComponent.Toggle aria-controls="responsive-navbar-nav" />
        <NavbarComponent.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
            <Nav.link href="#current-location">Current Location</Nav.link>
            <Nav.link href="#full-week">Full Week</Nav.link>
          </Nav>
        </NavbarComponent.Collapse>
      </Container>
    </NavbarComponent>
  );
}

export default Navbar;
