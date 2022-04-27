import React from 'react';
import styled from 'styled-components';
import { Carousel } from 'react-bootstrap';

const RoutineFout = styled.h2`
  font-family: 'Black Han Sans', sans-serif;
  text-align: center;
  color: white;
  padding: 40px;
`

const Arm = () => {

    return (
        <div>
            <Carousel>
                <Carousel.Item interval={2000}>
                    <RoutineFout>덤벨 컬</RoutineFout>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <RoutineFout>바벨 컬</RoutineFout>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <RoutineFout>케이블 푸쉬 다운</RoutineFout>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <RoutineFout>스탠딩 로프 트라이 셉 익스텐션</RoutineFout>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default React.memo(Arm);