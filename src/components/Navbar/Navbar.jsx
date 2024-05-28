import React from 'react'
import './Navbar.css'
import "bootstrap/dist/css/bootstrap.min.css"
import { NavDropdown, Container, Nav, Navbar, Offcanvas } from "react-bootstrap";


function NavBar() {
  return (
    <>
      <Navbar key="md" expand="md" className="mb-3 pb-4 pt-5">
        <Container fluid className="navbar-container">
          <Navbar.Brand href="/">
            <img
              alt=""
              src="src\assets\logo-miguelcastro1-sinfondo.png"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar-expand-md" />
          <Navbar.Offcanvas
            id="offcanvasNavbar-expand-md"
            aria-labelledby="offcanvasNavbarLabel-expand-md"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel-expand-md">
                Hola,
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end align-items-center flex-grow-1 pe-3">
                <NavDropdown
                  title="Servicios"
                  className="navbar-dropdown"
                  id="offcanvasNavbarDropdown-expand-md"
                >
                  <NavDropdown.Item href="/Terapia">Terapia</NavDropdown.Item>
                  <NavDropdown.Item href="/Talleres">Talleres</NavDropdown.Item>
                  <NavDropdown.Item href="/Coaching">Coaching</NavDropdown.Item>
                  <NavDropdown.Item href="/Igualdad">Igualdad</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/sobremi">Sobre mí</Nav.Link>
                <Nav.Link href="/blog">Blog</Nav.Link>
                <Nav.Link href="/contacto" className="btn-contact py-1 px-3">
                  Contacto
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar