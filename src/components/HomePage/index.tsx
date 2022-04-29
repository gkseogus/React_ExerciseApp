import React from 'react';
import styled from 'styled-components';
import Cards from '../Cards';
import Footer from '../Footer';

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
  @keyframes slide {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0%);
    }
  }
  animation: slide 1s;  
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
    <div>
      <Constain>  
        <FirstFont>
          Exercise Blog
        </FirstFont>
        <ListConstain>
          <Cards/>
        </ListConstain>
      </Constain>
      <Footer/>
    </div>
  );
};

export default React.memo(HomePage);