import React from 'react';
import 'antd/dist/antd.css';
import styled from 'styled-components';
import RoutineItems from '../RoutineItems';

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

const RoutinePage = () => {

  return (
    <Constain>  
      <FirstFont>
          Routine
      </FirstFont>
      <RoutineItems/>
    </Constain>
  );
};

export default React.memo(RoutinePage);