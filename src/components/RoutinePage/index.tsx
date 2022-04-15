import React from 'react';
import 'antd/dist/antd.css';
import styled from 'styled-components';
import { Tabs,Tab } from 'react-bootstrap';
import Chest from '../RoutineItems/chest';
import Back from '../RoutineItems/back';
import Arm from '../RoutineItems/arm';
import Shulder from '../RoutineItems/shoulder';

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
const ContentsFont = styled.h1`
  padding: 5%;
  font-size: 20px;
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

const RoutinePage = () => {

  return (
    <Constain>  
      <FirstFont>
        Routine
      </FirstFont>
      <TabsFont>
        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3" mountOnEnter={true}>
          <Tab eventKey="1" title="Chest">
            <ContentsFont>
              Chest Exercise Routine
            </ContentsFont>
            <TabFont>저중량: 5 set, 8회~ 12회</TabFont>
            <TabFont>고중량: 5 set, 5회 ~ 10회</TabFont>
            <Chest/>
          </Tab>
          <Tab eventKey="2" title="Back">
            <ContentsFont>
              Back Exercise Routine
            </ContentsFont>
            <TabFont>저중량: 5 set, 8회~ 12회</TabFont>
            <TabFont>고중량: 5 set, 5회 ~ 10회</TabFont>
            <Back/>
          </Tab>
          <Tab eventKey="3" title="Arm">
            <ContentsFont>
              Arm Exercise Routine
            </ContentsFont>
            <TabFont>저중량: 5 set, 8회~ 12회</TabFont>
            <TabFont>고중량: 5 set, 5회 ~ 10회</TabFont>
            <Arm/>
          </Tab>
          <Tab eventKey="4" title="Shoulder">
            <ContentsFont>
              Shoulder Exercise Routine
            </ContentsFont>
            <TabFont>저중량: 5 set, 8회~ 12회</TabFont>
            <TabFont>고중량: 5 set, 5회 ~ 10회</TabFont>
            <Shulder/>
          </Tab>
        </Tabs>
      </TabsFont>
    </Constain>
  );
};

export default React.memo(RoutinePage);