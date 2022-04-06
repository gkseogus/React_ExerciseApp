import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import styled from 'styled-components';

const TitleFont = styled.h6`
  color: white;
  position: static;
  padding: 10px;
    background: linear-gradient(to right top, #000000, #94eb09);
  color: transparent;
  -webkit-background-clip: text;
  font-family: 'Rubik Glitch', cursive;
`

const NavbarFont = styled.h6`
  color: white;
  position: static;
`

const Navbar1 = () => {


  return (
<Navbar bg="black" expand="lg">
  <Container>
    <Navbar.Brand href="#home">
      <img
            alt=""
            src="/gym.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
      />
    </Navbar.Brand>
    <TitleFont>
          HDH Exercise Blog
    </TitleFont>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto" style={{
        padding: '20px'
      }}>
        <Nav.Link href="#home">
          <NavbarFont>
            Home
          </NavbarFont>
        </Nav.Link>
        <Nav.Link href="#link">
          <NavbarFont>
            Link
          </NavbarFont>
        </Nav.Link>
        <NavDropdown title={
          <NavbarFont>
            dropdown
          </NavbarFont>
        } id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
  );
};

export default React.memo(Navbar1);