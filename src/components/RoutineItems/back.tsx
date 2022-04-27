import React from 'react';
import styled from 'styled-components';
import { Carousel } from 'react-bootstrap';

const RoutineFout = styled.h2`
  font-family: 'Black Han Sans', sans-serif;
  text-align: center;
  color: white;
  padding: 40px;
`

const Back = () => {

    return (
        <div>
            <Carousel>
                <Carousel.Item interval={2000}>
                    <RoutineFout>데드 리프트</RoutineFout>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <RoutineFout>바벨 로우</RoutineFout>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <RoutineFout>덤벨 로우</RoutineFout>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <RoutineFout>미드 로우</RoutineFout>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <RoutineFout>케이블 로우</RoutineFout>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <RoutineFout>T바 로우</RoutineFout>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <RoutineFout>렛풀 다운</RoutineFout>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default React.memo(Back);