import React from 'react';
import 'antd/dist/antd.css';
import styled from 'styled-components';
import Cards from '../Cards';

const Constain = styled.div`
  padding: 1em;
  background: black;
  height: 100vh;
`

const ListConstain = styled.li`
  text-align: center;
  position: static;
  margin-left: auto;
  margin-right: auto;
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

const HomePage = () => {
  return (
    <Constain>  
      <FirstFont>
        Exercise Blog
      </FirstFont>
      <ListConstain>
        <Cards/>
      </ListConstain>
    </Constain>
  );
};

export default React.memo(HomePage);