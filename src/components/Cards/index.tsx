import React from 'react';
import { Card, Button } from 'react-bootstrap';
import styled from 'styled-components';

const Constain = styled.div`
    display: flex;
    justify-content: center;
`

const Cards = () => {
    return (
        <Constain>
            <Card style={{ width: '18rem', margin: '1em'}}>
                <Card.Img variant="top" src="/Image/deadLift.jpg" />
                <Card.Body>
                    <Card.Title>Weight training</Card.Title>
                    <Card.Text>
                        운동 기구 종류 및 사용 방법
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem', margin: '1em' }}>
                <Card.Img variant="top" src="/Image/routine.jpg" />
                <Card.Body>
                    <Card.Title>Routine</Card.Title>
                    <Card.Text>
                        나만의 루틴 공유
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem', margin: '1em' }}>
                <Card.Img variant="top" src="/Image/protein.jpg" />
                <Card.Body>
                    <Card.Title>Protein</Card.Title>
                    <Card.Text>
                        추천하는 프로틴 쉐이크 & 판매처
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </Constain>
    );
};

export default Cards;