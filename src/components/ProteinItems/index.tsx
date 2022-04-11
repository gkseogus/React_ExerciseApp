import React from 'react';
import { Figure } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { ApplicationState } from '../../store';

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

const ProteinItems = () => {
    const rootData = useSelector(
        (state: ApplicationState) => state.inventory.data
      );
    
      console.log('test',rootData);
      
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
                        {/* {name} <br/> */}
                    </ExplainFont>
                </Figure.Caption>
            </Figure>
        </ListConstain>
    </Constain>
    );
};

export default React.memo(ProteinItems);