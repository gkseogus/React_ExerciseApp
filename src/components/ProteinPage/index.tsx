import React from 'react';
import 'antd/dist/antd.css';
import styled from 'styled-components';
import ProteinItems from '../ProteinItems';
import Footer from '../Footer';

const Constain = styled.div`
  padding: 1em;
  background: black;
  height: 100%;
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

const ProteinPage = (itme: any) => {

  return (
    <Constain>  
      <FirstFont>
        Protein 
      </FirstFont>
      <ProteinItems/>
      <Footer/>
    </Constain>
  );
};

export default React.memo(ProteinPage);