import React from 'react';
import 'antd/dist/antd.css';
import styled from 'styled-components';
import ProteinItems from '../ProteinItems';
import Footer from '../Footer';
import { Breadcrumb } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PageNation from '../PageNation';

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

const SecondFont = styled.h6`
  position: static;
  text-align: center;
  background: linear-gradient(to right top, #000000, #94eb09);
  color: transparent;
  -webkit-background-clip: text;
  font-family: 'Noto Sans KR', sans-serif;
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

const ProteinPage = (itme: any) => {

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
            <Breadcrumb.Item active>Protein</Breadcrumb.Item>
          </Breadcrumb>
        </BreadCrumbsContstain>
        <FirstFont>
          Protein 
          <SecondFont>
            로그인해야 볼 수 있음
          </SecondFont>
        </FirstFont>
        <ProteinItems/>
        <PageNation/>
      </Constain>
      <Footer/>
    </div>
  );
};

export default React.memo(ProteinPage);