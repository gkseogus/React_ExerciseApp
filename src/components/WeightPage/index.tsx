import React from 'react';
import 'antd/dist/antd.css';
import styled from 'styled-components';
import Footer from '../Footer';
import { Breadcrumb } from 'react-bootstrap';
import CardsWeight from '../CardsWeight';
import { useNavigate } from 'react-router-dom';

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
  @keyframes smoothAppear {
    from {
      opacity: 0;
      transform: translateY(-5%);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  animation: smoothAppear 1s;  
`

const BreadCrumbsContstain = styled.div`
  @media (min-width: 760px) {
    padding: 5px;
    position: absolute;
    left: 1350px;
  }
  padding: 5px;
  position: absolute;
  top: 60px;
`

const ListConstain = styled.li`
  text-align: center;
  position: static;
  margin-left: auto;
  margin-right: auto;
  @keyframes smoothAppear {
    from {
      opacity: 0;
      transform: translateY(-5%);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  animation: smoothAppear 1s;  
`

const BreadcrumbFont = styled.h6`
  background: linear-gradient(to right top, #000000, #94eb09);
  color: transparent;
  -webkit-background-clip: text;
  &:hover{  
    background-color : white;
    color : white;
  }
`

const WeightPage = () => {

  const navigate = useNavigate();

  return (
    <div>
      <Constain>  
        <BreadCrumbsContstain>
          <Breadcrumb>
            <Breadcrumb.Item active onClick={() => {navigate('/')}}>
              <BreadcrumbFont>
                Home
              </BreadcrumbFont>
              </Breadcrumb.Item>
            <Breadcrumb.Item active>Weight</Breadcrumb.Item>
          </Breadcrumb>
        </BreadCrumbsContstain>
        <FirstFont>
          Weight
        </FirstFont>
        <ListConstain>
          <CardsWeight/>
        </ListConstain>
      </Constain>
      <Footer/>
    </div>
  );
};

export default React.memo(WeightPage);