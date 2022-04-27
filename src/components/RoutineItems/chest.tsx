import React from 'react';
import styled from 'styled-components';
import { Carousel } from 'react-bootstrap';

const RoutineFout = styled.h2`
  font-family: 'Black Han Sans', sans-serif;
  text-align: center;
  color: white;
  padding: 40px;
`

const Chest = () => {

    return (
        <div>
            <Carousel>
                <Carousel.Item interval={2000}>
                    <RoutineFout>덤벨 프레스</RoutineFout>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <RoutineFout>벤치 프레스</RoutineFout>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <RoutineFout>해머 프레스</RoutineFout>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <RoutineFout>스미스 벤치 프레스</RoutineFout>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <RoutineFout>인클라인 머신</RoutineFout>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <RoutineFout>체스트 플라이 머신</RoutineFout>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default React.memo(Chest);