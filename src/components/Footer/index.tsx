import React from 'react';
import styled from 'styled-components';
import { Card } from 'react-bootstrap';

const FooterFont = styled.h6`
  text-align: center;
`

const Footer = () => {

  return (
    <div>
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

export default React.memo(Footer);