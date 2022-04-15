import React from 'react';
import 'antd/dist/antd.css';
import styled from 'styled-components';
import RoutineItems from '../RoutineItems';
import { Nav } from 'react-bootstrap';

const Constain = styled.div`
  padding: 1em;
  background: black;
`

const FirstFont = styled.h1`
  position: static;
  font-size: 100px;
  text-align: center;
  background: linear-gradient(to right top, #000000, #94eb09);
  color: transparent;
  -webkit-background-clip: text;
  font-family: 'Rubik Glitch', cursive;
`

const NavFont = styled.h3`
  font-size: 30px;
  background: linear-gradient(to right top, #000000, #94eb09);
  color: transparent;
  -webkit-background-clip: text;
  font-family: 'Permanent Marker', cursive;
`

const RoutinePage = () => {

  return (
    <Constain>  
      <FirstFont>
          Routine
      </FirstFont>
      <Nav justify variant="tabs" defaultActiveKey="/home" >
        <Nav.Item>
          <Nav.Link eventKey="link-1">
            <NavFont>
              Loooonger NavLink
            </NavFont>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">              
            <NavFont>
              Loooonger NavLink
            </NavFont>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-3">              
            <NavFont>
              Loooonger NavLink
            </NavFont>
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <RoutineItems/>
    </Constain>
  );
};

export default React.memo(RoutinePage);