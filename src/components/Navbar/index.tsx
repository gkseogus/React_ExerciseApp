import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { AuthController } from '../GoogleSheet';

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
  height: 10px;
  padding: 7px;
  &:hover{
    background: linear-gradient(to right top, #000000, #BCFF66);
    color: #BCFF66;
    -webkit-background-clip: text;
  }
`

const NavLink = styled.div`
  padding: 7px;
`

const ToggleConstain = styled.div`
  background: linear-gradient(to right top, #000000, #94eb09);
  border-radius: 5px;
`
const MainNavbar = () => {

  return (
    <Navbar bg="black" expand="lg">
      <Container>
        <Link to="/">
          <Navbar.Brand>
            <img
              alt=""
              src="/Image/gym.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
        </Link>
        <TitleFont>
              HDH Exercise Blog
        </TitleFont>
        <ToggleConstain>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </ToggleConstain>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" style={{
            padding: '20px'
          }}>
            <NavLink>
              <Link to="/">
                  <NavbarFont>
                    Home
                  </NavbarFont>
              </Link>
            </NavLink>
            <NavLink>
              <Link to="/weight">
                <NavbarFont>
                  Weight
                </NavbarFont>
              </Link>
            </NavLink>
            <NavLink>
              <Link to="/routine">
                <NavbarFont>
                  Routine
                </NavbarFont>
              </Link>
            </NavLink>
            <NavLink>
              <Link to="/protein">
                <NavbarFont>
                  Protein
                </NavbarFont>
              </Link>
            </NavLink>
            <NavLink>
              <Link to="/notice">
                <NavbarFont>
                  Notice
                </NavbarFont>
              </Link>
            </NavLink>
            <NavDropdown title={
              <NavbarFont>
                BGM
              </NavbarFont>
            } id="basic-nav-dropdown">
              <NavDropdown.Item href="https://www.youtube.com/watch?v=BTDfpCqtqk0&t=15597s" target="_blank">POP</NavDropdown.Item>
              <NavDropdown.Item href="https://www.youtube.com/watch?v=hX_dU55ACTQ" target="_blank">KPOP</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="https://www.youtube.com/watch?v=eQr75KSiMJQ&t=9106s" target="_blank">CLUP</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <AuthController/>  
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default React.memo(MainNavbar);