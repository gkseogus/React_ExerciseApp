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
`

const NavLink = styled.div`
  padding: 7px;
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
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
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
            <NavDropdown title={
              <NavbarFont>
                BGM
              </NavbarFont>
            } id="basic-nav-dropdown">
              <NavDropdown.Item href="#bgm/pop">POP</NavDropdown.Item>
              <NavDropdown.Item href="#bgm/kpop">KPOP</NavDropdown.Item>
              <NavDropdown.Item href="#bgm/clup">CLUP</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <AuthController/>  
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default React.memo(MainNavbar);