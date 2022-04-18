import React from 'react';
import { Figure } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { ApplicationState } from '../../store';
import { v4 as uuid_v4 } from 'uuid';

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
    text-align: center;
`

const ProteinItems = () => {
      
    const rootData = useSelector(
        (state: ApplicationState) => state.inventory.data
    );
    
    console.log('Item List',rootData);
      
    return (
    <Constain>
        <ListConstain>
            <Figure style={{ padding: '10px'}}>
                <Figure.Caption>
                    <ExplainFont>
                        {
                            rootData.map(item => {
                                return(
                                    <div key={uuid_v4()}>
                                        <Figure.Image
                                            width={200}
                                            height={200}
                                            alt="200x200"
                                            src={item.image}
                                        /><br/>
                                        이름: {item.name} <br/>
                                        브랜드: {item.brand} <br/>
                                        가격: {item.price} <br/>
                                        맛: {item.flatness} <br/>
                                    </div>
                                );
                            })
                        }
                    </ExplainFont>
                </Figure.Caption>
            </Figure>
        </ListConstain>
    </Constain>
    );
};

export default React.memo(ProteinItems);