import React from 'react';
import { Card } from 'react-bootstrap';
import styled from 'styled-components';

const CardGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 200px 200px 200px;
    gap: 20px 20px;
    padding: 10px;
`

const CardTitleFont = styled.h3`
    font-family: 'Black Han Sans', sans-serif;
`

const FirstCardFont = styled.h3`
    font-size: 20px;
    background: linear-gradient(to right top, #000000, #94eb09);
    color: transparent;
    -webkit-background-clip: text;
    font-family: 'Black Han Sans', sans-serif;
    text-align: left;
`

const SecondCardFont = styled.h3`
    font-size: 15px;
    text-align: left;
    padding: 5px;
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

const ArmText = styled.h1`
    padding: 20px;
    margin-top: 4em;
    font-size: 50px;
    text-align: center;
    background: linear-gradient(to right top, #000000, #94eb09);
    color: transparent;
    -webkit-background-clip: text;
    font-family: 'Permanent Marker', cursive;
`

const CardsWeight = () => {
    return (
        <div>
            <ContentsFont>
                Chest
            </ContentsFont>
            <CardGrid>
                <Card>
                    <Card.Body>
                        <Card.Title><CardTitleFont>덤벨 프레스</CardTitleFont></Card.Title>
                        <FirstCardFont>
                            자세 종류: 
                            <SecondCardFont>
                                기본 플랫 자세, 인클라인, 디클라인<br/>
                            </SecondCardFont>
                        </FirstCardFont>
                        <FirstCardFont>
                            그립 종류:
                            <SecondCardFont>
                                기본
                            </SecondCardFont>
                        </FirstCardFont>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Title><CardTitleFont>벤치 프레스</CardTitleFont></Card.Title>
                        <FirstCardFont>
                            자세 종류: 
                            <SecondCardFont>
                                기본, 인클라인, 디클라인<br/>
                            </SecondCardFont>
                        </FirstCardFont>
                        <FirstCardFont>
                            그립 종류:  
                            <SecondCardFont>
                                기본, 와이드 내로우
                            </SecondCardFont>
                        </FirstCardFont>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Title><CardTitleFont>스미스 벤치 프레스</CardTitleFont></Card.Title>  
                        <FirstCardFont>
                            자세 종류: 
                            <SecondCardFont>
                                기본, 인클라인, 디클라인<br/>
                            </SecondCardFont>
                        </FirstCardFont>
                        <FirstCardFont>
                            그립 종류:  
                            <SecondCardFont>
                                기본, 와이드 내로우
                            </SecondCardFont>
                        </FirstCardFont>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>                        
                        <Card.Title><CardTitleFont>해머 프레스</CardTitleFont></Card.Title>
                        <FirstCardFont>
                            자세 종류: 
                            <SecondCardFont>
                                기본, 원암 <br/>
                            </SecondCardFont>
                        </FirstCardFont>
                        <FirstCardFont>
                            그립 종류:  
                            <SecondCardFont>
                                기본
                            </SecondCardFont>
                        </FirstCardFont>
                    </Card.Body>
                    </Card>
                <Card>
                    <Card.Body>
                        <Card.Title><CardTitleFont>인클라인 머신</CardTitleFont></Card.Title>
                        <FirstCardFont>
                            자세 종류:     
                            <SecondCardFont>
                                기본, 체스트(모드), 숄더(모드) <br/>
                            </SecondCardFont>
                        </FirstCardFont>
                        <FirstCardFont>
                            그립 종류:      
                            <SecondCardFont>
                                기본
                            </SecondCardFont>
                        </FirstCardFont>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Title><CardTitleFont>체스트 플라이 머신</CardTitleFont></Card.Title>
                        <FirstCardFont>
                            자세 종류:     
                            <SecondCardFont>
                                기본, 크로스, 원암 <br/>
                            </SecondCardFont>
                        </FirstCardFont>
                        <FirstCardFont>
                            그립 종류:      
                            <SecondCardFont>
                                기본
                            </SecondCardFont>
                        </FirstCardFont>
                    </Card.Body>
                </Card>
            </CardGrid>
            <ContentsFont>
                Back
            </ContentsFont>
            <CardGrid>
                <Card>
                    <Card.Body>
                        <Card.Title><CardTitleFont>데드 리프트</CardTitleFont></Card.Title>
                        <FirstCardFont>
                            자세 종류:     
                            <SecondCardFont>
                                기본, 루마니안, 스모 <br/>
                            </SecondCardFont>
                        </FirstCardFont>
                        <FirstCardFont>
                            그립 종류: 
                            <SecondCardFont>
                                얼터네이트, 오버 
                            </SecondCardFont>
                        </FirstCardFont>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Title><CardTitleFont>바벨 로우</CardTitleFont></Card.Title>    
                        <FirstCardFont>
                            자세 종류: 
                            <SecondCardFont>
                                기본 <br/>
                            </SecondCardFont>
                        </FirstCardFont>
                        <FirstCardFont>
                            그립 종류: 
                            <SecondCardFont>
                                오버, 언더 
                            </SecondCardFont>
                        </FirstCardFont>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Title><CardTitleFont>덤벨 로우</CardTitleFont></Card.Title>
                        <FirstCardFont>
                            자세 종류: 
                            <SecondCardFont>
                                기본, 원암 <br/>
                            </SecondCardFont>
                        </FirstCardFont>
                        <FirstCardFont>
                            그립 종류:  
                            <SecondCardFont>
                                기본
                            </SecondCardFont>
                        </FirstCardFont>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Title><CardTitleFont>미드 로우</CardTitleFont></Card.Title>
                        <FirstCardFont>
                            자세 종류: 
                            <SecondCardFont>
                                기본 <br/>
                            </SecondCardFont>
                        </FirstCardFont>
                        <FirstCardFont>
                            그립 종류:  
                            <SecondCardFont>
                                기본
                            </SecondCardFont>
                        </FirstCardFont>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Title><CardTitleFont>케이블 로우</CardTitleFont></Card.Title>
                        <FirstCardFont>
                            자세 종류: 
                            <SecondCardFont>
                                기본, 원암 <br/>
                            </SecondCardFont>
                        </FirstCardFont>
                        <FirstCardFont>
                            그립 종류:  
                            <SecondCardFont>
                                기본, y바, 일자바
                            </SecondCardFont>
                        </FirstCardFont>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Title><CardTitleFont>T바 로우</CardTitleFont></Card.Title>
                        <FirstCardFont>
                            자세 종류: 
                            <SecondCardFont>
                                기본 <br/>
                            </SecondCardFont>
                        </FirstCardFont>
                        <FirstCardFont>
                            그립 종류:  
                            <SecondCardFont>
                                기본
                            </SecondCardFont>
                        </FirstCardFont>
                    </Card.Body>
                </Card>
                <br/>
                <Card>
                    <Card.Body>
                        <Card.Title><CardTitleFont>렛풀 다운</CardTitleFont></Card.Title>
                        <FirstCardFont>
                            자세 종류: 
                            <SecondCardFont>
                                기본 <br/>
                            </SecondCardFont>
                        </FirstCardFont>
                        <FirstCardFont>
                            그립 종류:  
                            <SecondCardFont>
                                기본
                            </SecondCardFont>
                        </FirstCardFont>
                    </Card.Body>
                </Card>
            </CardGrid>
            <ArmText>
                Arm
            </ArmText>
            <CardGrid>
                <Card>
                    <Card.Body>
                        <Card.Title><CardTitleFont>덤벨 컬</CardTitleFont></Card.Title>
                        <FirstCardFont>
                            자세 종류: 
                            <SecondCardFont>
                                기본, 해머 <br/>
                            </SecondCardFont>
                        </FirstCardFont>
                        <FirstCardFont>
                            그립 종류:  
                            <SecondCardFont>
                                기본
                            </SecondCardFont>
                        </FirstCardFont>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Title><CardTitleFont>바벨 컬</CardTitleFont></Card.Title>
                        <FirstCardFont>
                            자세 종류: 
                            <SecondCardFont>
                                기본 <br/>
                            </SecondCardFont>
                        </FirstCardFont>
                        <FirstCardFont>
                            그립 종류:  
                            <SecondCardFont>
                                오버, 언더
                            </SecondCardFont>
                        </FirstCardFont>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Title><CardTitleFont>케이블 푸쉬 다운</CardTitleFont></Card.Title>
                        <FirstCardFont>
                            자세 종류: 
                            <SecondCardFont>
                                기본 <br/>
                            </SecondCardFont>
                        </FirstCardFont>
                        <FirstCardFont>
                            그립 종류:  
                            <SecondCardFont>
                                기본
                            </SecondCardFont>
                        </FirstCardFont>
                    </Card.Body>
                </Card>
                <br/>
                <Card>
                    <Card.Body>
                        <Card.Title><CardTitleFont>스탠딩 로프 트라이셉 익스텐션</CardTitleFont></Card.Title>
                        <FirstCardFont>
                            자세 종류: 
                            <SecondCardFont>
                                기본 <br/>
                            </SecondCardFont>
                        </FirstCardFont>
                        <FirstCardFont>
                            그립 종류:  
                            <SecondCardFont>
                                기본
                            </SecondCardFont>
                        </FirstCardFont>
                    </Card.Body>
                </Card>
            </CardGrid>
            <ContentsFont>
                Shoulder
            </ContentsFont>
            <CardGrid>
                <Card>
                    <Card.Body>
                        <Card.Title><CardTitleFont>사이드 레터럴 레이즈</CardTitleFont></Card.Title>
                        <FirstCardFont>
                            자세 종류: 
                            <SecondCardFont>
                                기본 <br/>
                            </SecondCardFont>
                        </FirstCardFont>
                        <FirstCardFont>
                            그립 종류:  
                            <SecondCardFont>
                                기본, 내회전, 외회전
                            </SecondCardFont>
                        </FirstCardFont>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Title><CardTitleFont>프론트 레터럴 레이즈</CardTitleFont></Card.Title>
                        <FirstCardFont>
                            자세 종류: 
                            <SecondCardFont>
                                기본, 원암 <br/>
                            </SecondCardFont>
                        </FirstCardFont>
                        <FirstCardFont>
                            그립 종류:  
                            <SecondCardFont>
                                기본
                            </SecondCardFont>
                        </FirstCardFont>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Title><CardTitleFont>덤벨 숄더 프레스</CardTitleFont></Card.Title>
                        <FirstCardFont>
                            자세 종류: 
                            <SecondCardFont>
                                기본, 원암 <br/>
                            </SecondCardFont>
                        </FirstCardFont>
                        <FirstCardFont>
                            그립 종류:  
                            <SecondCardFont>
                                기본
                            </SecondCardFont>
                        </FirstCardFont>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Title><CardTitleFont>밀리터리 프레스</CardTitleFont></Card.Title>
                        <FirstCardFont>
                            자세 종류: 
                            <SecondCardFont>
                                기본, 오버헤드 <br/>
                            </SecondCardFont>
                        </FirstCardFont>
                        <FirstCardFont>
                            그립 종류:  
                            <SecondCardFont>
                                기본, 썸리스
                            </SecondCardFont>
                        </FirstCardFont>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Title><CardTitleFont>벤트 오버 레터럴 레이즈</CardTitleFont></Card.Title>
                        <FirstCardFont>
                            자세 종류: 
                            <SecondCardFont>
                                기본 <br/>
                            </SecondCardFont>
                        </FirstCardFont>
                        <FirstCardFont>
                            그립 종류:  
                            <SecondCardFont>
                                기본
                            </SecondCardFont>
                        </FirstCardFont>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Title><CardTitleFont>펙덱 플라이</CardTitleFont></Card.Title>
                        <FirstCardFont>
                            자세 종류: 
                            <SecondCardFont>
                                기본 <br/>
                            </SecondCardFont>
                        </FirstCardFont>
                        <FirstCardFont>
                            그립 종류:  
                            <SecondCardFont>
                                기본
                            </SecondCardFont>
                        </FirstCardFont>
                    </Card.Body>
                </Card>
            </CardGrid>
        </div>
    );
};

export default React.memo(CardsWeight);