import React from 'react';
import styled from 'styled-components';
import { Carousel } from 'react-bootstrap';

const RoutineFout = styled.h2`
  text-align: center;
  color: white;
  padding: 40px;
`

const ListBox = styled.div`
    padding: 80px;
    height: 200px;
`

const RoutineItem = () => {

    return (
        <div>
            <ListBox>
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
                            <RoutineFout>인클라인 머신</RoutineFout>
                    </Carousel.Item>
                    <Carousel.Item interval={2000}>
                            <RoutineFout>체스트 플라이 머신</RoutineFout>
                    </Carousel.Item>
                    <Carousel.Item interval={2000}>
                            <RoutineFout>스미스 벤치 머신</RoutineFout>
                    </Carousel.Item>
                </Carousel>
            </ListBox>
            <ListBox>
                <Carousel>
                    <Carousel.Item interval={2000}>
                            <RoutineFout>루마니안 데드</RoutineFout>
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
            </ListBox>
            <ListBox>
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
            </ListBox>
            <ListBox>
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
                            <RoutineFout>네이즐 트라이 셉</RoutineFout>
                    </Carousel.Item>
                    <Carousel.Item interval={2000}>
                            <RoutineFout>스탠딩 로프 트라이 셉 익스텐션</RoutineFout>
                    </Carousel.Item>
                </Carousel>
            </ListBox>
        </div>
    );
};

export default React.memo(RoutineItem);