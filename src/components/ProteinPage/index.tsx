import React, { useEffect, useState } from 'react';
import 'antd/dist/antd.css';
import { Input, Space } from 'antd';
import styled from 'styled-components';
import ProteinItems from '../ProteinItems';
import { fetchRequest } from '../../store/inventory/action';
import { useDispatch } from 'react-redux';


const Constain = styled.div`
  padding: 1em;
  background: black;
  height: 100vh;
`

const FirstFont = styled.h1`
  position: static;
  font-size: 100px;
  text-align: center;
  background: linear-gradient(to right top, #000000, #94eb09);
  color: transparent;
  -webkit-background-clip: text;
  font-family: 'Rubik Glitch', cursive;
`

const ProteinForm = styled.div`
    display: flex;
    justify-content: center;
`
const { Search } = Input;

const ProteinPage = (itme: any) => {
  const [name, setName] = useState('');

  return (
    <Constain>  
        <FirstFont>
            Protein 
        </FirstFont>
        <ProteinForm>
            <Space direction="vertical">
                <Search placeholder="search protein" allowClear onSearch={setName} style={{ 
                    width: 400,
                    padding: '20px'
                    }} />
            </Space>
        </ProteinForm>
        <ProteinItems/>
    </Constain>
  );
};

export default React.memo(ProteinPage);