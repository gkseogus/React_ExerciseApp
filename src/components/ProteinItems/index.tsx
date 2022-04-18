import React, { useState } from 'react';
import { Figure } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { ApplicationState } from '../../store';
import { v4 as uuid_v4 } from 'uuid';
import 'antd/dist/antd.css';
import { Input, Space } from 'antd';

const Constain = styled.div`
    display: flex;
    justify-content: center;
`
const ListConstain = styled.li`
  text-align: center;
  position: static;
  margin-left: auto;
  margin-right: auto;
  padding: 100px;
`

const ExplainFont = styled.h6`
    color: white;
    text-align: center;
`

const ProteinSearchForm = styled.div`
    width:300px;
    height:300px;
    position:absolute;
    left:50%;
    top:50%;
    margin-left:-200px;
    margin-top:-150px;
`

const ProteinItems = () => {
    const { Search } = Input;

    const [searchKeyword, setSearchKeyword] = useState('');

    const rootData = useSelector(
        (state: ApplicationState) => state.inventory.data
    );
    
    const searchData =  rootData.filter(
      (i) => !searchKeyword || i.name.includes(searchKeyword)
    );
  
    return (
    <Constain>
        <ProteinSearchForm>
            <Space direction="vertical">
                <Search placeholder="search protein" allowClear onChange={(e) => setSearchKeyword(e.target.value)}
                style={{ 
                    width: 400,
                    padding: '20px'
                }} />
            </Space>
        </ProteinSearchForm>
        <ListConstain>
            <Figure style={{ padding: '10px'}}>
                <Figure.Caption>
                    <ExplainFont>
                        {
                            searchData.map(item => {
                                return(
                                    <div key={uuid_v4()}>
                                        <Figure.Image
                                            width={200}
                                            height={200}
                                            alt="200x200"
                                            src={item.image}
                                        /><br/><br/>
                                        이름: {item.name} <br/>
                                        브랜드: {item.brand} <br/>
                                        가격: {item.price} <br/>
                                        맛: {item.flatness} <br/><br/>
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