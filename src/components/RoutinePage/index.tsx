import React from 'react';
import 'antd/dist/antd.css';
import styled from 'styled-components';
import { Tabs,Tab, Breadcrumb } from 'react-bootstrap';
import Chest from '../RoutineItems/chest';
import Back from '../RoutineItems/back';
import Arm from '../RoutineItems/arm';
import Shulder from '../RoutineItems/shoulder';
import MyResponsiveRadar from '../RaderChart/index';
import Footer from '../Footer';
import { useNavigate } from 'react-router-dom';

const Constain = styled.div`
  padding: 1em;
  background: black;
  height: 100vmax;
`

const ChartConstain = styled.div`
  padding: 1em;
  background: white;
  text-align: center;
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
const ContentsFont = styled.h1`
  padding: 20px;
  font-size: 50px;
  text-align: center;
  background: linear-gradient(to right top, #000000, #94eb09);
  color: transparent;
  -webkit-background-clip: text;
  font-family: 'Permanent Marker', cursive;
`
const TabFont = styled.h3`
  font-size: 20px;
  text-align: center;
  color: white;
  font-family: 'Black Han Sans', sans-serif;
`

const TabsFont = styled.h3`
  background: linear-gradient(to right top, #000000, #94eb09);
  color: transparent;
  -webkit-background-clip: text;
  font-family: 'Permanent Marker', cursive;
`

const ImageContainer = styled.div`
  display: block;
  width: 100%;
  text-align: center;
  padding: 100px;
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

const BreadcrumbFont = styled.h6`
  background: linear-gradient(to right top, #000000, #94eb09);
  color: transparent;
  -webkit-background-clip: text;
  &:hover{  
    background-color : white;
    color : white;
  }
`

const RoutinePage = () => {

  const navigate = useNavigate();

  return (
    <div>
      <Constain>  
        <BreadCrumbsContstain>
          <Breadcrumb>
            <Breadcrumb.Item active>
            <Breadcrumb.Item active onClick={() => {navigate('/')}}>
              <BreadcrumbFont>
                Home
              </BreadcrumbFont>
              </Breadcrumb.Item>
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Routine</Breadcrumb.Item>
          </Breadcrumb>
        </BreadCrumbsContstain>
        <FirstFont>
          Routine
        </FirstFont>
        <ContentsFont>
          Inbody
        </ContentsFont>
        <ChartConstain>
          <MyResponsiveRadar/>
        </ChartConstain>
        <TabsFont>
          <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3" mountOnEnter={true}>
            <Tab eventKey="1" title="Chest">
              <ContentsFont>
                Chest Exercise Routine
              </ContentsFont>
              <ImageContainer>
                <img className = 'chestImg' src="/Image/RoutineImage/chest.jpg" alt='가슴사진' height='200' width='250'/>
              </ImageContainer>
              <TabFont>저중량: 5 set, 8회~ 12회</TabFont>
              <TabFont>고중량: 5 set, 5회 ~ 10회</TabFont>
              <Chest/>
            </Tab>
            <Tab eventKey="2" title="Back">
              <ContentsFont>
                Back Exercise Routine
              </ContentsFont>
              <ImageContainer>
                <img className = 'backImg' src="/Image/RoutineImage/back.jpg" alt='등사진' height='200' width='250'/>
              </ImageContainer>
              <TabFont>저중량: 5 set, 8회~ 12회</TabFont>
              <TabFont>고중량: 5 set, 5회 ~ 10회</TabFont>
              <Back/>
            </Tab>
            <Tab eventKey="3" title="Arm">
              <ContentsFont>
                Arm Exercise Routine
              </ContentsFont>
              <ImageContainer>
                <img className = 'armImg' src="/Image/RoutineImage/arm.jpg" alt='팔사진' height='200' width='250'/>
              </ImageContainer>
              <TabFont>저중량: 5 set, 8회~ 12회</TabFont>
              <TabFont>고중량: 5 set, 5회 ~ 10회</TabFont>
              <Arm/>
            </Tab>
            <Tab eventKey="4" title="Shoulder">
              <ContentsFont>
                Shoulder Exercise Routine
              </ContentsFont>
              <ImageContainer>
                <img className = 'shoulderImg' src="/Image/RoutineImage/shoulder.jpg" alt='어깨사진' height='200' width='250'/>
              </ImageContainer>
              <TabFont>저중량: 5 set, 8회~ 12회</TabFont>
              <TabFont>고중량: 5 set, 5회 ~ 10회</TabFont>
              <Shulder/>
            </Tab>
          </Tabs>
        </TabsFont>
      </Constain>
      <Footer/>
    </div>
  );
};

export default React.memo(RoutinePage);