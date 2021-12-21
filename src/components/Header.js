import { motion } from "framer-motion";
import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { fadeDown } from "../Animation";

export default function Header() {
  return (
    <motion.div initial="hidden" animate="visible">
      <Navbar variant="dark" className="header">
        <Container fluid>
          <motion.div
            variants={fadeDown}
            transition={{ duration: 0.75, ease: "easeOut" }}
          >
            <Navbar.Brand as={Link} to={"/"}>
              Kiran
            </Navbar.Brand>
          </motion.div>
          <Nav className="justify-content-end">
            <motion.div
              variants={fadeDown}
              transition={{ delay: 0.25, duration: 0.5, ease: "easeOut" }}
            >
              <Nav.Link as={Link} to={"/about"}>
                <span>01. </span>About
              </Nav.Link>
            </motion.div>
            <motion.div
              variants={fadeDown}
              transition={{ delay: 0.35, duration: 0.5, ease: "easeOut" }}
            >
              <Nav.Link as={Link} to={"/experience"}>
                <span>02. </span>Experience
              </Nav.Link>
            </motion.div>
            <motion.div
              variants={fadeDown}
              transition={{ delay: 0.45, duration: 0.5, ease: "easeOut" }}
            >
              <Nav.Link as={Link} to={"/work"}>
                <span>03. </span>Work
              </Nav.Link>
            </motion.div>
            <motion.div
              variants={fadeDown}
              transition={{ delay: 0.55, duration: 0.5, ease: "easeOut" }}
            >
              <Nav.Link as={Link} to={"/contact"}>
                <span>04. </span>Contact
              </Nav.Link>
            </motion.div>
          </Nav>
        </Container>
      </Navbar>
    </motion.div>
  );
}
