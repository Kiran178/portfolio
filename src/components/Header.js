import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <Navbar variant="dark" className="header">
        <Container fluid>
          <Navbar.Brand as={Link} to={"/"}>
            Kiran
          </Navbar.Brand>
          <Nav className="justify-content-end">
            <Nav.Link as={Link} to={"/about"}>
              <span>01. </span>About
            </Nav.Link>
            <Nav.Link as={Link} to={"/experience"}>
              <span>02. </span>Experience
            </Nav.Link>
            <Nav.Link as={Link} to={"/work"}>
              <span>03. </span>Work
            </Nav.Link>
            <Nav.Link as={Link} to={"/contact"}>
              <span>04. </span>Contact
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
