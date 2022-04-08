import React from 'react';
import { Figure } from 'react-bootstrap';
import styled from 'styled-components';

const Constain = styled.div`
    display: flex;
    justify-content: center;
`
const ListConstain = styled.li`
  text-align: center;
  position: static;
  margin-left: auto;
  margin-right: auto;
  padding: 10px;
`

const ExplainFont = styled.h6`
    color: white;
    text-align: left;
`

const Proteins = () => {
    return (
    <Constain>
        <ListConstain>
            <Figure style={{ padding: '10px'}}>
                <Figure.Image
                    width={200}
                    height={200}
                    alt="200x200"
                    src="/Image/myProtein_logo.jpg"
                />
                <Figure.Caption>
                    <ExplainFont>
                        이름: 임팩트 웨이 프로틴 스트로베리 크림 <br/>
                        가격: 250g 기준 20,900 <br/>
                        맛: ★★★★★ <br/>
                        판매처: 마이프로틴 <br/>
                    </ExplainFont>
                </Figure.Caption>
            </Figure>
            <Figure style={{ padding: '10px'}}>
                <Figure.Image
                    width={200}
                    height={200}
                    alt="200x200"
                    src="/Image/myProtein_logo.jpg"
                />
                <Figure.Caption>
                    <ExplainFont>
                        이름: 임팩트 웨이 프로틴 스트로베리 크림 <br/>
                        가격: 250g 기준 20,900 <br/>
                        맛: ★★★★★ <br/>
                        판매처: 마이프로틴 <br/>
                    </ExplainFont>
                </Figure.Caption>
            </Figure>
            <Figure style={{ padding: '10px'}}>
                <Figure.Image
                    width={200}
                    height={200}
                    alt="200x200"
                    src="/Image/myProtein_logo.jpg"
                />
                <Figure.Caption>
                    <ExplainFont>
                        이름: 임팩트 웨이 프로틴 스트로베리 크림 <br/>
                        가격: 250g 기준 20,900 <br/>
                        맛: ★★★★★ <br/>
                        판매처: 마이프로틴 <br/>
                    </ExplainFont>
                </Figure.Caption>
            </Figure>
            <Figure style={{ padding: '10px'}}>
                <Figure.Image
                    width={200}
                    height={200}
                    alt="200x200"
                    src="/Image/myProtein_logo.jpg"
                />
                <Figure.Caption>
                    <ExplainFont>
                        이름: 임팩트 웨이 프로틴 스트로베리 크림 <br/>
                        가격: 250g 기준 20,900 <br/>
                        맛: ★★★★★ <br/>
                        판매처: 마이프로틴 <br/>
                    </ExplainFont>
                </Figure.Caption>
            </Figure>
            <Figure style={{ padding: '10px'}}>
                <Figure.Image
                    width={200}
                    height={200}
                    alt="200x200"
                    src="/Image/myProtein_logo.jpg"
                />
                <Figure.Caption>
                    <ExplainFont>
                        이름: 임팩트 웨이 프로틴 스트로베리 크림 <br/>
                        가격: 250g 기준 20,900 <br/>
                        맛: ★★★★★ <br/>
                        판매처: 마이프로틴 <br/>
                    </ExplainFont>
                </Figure.Caption>
            </Figure>
            <Figure style={{ padding: '10px'}}>
                <Figure.Image
                    width={200}
                    height={200}
                    alt="200x200"
                    src="/Image/myProtein_logo.jpg"
                />
                <Figure.Caption>
                    <ExplainFont>
                        이름: 임팩트 웨이 프로틴 스트로베리 크림 <br/>
                        가격: 250g 기준 20,900 <br/>
                        맛: ★★★★★ <br/>
                        판매처: 마이프로틴 <br/>
                    </ExplainFont>
                </Figure.Caption>
            </Figure>
        </ListConstain>
    </Constain>
    );
};

export default React.memo(Proteins);