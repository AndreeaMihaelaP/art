import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";

import Logo from "../../assets/logo/logo_name.svg";
import "../../styles/navigation.css";

const NavigationBar = () => {
  return (
    <>
      <Navbar id="navbar" collapseOnSelect expand="sm" variant="dark">
        <Container>
          <Navbar.Brand href="/home" id="navbar-logo">
            <img src={Logo} alt="Logo" id="navbar-logo-img" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Nav.Link
                href="/home"
                className="navbar-item navbar-separator px-5">
                HOME
              </Nav.Link>
              <NavDropdown
                title="GALLERY"
                id="basic-nav-dropdown"
                className="navbar-item navbar-separator px-5">
                <NavDropdown.Item href="/gallery">Gallery</NavDropdown.Item>
                <NavDropdown.Item href="/gallery">Flowers</NavDropdown.Item>
                <NavDropdown.Item href="/gallery">Portraits</NavDropdown.Item>
                <NavDropdown.Item href="/gallery">Landscapes</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title="EXHIBITIONS"
                id="basic-nav-dropdown"
                className="navbar-item navbar-separator px-5">
                <NavDropdown.Item href="/exhibitions">
                  Personal
                </NavDropdown.Item>
                <NavDropdown.Item href="/exhibitions">
                  University
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link
                href="/about"
                className="navbar-item navbar-separator px-5">
                ABOUT
              </Nav.Link>
              <Nav.Link href="/contact" className="navbar-item px-5">
                CONTACT
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default NavigationBar;
