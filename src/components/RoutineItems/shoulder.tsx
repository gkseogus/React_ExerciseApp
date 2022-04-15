import React from 'react';
import styled from 'styled-components';
import { Carousel } from 'react-bootstrap';

const RoutineFout = styled.h2`
  font-family: 'Black Han Sans', sans-serif;
  text-align: center;
  color: white;
  padding: 40px;
`

const Shoulder = () => {

    return (
        <div>
            <Carousel>
                <Carousel.Item interval={2000}>
                    <RoutineFout>사이드 레터럴 레이즈</RoutineFout>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <RoutineFout>프론트 레터럴 레이즈</RoutineFout>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <RoutineFout>덤벨 숄더 프레스</RoutineFout>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <RoutineFout>밀리터리 프레스</RoutineFout>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <RoutineFout>벤트 오버 레터럴 레이즈</RoutineFout>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <RoutineFout>펙덱 플라이</RoutineFout>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default React.memo(Shoulder);