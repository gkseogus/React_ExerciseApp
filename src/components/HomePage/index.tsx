import React from 'react';
import 'antd/dist/antd.css';
import styled from 'styled-components';

const Constain = styled.div`
  padding: 1em;
  background: black;
  height: 100vh;
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
    </Constain>
  );
};

export default React.memo(HomePage);