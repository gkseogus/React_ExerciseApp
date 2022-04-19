import React from 'react';
import styled from 'styled-components';
import Cards from '../Cards';
import { Card } from 'react-bootstrap';

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

const FooterFont = styled.h6`
  text-align: center;
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
      <Card>
        <FooterFont>
          <Card.Header>단순 운동 취미를 가진 개발자 사이트 입니다.</Card.Header>
        </FooterFont>
        <Card.Body>
          <Card.Title>-사이트 정보-</Card.Title>
          <Card.Text>
            개발자 연락처: 010-2246-6787 <br/>
            개발자 이메일: fbzbffldj@gmail.com
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default React.memo(HomePage);