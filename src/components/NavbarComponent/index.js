import React from 'react'
import { Navbar, Offcanvas, Container, Nav } from 'react-bootstrap'
import Logo from '../img/logo.png'

const NavbarComponent = () => {
    return (
        <>
      {['xl'].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="mb-3">
          <Container fluid>
            <Navbar.Brand href="#"><img
            src={Logo}              
            width="60"
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">Our Services</Nav.Link>
                  <Nav.Link href="#action2">Why Us</Nav.Link>
                  <Nav.Link href="#action3">Testimonial</Nav.Link>
                  <Nav.Link href="#action3">FAQ</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
        </>
    )
}

export default NavbarComponent