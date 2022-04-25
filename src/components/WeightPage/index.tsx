import React from 'react';
import 'antd/dist/antd.css';
import styled from 'styled-components';
import Footer from '../Footer';
import { Breadcrumb } from 'react-bootstrap';
import { Link } from 'react-router-dom';

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

const WeightPage = () => {

  return (
    <div>
      <Constain>  
        <BreadCrumbsContstain>
          <Breadcrumb>
            <Breadcrumb.Item active>
              <Link to="/">
                Home
              </Link>
              </Breadcrumb.Item>
            <Breadcrumb.Item active>Weight</Breadcrumb.Item>
          </Breadcrumb>
        </BreadCrumbsContstain>
        <FirstFont>
          Weight
        </FirstFont>
      </Constain>
      <Footer/>
    </div>
  );
};

export default React.memo(WeightPage);